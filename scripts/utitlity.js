function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    return element;
}

function setElementValueById(elementId, value){
    const element = getElementValueById(elementId);
    element.innerText = value;
}

function priceDiscount(totalPriceCalculate, discount){
    const discountPrice = totalPriceCalculate - totalPriceCalculate*(discount/100);
    return discountPrice;
}

function totalPriceCalculate(price, quantity){
    const totalPrice = price*quantity;
    return totalPrice;
}

function stringToNumber(elementId){
    const element = getElementValueById(elementId);
    const innerValue = element.innerText;
    const number = Number(innerValue);
    return number;
}

function createElement(elementName){
    const element = document.createElement(elementName);
    return element;
}
