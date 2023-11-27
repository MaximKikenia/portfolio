var nodemailer = require('nodemailer');

function sendMail(formInfo, response) {

    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: "himaks91@hotmail.com",
            pass: "Linkinpark1991"
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var mailOptions = {
        from: 'himaks91@hotmail.com',
        to: 'job.mk9@gmail.com',
        subject: 'Сообщение Fenec.com',
        html: '<p> <b>Имя:</b> ' + formInfo.name + '<br><br>' + '<b>Фамилия </b>' + formInfo.surname + '<br><br>' + '<b>Телефон: </b>' + formInfo.telephone + '<br><br>' + '<b>Email: </b>' + formInfo.email + '<br><br>' + '<b>Комментарий: </b>' + '<br><br>' + formInfo.comment + '<br><br>' +  '<b>Страна: </b>' + formInfo.country + '<br><br>' + '<b>Соглашение: </b>' + `${formInfo.userAgent ? "Да" : "Нет"}`  + '</p>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            response.send(false);
        } else {
            console.log('Email sent: ' + info.response);
            response.send(JSON.stringify({"success" : "Сообщение успешно отправлено!",}));
        }
    });
}

module.exports = sendMail;