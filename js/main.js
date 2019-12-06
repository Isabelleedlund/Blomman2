let products = [
    {title: "Amaryllis", price: 199, img: "img/Amaryllis.png", description: "lorem"},
    {title: "Ardisia", price: 249, img: "img/Ardisia.png", description: "lorem ipsum"},
    {title: "Benjaminfikus", price: 399, img: "img/Benjaminfikus.png", description: "lorem ipsum"},
    {title: "Rosa Fönsterazalea", price: 299, img: "img/Fonsterazalea_rosa.png", description: "lorem"},
    {title: "Fönsterazalea", price: 249, img: "img/Fonsterazalea.png", description: "lorem"},
    {title: "Förmakspalm", price: 399, img: "img/Formakspalm.png", description: "lorem ipsum"}
];

// let newProduct = {};

let cart = JSON.parse(localStorage.getItem("cart")) || [];

window.onload = function() {

    // console.log(products);
    printProducts();
    presentCart();
    cartWithContent();

};

// Cart
function presentCart() {
    
    $('#cart').popover( { 
        placement: 'bottom', 
        html: true, 
        container: 'body',
        title: "VARUKORG",
        content: ""    
    });


// to work next sprint    
    // function checkCart() {
    //     if (localStorage.getItem("cart").length == null) {
    //         cartWithoutContent();
    //     } 
    //     else {
    //         cartWithContent()
    //     }
    // }

// to work next sprint
    // function cartWithoutContent() {
    //     // let cartIsEmpty = $("<span>")
    //     //                     .addClass("pt-2 pb-2")
    //     //                     .attr("id", "cartIsEmpty")
    //     //                     .html("Din varukorg är tom.");
    //     return "HEJ";
    // }

    


};

function cartWithContent() {

    let cartItemContainer = $("<div>")
                            .addClass("container pt-2 pb-2")
                            .attr("id", "cartItemContainer");

    $.each(cart, function( index, value ) {
        
        let cartItem = $("<div>")
                            .addClass("row pt-2 pb-3 border-bottom")
                            .attr("id", "cartItem");

        let cartItemImgContainer = $("<div>")
                            .addClass("col-5")
                            .attr("id", "cartItemImgContainer");

        let cartItemDataContainer = $("<div>")
                            .addClass("col-7")
                            .attr("id", "cartItemDataContainer")
                            .html(value.title + "<br />" + value.price + " SEK");
        
        let cartItemImg = $("<img>")
                            .attr("src", value.img)
                            .addClass("img-fluid")
                            .attr("id", "cartItemImg")
                            .attr("alt", value.description);
            
        cartItemImgContainer.append(cartItemImg);
        cartItem.append(cartItemImgContainer);
        cartItem.append(cartItemDataContainer);

        cartItemContainer.append(cartItem);
        
        $(".popover-body").append(cartItemContainer);

    });


    let cartToCheckoutButtonContainer = $("<div>")
                                    .addClass("container")
                                    .attr("id", "cartToCheckoutButtonContainer");

    let cartToCheckoutButtonRow = $("<div>")
                                    .addClass("row")
                                    .attr("id", "cartToCheckoutButtonRow");

    let cartToCheckoutButtonCol = $("<div>")
                            .addClass("col-12 d-flex justify-content-center p-1 pt-0")
                            .attr("id", "cartToCheckoutButtonCol");

    let toCheckoutButton = $("<button>")
                            .attr("type", "button")
                            .attr("id", "toCheckoutButton")
                            .addClass("btn btn-info")
                            .html("Till Kassan");

    toCheckoutButton.appendTo(cartToCheckoutButtonCol);
    cartToCheckoutButtonCol.appendTo(cartToCheckoutButtonRow);
    cartToCheckoutButtonRow.appendTo(cartToCheckoutButtonContainer);
    cartToCheckoutButtonContainer.appendTo($(".popover-body"));

}


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

        let productDescr = $("<div>")
                            .attr("id", "descrdiv"+i)
                            .attr("style", "display: none")
                            .html(product.description)
                            .appendTo(productCard);

        let dialogButton = $("<button>")
                            .attr("type", "button")
                            .attr("id", "descriptionbutton")
                            .addClass("btn btn-info")
                            .html("Läs mer")
                            .appendTo(cardFooter)
                            
                        // when clicked productDescr will be visible    
                            .click(function() {
                                $("#descrdiv"+i).toggle("slow");
                            });

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


