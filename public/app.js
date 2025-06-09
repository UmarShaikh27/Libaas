function modalfunc(x){
    //GETTING ELEMENTS
    var imageofmodal = document.getElementById("imageofmodal")
    var prodName = document.getElementById("prodName")
    var prodPrice = document.getElementById("prodPrice")
    var modalCounter = document.getElementById("modalCounter")
    
    // Store reference to the product card
    document.querySelector('#exampleModal').productCard = x.closest('.thecard')

    //INCLUDING REQUIREMENTS
    var prod = x.nextElementSibling.firstElementChild.innerHTML
    var price = x.nextElementSibling.firstElementChild.nextElementSibling.innerHTML
    var img = x.parentNode.firstElementChild

    //SETTING ELEMENTS    
    prodName.innerHTML = prod
    prodPrice.innerHTML = price
    imageofmodal.src = img.src
    
    // Reset counter to 1
    if (modalCounter && modalCounter.firstElementChild.nextElementSibling) {
        modalCounter.firstElementChild.nextElementSibling.innerHTML = '1'
    }    // Add event listener for add to cart button in modal
    const modalAddToCartBtn = document.querySelector('.modaladdcart');
    modalAddToCartBtn.onclick = (e) => {
        e.preventDefault(); // Prevent any default handlers
        const quantity = parseInt(modalCounter.firstElementChild.nextElementSibling.innerHTML);
        addToCart(x.closest('.thecard'), quantity);
    };
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
var jsminutes = 1;
var jsseconds = 6;

function countdown(){
    jsseconds--;
    
    if(jsseconds < 0){
        jsminutes--;
        jsseconds = 59;
    }
    if(jsminutes < 0){
        jshours--;
        jsminutes = 59;
    }
    if(jshours < 0){
        jsdays--;
        jshours = 23;
    }
    
    // Format numbers to always show two digits
    seconds.innerHTML = String(jsseconds).padStart(2, '0');
    minutes.innerHTML = String(jsminutes).padStart(2, '0');
    hours.innerHTML = String(jshours).padStart(2, '0');
    days.innerHTML = String(jsdays).padStart(2, '0');
    
    // Stop countdown if all values reach 0
    if(jsdays <= 0 && jshours <= 0 && jsminutes <= 0 && jsseconds <= 0) {
        clearInterval(countdownInterval);
    }
}
const countdownInterval = setInterval(countdown, 1000);

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartTotal = 0;

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    
    // Update cart count
    cartCount.textContent = cart.length;
    
    // Update cart items
    if (cartItems) {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item d-flex align-items-center justify-content-between mb-3">
                <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover;">
                <div class="flex-grow-1 mx-3">
                    <h6 class="mb-0">${item.name}</h6>
                    <p class="mb-0">Rs. ${item.price}</p>
                </div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${index}, -1)">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${index}, 1)">+</button>
                    <button class="btn btn-sm btn-danger ml-2" onclick="removeFromCart(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
        
        // Update total
        cartTotal = cart.reduce((total, item) => total + (parseFloat(item.price.replace(/[^\d.-]/g, '')) * item.quantity), 0);
        cartTotalElement.textContent = cartTotal.toFixed(2);
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productElement, quantity = 1) {
    const name = productElement.querySelector('h4').textContent;
    const price = productElement.querySelector('h6').textContent.split('Rs.')[1].trim();
    const image = productElement.querySelector('img').src;
    
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            name,
            price,
            image,
            quantity: quantity
        });
    }
    
    updateCartUI();
}

function updateQuantity(index, change) {
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
        updateCartUI();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Implement checkout logic here
    alert('Thank you for your purchase! Total: Rs. ' + cartTotal.toFixed(2));
    clearCart();
}

// Initialize cart UI
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    // Add click handlers for all "Add to Cart" buttons in the product grid
    const addToCartButtons = document.querySelectorAll('.addtocart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.thecard');
            addToCart(productCard, 1); // Direct add-to-cart always adds 1 item
        });
    });
});