const form = document["myForm"];
const formElms = form.elements;
const errorFiled = document.getElementsByClassName('errorText')[0];

form["sendButton"].addEventListener('click', function (event) {

    event.preventDefault();

    function clearErrors(){
        for (let elem in formElms) {
            if (typeof formElms[elem] === 'object') {
                formElms[elem].parentNode.classList.remove('error');
            }
        }
    };

    clearErrors();


    function responseHandler(responseText, errorFiled) {
        if (responseText.success) {
            errorFiled.innerHTML = responseText.success;

            for (let el in formElms) {
                if (typeof formElms[el] === 'object') {
                    formElms[el].parentNode.classList.remove('error');
                    formElms[el].value = '';
                }
            }
            form.userAgree.checked = false;
            form.country.value = "Беларусь";
        } else {
            errorFiled.innerHTML = responseText.error;
            form[responseText.input].parentNode.classList.add("error");
        }
    }

    let formData = {
        name: form.name.value,
        surname: form.surname.value,
        telephone: form.telephone.value,
        email: form.email.value,
        comment: form.comment.value,
        country: form.country.value,
        userAgent: form.userAgree.checked 
    };


    async function sendData(errorFiled) {
        
        const headers = {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(formData)
        };

        const req = await fetch("/email", headers);
        const responseText = await req.json();

        responseHandler(responseText, errorFiled);
    };

    sendData(errorFiled);

});