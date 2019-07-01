var tablesObj=JSON.parse(localStorage.getItem("tables"));

 var order=function(name,price,servings)
{
this.name=name;
this.price=price;
this.servings=servings;
}

function dragData(event)
{
    event.dataTransfer.setData("text",event.currentTarget.id);
}
function allowDrop(event)
{
    event.preventDefault();
}
function drop(event)
{
event.preventDefault();
var itemId = event.dataTransfer.getData("text");
var itemName=document.getElementById(itemId).childNodes[0].innerHTML;
var itemPrice=document.getElementById(itemId).childNodes[1].innerHTML;
  var tableName=event.currentTarget.childNodes[0].innerHTML;



    var isOrderFound=tablesObj[tableName].find(orderObj => {
        if(orderObj.name==itemName)
        {
            orderObj.servings=Number(orderObj.servings)+1;
            return true;
        }
    });
if(!isOrderFound)
{
tablesObj[tableName].push(new order(itemName,itemPrice,1));
}

localStorage.setItem("tables",JSON.stringify(tablesObj));


var str=event.currentTarget.childNodes[1].innerHTML;
var count=0;
str=str.replace(/[0-9]+/g,function(match)
{
count++;
if(count==1)
{
    return Number(match)+Number(itemPrice);
}
else
{
    return Number(match)+1;
}

});
    
event.currentTarget.childNodes[1].innerHTML=str;
}
