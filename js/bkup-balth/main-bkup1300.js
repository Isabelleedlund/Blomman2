// Defining all the products

function ProductItem(t, p, img, d, id, q) {
    this.title = t;
    this.price = p;
    this.img = img;
    this.description = d;
    this.id = id;
    this.quantity = q;
}

let product1 = new ProductItem("Amaryllis", 79, "img/amaryllis.png", "Stora (18-19cm) rosa blommor blommor på korta stabila stjälkar.", 1, 1);
let product2 = new ProductItem("Ardisia", 249, "img/Ardisia.png", "De vackra bären som kommer i olika nivåer gör denna växt mycket dekorativ.", 2, 1);
let product3 = new ProductItem("Benjaminfikus", 399, "img/Benjaminfikus.png", "Benjaminfikus är en tät och buskig växt med blanka blad som finns i olika färger och storlekar beroende på sort.", 3, 1);
let product4 = new ProductItem("Rosa Fönsterazalea", 49, "img/Fonsterazalea_rosa.png", "Otroligt vacker växt som är uppskattad av många. De nya sorterna är lättskötta! ", 4, 1);
let product5 = new ProductItem("Fönsterazalea", 79, "img/Fonsterazalea.png", "Otroligt vacker växt som är uppskattad av många. De nya sorterna är lättskötta! ", 5, 1);
let product6 = new ProductItem("Förmakspalm", 399, "img/Formakspalm.png", "Fin, lite större krukväxt som är mycket tålig och kan bli gammal.", 6, 1);
let product7 = new ProductItem("Gullranka Liten", 59, "img/Gullranka_liten.png", "En klassisk växt som är både tålig och lättplacerad.", 7, 1);
let product8 = new ProductItem("Gullranka Stor", 79, "img/Gullranka.png", "En klassisk växt som är både tålig och lättplacerad.", 8, 1);
let product9 = new ProductItem("Julros", 199, "img/julros.png", "Njut av julrosen inne under vintern och plantera ut den till våren.", 9, 1);
let product10 = new ProductItem("Monstera", 2990, "img/monstera.png", "Mycket lättskött växt med stora, vackra, flikiga blad.", 10, 1);
let product11 = new ProductItem("Novemberkaktus", 59, "img/novemberkaktus.png", "Från Brasiliens djungel kommer denna växt som med sina fantastiska färger lyser upp i höstmörkret.", 11, 1);
let product12 = new ProductItem("Papuasköld", 199, "img/papuaskold.png", "Mörkt gröna blad med purpurfärgad undersida. Trivs på ljusa platser.", 12, 1);
let product13 = new ProductItem("Paraplyaralia", 79, "img/Paraplyaralia.png", "Mycket lättskött och tålig växt!", 13, 1);
let product14 = new ProductItem("Princettia", 49, "img/Princettia.png", "En kraftig och tålig växt med karamellrosa stjärnor och mörkt gröna blad.", 14, 1);
let product15 = new ProductItem("Rosenkalla", 149, "img/Rosenkalla.png", "Elegant växt med luftrenande egenskaper.", 15, 1);
let product16 = new ProductItem("Rumsgran", 179, "img/Rumsgran.png", "Lättskött liten barrväxt som sprider hemtrevlig stämning.", 16, 1);
let product17 = new ProductItem("Svärmorstunga", 129, "img/Svarmors_tunga.png", "Lättskött liten barrväxt som sprider hemtrevlig stämning.", 17, 1);
let product18 = new ProductItem("Vågbladskalatera", 79, "img/Vagbladskalatea.png", "Tät växt med fina blad som har vågiga kanter och rödlila undersida.", 18, 1);
let product19 = new ProductItem("Zamiakalla Raven", 279, "img/Zamiakalla.png", "En av de mest tåliga och lättskötta krukväxterna!", 19, 1);
let product20 = new ProductItem("Zebrasköld", 299, "img/Zebraskold.png", "Mörkt gröna blad med purpurfärgad undersida. Trivs på ljusa platser.", 20, 1);

// To show 8 products on site 
let products = [];
products.push(product1, product2, product3, product4, product5, product6, product7, product8);

// To show all 20 products on site 
// let products = [];
// products.push(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20);

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// When document is loaded

$(document).ready(function() {

    printProducts();

    createCart();

    changeFooterIcon();

});

// Products catalog

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
                                    .on("click", { added: product }, addToCart)
                                    .appendTo(productCard);

        $("#productrow").append(cardDiv);

    });
    
}


// Cart
function createCart() {

    console.log("createCart() starts");

    // update the actual value of cart from LS cart if there is something
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // reset cart
    $('#cart').popover('dispose');

    // create cart header/title
    let cartTitleContainer = $("<div>")
        .attr("id", "myCartTitle")
        .on("click", function () {
            $("#cart").popover('hide');
        });

    let cartTitleSpan = $("<span>")
        .html("VARUKORG");

    let cartCloseButton = $("<button>")
        .attr("type", "button")
        .addClass("close")
        .attr("aria-label", "Close");

    let cartCloseButtonSpan = $("<span>")
        .attr("aria-hidden", "true")
        .html("&times;");

    cartCloseButtonSpan.appendTo(cartCloseButton);
    
    cartTitleSpan.appendTo(cartTitleContainer);
    cartCloseButton.appendTo(cartTitleContainer);

    // check whether the cart coming from LS is empty or not
    if (cart.length === 0) {
        
        console.log(cart, "LS cart is empty");
        
        // create empty cart with a message
        $('#cart').popover( { 
            placement: 'auto', 
            container: 'body',
            html: true,
            title: cartTitleContainer,
            content: "Din varukorg är tom."
        });

    } 
    else {
        
        console.log(cart, "cart is not empty");    
        
        // create cart body      
        let cartMainContainer = $("<div>")
            .attr("id", "cartMainContainer");

        let cartItemContainer = $("<div>")
            .addClass("container pl-0 pr-0 pt-2 pb-2")
            .attr("id", "cartItemContainer");

        // cart body > cart items list
        $.each(cart, function( index, value ) {
            let cartItem = $("<div>")
                .addClass("row pt-2 pb-3 border-bottom")
                .attr("id", "cartItem");

            let cartItemImgContainer = $("<div>")
                .addClass("col-5")
                .attr("id", "cartItemImgContainer");

            // cart Item Data

            let cartItemData = $("<div>")
                .addClass("row no-gutters")
                .attr("id", "cartItemData");

            let cartItemQuantityContainer = $("<div>")
                .addClass("col-12")
                .attr("id", "cartItemQuantityContainer");

            let cartItemTitleAndPrice = $("<div>")
                .addClass("col-12 pb-2")
                .html(value.title + "<br />" + value.price + " SEK");

            let cartItemDecrease = $("<span>")
                .addClass("pr-3")
                .text("- ")
                .on("click", function () {
                    console.log("You want to decrease");
                });

            let cartItemQuantity = $("<span>")
                .addClass("pr-3")
                .html(value.quantity);

            let cartItemIncrease = $("<span>")
                .addClass("pr-3")
                .text(" + ")
                .on("click", function () {
                    console.log("You want to increase");
                });

            // Trash in cart, with function to trash and save the result in LS.
            let cartItemTrash = $("<span>")
                .on("click", function () { 
                    cart.splice( index , 1 );
                    localStorage.setItem("cart", JSON.stringify(cart));                    
                    $(this).parents("#cartItem").remove();
                    
                    createCart();

                    $("#cart").popover('show');

                    // here is a problem: how to get the right position if wanting 
                    // to show the cart right after you threw an item away ? 
                    // Seems that the cart is not loaded completely and that it's position
                    // is not updated completely. See popover doc?
                    // https://popper.js.org/popper-documentation.html#Popper.scheduleUpdate
                    // $('#cart').popover('show');
                    // .ready() ??

                })
                .html("<i class='fas fa-trash-alt'></i>");

            cartItemQuantityContainer.append(cartItemDecrease);
            cartItemQuantityContainer.append(cartItemQuantity);
            cartItemQuantityContainer.append(cartItemIncrease);
            cartItemQuantityContainer.append(cartItemTrash);

            cartItemData.append(cartItemTitleAndPrice);
            cartItemData.append(cartItemQuantityContainer);

            let cartItemDataContainer = $("<div>")
                .addClass("col-7")
                .attr("id", "cartItemDataContainer")
                .append(cartItemData);

            let cartItemImg = $("<img>")
                .attr("src", value.img)
                .addClass("img-fluid")
                .attr("id", "cartItemImg")
                .attr("alt", value.description);

            cartItemImgContainer.append(cartItemImg);
            cartItem.append(cartItemImgContainer);
            cartItem.append(cartItemDataContainer);

            cartItemContainer.append(cartItem);
            cartMainContainer.append(cartItemContainer);
        });

        // cart body > cart "Place order" button
        let cartToCheckoutButtonContainer = $("<div>")
            .addClass("container pl-0 pr-0")
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
            .on("click", function () { location.href = "html/checkout.html" } )
            .html("Till Kassan");

        toCheckoutButton.appendTo(cartToCheckoutButtonCol);
        cartToCheckoutButtonCol.appendTo(cartToCheckoutButtonRow);
        cartToCheckoutButtonRow.appendTo(cartToCheckoutButtonContainer);
        cartToCheckoutButtonContainer.appendTo(cartMainContainer);

        // enable cart Popover
        $('#cart')
            .popover( { 
                placement: 'auto', 
                html: true, 
                container: 'body',
                title: cartTitleContainer,
                content: cartMainContainer
            });
        }

        console.log("createCart() ends");
   

}

// When adding to cart

function addToCart(event) {

    // sync with cart LS (necessary?)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length == 0) {
        // if there is nothing in the cart        
        console.log("there was nothing in the cart, lets add this product: ", event.data.added.title);

        cart.push(event.data.added);

        localStorage.setItem("cart", JSON.stringify(cart));
    
    } else {

        let foundProduct = false;

        $.each(cart, function(index, product) {
            
            if (product.id === event.data.added.id) {
                console.log("something similar!", product.title, product.quantity);
                product.quantity++;
                foundProduct = true;
            }

        });

        if (!foundProduct) {
                console.log("new product! we simply add it");
                cart.push(event.data.added);
                
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        
    }

    createCart();
    
    

}

function changeFooterIcon() {
    
    // Footer Start \\

    // Change Facebook Icon color when hover over img. 
    $('#imgfb').hover(
        function(){
            $(this).attr('src','img/002-facebook_color.png')
        },
        function(){
            $(this).attr('src','img/002-facebook_grey.png')
        });

    // Change Instagram Icon color when hover over img. 
    $('#imgig').hover(
        function(){
            $(this).attr('src','img/003-instagram_color.png')
        },
        function(){
            $(this).attr('src','img/003-instagram_grey.png')
        });

    // Change Twitter Icon color when hover over img. 
    $('#imgtwi').hover(
        function(){
            $(this).attr('src','img/005-twitter_color.png')
        },
        function(){
            $(this).attr('src','img/005-twitter_grey.png')
    });
    // Footer End \\
}