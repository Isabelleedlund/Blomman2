function ProductItem(t, p, img, d, id, q) {
    this.title = t;
    this.price = p;
    this.img = img;
    this.description = d;
    this.id = id;
    this.quantity = q;
}

let products1 = new ProductItem("Amaryllis", 199, "img/Amaryllis.png", "Fusce id nisl sapien. Nam pulvinar nisl nisl, nec aliquam dolor porttitor ac. Suspendisse in risus sodales, iaculis massa vitae, dapibus arcu. Nam ullamcorper odio tellus, nec pretium nisi ornare non. Quisque venenatis at odio.", 1, 0);
let products2 = new ProductItem("Ardisia", 249, "img/Ardisia.png", "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi vitae. ", 2, 0);
let products3 = new ProductItem("Benjaminfikus", 399, "img/Benjaminfikus.png", "Phasellus in varius ex. Mauris a dapibus nibh, at malesuada.", 3, 0);
let products4 = new ProductItem("Rosa Fönsterazalea", 299, "img/Fonsterazalea_rosa.png", "Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie metus eget dui consectetur condimentum. Maecenas tempus pellentesque nisl id congue. Aenean at justo a tortor sodales ornare ac quis dui. Proin tempor dictum vestibulum. Maecenas aliquam dui sit amet elit accumsan, ac dapibus augue consequat. Aenean a feugiat elit. Integer a aliquam.", 4, 0);
let products5 = new ProductItem("Fönsterazalea", 399, "img/Fonsterazalea.png", "Integer rutrum, orci sed vehicula porttitor, odio sem eleifend risus, at euismod purus mi nec augue. Pellentesque vitae justo et tortor sagittis fringilla non eu massa. Curabitur ut odio congue, ullamcorper urna at, efficitur nulla. Nunc laoreet lorem dolor. Duis.", 5, 0);
let products6 = new ProductItem("Förmakspalm", 399, "img/Formakspalm.png", "Suspendisse at erat rhoncus, venenatis nisi lobortis, sagittis arcu. Aliquam sodales congue finibus. Aliquam erat volutpat. Maecenas faucibus malesuada ipsum, quis faucibus orci sagittis a. Phasellus sed vestibulum nisl, eu sodales tortor. Vivamus varius nulla velit, eget auctor est tempor vitae. Mauris ultricies gravida augue non blandit. Maecenas sed vestibulum leo. Morbi euismod ex ex, nec tempor odio dapibus vel.", 6, 0);

let products = [];
products.push(products1, products2, products3, products4, products5, products6);

// let products = [
//     {title: "Amaryllis", price: 199, img: "img/Amaryllis.png", description: "lorem"},
//     {title: "Ardisia", price: 249, img: "img/Ardisia.png", description: "lorem ipsum"},
//     {title: "Benjaminfikus", price: 399, img: "img/Benjaminfikus.png", description: "lorem ipsum"},
//     {title: "Rosa Fönsterazalea", price: 299, img: "img/Fonsterazalea_rosa.png", description: "lorem"},
//     {title: "Fönsterazalea", price: 249, img: "img/Fonsterazalea.png", description: "lorem"},
//     {title: "Förmakspalm", price: 399, img: "img/Formakspalm.png", description: "lorem ipsum"}
// ];

// let newProduct = {};

// let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cart = JSON.parse(localStorage.getItem("cart")) || localStorage.setItem("cart", JSON.stringify([]));

$(document).ready(function() {

    createCart();

    printProducts();

});

// Cart
function createCart() {

    // get the actual value of LS cart
    let cart = JSON.parse(localStorage.getItem("cart"));

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

    let cart = JSON.parse(localStorage.getItem("cart"));
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