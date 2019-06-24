(function()
{
    var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
if(filename=="galaryAdmin.html")
{
   
var btnTags=`<div class='btn-group'><button class='editButton' onclick='popUpForm(this)'>
    <i class='fa fa-edit' style='font-size:30px;color:white;'></i></button>
  <button class='delButton' onclick='del(this)'><i class='fa fa-trash-o' style='font-size:30px'></i></button>
  </div></div>`;

}


var images=localStorage.getItem("images");
if(images)
{
   var imagesArray=JSON.parse(images);
imagesArray.forEach(img => {
 var gridDiv=document.getElementById("grid");   
var imag="<div class='gallery'>"+
"<a target='_blank' href='"+img.url+"'>"+
"<img src='"+img.url+"' width='600' height='400' alt='invalid url'>"+
"</a>";
if(filename=="galaryAdmin.html")
{
    imag+=btnTags;
}
else
if(filename=="galary.html")
{
imag+="<div class='desc'>"+img.name+"</div></div>";
}
gridDiv.innerHTML+=imag;




});
}

})();