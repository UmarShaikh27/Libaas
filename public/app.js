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

// function countdown(){
//     var dateNow = new Date().getTime()
//     var dateThen = new Date("Dec 20 ,2021").getTime()
//     var diff = dateThen - dateNow

//     var seconds = 1000
//     var minutes = seconds * 60
//     var hours = minutes * 60
//     var days = hours * 24

//     var daysleft = Math.floor(diff/days)
//     var hoursleft = Math.floor((diff % days) / hours)
//     var minutesleft = Math.floor((diff % hours) / (1000*60))
//     var secondsleft = Math.floor((diff % minutes) / (1000))
    

//     // console.log(dateNow);
//     // console.log(dateThen);
//     // console.log(diff);

//     console.log(daysleft);
//     console.log(hoursleft);
//     console.log(minutesleft);
//     console.log(secondsleft);
// }
// countdown()


var days = document.getElementById("days")
var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")


var jsdays = 15;
var jshours = 21;
var jsminutes = 01;
var jsseconds = 06;

function countdown(){
    jsseconds--;
    seconds.innerHTML = jsseconds;
    minutes.innerHTML = jsminutes;
    hours.innerHTML = jshours;
    days.innerHTML = jsdays;

    if(jsseconds == 00){
        jsminutes--
        jsseconds = 59;
    }
    if(jsminutes == 0){
        jshours-- 
        jsminutes = 59
    }
    if(jshours == 0){
        jsdays-- 
        jshours = 23
    }
}
setInterval(countdown,1000)