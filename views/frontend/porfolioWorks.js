let portfolioData = false;
let counter = 0;

class portfolioUI {
    constructor() {
        this.portElem = document.getElementsByClassName('workBlocksWrapper')[0];
        this.allProj = document.getElementsByClassName('workBlock');
        this.portBox = document.getElementsByClassName('wrapperBox')[0];
        this.title = document.getElementsByClassName('port_title')[0];
        this.description = document.getElementsByClassName('port_description')[0];
        this.imG = document.getElementById('portImg');
        this.linkFullWork = document.getElementsByClassName('fullWork')[0];
        this.watchBtn = document.getElementsByClassName('watch')[0];
        this.closeBtn = document.getElementsByClassName("close")[0];
        this.nextBtn = document.getElementsByClassName('next')[0];
        this.prevBtn = document.getElementsByClassName('prev')[0];
        this.portData = document.getElementsByClassName('portfolioBox')[0];
        this.imgBlock = document.getElementsByClassName('image_block')[0];
        this.openBox = this.open.bind(this);
        this.closePort = this.close.bind(this);
        this.nextWork = this.next.bind(this);
        this.prevWork = this.prev.bind(this);
        this.drawNewData = this.drawData.bind(this);
        this.firstTime = true;
        this.choosedId;
    }

    drawData(id) {
        this.title.innerHTML = portfolioData[id][0].title;
        this.description.innerHTML = portfolioData[id][1].description;
        this.imG.src = portfolioData[id][2].img[0];
        this.linkFullWork.href = portfolioData[id][3].imgPDF;
        this.watchBtn.innerHTML = portfolioData[id][4].link;
    }

    open(event) {

        if (portfolioData) {
            this.choosedId = event.target.closest('.workBlock').id;
            this.portBox.classList.remove('port_hidden');

            if (portfolioData[this.choosedId]) {
                this.drawData(this.choosedId);
                this.portData.id = this.choosedId;
                this.imgBlock.id = 0;
            }
        }

    }

    close() {
        this.portBox.classList.add("port_hidden");
        this.choosedId = true;
        this.imgBlock.id = 0;
        counter = 0;
    }

    next() {
        this.imgBlock.id = 0;
        counter = 0;

        if (+this.portData.id + 2 <= this.allProj.length) {
            const newId = +this.portData.id + 1;
            this.portData.id = newId;
            this.drawData(newId);
        }
    }

    prev() {
        this.imgBlock.id = 0;
        counter = 0;

        if (+this.portData.id !== 0) {
            const prevId = this.portData.id - 1;
            this.drawData(prevId);
            this.portData.id = prevId;
        }
    }
}

const box = new portfolioUI();

box.portElem.addEventListener("click", box.openBox);
box.closeBtn.addEventListener("click", box.closePort);
box.nextBtn.addEventListener("click", box.nextWork);
box.prevBtn.addEventListener("click", box.prevWork);


class portfolioInsideUI {
    constructor() {
        this.imgNew = document.getElementById('portImg');
        this.nextBtn = document.getElementsByClassName('nextInside')[0];
        this.prevBtn = document.getElementsByClassName('prevInside')[0];
        this.currentId = document.getElementsByClassName('image_block')[0];
        this.portData = document.getElementsByClassName('portfolioBox')[0];
        this.next = this.nextInside.bind(this);
        this.prev = this.prevInside.bind(this);
    }

    nextInside() {

        const lenPic = portfolioData[this.portData.id][2].img.length;

        if(lenPic - 1 > counter) {
            counter = ++this.currentId.id;
            this.imgNew.src = portfolioData[this.portData.id][2].img[counter];
        }
    }

    prevInside() {

        if (counter != 0) {
            counter = counter - 1;
            this.imgNew.src = portfolioData[this.portData.id][2].img[counter];
            this.currentId.id = counter;
        }
    }
}

const boxInside = new portfolioInsideUI();

boxInside.nextBtn.addEventListener("click", boxInside.next);
boxInside.prevBtn.addEventListener("click", boxInside.prev);


//Load portfolio Data
document.addEventListener("DOMContentLoaded", function () {

    async function getData() {
        const req = await fetch("/portfoliodata");
        const responseText = await req.json();
        portfolioData = responseText.portfolioData;
    };

    getData();
});