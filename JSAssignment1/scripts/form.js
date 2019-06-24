var form = document.getElementById("form-popup");


var formContainer = document.getElementsByClassName("form-container")[0];
var imgObj=null;
function fetchFormDataFromLocalStorage(editBtn)
{
var parentDiv=editBtn.parentElement.parentElement;
var url=parentDiv.childNodes[0].childNodes[0].src;
var imgs=localStorage.getItem("images");
var imagArray=JSON.parse(imgs);
return imagArray.find((obj)=>obj.url==url);


}
var setFormData=function(...args)
{
var index=0;
    for (var i = 0; i < formContainer.childNodes.length; i++) {
        if (formContainer.childNodes[i].nodeName == "DIV" && formContainer.childNodes[i].id != "btnDiv") {

            formContainer.childNodes[i].childNodes[3].value = args[index++];
        }
    }


}
function isDateValid(inputDate)
{
    if(new Date(inputDate)>new Date())
   {
       return false;
   }
   return true;
    
}


function isURLValid(url)
{
    var isUrlValid=true;
    var regex=/^https?:\/\/.*\.(png|jpg|jpeg|svg)/;
    var isValid = regex.test(url); 
    return isValid;
}

    
 
var uploadObjInLocalStorage = function (obj, arrayIndex = -1) {
    var images = localStorage.getItem("images");
    var imageArray = JSON.parse(images);
    if (arrayIndex == -1) {
        imageArray.push(obj);
    }
    else {
if(imageArray[arrayIndex].name!=obj.name)
{
    imageArray[arrayIndex].name=obj.name;
}
if(imageArray[arrayIndex].url!=obj.url)
{
    imageArray[arrayIndex].url=obj.url;
}
if(imageArray[arrayIndex].desc!=obj.desc)
{
    imageArray[arrayIndex].desc=obj.desc;
}
if(imageArray[arrayIndex].uploadDate!=obj.uploadDate)
{
    imageArray[arrayIndex].uploadDate=obj.uploadDate;
}

    }
    localStorage.setItem("images", JSON.stringify(imageArray));
}
var getInputData = function () {
    var arr = [];
    var index = 0;
    for (var i = 0; i < formContainer.childNodes.length; i++) {
        if (formContainer.childNodes[i].nodeName == "DIV" && formContainer.childNodes[i].id != "btnDiv") {
            arr[index] = formContainer.childNodes[i].childNodes[3].value.trim();
            index++;
        }
    }
    return arr;
}
var FormObj = function (name, url, desc, date) {
    
    return {
        
        name: name,
        url: url,
        desc: desc,
        uploadDate: date,
    }
}
var closeForm = function () {
   setFormData("","","");
    form.style.display = "none";
imgObj=null;
document.getElementById("invalid-url").innerHTML="";
document.getElementById("invalid-date").innerHTML="";
}



var addImage = function () {
    document.getElementById("invalid-url").innerHTML="";
    document.getElementById("invalid-date").innerHTML="";
    var arrayData = getInputData();
    if(arrayData[0]=="" || arrayData[1]=="" || arrayData[2]=="" || arrayData[3]=="")
 {
     alert("Input fields can not be empty or just space");
     return;
 }
if(isDateValid(arrayData[3]))
{
    var downloadingImage = document.createElement("img");

        downloadingImage.onerror= function(){
            document.getElementById("invalid-url").innerHTML="url not exist";
        }

        downloadingImage.onload=function()
        {
          document.getElementById("invalid-url").innerHTML="valid";

         var imgObject = FormObj(arrayData[0], arrayData[1], arrayData[2], arrayData[3]);

          if(imgObj)
         {
             
              var images = localStorage.getItem("images");
              var imageArray = JSON.parse(images);
              imageArray.forEach((obj,index)=>{
                 
                  if(imgObj.url==obj.url)
              {
                  uploadObjInLocalStorage(imgObject,index);
              }});
         
          }
          else
          {
          uploadObjInLocalStorage(imgObject);
          }
          setTimeout(2,window.location.reload());
          }
          
          downloadingImage.setAttribute('src',arrayData[1]);

}
else if(isDateValid(arrayData[3])==false)
{
    
        document.getElementById("invalid-date").innerHTML="date can not be in future";
         

}
}

var popUpForm = (btn) => {

    form.style.display = "block";
    form.style.animationName = "form-animation";

    form.style.animationDuration = "1s";
    if (btn.className == "editButton") {
        document.getElementById('btnDiv').childNodes[1].innerHTML="Save Changes";
        imgObj=fetchFormDataFromLocalStorage(btn)
setFormData(imgObj.name,imgObj.url,imgObj.desc,imgObj.uploadDate);
    }
    else
    {
        document.getElementById('btnDiv').childNodes[1].innerHTML="Add";
    }
}




function del(delBtn)
{
    parentDiv=delBtn.parentElement.parentElement;

    var url=parentDiv.childNodes[0].childNodes[0].src;

    var imgs=localStorage.getItem("images");
    var imagArray=JSON.parse(imgs);
    imagArray.forEach((obj,index)=>{
        
        if(obj.url==url)
    {
        imagArray.splice(index,1);
    }});
localStorage.setItem("images",JSON.stringify(imagArray));
window.location.reload();
}