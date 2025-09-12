/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

//Gallery


__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener("DOMContentLoaded", function () {
    var Main = function () {
        function Main() {
            _classCallCheck(this, Main);

            this.menuBtn = document.getElementById('mobile-burger-menu');
            this.mobileMenu = document.getElementById('mobile-menu');
            this.historyBtn = document.getElementById('history-button');
            this.historyPart = document.getElementById('history-part');
            this.appBtn = document.getElementById('app-btn');
            this.appPart = document.getElementById('app-part-2');
        }

        _createClass(Main, [{
            key: 'openHideMenu',
            value: function openHideMenu() {
                var _this = this;

                this.menuBtn.addEventListener('click', function () {
                    var add = function add() {
                        _this.mobileMenu.classList.remove('hidden-menu');
                        _this.menuBtn.classList.add('button-closed');
                    };

                    var remove = function remove() {
                        _this.mobileMenu.classList.add('hidden-menu');
                        _this.menuBtn.classList.remove('button-closed');
                    };

                    _this.mobileMenu.classList.contains('hidden-menu') ? add() : remove();
                });
            }
        }, {
            key: 'historyhideShow',
            value: function historyhideShow() {
                var _this2 = this;

                this.historyBtn.addEventListener('click', function () {

                    var add = function add() {
                        _this2.historyPart.classList.remove('history-hidden');
                        _this2.historyBtn.innerHTML = 'Скрыть историю';
                    };

                    var remove = function remove() {
                        _this2.historyPart.classList.add('history-hidden');
                        _this2.historyBtn.innerHTML = 'Читать полностью';
                    };

                    _this2.historyPart.classList.contains('history-hidden') ? add() : remove();
                });
            }
        }, {
            key: 'apperanceHideShow',
            value: function apperanceHideShow() {
                var _this3 = this;

                this.appBtn.addEventListener('click', function () {
                    var add = function add() {
                        _this3.appPart.classList.remove('app-desc-hidden');
                        _this3.appBtn.innerHTML = 'Скрыть описание';
                    };

                    var remove = function remove() {
                        _this3.appPart.classList.add('app-desc-hidden');
                        _this3.appBtn.innerHTML = 'Читать полностью';
                    };

                    _this3.appPart.classList.contains('app-desc-hidden') ? add() : remove();
                });
            }
        }, {
            key: 'collectData',
            value: function collectData() {
                var _this4 = this;

                var formValues = document.forms["form"].elements;
                var Send = document.getElementsByClassName("send_button")[0];

                Send.addEventListener('click', function () {

                    var obj = JSON.stringify({
                        name: formValues[0].value,
                        phone: formValues[1].value,
                        email: formValues[2].value,
                        description: formValues[3].value
                    });

                    _this4.serverRequest(obj);
                });
            }
        }, {
            key: 'serverRequest',
            value: function serverRequest(data) {
                var serverLink = "http://localhost:8000/";

                var xhr = new XMLHttpRequest();
                xhr.open("POST", serverLink, false);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(data);

                if (xhr.status != 200) {
                    alert("Данные от сервера не получены. Ошибка: 404.");
                } else {}
            }
        }]);

        return Main;
    }();

    var createObj = new Main();

    createObj.openHideMenu();
    createObj.historyhideShow();
    createObj.apperanceHideShow();
    //createObj.collectData();
    //createObj.validation();

});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('Компонент!');

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener("DOMContentLoaded", function () {
  var Gallery = function () {
    function Gallery() {
      _classCallCheck(this, Gallery);

      this.Btn = document.getElementById('show-more-gallery');
      this.galleryContainer = document.getElementById('gallery-wrapper');
      this.wholeGalleryWrapper = document.getElementById('whole-gallery');
      this.galleryClose = document.getElementById('galleryClose');
      this.arrowNext = document.getElementById('arrow-next');
      this.arrowPrev = document.getElementById('arrow-prev');
      this.arrowPre = document.getElementById('arrow-prev');
    }

    _createClass(Gallery, [{
      key: 'addImgMobile',
      value: function addImgMobile() {
        this.Btn.onclick = function () {
          var images = document.getElementsByClassName('gallery-pic-other');
          var button = document.getElementById('show-more-gallery');
          var imagesArray = Array.from(images);

          imagesArray.length ? imagesArray.slice(0, 3).map(function (item) {
            item.classList.remove('gallery-pic-other');
          }) : button.classList.add('hidden');
        };
      }
    }, {
      key: 'openGalleryTablets',
      value: function openGalleryTablets() {
        var _this = this;

        if (window.innerWidth > 780) {

          this.galleryContainer.addEventListener('click', function (e) {

            var frame = e.target.closest('.pic-frame');
            var src = frame ? frame.querySelector('.gallery-pic').src : null;

            src ? _this.wholeGalleryWrapper.classList.remove('hidden') : null;
            src ? _this.galleryContainer.querySelector('.block-img').src = src : null;
          });
        }
      }
    }, {
      key: 'closeGalleryTablets',
      value: function closeGalleryTablets() {
        var _this2 = this;

        this.galleryClose.addEventListener('click', function () {
          _this2.wholeGalleryWrapper.classList.add('hidden');
        });
      }
    }, {
      key: 'changeGalleryPic',
      value: function changeGalleryPic(symbol) {
        var currentImg = this.galleryContainer.querySelector('.block-img').src;
        var arrayIMG = Array.from(this.galleryContainer.getElementsByTagName('img'));

        var res = [];
        arrayIMG.find(function (item, index) {
          item.src == currentImg ? res.push(index) : null;
        });

        if (arrayIMG.length - 2 == res[0]) {
          this.galleryContainer.querySelector('.block-img').src = arrayIMG[0].src;
        } else {
          if (symbol) {
            this.galleryContainer.querySelector('.block-img').src = arrayIMG[res[0] + 1].src;
          } else {
            res[0] == 0 ? null : this.galleryContainer.querySelector('.block-img').src = arrayIMG[res[0] - 1].src;
          }
        }
      }
    }, {
      key: 'nextImg',
      value: function nextImg(symbol) {
        var _this3 = this;

        this.arrowNext.addEventListener('click', function (e) {
          _this3.changeGalleryPic(symbol);
        });
      }
    }, {
      key: 'prevImg',
      value: function prevImg(symbol) {
        var _this4 = this;

        this.arrowPrev.addEventListener('click', function (e) {
          _this4.changeGalleryPic(symbol);
        });
      }
    }]);

    return Gallery;
  }();

  var Ga = new Gallery();

  Ga.addImgMobile();
  Ga.openGalleryTablets();
  Ga.closeGalleryTablets();
  Ga.nextImg(true);
  Ga.prevImg(false);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener("DOMContentLoaded", function () {
    var Validation = function () {
        function Validation() {
            _classCallCheck(this, Validation);
        }

        _createClass(Validation, [{
            key: 'checkForm',
            value: function checkForm() {
                var _this = this;

                var form = document.getElementById('form');

                form.addEventListener('submit', function (e) {
                    e.preventDefault();

                    //Delete Errors Labels
                    var lbl = form.querySelectorAll('label');
                    lbl.length != 0 ? lbl.forEach(function (item) {
                        return item.remove();
                    }) : null;

                    //Errors messages
                    var messages = {
                        'name': 'Введите имя. Не менее 3 букв.',
                        'phone': 'Введите телефон. Не менее 7 цифр.',
                        'email': 'Введите верный email. <br> Пример: example@gmail.com'

                        //Add Error Tag to input
                    };var action = function action(node, field) {

                        var errorTag = document.createElement('label');
                        errorTag.className = 'from-error';
                        errorTag.innerHTML = field;
                        node.after(errorTag);
                    };

                    //Check Email

                    var emailValid = function emailValid() {
                        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                        var emailAdr = form[2].value;

                        if (reg.test(emailAdr) == false && form[2].value.length > 0) {
                            action(form[2], messages.email);
                            return false;
                        }
                    };

                    //Final check all inputs

                    if (form[0].value != true && form[0].value.length < 3) {
                        action(form[0], messages.name);
                    }

                    if (form[1].value != true && form[1].value.length < 7) {
                        action(form[1], messages.phone);
                    }

                    emailValid();

                    //Когда кол-во ошибок 0 запускаем отправку формы
                    var secondCheck = form.querySelectorAll('label');
                    secondCheck.length == 0 ? _this.collectData() : null;
                });
            }
        }, {
            key: 'collectData',
            value: function collectData() {
                var formValues = document.forms["form"].elements;

                var obj = JSON.stringify({
                    name: formValues[0].value,
                    phone: formValues[1].value,
                    email: formValues[2].value,
                    description: formValues[3].value
                });

                this.serverRequest(obj);
            }
        }, {
            key: 'serverRequest',
            value: function serverRequest(data) {
                var serverLink = "https://safe-wildwood-03311.herokuapp.com/";

                var xhr = new XMLHttpRequest();
                xhr.open("POST", serverLink, false);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(data);

                if (xhr.status != 200) {
                    alert("Данные не отправлены. Повторите попыткку позже или позвоните по телефону.");
                } else {
                    var form = document.getElementById('form');
                    [].concat(_toConsumableArray(form)).forEach(function (item) {
                        return item.value = '';
                    });

                    var successTab = document.querySelector('.success-sent');
                    successTab.classList.remove('hidden');

                    setTimeout(function () {
                        successTab.classList.add('hidden');
                    }, 3000);
                }
            }
        }]);

        return Validation;
    }();

    var FormValidation = new Validation();

    FormValidation.checkForm();
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzNjM2FjZTBjZDVlNmVhOTU1YzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9pbmRleC5zY3NzPzk2YWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyLWZ1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2NvbXBvbmVudHMvZ2FsbGVyeS1zdHlsZXMuc2Nzcz9iZmNiIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2dhbGxlcnktc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiTWFpbiIsIm1lbnVCdG4iLCJnZXRFbGVtZW50QnlJZCIsIm1vYmlsZU1lbnUiLCJoaXN0b3J5QnRuIiwiaGlzdG9yeVBhcnQiLCJhcHBCdG4iLCJhcHBQYXJ0IiwiYWRkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY29udGFpbnMiLCJpbm5lckhUTUwiLCJmb3JtVmFsdWVzIiwiZm9ybXMiLCJlbGVtZW50cyIsIlNlbmQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJ2YWx1ZSIsInBob25lIiwiZW1haWwiLCJkZXNjcmlwdGlvbiIsInNlcnZlclJlcXVlc3QiLCJkYXRhIiwic2VydmVyTGluayIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwic3RhdHVzIiwiYWxlcnQiLCJjcmVhdGVPYmoiLCJvcGVuSGlkZU1lbnUiLCJoaXN0b3J5aGlkZVNob3ciLCJhcHBlcmFuY2VIaWRlU2hvdyIsImNvbnNvbGUiLCJsb2ciLCJHYWxsZXJ5IiwiQnRuIiwiZ2FsbGVyeUNvbnRhaW5lciIsIndob2xlR2FsbGVyeVdyYXBwZXIiLCJnYWxsZXJ5Q2xvc2UiLCJhcnJvd05leHQiLCJhcnJvd1ByZXYiLCJhcnJvd1ByZSIsIm9uY2xpY2siLCJpbWFnZXMiLCJidXR0b24iLCJpbWFnZXNBcnJheSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsInNsaWNlIiwibWFwIiwiaXRlbSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJlIiwiZnJhbWUiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwic3JjIiwicXVlcnlTZWxlY3RvciIsInN5bWJvbCIsImN1cnJlbnRJbWciLCJhcnJheUlNRyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicmVzIiwiZmluZCIsImluZGV4IiwicHVzaCIsImNoYW5nZUdhbGxlcnlQaWMiLCJHYSIsImFkZEltZ01vYmlsZSIsIm9wZW5HYWxsZXJ5VGFibGV0cyIsImNsb3NlR2FsbGVyeVRhYmxldHMiLCJuZXh0SW1nIiwicHJldkltZyIsIlZhbGlkYXRpb24iLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJsYmwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm1lc3NhZ2VzIiwiYWN0aW9uIiwibm9kZSIsImZpZWxkIiwiZXJyb3JUYWciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYWZ0ZXIiLCJlbWFpbFZhbGlkIiwicmVnIiwiZW1haWxBZHIiLCJ0ZXN0Iiwic2Vjb25kQ2hlY2siLCJjb2xsZWN0RGF0YSIsInN1Y2Nlc3NUYWIiLCJzZXRUaW1lb3V0IiwiRm9ybVZhbGlkYXRpb24iLCJjaGVja0Zvcm0iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7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QUFxQkQsR0FBckIsQ0FBeUIsUUFBekI7QUFBb0MscUJBQXBELEVBQXNELElBQXREO0FBQ0g7QUFDSjtBQWpHMkM7O0FBQUE7QUFBQTs7QUFvR2hELFFBQUlpRyxpQkFBaUIsSUFBSXRCLFVBQUosRUFBckI7O0FBRUFzQixtQkFBZUMsU0FBZjtBQUVILENBeEdELEUiLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDczYzNhY2UwY2Q1ZTZlYTk1NWMzIiwiaW1wb3J0ICcuLi9zdHlsZS9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2hlYWRlci1mdW5jJztcblxuLy9HYWxsZXJ5XG5pbXBvcnQgJy4uL3N0eWxlL2NvbXBvbmVudHMvZ2FsbGVyeS1zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgJy4uL2pzL2NvbXBvbmVudHMvZ2FsbGVyeS1zY3JpcHQnO1xuaW1wb3J0ICcuLi9qcy9jb21wb25lbnRzL3ZhbGlkYXRpb24nO1xuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNsYXNzIE1haW4ge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMubWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGUtYnVyZ2VyLW1lbnUnKTtcbiAgICAgICAgICAgIHRoaXMubW9iaWxlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGUtbWVudScpO1xuICAgICAgICAgICAgdGhpcy5oaXN0b3J5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnktYnV0dG9uJyk7XG4gICAgICAgICAgICB0aGlzLmhpc3RvcnlQYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnktcGFydCcpO1xuICAgICAgICAgICAgdGhpcy5hcHBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLWJ0bicpO1xuICAgICAgICAgICAgdGhpcy5hcHBQYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1wYXJ0LTInKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgb3BlbkhpZGVNZW51KCkge1xuICAgICAgICAgICAgdGhpcy5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhZGQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tbWVudScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNsb3NlZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCByZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tbWVudScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLWNsb3NlZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubW9iaWxlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbi1tZW51JykgPyBhZGQoKSA6IHJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGhpc3RvcnloaWRlU2hvdygpIHtcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yeUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCBhZGQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeVBhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlzdG9yeS1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5QnRuLmlubmVySFRNTCA9ICfQodC60YDRi9GC0Ywg0LjRgdGC0L7RgNC40Y4nXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5UGFydC5jbGFzc0xpc3QuYWRkKCdoaXN0b3J5LWhpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3RvcnlCdG4uaW5uZXJIVE1MID0gJ9Cn0LjRgtCw0YLRjCDQv9C+0LvQvdC+0YHRgtGM0Y4nXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5UGFydC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpc3RvcnktaGlkZGVuJykgPyBhZGQoKSA6IHJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGFwcGVyYW5jZUhpZGVTaG93KCkge1xuICAgICAgICAgICAgdGhpcy5hcHBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFkZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBQYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2FwcC1kZXNjLWhpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcEJ0bi5pbm5lckhUTUwgPSAn0KHQutGA0YvRgtGMINC+0L/QuNGB0LDQvdC40LUnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBQYXJ0LmNsYXNzTGlzdC5hZGQoJ2FwcC1kZXNjLWhpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcEJ0bi5pbm5lckhUTUwgPSAn0KfQuNGC0LDRgtGMINC/0L7Qu9C90L7RgdGC0YzRjidcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFwcFBhcnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhcHAtZGVzYy1oaWRkZW4nKSA/IGFkZCgpIDogcmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbGxlY3REYXRhKCkge1xuICAgICAgICAgICAgbGV0IGZvcm1WYWx1ZXMgPSBkb2N1bWVudC5mb3Jtc1tcImZvcm1cIl0uZWxlbWVudHM7XG4gICAgICAgICAgICBsZXQgU2VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzZW5kX2J1dHRvblwiKVswXTtcblxuICAgICAgICAgICAgU2VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGZvcm1WYWx1ZXNbMF0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiBmb3JtVmFsdWVzWzFdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZm9ybVZhbHVlc1syXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGZvcm1WYWx1ZXNbM10udmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmVyUmVxdWVzdChvYmopO1xuICAgICAgICAgICAgfSk7XG4gICBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc2VydmVyUmVxdWVzdChkYXRhKSB7XG4gICAgICAgICAgICBsZXQgc2VydmVyTGluayA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL1wiO1xuXG4gICAgICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgc2VydmVyTGluaywgZmFsc2UpO1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgICAgICB4aHIuc2VuZChkYXRhKTtcblxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCLQlNCw0L3QvdGL0LUg0L7RgiDRgdC10YDQstC10YDQsCDQvdC1INC/0L7Qu9GD0YfQtdC90YsuINCe0YjQuNCx0LrQsDogNDA0LlwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjcmVhdGVPYmogPSBuZXcgTWFpbigpO1xuXG4gICAgY3JlYXRlT2JqLm9wZW5IaWRlTWVudSgpO1xuICAgIGNyZWF0ZU9iai5oaXN0b3J5aGlkZVNob3coKTtcbiAgICBjcmVhdGVPYmouYXBwZXJhbmNlSGlkZVNob3coKTtcbiAgICAvL2NyZWF0ZU9iai5jb2xsZWN0RGF0YSgpO1xuICAgIC8vY3JlYXRlT2JqLnZhbGlkYXRpb24oKTtcblxuXG59KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc29sZS5sb2coJ9Ca0L7QvNC/0L7QvdC10L3RgiEnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvY29tcG9uZW50cy9oZWFkZXItZnVuYy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGUvY29tcG9uZW50cy9nYWxsZXJ5LXN0eWxlcy5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICBjbGFzcyBHYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctbW9yZS1nYWxsZXJ5Jyk7XG4gICAgICB0aGlzLmdhbGxlcnlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FsbGVyeS13cmFwcGVyJyk7XG4gICAgICB0aGlzLndob2xlR2FsbGVyeVdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2hvbGUtZ2FsbGVyeScpO1xuICAgICAgdGhpcy5nYWxsZXJ5Q2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FsbGVyeUNsb3NlJyk7XG4gICAgICB0aGlzLmFycm93TmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvdy1uZXh0Jyk7XG4gICAgICB0aGlzLmFycm93UHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvdy1wcmV2Jyk7XG4gICAgICB0aGlzLmFycm93UHJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fycm93LXByZXYnKTtcbiAgICB9XG5cbiAgICBhZGRJbWdNb2JpbGUoKSB7XG4gICAgICB0aGlzLkJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgaW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2FsbGVyeS1waWMtb3RoZXInKTtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93LW1vcmUtZ2FsbGVyeScpO1xuICAgICAgICBsZXQgaW1hZ2VzQXJyYXkgPSBBcnJheS5mcm9tKGltYWdlcyk7XG5cbiAgICAgICAgaW1hZ2VzQXJyYXkubGVuZ3RoID8gaW1hZ2VzQXJyYXkuc2xpY2UoMCwgMykubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdnYWxsZXJ5LXBpYy1vdGhlcicpO1xuICAgICAgICB9KSA6IGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3BlbkdhbGxlcnlUYWJsZXRzKCkge1xuXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3ODApIHtcblxuICAgICAgICB0aGlzLmdhbGxlcnlDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgIFxuICAgICAgICAgIGxldCBmcmFtZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5waWMtZnJhbWUnKTtcbiAgICAgICAgICBsZXQgc3JjID0gZnJhbWUgPyBmcmFtZS5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS1waWMnKS5zcmMgOiBudWxsO1xuXG4gICAgICAgICAgc3JjID8gdGhpcy53aG9sZUdhbGxlcnlXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpIDogbnVsbDtcbiAgICAgICAgICBzcmMgPyB0aGlzLmdhbGxlcnlDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJsb2NrLWltZycpLnNyYyA9IHNyYyA6IG51bGw7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VHYWxsZXJ5VGFibGV0cygpIHtcbiAgICAgIHRoaXMuZ2FsbGVyeUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLndob2xlR2FsbGVyeVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VHYWxsZXJ5UGljKHN5bWJvbCkge1xuICAgICAgbGV0IGN1cnJlbnRJbWcgPSB0aGlzLmdhbGxlcnlDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJsb2NrLWltZycpLnNyYztcbiAgICAgIGxldCBhcnJheUlNRyA9IEFycmF5LmZyb20odGhpcy5nYWxsZXJ5Q29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKSk7XG5cbiAgICAgIGxldCByZXMgPSBbXTtcbiAgICAgIGFycmF5SU1HLmZpbmQoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGl0ZW0uc3JjID09IGN1cnJlbnRJbWcgPyByZXMucHVzaChpbmRleCkgOiBudWxsO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChhcnJheUlNRy5sZW5ndGggLSAyID09IHJlc1swXSkge1xuICAgICAgICB0aGlzLmdhbGxlcnlDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJsb2NrLWltZycpLnNyYyA9IGFycmF5SU1HWzBdLnNyYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzeW1ib2wpIHtcbiAgICAgICAgICB0aGlzLmdhbGxlcnlDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJsb2NrLWltZycpLnNyYyA9IGFycmF5SU1HW3Jlc1swXSArIDFdLnNyYztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNbMF0gPT0gMCA/IG51bGwgOiB0aGlzLmdhbGxlcnlDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJsb2NrLWltZycpLnNyYyA9IGFycmF5SU1HW3Jlc1swXSAtIDFdLnNyYztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG5leHRJbWcoc3ltYm9sKSB7XG4gICAgICB0aGlzLmFycm93TmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlR2FsbGVyeVBpYyhzeW1ib2wpO1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgcHJldkltZyhzeW1ib2wpIHtcbiAgICAgIHRoaXMuYXJyb3dQcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VHYWxsZXJ5UGljKHN5bWJvbCk7XG4gICAgICB9KVxuICAgIH07XG4gIH1cblxuICBsZXQgR2EgPSBuZXcgR2FsbGVyeSgpO1xuXG4gIEdhLmFkZEltZ01vYmlsZSgpO1xuICBHYS5vcGVuR2FsbGVyeVRhYmxldHMoKTtcbiAgR2EuY2xvc2VHYWxsZXJ5VGFibGV0cygpO1xuICBHYS5uZXh0SW1nKHRydWUpO1xuICBHYS5wcmV2SW1nKGZhbHNlKTtcblxuXG59KTtcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL2dhbGxlcnktc2NyaXB0LmpzIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG4gICAgY2xhc3MgVmFsaWRhdGlvbiB7XG5cbiAgICAgICAgY2hlY2tGb3JtKCkge1xuICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuXG4gICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgLy9EZWxldGUgRXJyb3JzIExhYmVsc1xuICAgICAgICAgICAgICAgIGxldCBsYmwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGJsLmxlbmd0aCAhPSAwID8gbGJsLmZvckVhY2goaXRlbSA9PiBpdGVtLnJlbW92ZSgpKSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAvL0Vycm9ycyBtZXNzYWdlc1xuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ25hbWUnICA6ICfQktCy0LXQtNC40YLQtSDQuNC80Y8uINCd0LUg0LzQtdC90LXQtSAzINCx0YPQutCyLicsXG4gICAgICAgICAgICAgICAgICAgICdwaG9uZScgOiAn0JLQstC10LTQuNGC0LUg0YLQtdC70LXRhNC+0L0uINCd0LUg0LzQtdC90LXQtSA3INGG0LjRhNGALicsXG4gICAgICAgICAgICAgICAgICAgICdlbWFpbCcgOiAn0JLQstC10LTQuNGC0LUg0LLQtdGA0L3Ri9C5IGVtYWlsLiA8YnI+INCf0YDQuNC80LXRgDogZXhhbXBsZUBnbWFpbC5jb20nXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9BZGQgRXJyb3IgVGFnIHRvIGlucHV0XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbiA9IChub2RlLCBmaWVsZCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBlcnJvclRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yVGFnLmNsYXNzTmFtZSA9ICdmcm9tLWVycm9yJztcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUYWcuaW5uZXJIVE1MID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWZ0ZXIoZXJyb3JUYWcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vQ2hlY2sgRW1haWxcblxuICAgICAgICAgICAgICAgIGxldCBlbWFpbFZhbGlkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVnID0gL14oW0EtWmEtejAtOV9cXC1cXC5dKStcXEAoW0EtWmEtejAtOV9cXC1cXC5dKStcXC4oW0EtWmEtel17Miw0fSkkLztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVtYWlsQWRyID0gZm9ybVsyXS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZihyZWcudGVzdChlbWFpbEFkcikgPT0gZmFsc2UgJiYgZm9ybVsyXS52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24oZm9ybVsyXSwgbWVzc2FnZXMuZW1haWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vRmluYWwgY2hlY2sgYWxsIGlucHV0c1xuXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1bMF0udmFsdWUgIT0gdHJ1ZSAmJiBmb3JtWzBdLnZhbHVlLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uKGZvcm1bMF0sIG1lc3NhZ2VzLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChmb3JtWzFdLnZhbHVlICE9IHRydWUgJiYgZm9ybVsxXS52YWx1ZS5sZW5ndGggPCA3KSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbihmb3JtWzFdLCBtZXNzYWdlcy5waG9uZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZW1haWxWYWxpZCgpOyBcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8v0JrQvtCz0LTQsCDQutC+0Lst0LLQviDQvtGI0LjQsdC+0LogMCDQt9Cw0L/Rg9GB0LrQsNC10Lwg0L7RgtC/0YDQsNCy0LrRgyDRhNC+0YDQvNGLXG4gICAgICAgICAgICAgICAgbGV0IHNlY29uZENoZWNrID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdsYWJlbCcpOyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNlY29uZENoZWNrLmxlbmd0aCA9PSAwID8gdGhpcy5jb2xsZWN0RGF0YSgpIDogbnVsbDtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbGxlY3REYXRhKCkge1xuICAgICAgICAgICAgbGV0IGZvcm1WYWx1ZXMgPSBkb2N1bWVudC5mb3Jtc1tcImZvcm1cIl0uZWxlbWVudHM7XG5cbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBmb3JtVmFsdWVzWzBdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogZm9ybVZhbHVlc1sxXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGZvcm1WYWx1ZXNbMl0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtVmFsdWVzWzNdLnZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZlclJlcXVlc3Qob2JqKTtcbiAgIFxuICAgICAgICB9XG5cblxuICAgICAgICBzZXJ2ZXJSZXF1ZXN0KGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBzZXJ2ZXJMaW5rID0gXCJodHRwczovL3NhZmUtd2lsZHdvb2QtMDMzMTEuaGVyb2t1YXBwLmNvbS9cIjtcblxuICAgICAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHNlcnZlckxpbmssIGZhbHNlKTtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzICE9IDIwMCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwi0JTQsNC90L3Ri9C1INC90LUg0L7RgtC/0YDQsNCy0LvQtdC90YsuINCf0L7QstGC0L7RgNC40YLQtSDQv9C+0L/Ri9GC0LrQutGDINC/0L7Qt9C20LUg0LjQu9C4INC/0L7Qt9Cy0L7QvdC40YLQtSDQv9C+INGC0LXQu9C10YTQvtC90YMuXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICBbLi4uZm9ybV0uZm9yRWFjaChpdGVtID0+IGl0ZW0udmFsdWUgPSAnJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgc3VjY2Vzc1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWNjZXNzLXNlbnQnKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e3N1Y2Nlc3NUYWIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7fSwgMzAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBGb3JtVmFsaWRhdGlvbiA9IG5ldyBWYWxpZGF0aW9uKCk7XG5cbiAgICBGb3JtVmFsaWRhdGlvbi5jaGVja0Zvcm0oKTtcblxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvdmFsaWRhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=