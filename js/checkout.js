let quant=3;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

window.onload = function() {


    function printOrder(){
        $.each(cart, function(i, product) {
            let orderRow = $("<div>")
                            .addClass("row")
                            .attr("id", "orderrow" + i)
                            .appendTo("#orderctn");

            let prodRow = $("<div>")
                            .addClass("col-12")
                            .addClass("d-flex")
                            .attr("id", "productrow")
                            .appendTo("#orderrow" + i);

            let orderimg = $("<img>")
                            .attr("src", "../"+product.img)
                            .addClass("col-2")
                            .appendTo("#orderrow" + i);
            
            let prodTitle = $("<p>") 
                            .addClass("col-3")
                            .html(product.title)
                            .appendTo("#orderrow" + i);

            let prodQuant = $("<p>")        
                            .addClass("col-2")
                            .html(quant)
                            .appendTo("#orderrow" + i);

            let prodPrice = $("<span>")
                            .addClass("col-2")
                            .html(product.price+" SEK") 
                            .appendTo("#orderrow" + i);

            let totPrice = $("<span>")
                            .addClass("col-2")
                            .html(quant*product.price)
                            .appendTo("#orderrow" + i);

            let del = $("<p>")        
                            .addClass("col-1")
                            .appendTo("#orderrow" + i);
                            
            let deleteButton = $("<button>")
                            .addClass("btn btn-small btn-info")
                            .attr("id", "delbutton")
                            .attr("type", "button")
                            .html("<i class='fas fa-trash-alt'></i>")
                            .appendTo(del)
                            .click(function() {
                                deleteItem(i);
                            });
                         
            });     
    };
    printOrder();
};

function deleteItem (i) {
    $("#orderrow" + i).remove();
    cart.splice(i , 1);
    localStorage.setItem("cart", JSON.stringify(cart));
}



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






// $(document).ready(".buybtn").click(function() {
//     alert('button clicked');
// });




// let buyButton = $(".buybtn")
//                 .click(function(){
//                 alert ("handlar for .click() called.")
//             })

// /*
// /* Set rates + misc */
// var taxRate = 0.25;
// var shippingRate = 15.00; 
// var fadeTime = 300;


// /* Assign actions */
// $('.product-quantity input').change( function() {
//   updateQuantity(this);
// });

// $('.product-removal button').click( function() {
//   removeItem(this);
// });


// /* Recalculate cart */
// function recalculateCart()
// {
//   var subtotal = 0;
  
//   /* Sum up row totals */
//   $('.product').each(function () {
//     subtotal += parseFloat($(this).children('.product-line-price').text());
//   });
  
//   /* Calculate totals */
//   var tax = subtotal * taxRate;
//   var shipping = (subtotal > 0 ? shippingRate : 0);
//   var total = subtotal + tax + shipping;
  
//   /* Update totals display */
//   $('.totals-value').fadeOut(fadeTime, function() {
//     $('#cart-subtotal').html(subtotal.toFixed(2));
//     $('#cart-tax').html(tax.toFixed(2));
//     $('#cart-shipping').html(shipping.toFixed(2));
//     $('#cart-total').html(total.toFixed(2));
//     if(total == 0){
//       $('.checkout').fadeOut(fadeTime);
//     }else{
//       $('.checkout').fadeIn(fadeTime);
//     }
//     $('.totals-value').fadeIn(fadeTime);
//   });
// }


// /* Update quantity */
// function updateQuantity(quantityInput)
// {
//   /* Calculate line price */
//   var productRow = $(quantityInput).parent().parent();
//   var price = parseFloat(productRow.children('.product-price').text());
//   var quantity = $(quantityInput).val();
//   var linePrice = price * quantity;
  
//   /* Update line price display and recalc cart totals */
//   productRow.children('.product-line-price').each(function () {
//     $(this).fadeOut(fadeTime, function() {
//       $(this).text(linePrice.toFixed(2));
//       recalculateCart();
//       $(this).fadeIn(fadeTime);
//     });
//   });  
// }


// /* Remove item from cart */
// function removeItem(removeButton)
// {
//   /* Remove row from DOM and recalc cart total */
//   var productRow = $(removeButton).parent().parent();
//   productRow.slideUp(fadeTime, function() {
//     productRow.remove();
//     recalculateCart();
//   });
// }
