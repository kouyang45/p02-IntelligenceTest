function checkoutOders()
{
var checkoutName = getCookie("name");
console.log(checkoutName);
}

function getCustomerName()
{
  var name = document.getElementById("orderName");
  //get the status of each checkbox
  var problem one = document.getElementById("check1+1").checked;
  var problem two = document.getElementById("check1+2").checked;
  var problem three = document.getElementById("check1+3").checked;

  //check if each checkbox is checked
  if (problem one && !problem two && !problem three)
  {
  console.log("211");
  }
  else if (!problem one && problem two && !problem three)
  {
    console.log("ordered a veggie pizza");
  }
  else if (!problem one && !problem two && problem three )
  {
    console.log("ordered a supreme pizza");
  }
  else if (!problem one && !problem two && !problem three )
  {
  console.log("12312");
  }
  else
  {
  console.log("Order recieved by" + name.value);
  }
  setCookie("name",name.value,1);
  window.location.herf="checkout.html";
}

//setCookie and getCookie are courtesy of w3schools
//https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }
