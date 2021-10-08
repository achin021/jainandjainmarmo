window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
    
    document.getElementById("navbar").style.background = "#1F3041";
    document.getElementById("logoVector").style.height = "53px";
    document.getElementById("home").style.color = "white"
    document.getElementById("aboutus").style.color = "white"
    document.getElementById("contactus").style.color = "white"
    document.getElementById("products").style.color = "white"
    document.getElementById("gallery").style.color = "white"
    document.getElementById("logoVector").src = "/images/logo/white.png"
    document.getElementById("material-icons").style.color = "white";
    

    
  } else {
   
    document.getElementById("navbar").style.background = "none";
    document.getElementById("logoVector").style.height = "53px";
    document.getElementById("home").style.color = "black"
    document.getElementById("aboutus").style.color = "black"
    document.getElementById("contactus").style.color = "black"
    document.getElementById("products").style.color = "black"
    document.getElementById("gallery").style.color = "black"
    document.getElementById("logoVector").src = "/images/logo/Group 12.png"
    document.getElementById("material-icons").style.color = "black";
  }
}