function validate(){
var a=document.getElementById("nm").value;
var b=document.getElementById("lm").value;
var c=document.getElementById("em").value;
var d=document.getElementById("cn").value;
var x=document.getElementById("Add").value;
var e=document.getElementById("date").value;
var f=document.getElementById("city").value;
var g=document.getElementById("pin").value;
var h=document.getElementById("pass").value;
var i=document.getElementById("cpass").value;
var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var Add=/^[0-9a-zA-Z]+$/;
var con=/^\d{10}$/;
var pass=/^[A-Z]+[a-zA-z0-9]+[!@#$%^&*]+$/
if(a=="")
{
	alert("Name cannot be blank");
}

if(b=="")
{
	alert("Last Name cannot be blank");
}

if(c=="")
{
	alert("Email cannot be blank");
}
else if(regex.test(c)==false)
{
	alert("Email is Invalid");
}

if(d=="")
{
	alert("Contact Number cannot be blank");
}
if(con.test(d)==false)
{
	alert("Contact number must have 10 digits");
}
else if(x.value.Add==false)
{
	alert("Address cannot be blank");
}

if ( ( form.gender[0].checked == 0 ) && ( form.gender[1].checked == 0 ) && ( form.gender[2].checked == 0 ) )
{
	alert("Please choose your Gender");
}

if(e=="")
{
	alert("Please provide your Date of Birth");
}

if(f=="")
{
	alert("Please enter the City");
}


if (form.country.selectedIndex == 0  )
{
	alert("Please select the Country");
}

if(g=="")
{
	alert("Please enter Pincode");
}

if(h=="")
{
	alert("Enter your Password");
}
else if((h.length<8) || (h.length>15))
{
alert("Password must have 8 to 15 characters");
}
else if(pass.test(h)==false)
{
alert("Password must have atleast one Uppercase letter and one special character");
}

if(i=="")
{
alert("Please ReEnter your password");
}
else if(h!=i)
{
alert("Incorrect Confirm Password");
}
}