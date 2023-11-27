function checkTextLen(data){
    let state;

    function messStr(one, two){
        return `Ошибка блока: ${one}. Строка не должна быть длинее ${two} символов.`
    }

    data.menu.forEach(item => {
        item.name.length > 10 ? state = messStr("menu", 10) : false;
    });
    
    data.mainTitle.length > 50 ? state = messStr("mainTitle", 50) : false;
    data.mainDescription.length > 150 ? state = messStr("mainDescription", 150) : false;

    data.mainMindSpan.length > 23 ? state = messStr("mainMindSpan", 23) : false;
    data.mainMind.length > 106 ? state = messStr("mainMind", 106) : false;

    data.mainName.length > 20 ? state = messStr("mainName", 20) : false;
    data.mainJob.length > 20 ? state = messStr("mainJob", 20) : false;

    data.brandTitle.length > 77 ? state = messStr("brandTitle", 77) : false;

    data.advTitle.length > 80 ? state = messStr("advTitle", 80) : false;
    data.advDescription.length > 127 ? state = messStr("advDescription", 127) : false;

    data.advCards.forEach(item => {
        item.advTitle.length > 15 ? state = messStr("advTitle", 15) : false;
        item.advDesc.length > 134 ? state = messStr("advDesc", 135) : false;
    });

    data.portHeadTitle.length > 127 ? state = messStr("advTitle", 127) : false;
    data.portfirstdesc.length > 127 ? state = messStr("advDescription", 127) : false;
    data.portsecDesc.length > 127 ? state = messStr("advDescription", 127) : false;

    data.portfolio.forEach(item => {
        item.portTitle.length > 24 ? state = messStr("portTitle", 24) : false;
        item.portDesc.length > 119 ? state = messStr("portDesc", 119) : false;
        item.buttonMore.length > 14 ? state = messStr("buttonMore", 14) : false;   
    });

    data.toolsTitle.length > 176 ? state = messStr("toolsTitle", 176) : false;
    data.toolsDesc.length > 145 ? state = messStr("toolsDesc", 145) : false;
    
    data.toolsAbout.forEach(item => {
        item.length > 93 ? state = messStr("toolsAbout", 93) : false;
    });

    data.plansTitle.length > 127 ? state = messStr("plansTitle", 127) : false;
    data.toolsDesc.length > 127 ? state = messStr("toolsDesc", 127) : false;

    data.plansCards.forEach(item => {
        item.cardTitle.length > 13 ? state = messStr("cardTitle", 13) : false;
        item.cardDescOne.length > 50 ? state = messStr("cardDescOne", 13) : false;
        item.cardDescTwo.length > 26 ? state = messStr("cardDescOne", 26) : false;
        item.buttonBuy.length > 15 ? state = messStr("buttonBuy", 15) : false;
        item.cardService.forEach(txt => {
            txt.length > 20 ? state = messStr("cardService", 20) : false;
        });
        
    });

    data.whyMeTitle.length > 60 ? state = messStr("whyMeTitle", 127) : false;
    data.whyMeTitleSpan.length > 23 ? state = messStr("whyMeTitleSpan", 23) : false;
    data.whyMeDesc.length > 156 ? state = messStr("whyMeDesc", 127) : false;

    data.whyMeBox.forEach(item => {
        item.boxTitle.length > 8 ? state = messStr("boxTitle", 8) : false;
        item.boxDesc.length > 40 ? state = messStr("boxDesc", 40) : false;
        item.boxInfo.length > 121 ? state = messStr("boxInfo", 121) : false;
        
    });
    
    data.commentsCards.forEach(item => {
        item.comTitle.length > 16 ? state = messStr("comTitle", 16) : false;
        item.comName.length > 23 ? state = messStr("comName", 23) : false;
        item.comJob.length > 26 ? state = messStr("comJob", 26) : false; 
    });

    data.contatsTitle.length > 55 ? state = messStr("contatsTitle", 55) : false;
    data.contatsDesc.length > 92 ? state = messStr("contatsDesc", 92) : false;

    
    data.contatsPoints.forEach(item => {
        item.length > 79 ? state = messStr("contatsPoints", 79) : false;
    });

    data.contatsFormTitle.length > 43 ? state = messStr("contatsFormTitle", 43) : false;
    data.contatsFormDesc.length > 121 ? state = messStr("contatsFormDesc", 121) : false;

    let form = [data.contatsFormInp1, data.contatsFormInp2, data.contatsFormInp3, data.contatsFormInp4, data.contatsFormInp5, data.contatsFormInp7];

    form.forEach(item => {
        item.length > 19 ? state = messStr("contatsFormInp", 19) : false;
    });

    data.footerTitle.length > 130 ? state = messStr("footerTitle", 130) : false;

    let buttons = [data.buttonDown, data.buttonWrite, data.buttonWatch, data.buttonWatchMore, data.buttonBuy, data.buttonReadMore, data.buttonSend];

    buttons.forEach(item => {
        item.length > 12 ? state = messStr("buttons", 12) : false;
    });
    
    
    
    if(typeof state === 'string') {
        return state;
    } else {
        return true;
    }

}

module.exports = checkTextLen;