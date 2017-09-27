//Mirgration from C

var firstField, operator, operatorValue, secondField, res;

function Add(firstField, secondField)
{
    res = firstField + secondField;
    PrintLn(res);
}

function Mult(firstField, secondField)
{
    res = firstField * secondField;
    PrintLn(res);
}

function Sub(firstField, secondField)
{
    res = firstField - secondField;
    PrintLn(res);
}

function Devide(firstField, secondField)
{
    res = firstField / secondField;
    PrintLn(res);
}

function Calculate()
{
    //Uno
    switch (operatorValue) {
        case "0":
        Add(firstField, secondField);            
            break;
        case "1":
        Mult(firstField, secondField); 
            break;
        case "2":
        Sub(firstField, secondField); 
            break;
        case "3":
        Devide(firstField, secondField); //I love this word...DEVIDDEEE!!1 
            break;
        default:
            break;
    }
}

function PrintLn(args)
{
    if(args==Infinity)
    {
        alert("Yo dummy");
    }else{
        alert("Result is:" + args);
    }
}

function Model()
{
    //Geting value of field and operator options
    firstField = parseFloat(document.getElementById('firstnum').value);
    operator = document.getElementById('oper');
    operatorValue = operator.options[operator.selectedIndex].value;
    secondField = parseFloat(document.getElementById('secnum').value);

}