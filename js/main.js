let products = [
    {title: "Amaryllis", price: 199, img: "img/Amaryllis.png", description: "lorem"},
    {title: "Ardisia", price: 249, img: "img/Ardisia.png", description: "lorem ipsum"},
    {title: "Benjaminfikus", price: 399, img: "img/Benjaminfikus.png", description: "lorem ipsum"},
    {title: "Rosa Fönsterazalea", price: 299, img: "img/Fonsterazalea_rosa.png", description: "lorem"},
    {title: "Fönsterazalea", price: 249, img: "img/Fonsterazalea.png", description: "lorem"},
    {title: "Förmakspalm", price: 399, img: "img/Formakspalm.png", description: "lorem ipsum"}
];

let newProduct = {};


let cart = JSON.parse(localStorage.getItem("cart")) || [];

function printProducts() {
    $.each(products, function(i, product) {
        // SKAPA INNEHÅLL PÅ SIDAN BASERAT PÅ DATA FRÅN PRODUCTS
  
        let cardDiv = $("<div>")
                            .addClass("product-card col-6 col-md-4 col-lg-3")
                            .attr("id", "carddiv");
            
        let productCard = $("<div>")
                            .addClass("card h-100 d-flex flex-column")
                            .appendTo(cardDiv);

        let cardTitle = $("<h3>")
                            .addClass("card-title")
                            .html(product.title)
                            .appendTo(productCard);
            
       // let cardLink = $("<a>")
       //                     .attr("href", "")
        //                    .addClass("stretched-link")
                        //    .on("click", presentDescription)
       //                     .appendTo(cardTitle);

        let  imgDiv = $("<div>")
                            .addClass("card-body")
                            .attr("id", "imgdiv")
                            .appendTo(productCard);

        let productImg = $("<img>")
                            .addClass("img-fluid")
                            .attr("src", product.img)
                            .appendTo(imgDiv);
        
        let cardFooter = $("<div>")
                            .addClass("card-footer d-flex justify-content-between")
                            .attr("id", "cardfooter")
                            .appendTo(productCard);

        let productPrice = $("<span>")
                            .attr("id", "productprice")
                            .html(product.price + " SEK")
                            .appendTo(cardFooter);

        let dialogButton = $("<button>")
                            .attr("type", "button")
                        //    .attr("id", "descriptionbutton")
                        //    .attr("data-toggle", "collapse")
                        //    .attr("data-target", "#descriptiondiv")
                        //    .attr("aria-expanded", "true")
                        //    .attr("aria-controls", "descriptiondiv")
                            .addClass("btn btn-info")
                            .html("Läs mer")
                            .appendTo(cardFooter)
                            .on("click", {show: product}, presentDescription);
        
        let productDescription = $("<div>")
                            //    .addClass("collapse")
                                .attr("id", "descriptiondiv")
                            //    .attr("style", "display: none")
                            //    .attr("aria-labelledby", "cardfooter")
                            //    .attr("data-parent", "#carddiv")
                                .html(product.description)
                                .appendTo(productCard);

        let addToCartButton = $("<button>")
                                    .attr("type", "button")
                                    .addClass("btn btn-dark")
                                    .attr("id", "addtocart")
                                    .html("Lägg till i varukorg")
                                    .on("click", {added: product}, addToCart)
                                    .appendTo(productCard);

        $("#productrow").append(cardDiv);    
    });    
};

function addToCart(event) {
    let addedProduct = event.data.added;
        cart.push(addedProduct);

        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(cart);
};

function presentDescription(event, productDescription) {
    console.log(event.data.show.description);                                
    $(productDescription).toggle();  
};

window.onload = function(i) {
    console.log(products);
    printProducts(i);
};