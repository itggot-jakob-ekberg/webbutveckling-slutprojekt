function menu(event){
    let hea = document.querySelector(".menubox")
    hea.classList.toggle("activate")

    let icon = document.querySelector("#menubutton")
    if(icon.innerHTML == "close"){
        icon.innerHTML = "menu"
    }else{
        icon.innerHTML = "close"
    }
}
