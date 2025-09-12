const sendMail = require('./mailSend');

const fields = {
    name: { ru: "Поле: имя", en: "Field: name" },
    surname: { ru: "Поле: фамилия", en: "Field: surname" },
    phone: { ru: "Поле: телефон", en: "Field: phone" },
    email: { ru: "Поле: электронная почта", en: "Field: Email" },
    comment: { ru: "Поле: комментарий", en: "Field: comment" }
};

const errorsLangs = {
    letterMin: { ru: " не может быть менее 3 символов!", en: " can't be less than 3 characters!" },
    letterMax: { ru: " не может быть более 10 символов!", en: " can't be more than 10 characters!" },
    notNumbers: { ru: " не может содержать цифры!", en: " must not contain numbers!" },
    phoneMin: { ru: " не может содержать менее 10 символов!", en: " can't be less than 10 characters!" },
    phoneMax: { ru: " не может содержать более 15 символов!", en: " can't be more than 15 characters!" },
    phonePlus: { ru: " должно начинаться с символа +.", en: " must begin with a + symbol." },
    phoneLetters: { ru: " не должно содержать буквы.", en: " must not contain letters." },
    emailsLenMin: { ru: " не должно быть менее 5 символов", en: " can't be less than 5 characters!" },
    emailsLenMax: { ru: " не должно быть более 40 символов", en: " can't be more than 40 characters!" },
    emailsCorrect: { ru: " введено некорректно и должно содержать @.", en: " was entered incorrectly and should contain @." },
    commentLen: { ru: " должно содержать минимум 40 символов.", en: " must contain at least 40 characters." }
};

// Обёртка для ошибок
function error(message, element) {
    return JSON.stringify({ error: message, input: element });
}

// Проверка длины строки
function letterLimits(element, data, lang, fieldName) {
    if (data[element].length < 3) {
        return error(fieldName + errorsLangs.letterMin[lang], element);
    } else if (data[element].length > 10) {
        return error(fieldName + errorsLangs.letterMax[lang], element);
    }
    return null;
}

// Проверка на цифры
function notNumbers(element, data, lang, fieldName) {
    if (/\d/.test(data[element])) {
        return error(fieldName + errorsLangs.notNumbers[lang], element);
    }
    return null;
}

// Проверка телефона
function phoneValidation(element, data, lang, fieldName) {
    const value = data[element];

    if (!value.startsWith("+")) {
        return error(fieldName + errorsLangs.phonePlus[lang], element);
    } else if (value.length < 11) {
        return error(fieldName + errorsLangs.phoneMin[lang], element);
    } else if (value.length > 16) {
        return error(fieldName + errorsLangs.phoneMax[lang], element);
    } else if ((/[a-zа-яё]/i.test(value))) {
        return error(fieldName + errorsLangs.phoneLetters[lang], element);
    }
    return null;
}

// Проверка email
function checkEmail(element, data, lang, fieldName) {
    const value = data[element];
    const reg = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (!reg.test(value)) {
        return error(fieldName + errorsLangs.emailsCorrect[lang], element);
    } else if (value.length < 5) {
        return error(fieldName + errorsLangs.emailsLenMin[lang], element);
    } else if (value.length > 40) {
        return error(fieldName + errorsLangs.emailsLenMax[lang], element);
    }
    return null;
}

// Проверка комментария
function checkComment(element, data, lang, fieldName) {
    if (data.comment.length < 40) {
        return error(fieldName + errorsLangs.commentLen[lang], element);
    }
    return null;
}

// Главная функция проверки формы
function validationForm(data, response, lang) {
    for (let element in data) {
        let err = null;

        if (element === "name") {
            err = notNumbers(element, data, lang, fields.name[lang]) 
               || letterLimits(element, data, lang, fields.name[lang]);
        } else if (element === "surname") {
            err = notNumbers(element, data, lang, fields.surname[lang]) 
               || letterLimits(element, data, lang, fields.surname[lang]);
        } else if (element === "telephone") {
            err = phoneValidation(element, data, lang, fields.phone[lang]);
        } else if (element === "email") {
            err = checkEmail(element, data, lang, fields.email[lang]);
        } else if (element === "comment") {
            err = checkComment(element, data, lang, fields.comment[lang]);
        }

        if (err) {
            return response.send(err); // Отправляем только один раз и выходим
        }
    }

    // Если ошибок не было — отправляем письмо
    sendMail(data, response);
}

module.exports = validationForm;