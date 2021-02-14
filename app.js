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
    })
});
