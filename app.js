function modalfunc(x){
    //GETTING ELEMENTS
    var imageofmodal = document.getElementById("imageofmodal")
    var  prodName = document.getElementById("prodName")
    var  prodPrice = document.getElementById("prodPrice")

    //INCLUDING REQUIREMENTS
    var prod = x.parentNode.firstElementChild.innerHTML
    var price = x.parentNode.firstElementChild.nextElementSibling.innerHTML
    var img = x.parentNode.parentNode.firstElementChild

    //SETTING ELEMENTS    
    prodName.innerHTML = prod
    prodPrice.innerHTML = price
    // img.src = imageofmodal
    imageofmodal.src = img.src
}
function prodfunc(x){
    x.parentNode.classList.add("active")
}