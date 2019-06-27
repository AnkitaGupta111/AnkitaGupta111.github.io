var arrMenuItems=[];
var foodMenu=document.getElementsByClassName('food-menu')[0];
var MenuItem=function(name,cost,type)
{
this.name=name;
this.type=type;
this.cost=cost;
}
function addStarters(item)
{
    item.type="Starters";
    arrMenuItems.push(item);
}
function addMainCourse(item)
{
    item.type="Main Course";
    arrMenuItems.push(item);
}
function addBeverages (item)
{
    item.type="Beverages";
    arrMenuItems.push(item);
}
function addPizza (item)
{
    item.type="Pizza";
    arrMenuItems.push(item);
}




document.body.onload=function()
{
    
  addStarters(new MenuItem('Spring Roll',145));
  addStarters(new MenuItem('Veg. Manchurian Dry',153));
  addStarters(new MenuItem('Potatoes in Honey & Chilly',175));
  addStarters(new MenuItem('Fried Vegetables in Salt & Papper',190));
  addStarters(new MenuItem('Crispy Spinach & Baby - Corn',205));

  addMainCourse(new MenuItem ('Veg Chopsouey',195));
  addMainCourse(new MenuItem ('Chilly Paneer Gravy',200));
  addMainCourse(new MenuItem('Mix. Veg. in Hot Garlic Sauce',185));
  addMainCourse(new MenuItem('Manchurian Gravy',175));
  addMainCourse(new MenuItem('Shreded Potatoes in Hot Garlic Sauce ',153));
     
  addBeverages (new MenuItem('Cola',55));
  addBeverages (new MenuItem('Diet Pepsi',55));
  addBeverages (new MenuItem('Fresh Lime Soda',60));
  addBeverages (new MenuItem('Mineral Water',50));
  addBeverages (new MenuItem('lime Water',50));
  
  addPizza (new MenuItem('Plain Cheese Pizza',190));
  addPizza (new MenuItem('Capsicum, Onion Pizza ',210));
  addPizza (new MenuItem('Tandoori Pizza ',250));
  addPizza (new MenuItem('Super Veggie Pizza(Double Cheese)',300));
  addPizza (new MenuItem('Tomato,onion Pizza ',250));

  var i=1;
  var text="";
  arrMenuItems.forEach(foodItem => {
      text+="<div class='card' draggable='true' ondragstart='dragData(event)' id='"+ i++ +"'><h3>"+foodItem.name+"</h3><p>"+foodItem.cost.toFixed(2)+"</p></div>";
  
  
    
});
foodMenu.innerHTML=text;
}