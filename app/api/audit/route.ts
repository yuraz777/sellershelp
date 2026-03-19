import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, marketplace, revenue } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = '-1002849866041'; // сюда вставим твой chat_id

    const message = `
🆕 Новая заявка на аудит!

👤 Имя: ${name}
📞 Телефон: ${phone}
🛒 Маркетплейс: ${marketplace || 'не указан'}
💰 Оборот: ${revenue || 'не указан'}
    `.trim();

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error('Telegram API error');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
