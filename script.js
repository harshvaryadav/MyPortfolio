function fun()
{
   let bar=document.getElementById("b");
   let navbar=document.getElementById("Nav"); 
   let Toggle=document.getElementById("toggle");
   bar.classList.toggle("fa-align-left");  
   bar.classList.toggle("fa-align-right");  
   bar.classList.toggle("bars");
   bar.classList.toggle("close"); 
   navbar.style.animation="Animate 0.8s linear 1"; 
   if(navbar.style.display=="none")  
   {
      navbar.style.display="flex";
      navbar.style.visibility="visible"; 
   }
   else
   {
      navbar.style.display="none";
   }
}
function change()
{
    let Toggle=document.getElementById("toggle");
    Toggle.classList.toggle("fa-toggle-on");
    Toggle.classList.toggle("fa-toggle-off");
    document.getElementsByTagName("body")[0].classList.toggle("cls"); 
}
function Typewriter()
{
    var type=new Typed("#s",{
        strings:["Web Developer.","Competative Coder."], 
        typeSpeed:50,  
        loop:true,
        backSpeed:60,
        backDelay:60,     
    });
}       
window.onclick=function(event){
   let bar=document.getElementById("b");
   let navbar=document.getElementById("Nav"); 
   if(event.target!=navbar && event.target!=bar)
   {
      navbar.style.display="none";
      if(bar.classList.contains("fa-align-right"))
      {
         bar.classList.toggle("fa-align-left");   
         bar.classList.toggle("fa-align-right");  
         bar.classList.toggle("bars");
         bar.classList.toggle("close");       
      }
   }
} 
function func()
{
   let navbar=document.getElementById("Nav"); 
   navbar.style.display="none";
}