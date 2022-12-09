//alert("Arquivo externo usando JS nesta página")

function cadastrarNewsletter(){
    let email = document.getElementById("campo-email").value
    alert(email)
}
function mostrarMenu($event){
    //identificar o elemento menu
    let menu = document.getElementById("menu")
    
    if(getComputedStyle(menu).display == "none"){
        menu.style.display = "flex"
    }
    else{
        menu.style.display = "none"
    }

    event.preventDefault()
}