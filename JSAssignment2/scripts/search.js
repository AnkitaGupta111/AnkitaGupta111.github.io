var tables = document.getElementsByClassName('tables-list')[0].childNodes;
var menu = document.getElementsByClassName('food-menu')[0].childNodes;
var foodTypes = [];





function searchTable(input) {

    val = input.value.toLowerCase();
    tables.forEach((tableDiv, index) => {

        if (tableDiv.childNodes[0].innerHTML.toLowerCase().includes(val)) {
            tables[index].style.display = 'block';
        }
        else {
            tables[index].style.display = 'none';
        }
    });


}


function searchMenu(input) {

    if (foodTypes.length == 0) {
        arrMenuItems.forEach(item => {

            if (!foodTypes.includes(item.type)) {
                foodTypes.push(item.type.toLowerCase());
            }

        });

    }

    val = input.value.toLowerCase();
    if (foodTypes.includes(val)) {

        arrMenuItems.forEach((foodItem, index) => {

            if (foodItem.type.toLowerCase().match(val)) {
                menu[index].style.display = 'block';
            }
            else {
                menu[index].style.display = 'none';
            }
        });
    }
    else {

        menu.forEach((foodItem, index) => {

            if (foodItem.childNodes[0].innerHTML.toLowerCase().match(val)) {
                menu[index].style.display = 'block';
            }
            else {
                menu[index].style.display = 'none';
            }
        });

    }



}
function searchClose1() {
    var input = document.querySelector(".col1 input");
    input.value = "";
    searchTable(input);
}
function searchClose2() {
    var input = document.querySelector(".col2 input");
    input.value = "";
    searchMenu(input);
}