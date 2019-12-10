function ProductItem(t, p, img, d, id, q) {
    this.title = t;
    this.price = p;
    this.img = img;
    this.description = d;
    this.id = id;
    this.quantity = q;
}

let product1 = new ProductItem("Amaryllis", 79, "img/amaryllis.png", "Stora (18-19cm) rosa blommor blommor på korta stabila stjälkar.", 1, 0);
let product2 = new ProductItem("Ardisia", 249, "img/Ardisia.png", "De vackra bären som kommer i olika nivåer gör denna växt mycket dekorativ.", 2, 0);
let product3 = new ProductItem("Benjaminfikus", 399, "img/Benjaminfikus.png", "Benjaminfikus är en tät och buskig växt med blanka blad som finns i olika färger och storlekar beroende på sort.", 3, 0);
let product4 = new ProductItem("Rosa Fönsterazalea", 49, "img/Fonsterazalea_rosa.png", "Otroligt vacker växt som är uppskattad av många. De nya sorterna är lättskötta! ", 4, 0);
let product5 = new ProductItem("Fönsterazalea", 79, "img/Fonsterazalea.png", "Otroligt vacker växt som är uppskattad av många. De nya sorterna är lättskötta! ", 5, 0);
let product6 = new ProductItem("Förmakspalm", 399, "img/Formakspalm.png", "Fin, lite större krukväxt som är mycket tålig och kan bli gammal.", 6, 0);
let product7 = new ProductItem("Gullranka Liten", 59, "img/Gullranka_liten.png", "En klassisk växt som är både tålig och lättplacerad.", 7, 0);
let product8 = new ProductItem("Gullranka Stor", 79, "img/Gullranka.png", "En klassisk växt som är både tålig och lättplacerad.", 8, 0);
let product9 = new ProductItem("Julros", 199, "img/julros.png", "Njut av julrosen inne under vintern och plantera ut den till våren.", 9, 0);
let product10 = new ProductItem("Monstera", 2990, "img/monstera.png", "Mycket lättskött växt med stora, vackra, flikiga blad.", 10, 0);
let product11 = new ProductItem("Novemberkaktus", 59, "img/novemberkaktus.png", "Från Brasiliens djungel kommer denna växt som med sina fantastiska färger lyser upp i höstmörkret.", 11, 0);
let product12 = new ProductItem("Papuasköld", 199, "img/papuaskold.png", "Mörkt gröna blad med purpurfärgad undersida. Trivs på ljusa platser.", 12, 0);
let product13 = new ProductItem("Paraplyaralia", 79, "img/Paraplyaralia.png", "Mycket lättskött och tålig växt!", 13, 0);
let product14 = new ProductItem("Princettia", 49, "img/Princettia.png", "En kraftig och tålig växt med karamellrosa stjärnor och mörkt gröna blad.", 14, 0);
let product15 = new ProductItem("Rosenkalla", 149, "img/Rosenkalla.png", "Elegant växt med luftrenande egenskaper.", 15, 0);
let product16 = new ProductItem("Rumsgran", 179, "img/Rumsgran.png", "Lättskött liten barrväxt som sprider hemtrevlig stämning.", 16, 0);
let product17 = new ProductItem("Svärmorstunga", 129, "img/Svarmors_tunga.png", "Lättskött liten barrväxt som sprider hemtrevlig stämning.", 17, 0);
let product18 = new ProductItem("Vågbladskalatera", 79, "img/Vagbladskalatea.png", "Tät växt med fina blad som har vågiga kanter och rödlila undersida.", 18, 0);
let product19 = new ProductItem("Zamiakalla Raven", 279, "img/Zamiakalla.png", "En av de mest tåliga och lättskötta krukväxterna!", 20, 0);
let product20 = new ProductItem("Zebrasköld", 299, "img/Zebraskold.png", "Mörkt gröna blad med purpurfärgad undersida. Trivs på ljusa platser.", 20, 0);

// To show 8 products on site 
let products = [];
products.push(product1, product2, product3, products4, product5, product6, product7, product8);

// To show all 20 products on site 
// let products = [];
// products.push(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20);

let cart = JSON.parse(localStorage.getItem("cart")) || [];

$(document).ready(function() {

    createCart();

    printProducts();

});

// Cart
function createCart() {

    // get the actual value of LS cart if there is something
    if (localStorage.getItem("cart")) {
        let cart = JSON.parse(localStorage.getItem("cart"));
    }

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

    // check whether the LS cart is empty or not
    if (cart.length === 0) {
        
        // console.log(cart, "LS cart is empty");
        
        // create empty cart with a message
        $('#cart').popover( { 
            placement: 'bottom', 
            container: 'body',
            html: true,
            title: cartTitleContainer,
            content: "Din varukorg är tom."
        });

    } 
    else {
        
        // console.log("cart is not empty");    
        
        // create cart body      
        let cartContainer = $("<div>")
            .attr("id", "cartContainer");

        let cartItemContainer = $("<div>")
            .addClass("container pt-2 pb-2")
            .attr("id", "cartItemContainer");

        // cart body > cart items list
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
            cartContainer.append(cartItemContainer);
        });

        // cart body > cart "Place order" button
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
        cartToCheckoutButtonContainer.appendTo(cartContainer);

        // enable cart Popover
        $('#cart')
            .popover( { 
                placement: 'bottom', 
                html: true, 
                container: 'body',
                title: cartTitleContainer,
                content: cartContainer
            });

        }

};

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
    
};

function addToCart(event) {

    if (localStorage.getItem("cart")) {
        let cart = JSON.parse(localStorage.getItem("cart"));
    }

    cart.push(event.data.added);

    localStorage.setItem("cart", JSON.stringify(cart));
    createCart();

};

// Footer Start \\

// Change Facebook Icon color when hover over img. 
$('#imgfb').hover(
    function(){
        $(this).attr('src','../img/002-facebook_color.png')
    },
    function(){
        $(this).attr('src','../img/002-facebook_grey.png')
    });

// Change Instagram Icon color when hover over img. 
$('#imgig').hover(
    function(){
        $(this).attr('src','../img/003-instagram_color.png')
    },
    function(){
        $(this).attr('src','../img/003-instagram_grey.png')
    });

// Change Twitter Icon color when hover over img. 
$('#imgtwi').hover(
    function(){
        $(this).attr('src','../img/005-twitter_color.png')
    },
    function(){
        $(this).attr('src','../img/005-twitter_grey.png')
});
// Footer End \\