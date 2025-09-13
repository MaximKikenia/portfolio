//MenuToggleClass

class MenuToggle {
    constructor() {
        this.counter = true;
        this.menu = document.getElementsByClassName("menu")[0];
        this.menuBtn = document.getElementsByClassName("menu_mobile_button")[0];
        this.show = this.display.bind(this);
    }

    display() {

        if (this.counter) {
            this.menu.classList.remove('menu_hidden');
            this.counter = false;
        } else {
            this.menu.classList.add('menu_hidden');
            this.counter = true;
        }

    }
};

const pageEl = new MenuToggle();
pageEl.menuBtn.addEventListener("click", pageEl.show);


//Portfolio Toggle Class
class portfolioOpen {
    constructor() {
        this.portBtn = document.getElementById('portShow');
        this.portwrapper = document.getElementsByClassName('workBlocksWrapper')[0];
        this.portwrapperStyles = window.getComputedStyle(this.portwrapper);
        this.childElems = this.portwrapper.getElementsByClassName('workBlock').length;
        this.startHeightMobile = 518;
        this.desktopHeight = 259;
        this.show = this.display.bind(this);
        this.counterElems = 0;
        this.openCan = 1;
        this.fullCount = Math.trunc(this.counterElems);
    }

    changeWrapperHeight(height) {
        const currentheight = +this.portwrapperStyles.height.slice(0, -2);
        const newHeight = currentheight + height;
        this.portwrapper.style.height = newHeight + 'px';
        this.openCan = ++this.openCan;
    }

    changeWrapperHeightDesctop() {
        const currentheight = +this.portwrapperStyles.height.slice(0, -2);
        this.portwrapper.style.height = currentheight + this.desktopHeight + 'px';
        this.openCan = ++this.openCan;
    }

    display() {
        if (window.innerWidth < 1250) {

            this.counterElems = this.childElems / 2;
            this.fullCount = Math.trunc(this.counterElems);

            if (this.openCan < this.fullCount) {
                this.changeWrapperHeight(this.startHeightMobile);
            } else if (this.openCan === this.fullCount && this.childElems % 2 !== 0) {
                this.changeWrapperHeight(this.desktopHeight);
            }

        } else {

            this.counterElems = Math.trunc(this.childElems / 3);

            if (this.openCan <= this.counterElems - 2 & this.childElems % 3 === 0) {
                this.changeWrapperHeightDesctop();
            } else if (this.openCan <= this.counterElems - 1 & this.childElems % 3 !== 0) {
                this.changeWrapperHeightDesctop()
            }
        }

    }

}

const togglePortfolio = new portfolioOpen();
togglePortfolio.portBtn.addEventListener('click', togglePortfolio.show);


//Tools Toggle Class
class Tools {
    constructor() {
        this.toolsBtn = document.getElementById("showTools");
        this.toolsDescBox = document.getElementsByClassName('toolsDescription')[0];
        this.showTools = this.show.bind(this);
        this.status = false;
    }

    show() {
        if (!this.status) {
            this.toolsDescBox.classList.remove("hidden_tools");
            this.status = true;
        } else {
            this.toolsDescBox.classList.add("hidden_tools");
            this.status = false;
        }
    }
};

const toolsUI = new Tools();
toolsUI.toolsBtn.addEventListener("click", toolsUI.showTools);

//Show Comments

class CommentsShow {
    constructor() {
        this.commentsWrapper = document.getElementsByClassName('commentsWrapper')[0];
        this.commentsWrapStyles = window.getComputedStyle(this.commentsWrapper);
        this.commentBtn = document.getElementById("showComments");
        this.showCom = this.show.bind(this);
        this.allComments = document.getElementsByClassName("comment").length;
        this.newHeight = this.changeHeight.bind(this);
        this.value = 380;
        this.counter = 0;

    }

    changeHeight() {
        const currentheight = +this.commentsWrapStyles.height.slice(0, -2);
        const newHeight = currentheight + this.value + 'px';
        this.commentsWrapper.style.height = newHeight;
        ++this.counter;
    }

    show() {

        if (window.innerWidth < 1249) {
            if (this.counter <= this.allComments - 2) this.changeHeight();
        } else {
            const countShow = Math.round(this.allComments / 3);
            if (this.counter < countShow - 1) this.changeHeight();
        }
    }
}

const commentsUI = new CommentsShow();

commentsUI.commentBtn.addEventListener("click", commentsUI.showCom);

let status = true;
//Fixed Menu

class FixedMenu {
    constructor() {
        this.status = true;
        this.menu = document.getElementsByClassName('headerwrapper')[0];
        this.fix = this.fixed.bind(this);
    }

    fixed() {
        if (window.innerWidth > 1249) {
            if (this.status && window.scrollY > 200) {
                console.log(window.scrollY);
                this.status = false;
                this.menu.classList.add('menu_fixed');
            } else if (window.scrollY < 200) {
                this.menu.classList.remove('menu_fixed');
                this.status = true;
            }
        }


    }
}

const fixedMen = new FixedMenu();

// window.addEventListener('scroll', fixedMen.fix);

