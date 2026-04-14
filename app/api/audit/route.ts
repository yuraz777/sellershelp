import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, marketplace, revenue } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = '-1002357716962';
    const sheetsUrl = 'https://script.google.com/macros/s/AKfycbyGFRvmjtbbFPnewD7jWYBr1A26Mt3G_cK8K5Sv-3HCU0boQeLNLbdW2SHA-sPo1dSl/exec';

    const message = `🆕 <b>Новая заявка на аудит!</b>\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n🛒 Маркетплейс: ${marketplace || '—'}\n💰 Оборот: ${revenue || '—'}`;

    // Telegram — с таймаутом 5 секунд
    const telegramPromise = fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' }),
    });

    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Telegram timeout')), 5000)
    );

    await Promise.race([telegramPromise, timeout]).catch(() => {});

    // Google Sheets — в фоне, не ждём
    fetch(sheetsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, marketplace, revenue }),
    }).catch(() => {});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: true }); // всегда возвращаем success чтобы редирект сработал
  }
}
