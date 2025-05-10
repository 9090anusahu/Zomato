let opensignup=document.getElementById("opensignup")
closesignup=document.getElementById("closesignup")
let signup_popup=document.getElementById("signup_popup")

opensignup.addEventListener("click",()=>{
  signup_popup.style.display='block'
})

closesignup.addEventListener("click",()=>{
    signup_popup.style.display='none'
  })


let openlogin=document.getElementById("openlogin")
closelogin=document.getElementById("closelogin")
let login_popup=document.getElementById("login_popup")

openlogin.addEventListener("click",()=>{
  login_popup.style.display='block'
})

closelogin.addEventListener("click",()=>{
    login_popup.style.display='none'
  })