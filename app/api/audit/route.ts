import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, marketplace, revenue, consentMarketing } = body;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = '-1002357716962';
    const sheetsUrl = 'https://script.google.com/macros/s/AKfycbyGFRvmjtbbFPnewD7jWYBr1A26Mt3G_cK8K5Sv-3HCU0boQeLNLbdW2SHA-sPo1dSl/exec';
    const message = `🆕 <b>Новая заявка на аудит!</b>\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n🛒 Маркетплейс: ${marketplace || '—'}\n💰 Оборот: ${revenue || '—'}\n📧 Согласие на рассылку: ${consentMarketing ? '✅ Да' : '❌ Нет'}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' }),
    }).catch(() => {});

    fetch(sheetsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, marketplace, revenue, consentMarketing }),
    }).catch(() => {});

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: true });
  }
}
