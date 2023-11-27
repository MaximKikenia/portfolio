const express = require("express");
const app = express();
const fs = require("fs");
var bodyParser = require('body-parser');
const multer = require("multer");
const hbs = require("hbs");




//Photoes to portfolio loader/storage
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        var dir = './views/src/' + req.body.folderNumber;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        callback(null, dir);
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

var upload = multer({ storage: storage }).array('filedata');

//Sprite loader/storage
var storageSprite = multer.diskStorage({
    destination: function (req, file, callback) {
        
        var dir = './views/styles'

        callback(null, dir);
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

var uploadsprite = multer({ storage: storageSprite }).array('filedata');

//Parser Post запросов
const urlencodedParser = express.urlencoded({ extended: false });

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static(__dirname + "/views"));

//CORS-Policy
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(bodyParser.json());
const jsonParser = express.json();
app.use(express.text());
var cookieParser = require('cookie-parser');
app.use(cookieParser());

//Modules
const keys = require('./js/keysArray');
const validationForm = require('./js/validationFrom');
const chechTxt = require('./js/checkText');
const checkPortf = require('./js/checkPort');

//General functions

function readData(fs, response, url, template) {
    fs.readFile(url, "utf8", function (err, data) {
        if (err) console.log("Ошибка чтения данных info.txt!");
        let inf = data;

        response.render(template, { info: inf });
    });
};


function editData(url, request, response) {
    if (!request.body) return response.sendStatus(400);
    let newData = request.body;

    let errorMess = false;


    try {
        //check: is data correct?
        let data = JSON.parse(newData);

        if (!data.portfolioData) {

            //check page text length
            if (typeof chechTxt(data) === 'string') {
                errorMess = chechTxt(data);
                throw error;
            }
        } else {
            //check portfolio text length
            if (typeof checkPortf(data) === 'string') {
                errorMess = checkPortf(data);
                throw error;
            }
        }



        fs.writeFileSync(url, newData, function (error) {
            if (error) throw error;
            console.log("Данные перезаписаны!");
        });

        response.send("Данные успешно сохранены!");
    } catch (err) {

        if (errorMess) {
            response.send(errorMess);
        } else {
            response.send("Некорректно введены данные. Попробуйте ещё раз.");
        }
    }
};





app.get("/", function (_, response) {

    fs.readFile("./data/info.txt", "utf8", function (err, data) {
        if (err) console.log("Ошибка чтения данных info.txt!");
        let info = JSON.parse(data);
        renderHTML(keys(info));
    });

    let renderHTML = (info) => response.render("index.hbs", info);
});

app.get("/portfoliodata", function (request, response) {
    fs.readFile("./data/portfolio.txt", "utf8", function (err, data) {
        if (err) console.log("Ошибка чтения данных info.txt!");
        let info = JSON.parse(data);
        response.send(info);
    });
});



//Upload photoe
app.get("/imgload", function (request, response) {
    const auth = request.cookies.AUTH;

    let foldersLengths;

    fs.readdir('./views/src', (err, files) => {
        if (err) throw err;
        foldersLengths = files.length;

        if (auth === "YES") response.render("imgloader", { allfolders: foldersLengths });
        else response.redirect("/admin");
    });
});

app.post("/uploadphoto", function (request, response, next) {

    upload(request, response, function (err) {
        if (err) {
            console.log(err)
        } else {
            response.status(200);
            response.send('Файлы успешно добавлены!');
        }
    });
});


//Upload Sprite

app.get("/sprite", function (request, response) {
    const auth = request.cookies.AUTH;
    if (auth === "YES") response.render("sprite");
    else response.redirect("/admin");
});

app.post("/spriteupload", function (request, response, next) {

    uploadsprite(request, response, function (err) {
        if (err) {
            console.log(err);
        } else {
            response.status(200);
            response.send('Файлы успешно добавлены!');
        }
    });
});





//Clear photoes

app.get("/clearphoto", function (request, response) {
    const auth = request.cookies.AUTH;
    if (auth === "YES") response.render("imgCleaner");
    else response.redirect("/admin");
});

app.post("/removefolder", urlencodedParser, function (request, response) {
    let remFold = request.body.foldernumber;
    fs.rmdir('./views/src/' + remFold, { recursive: true }, err => {
        if (err) throw err;
        console.log('Папка: ' + remFold + ' успешно удалена.');
    });
    response.send('Папка: ' + remFold + ' успешно удалена.');
});

app.get("/edit", function (request, response) {

    const auth = request.cookies.AUTH;

    if (auth === "YES") readData(fs, response, "./data/info.txt", "editData");
    else response.redirect("/admin")
});

app.get("/portinf", function (request, response) {
    const auth = request.cookies.AUTH;

    if (auth === "YES") readData(fs, response, "./data/portfolio.txt", "editPort")
    else response.redirect("/admin")
});



app.post('/pagedata', function (request, response) {
    editData("./data/info.txt", request, response);
});

app.post('/portdata', function (request, response) {
    editData("./data/portfolio.txt", request, response);
});

app.post('/auth', urlencodedParser, function (request, response) {

    let data = {
        login: "admin",
        password: "123"
    };

    let login = request.body.login;
    let pass = request.body.password;

    if (login === data.login && pass === data.password) {
        response.cookie("AUTH", "YES");
        response.redirect("/edit")

    } else {
        response.cookie("AUTH", "NO");
        response.render("errorAuth");
    }
});


app.get("/admin", function (request, response) {
    response.render("admin");
});

app.post('/email', jsonParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    let data = request.body;
    console.log(data);
    validationForm(data, response, "ru");
});

app.listen(process.env.PORT || 3000, function () { console.log("Сервер на порту: 3000 успешно запущен!") });