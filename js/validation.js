function validate()
{
var username = document.feedback.username;
var usermail = document.feedback.usermail;
if(allLetter(username))
{
if(ValidateEmail(usermail))
{
}
}
return false;
}
function allLetter(username)
{
var letters = /^[A-Za-z]+$/;
if(username.value.match(letters))
{
return true;
}
else
{
alert('Please enter valid Name and it must have alphabet characters only');
username.focus();
return false;
}
}
function ValidateEmail(usermail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(usermail.value.match(mailformat))
{
return true;
}
else
{
alert("Please enter valid email address");
usermail.focus();
return false;
}
}