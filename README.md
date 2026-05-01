# SellersHelp — Новый сайт

## Технологии
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Timeweb App Platform (хостинг, Docker)

## Структура сайта
1. **Hero** — главный оффер
2. **Pains** — боли клиента (6 карточек)
3. **HowWeWork** — как работаем (5 шагов)
4. **Cases** — кейсы (5 штук)
5. **Reviews** — отзывы (8 штук)
6. **Pricing** — тарифы (3 плана)
7. **Audit** — форма бесплатного аудита
8. **Team** — команда (10 человек)
9. **FinalCTA** — финальный призыв к действию
10. **Footer** — подвал с контактами

## Быстрый старт

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

## Деплой на Timeweb App Platform

Сайт разворачивается через Docker (Dockerfile в корне проекта).

1. Зайти в Timeweb → проект SellersHelp → App Platform
2. При обновлении кода — пушить в репозиторий `yuraz777/sellershelp` (аккаунт yuraz777)
3. Timeweb подхватывает изменения автоматически через GitHub-интеграцию

## Замена фото команды
Все фото находятся в папке `/public/team/`
Просто замените файл с тем же именем:
- nikolay.jpg
- olga.jpg
- yuriy.jpg
- svetlana.jpg
- anastasia.jpg
- darya.jpg
- anna.jpg
- elizaveta.jpg — заменить на официальное фото
- vladislava.jpg
- yana.jpg — заменить на официальное фото

## Цвета бренда
- Navy: #1B3A6B
- Navy Dark: #1A1A2E
- Amber (акцент): #F5A623
- Gray Light (фон): #F7F8FA

## Контакты для связи
- Телефон: +7 905 283 64 79
- Email: ssellershelp@ya.ru
