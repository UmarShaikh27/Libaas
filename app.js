function modalfunc(x){
    //GETTING ELEMENTS
    var imageofmodal = document.getElementById("imageofmodal")
    var  prodName = document.getElementById("prodName")
    var  prodPrice = document.getElementById("prodPrice")

    //INCLUDING REQUIREMENTS
    var prod = x.nextElementSibling.firstElementChild.innerHTML
    var price = x.nextElementSibling.firstElementChild.nextElementSibling.innerHTML
    var img = x.parentNode.firstElementChild

    //SETTING ELEMENTS    
    prodName.innerHTML = prod
    prodPrice.innerHTML = price
    // img.src = imageofmodal
    imageofmodal.src = img.src
}
function minusfunc(x){
    var modalCounter = document.getElementById("modalCounter")
    var counterValue = Number(modalCounter.firstElementChild.nextElementSibling.innerHTML) 
    if(counterValue > 1){
    modalCounter.firstElementChild.nextElementSibling.innerHTML = counterValue - 1
    }
    
   
    
}
function plusfunc(x){
    var modalCounter = document.getElementById("modalCounter")
    var counterValue = Number(modalCounter.firstElementChild.nextElementSibling.innerHTML)
    if(counterValue < 10 ){
        modalCounter.firstElementChild.nextElementSibling.innerHTML = counterValue + 1
    }
    
}