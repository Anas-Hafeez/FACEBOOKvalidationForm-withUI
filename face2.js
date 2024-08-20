
function myfun(){
    var firnam=document.getElementById('firstname').value;
    var surnam=document.getElementById('secname').value;
    var email=document.getElementById('emails').value;
    var phone=document.getElementById('phoneno').value;
    var err=document.getElementById('error');
    // alert(firnam+surnam+email+phone);

    if(firnam==""||surnam==""||email==""||phone=="")
{
   err.innerHTML="*All fields are required";
   err.style.color='red';
   phoneno.style.borderColor='red';
   emails.style.borderColor="red";
   firstname.style.borderColor="red";
   secname.style.borderColor="red";
   return false;
}
var num=/^[0-9]+$/;

if(phone!== "")
{
if(num.test(phone))
{
   if(phone.length !== 10)
     {
      err.innerHTML="*phone no can have atleast or atmost 10 digits";
      err.style.color='red';
      phoneno.style.borderColor='red';
      return false;
     }
     else{
       // alert("phone no is valid");
     }

}
else{
err.innerHTML="*phone no is not valid";
      err.style.color='red';
      phoneno.style.borderColor='red';
      return false;
}   
}
else{
// alert("phone number is required");
}












var e=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;            //it is regular expression for email

     
if(email !== "")
{
   if(e.test(email))
   {
   
   }
   else{
    err.innerHTML="* email is not valid"
        err.style.color="red";
        emails.style.borderColor="red";
        return false;
   }
}
else{
alert("email is required");
}


  var regfnam=/^[A-Za-z\s]+$/;
  if(regfnam.test(firnam))
  {
    if(regfnam.test(surnam))
  {

  }
  else{
    err.innerHTML="* Last name is not valid"
        err.style.color="red";
        secname.style.borderColor="red";
        return false;
  }
  }
  else{
    err.innerHTML="* first name is not valid"
        err.style.color="red";
        firstname.style.borderColor="red";
        return false;
  }
}
     

     

     
     



