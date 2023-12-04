const sidebar = document.querySelector(".site-bar")
const menu = document.querySelector(".menu")

menu.addEventListener("click",()=>{
    if(sidebar.style.display==='none'){
        sidebar.style.display='block'
    }
    else{
        sidebar.style.display='none'
    }
})

