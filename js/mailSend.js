const TelegramBot = require('node-telegram-bot-api');

function sendMail(formInfo, response) {

    const token = '8345923607:AAHENV0XXEOrfkjaywrLoypzB865yZwiKIk';
    const chatId = '518412773';

    const bot = new TelegramBot(token, { polling: false });

    const event = {
        user: 'Имя: ' + formInfo.name,
        surname: 'Фамилия: ' + formInfo.surname,
        telephone: 'Телефон: ' + formInfo.telephone,
        email: 'Почта: ' + formInfo.email,
        comment: 'Комментарий: ' + formInfo.comment,
        country: 'Страна: ' + formInfo.country,
        onlineAgree: 'Онлайн сотрудничество: ' + formInfo.userAgent,
        time: 'Дата & Время: ' + new Date().toLocaleString()
    };

    const message =
        "📢 Новое сообщение с сайта M.Kikenia :\n \n" +
        Object.entries(event)
            .map(([key, value]) => `• ${value}`)
            .join("\n");

    bot.sendMessage(chatId, message)
    .then(() => response.send(JSON.stringify({ "success": "Сообщение успешно отправлено!"})))
    .catch(err => console.error('Ошибка при отправке:', err));
}

module.exports = sendMail;
















