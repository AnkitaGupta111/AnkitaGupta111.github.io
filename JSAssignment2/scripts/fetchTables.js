//loading tables (object having orders array) to local storage on first time landing 

if(!localStorage.getItem('tables'))
{
    ordersArray=[];
var tablesObj={};
for(var i=1;i<=5;i++)
{

tablesObj[`Table-${i}`]=[];


}
localStorage.setItem("tables",JSON.stringify(tablesObj));
}
var tablesList=document.getElementsByClassName('tables-list')[0];
tablesObj=JSON.parse(localStorage.getItem('tables'));
    var tableDiv="";
for(var table in tablesObj)
{
    tableDiv+="<div class='card' ondragover='allowDrop(event)' ondrop='drop(event)'><h3>"+table+"</h3>";
if(tablesObj[table].length==0)
{
tableDiv+="<p>Rs.0|Total items: 0</p></div>";
}
else
{
    tableDiv+="<p>Rs."+ calPrice(tablesObj[table])+"|Total items: "+ calServings(tablesObj[table]) +"</p></div>";

}

}
tablesList.innerHTML=tableDiv;


function calPrice(orders)
{
    var price=0;
orders.forEach(order => {
    price+=Number(order.price)*Number(order.servings);

});
return price;
}
function calServings(orders)
{
    var quant=0;
orders.forEach(order => {
    quant+=order.servings;

});
return quant;
}