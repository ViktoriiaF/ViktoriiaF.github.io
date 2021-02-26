//add to cart

let productsCountEl=document.getElementById("products-count");

let addToCartButtons=document.querySelectorAll(".btn-add-tu-cart");
for(let i=0; i<addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener("click", function(){
        productsCountEl.textContent=+productsCountEl.textContent+1;
    })
}

let wishButtons=document.querySelectorAll(".wish-button");
wishButtons.forEach(element => {
    element.addEventListener("click", function(){
        if(this.classList.contains("active")){
            this.classList.remove("active");
        }else{
            this.classList.add("active");
        }
        //this.classList.toggle("active"); замість if
    })
});


//modal
let moreDetailsBtn=document.querySelectorAll(".btn-more-detais");

let modal=document.querySelector(".modal");

moreDetailsBtn.forEach(btn => {
    btn.addEventListener("click", openModal)
});

let closeBtn=document.querySelector(".close-btn");
closeBtn.addEventListener("click", closeModal)

function openModal(){
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal(){
    modal.classList.add("hide");
    modal.classList.remove("show");
}

modal.addEventListener("click",function(e){
    if(e.target===modal){
        closeModal();
    }
})




function showModalByScroll() {
    if(window.pageYOffset > document.body.scrollHeight/2) {
        openModal();
        window.removeEventListener("scroll",showModalByScroll)
    }
}

window.addEventListener("scroll",showModalByScroll)





// product quantity
let deviceInfoList=document.querySelectorAll(".device-info");

deviceInfoList.forEach(tag=>{
    tag.insertAdjacentHTML('afterend','<div class="product-quantity"><button class="decrement-button">-</button><input type="text" value="1"><button class="increment-button">+</button></div>')
})

let productsQuantity = document.querySelectorAll(".product-quantity input");
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");

function toggleButtonState(count, position){
    decrementBtns[position].disabled=count<=1;
    incrementBtns[position].disabled=count>=10;
}


for(let i=0;i<productsQuantity.length;i++){
    toggleButtonState(productsQuantity[i].value,i);
}



for(let i=0;i<incrementBtns.length;i++){
    incrementBtns[i].addEventListener("click",function(){            
        let currentCount = +productsQuantity[i].value;
        let nextCount=currentCount+1;
        productsQuantity[i].value=nextCount;
    
        toggleButtonState(nextCount,i);
    })
}


for(let i=0; i<decrementBtns.length; i++){
    
    decrementBtns[i].addEventListener("click",function(){        
        let currentCount = +productsQuantity[i].value;
        let nextCount=currentCount-1;
        productsQuantity[i].value=nextCount;
    
        toggleButtonState(nextCount,i);
    })
}


