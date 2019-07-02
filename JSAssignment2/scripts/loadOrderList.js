var divRow = document.getElementsByClassName('windowList')[0].querySelector(".row");
var servingsDiff = 0;
function focusInput(element) {

    servingsDiff = element.value;
    element.type = "number";
    element.min = "1";
    element.classList.add('focus');
    element.parentNode.childNodes[0].classList.add('focus');
}
function focusOutInput(element, tableName, index) {
    servingsDiff = element.value - servingsDiff;
    document.getElementById('total-payment').innerHTML = Number(document.getElementById('total-payment').innerHTML) + servingsDiff * Number(tablesObj[tableName][index].price)
    tablesObj[tableName][index].servings = element.value;

    element.parentNode.parentNode.childNodes[2].innerHTML = (tablesObj[tableName][index].price * element.value).toFixed(2);
    element.parentNode.childNodes[0].classList.remove('focus');

    element.type = "text";
    element.min = undefined;
    element.classList.remove('focus');

}


function getOrdersList(element) {


    element.classList.add('color');

    document.getElementsByClassName('overlay')[0].style.display = 'block';

    document.getElementsByClassName('windowList')[0].style.display = 'block';
    var totalCost = 0;
    var text = "";
    var tableName = element.childNodes[0].innerText;

    var headerText = "<p>" + tableName + " |Orders Details <i class='close-icon' onclick='closeWin()'>&times;</i></p>";

    tablesObj[tableName].forEach((order, index) => {

        text += "<ul><li>" + (index + 1) + "</li><li>" + order.name + "</li><li>" + (Number(order.price) * Number(order.servings)).toFixed(2) + "</li><li class='editList' >" +
            `<p>No. Of Servings</p><input class="focus-out" type="text" onfocus="focusInput(this)" onfocusout="focusOutInput(this,'${tableName}',${index})"  value="${order.servings}"></li>` +
            `<li><i class="fa fa-trash-o" onclick="deleteOrder(this,'${tableName}',${index})"></i></li></ul>`;
        totalCost += Number(order.price) * Number(order.servings);
    });


    var footerText = `<p>Total : Rs <span id='total-payment'>${totalCost}</span>  <label onclick='closeSession("${tableName}")'>CLOSE SESSION (GENRATE BILL)</label></p>`


    document.getElementsByClassName('header')[0].innerHTML = headerText;
    divRow.innerHTML += text;
    document.getElementsByClassName('footer')[0].innerHTML = footerText;

}
function closeSession(tableName) {
    tablesObj[tableName] = [];
    closeWin();
}


function closeWin() {
    //update the local storage
    localStorage.setItem("tables", JSON.stringify(tablesObj));
    window.location.reload();
    //document.getElementsByClassName('windowList')[0].style.display='none';

}
function deleteOrder(element, tableName, orderIndex) {
    tablesObj[tableName].splice(orderIndex, 1);
    var listElement = element.parentNode;
    var ulElement = listElement.parentNode;
    divRow.removeChild(ulElement);
    for (var i = orderIndex; i < tablesObj[tableName].length; i++) {

        divRow.childNodes[3 + i].childNodes[0].innerHTML = Number(divRow.childNodes[3 + i].childNodes[0].innerHTML) - 1;
    }

}