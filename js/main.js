//JS newbie
let operator, res;
let result;
let list;
let history = [];
let values  = {
    firstField: 0,
    secondField: 0,
    operatorValue: 0
};


const Add = (firstField, secondField) =>
{
    res = firstField + secondField;
    return res;
};

const Mult = (firstField, secondField) =>
{
    res = firstField * secondField;
    return res;
};

const Sub = (firstField, secondField) =>
{
    res = firstField - secondField;
    return res;
};

const Devide = (firstField, secondField) =>
{
    res = firstField / secondField;
    return res;
};

const listSum = (history) =>{
    let liSum = document.getElementById('result');
    let jLiSum =  history.reduce((a,b) => a+b, 0);
    liSum.innerHTML = jLiSum;
};


function Calculate()
{
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

const printLn = () =>
{
    result = document.getElementById('result');
    list = document.getElementById('list');
    if(res==Infinity)
    {
        result.innerHTML = 'Yo dummy!';
    }else{
        result.innerHTML = res;
        cache();
    }
};


const cacheCheck = () =>{
    if(history.length == 5){
        list.removeChild(list.childNodes[1]);
        history.pop();
    }
};


const cache = () =>{
    cacheCheck();
    history.unshift(res);
    list.insertAdjacentHTML('beforeend', '<span>' + history[0] + ' | '+ '</span>');
};


function Model()
{
    //Geting value of field and operator options
    values.firstField = parseFloat(document.getElementById('firstnum').value);
    operator = document.getElementById('oper');
    values.operatorValue = operator.options[operator.selectedIndex].value;
    values.secondField = parseFloat(document.getElementById('secnum').value);
}
