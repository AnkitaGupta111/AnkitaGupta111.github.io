var greenTick='<i class="fa fa-check-circle" style="font-size:25px;color:green"></i>';
var redCross='<i class="fa fa-times-circle" style="font-size:25px;color:red"></i>'
var label=document.getElementById('emailStatus');
var isEmailValid=false;
function validate()
{
var email=document.getElementsByName('email')[0].value;
var regex=/^\w+([\.]\w+)*@\w+([\.]\w+)*(\.\w{2,3})+$/;
if(email=="")
{
    label.innerHTML="";
}
else
if(regex.test(email))
{
label.innerHTML=greenTick;
isEmailValid=true;
}
else
{
    label.innerHTML=redCross;
}

}
function resetBtn()
{
document.getElementsByName('uname')[0].value="";
document.getElementsByName('email')[0].value="";

label.innerHTML="";
}
function message()
{
if(isEmailValid==true)
{
    alert("saved");
    return true;
}
else
{
    alert("invalid details: cannot saved");
    return false;
}
}