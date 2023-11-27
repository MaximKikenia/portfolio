const sendMail = require('./mailSend');

const fields = {
    name: {
        ru: "Поле: имя",
        en: "Field: name"
    },
    surname: {
        ru: "Поле: фамилия",
        en: "Field: surname"
    },
    phone: {
        ru: "Поле: телефон",
        en: "Field: phone"
    },
    email: {
        ru: "Поле: электронная почта",
        en: "Filed: Email"
    },
    comment: {
        ru: "Поле: комментарий",
        en: "Field: comment"
    }
}

const errorsLangs = {
    letterMin: {
        ru: " не может быть менее 3 символов!",
        en: " can't be less than 3 characters!"
    },
    letterMax: {
        ru: " не может быть более 10 символов!",
        en: " can't be more than 10 characters!"
    },
    notNumbers: {
        ru: " не может содержать цифры!",
        en: " must not contain numbers!"
    },
    phoneMin: {
        ru: " не может содержать менее 10 символов!",
        en: " can't be less than 10 characters!"
    },
    phoneMax: {
        ru: " не может содержать более 15 символов!",
        en: " can't be more than 15 characters!"
    },
    phonePlus: {
        ru: " должно начинаться с символа +.",
        en: " must begin with a + symbol."
    },
    phoneLetters: {
        ru: " не должно содержать буквы.",
        en: " must not contain letters."
    },
    emailsLenMin: {
        ru: " не должно быть менее Х символов",
        en: " can't be less than 3 characters!"
    },
    emailsLenMax: {
        ru: " не должно быть более 40 символов",
        en: " can't be more than 40 characters!"
    },
    emailsCorrect: {
        ru: " введено некорректно и должно содержать @.",
        en: " was entered incorrectly and should contain @."
    },
    commentLen: {
        ru: " должно содержать минимум 3 символа.",
        en: " must contain at least 3 characters."
    }
}

//Wrapper for errorMessage
function error(message, element) {
    const data = {
        error: message,
        input: element
    };

    return JSON.stringify(data);
}



//Check lenght of string
function letterLimits(element, data, response, lang, fieldName) {
    if (data[element].length < 3)
        response.send(error(fieldName + errorsLangs.letterMin[lang], element));
    else if (data[element].length > 10)
        response.send(error(fieldName + errorsLangs.letterMax[lang], element));
}

//Check numbers in string
function notNumbers(element, data, response, lang, fieldName) {
    if (/\d/.test(data[element]))
        response.send(error(fieldName + errorsLangs.notNumbers[lang], element));
}

//Check phone number
function phoneValidation(element, data, response, lang, fieldName) {


    if (!data[element].startsWith("+")) {
        response.send(error(fieldName + errorsLangs.phonePlus[lang], element));
    } else if (data[element].length < 11) {
        response.send(error(fieldName + errorsLangs.phoneMin[lang], element));
    } else if (data[element].length > 16) {
        response.send(error(fieldName + errorsLangs.phoneMax[lang], element));
    } else if ((/[a-zа-яё]/i.test(data[element]))) {
        response.send(error(fieldName + errorsLangs.phoneLetters[lang], element));
    }
}

//Check email
function checkEmail(element, data, response, lang, fieldName) {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(!reg.test(data[element])) {
        response.send(error(fieldName + errorsLangs.emailsCorrect[lang], element));
    } else if (data[element].length < 5)
        response.send(error(fieldName + errorsLangs.emailsLenMin[lang], element));
    else if (data[element].length > 40) 
        response.send(error(fieldName + errorsLangs.emailsLenMax[lang], element));
}

//Check comment
function checkComment(element, data, response, lang, fieldName) {
    if(data[element].length < 3) {
        response.send(error(fieldName + errorsLangs.commentLen[lang], element)); 
    }

}

//


//Check all form inputs data
function validationForm(data, response, lang) {



    for (let element in data) {

        const params = [element, data, response, lang];

        console.log(element);

        if (element === "name") {
            notNumbers(...params, fields.name[lang]);
            letterLimits(...params, fields.name[lang]);
        } else if (element === "surname") {
            notNumbers(...params, fields.surname[lang]);
            letterLimits(...params, fields.surname[lang]);
        } else if (element === "telephone") {
            phoneValidation(...params, fields.phone[lang]);
        } else if (element === "email") {
            checkEmail(...params, fields.email[lang]);
        } else if (element === "comment") {
            checkComment(...params, fields.comment[lang]);
        }
    }

    sendMail(data, response);
}

module.exports = validationForm;