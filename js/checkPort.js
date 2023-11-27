function checkPortf(data){
    let state;

    function messStr(one, two){
        return `Ошибка блока: ${one}. Строка не должна быть длинее ${two} символов.`
    }

    data.portfolioData.forEach(item =>{
        item[0].title.length > 41 ? state = messStr("title", 41) : false;
        item[1].description.length > 285 ? state = messStr("description", 285) : false;
    });


    if(typeof state === 'string') {
        return state;
    } else {
        return true;
    }
}

module.exports = checkPortf;