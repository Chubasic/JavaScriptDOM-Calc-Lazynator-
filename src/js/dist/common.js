"use strict";

console.log("common.js");

//JS newbie
var operator = void 0,
    res = void 0;
var result = void 0;
var list = void 0;
var history = [];
var values = {
    firstField: 0,
    secondField: 0,
    operatorValue: 0
};

var Add = function Add(firstField, secondField) {
    res = firstField + secondField;
    return res;
};

var Mult = function Mult(firstField, secondField) {
    res = firstField * secondField;
    return res;
};

var Sub = function Sub(firstField, secondField) {
    res = firstField - secondField;
    return res;
};

var Devide = function Devide(firstField, secondField) {
    res = firstField / secondField;
    return res;
};

var listSum = function listSum(history) {
    var liSum = document.getElementById('result');
    var jLiSum = history.reduce(function (a, b) {
        return a + b;
    }, 0);
    liSum.innerHTML = jLiSum;
};

function Calculate() {
    res = 0;
    //Uno
    switch (values.operatorValue) {
        case "0":
            Add(values.firstField, values.secondField);
            printLn();
            break;
        case "1":
            Mult(values.firstField, values.secondField);
            printLn();
            break;
        case "2":
            Sub(values.firstField, values.secondField);
            printLn();
            break;
        case "3":
            Devide(values.firstField, values.secondField);
            //I love this word...DEVIDDEEE!!1
            printLn();
            break;
        default:
            break;
    }
}

var printLn = function printLn() {
    result = document.getElementById('result');
    list = document.getElementById('list');
    if (res == Infinity) {
        result.innerHTML = 'Yo dummy!';
    } else {
        result.innerHTML = res;
        cache();
    }
};

var cacheCheck = function cacheCheck() {
    if (history.length == 5) {
        list.removeChild(list.childNodes[1]);
        history.pop();
    }
};

var cache = function cache() {
    cacheCheck();
    history.unshift(res);
    list.insertAdjacentHTML('beforeend', '<span>' + history[0] + ' | ' + '</span>');
};

function Model() {
    //Geting value of field and operator options
    values.firstField = parseFloat(document.getElementById('firstnum').value);
    operator = document.getElementById('oper');
    values.operatorValue = operator.options[operator.selectedIndex].value;
    values.secondField = parseFloat(document.getElementById('secnum').value);
}