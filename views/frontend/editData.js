//Save data about Page
class SaveData {
    constructor() {
        this.saveBtn = document.getElementsByClassName("saveAll")[0];
        this.infoField = document.getElementsByClassName("editData")[0];
        this.statusField = document.getElementsByClassName("editStatus")[0];
        this.dataSave = this.save.bind(this);
        this.link = "/pagedata";
    }

    async sendData(data) {

        const headers = {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "text/plain",
                "Accept": "text/plain"
            },
            body: data
        };

        const req = await fetch(this.link, headers);
        const responseText = await req.text();
        this.statusField.innerHTML = responseText;
    }

    save() {
        const newData = this.infoField.value;
        this.sendData(newData);
    }
}


//Save data about Portfolio
class SavePortfolio extends SaveData {
    constructor() {
        super();
        this.saveBtn = document.getElementsByClassName('savePortfolio')[0];
        this.link = "/portdata";
    }
}

const portData = new SavePortfolio();





const url = window.location.href.split('/')[3];

if (url === "edit") {
    const saveInf = new SaveData();
    saveInf.saveBtn.addEventListener("click", saveInf.dataSave);
} else if (url === "portinf") {
    portData.saveBtn.addEventListener("click", portData.dataSave)
}
