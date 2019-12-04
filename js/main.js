let products = [
    {title: "Amaryllis", price: 199, img: "img/Amaryllis.png", description: "lorem"},
    {title: "Ardisia", price: 249, img: "img/Ardisia.png", description: "lorem ipsum"},
    {title: "Benjaminfikus", price: 399, img: "img/Benjaminfikus.png", description: "lorem ipsum"},
    {title: "Rosa Fönsterazalea", price: 299, img: "img/Fonsterazalea_rosa.png", description: "lorem"},
    {title: "Fönsterazalea", price: 249, img: "img/Fonsterazalea.png", description: "lorem"},
    {title: "Förmakspalm", price: 399, img: "img/Formakspalm.png", description: "lorem ipsum"}
];

let cart = JSON.parse(localStorage.getItem("products")) || [];

function printProducts() {
    $.each(products, function(i, product) {
        // SKAPA INNEHÅLL PÅ SIDAN BASERAT PÅ DATA FRÅN PRODUCTS
  
        let cardDiv = $("<div>").addClass("product-card col-6 col-md-4 col-lg-3");
            
        let productCard = $("<div>")
                            .addClass("card h-100 d-flex flex-column")
                            .appendTo(cardDiv);

        let cardTitle = $("<h3>")
                            .addClass("card-title")
                            .html(products[i].title)
                            .appendTo(productCard);
            
        let cardLink = $("<a>")
                            .attr("href", "#")
                            .addClass("stretched-link")
                        //    .on("click", presentDescription)
                            .appendTo(cardTitle);

        let  imgDiv = $("<div>")
                            .addClass("card-body")
                            .attr("id", "imgdiv")
                            .appendTo(productCard);

        let productImg = $("<img>")
                            .addClass("img-fluid")
                            .attr("src", products[i].img)
                            .appendTo(imgDiv);
        
        let cardFooter = $("<div>")
                            .addClass("card-footer d-flex justify-content-between")
                            .appendTo(productCard);

        let productPrice = $("<span>")
                            .attr("id", "productprice")
                            .html(products[i].price)
                            .appendTo(cardFooter);

        let dialogButton = $("<button>")
                            .attr("type", "button")
                            .addClass("btn btn-info")
                            .attr("id", "descriptionbutton")
                            .html("Läs mer")
                            .appendTo(cardFooter)
                            .on("click", presentDescription);

        let productDescription = $("<div>")
                                    .addClass("")
                                    .attr("id", "descirptiondiv")
                                    .html(products.description);
    
        let addToCartButton = $("<button>")
                                    .attr("type", "button")
                                    .addClass("btn btn-dark")
                                    .attr("id", "addtocart")
                                    .html("Lägg till i varukorg")
                                    .appendTo(productCard)
                                    .on("click", {added: product}, addToCart);

        $("#productrow").append(cardDiv);    
    });    
};

function addToCart(i, event) {
console.log(cart);
console.log(i);
console.log(event);

};
function presentDescription() {
    alert("beskrivning");
}
window.onload = function(i) {
    console.log(products);
    printProducts(i);
};