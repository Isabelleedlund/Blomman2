let products = [
    {title: "Amaryllis", price: 199, img: "img/Amaryllis.png", description: "lorem"},
    {title: "Ardisia", price: 249, img: "img/Ardisia.png", description: "lorem ipsum"},
    {title: "Benjaminfikus", price: 399, img: "img/Benjaminfikus.png", description: "lorem ipsum"},
    {title: "Rosa Fönsterazalea", price: 299, img: "img/Fonsterazalea_rosa.png", description: "lorem"},
    {title: "Fönsterazalea", price: 249, img: "img/Fonsterazalea.png", description: "lorem"},
    {title: "Förmakspalm", price: 399, img: "img/Formakspalm.png", description: "lorem ipsum"}
];

let test = "hello";

function printProducts(){
    for (let i = 0; i < products.length; i++) {
        // SKAPA INNEHÅLL PÅ SIDAN BASERAT PÅ DATA FRÅN PRODUCTS
  
        let cardDiv = this.document.createElement("div");
            cardDiv.className = "product-card col-6 col-md-4 col-lg-3";
            document.getElementById("productrow").appendChild(cardDiv);
        let productCard = this.document.createElement("div");
            productCard.className = "card h-100 d-flex flex-column";
            productCard.id = i;
            cardDiv.appendChild(productCard);
        let cardTitle = this.document.createElement("h3");
            cardTitle.className = "card-title";
            cardTitle.innerHTML = (products[i].title);
            productCard.appendChild(cardTitle);
        let cardLink = this.document.createElement("a");
            cardLink.setAttribute = "href", "#";
            cardLink.className = "stretched-link";
            cardTitle.appendChild(cardLink);
        let productImg = this.document.createElement("img");
            productImg.src = (products[i].img);
            document.getElementById(i).appendChild(productImg);
        let cardFooter = this.document.createElement("div");
            cardFooter.className = "card-footer d-flex justify-content-between";
            productCard.appendChild(cardFooter);
        let productPrice = this.document.createElement("span");
            productPrice.id = "productprice";
            productPrice.innerHTML = (products[i].price);
            cardFooter.appendChild(productPrice);  
        let dialogButton = this.document.createElement("button");
            dialogButton.setAttribute("type", "button");
            dialogButton.className = "btn btn-info";
            dialogButton.id = "descriptionbutton";
            dialogButton.innerHTML = "Läs mer";
            cardFooter.appendChild(dialogButton);
            dialogButton.addEventListener("click", function(){
                //presentDescription(i);
            }); 
        let productDescription = document.createElement("div");
            productDescription.id = "";
        let addToCartButton = this.document.createElement("button");
            addToCartButton.setAttribute("type", "button");
            addToCartButton.className = "btn btn-dark";
            addToCartButton.id = "addtocart";
            addToCartButton.innerHTML = "Lägg till i varukorg";
            productCard.appendChild(addToCartButton);
            addToCartButton.addEventListener("click", function(){
                // addToCart(i);
            });
    };
};
window.onload = function(i) {
    console.log(products);
    printProducts(i);
};