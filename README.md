# Panel-Mayarena-Rust


RU:

Бот который использует API сайта https://www.myarena.ru/ для управления вашим сервером Rust через Telegram


Для использования нужно:
1. Cоздать бота через https://t.me/BotFather, скопировать полученный токен "token to access the HTTP API" и добавить его в файл config.json -> telegram -> token
2. Далее переходим на сайт сервера, заходи в панель сервера нажимаем "Настройки" -> Включаем API сервера и жмем  "Настройки" -> копируем Token для API -> добавляем его в файл config.json -> server -> api_key
3. Открываем папку через программу Visual Studio Code прописываем в терминал - "npm i" далее прописываем команду "node index.js"

Поздравляю, бот успешно запущен. Если у тебя что-то не получилось, напиши в Telegram @sqlonelove (Всегда рад помогать)

Команды:
1. /server_start - запустить сервер
2. /server_stop - остановить сервер
3. /server_restart - перезапустить сервер
4. /server_status - статус сервера, онлайн, id сервера.


🥺🥺🥺Ах, да, еще небольшая проверка чтобы просто так не использовали команды сервера.
В файле users.json надо указать свой телеграм ID.
Как узнать ID? - https://t.me/ff_uid_bot


![Screenshot_1](https://github.com/bugor600/Panel-Mayarena-Rust/assets/62838425/720a8ceb-8f16-4900-bddc-6a7fe9852bb9)
