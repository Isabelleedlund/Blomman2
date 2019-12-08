
window.onload = function() {

let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function printOrder(){
        $.each(cart, function(i, product) {
            let orderRow = $("<div>")
                        .addClass("col-12")
                        .addClass("d-flex")
                        .attr("id", "orderrow")
                        .appendTo("#orderctn");

            let orderimg = $("<img>")
                        .attr("src", "../"+product.img)
                        .addClass("col-2")
                        .appendTo("#orderrow");
            
            let prodTitle = $("<p>") 
                            .addClass("col-4")
                            .html(product.title)
                            .appendTo("#orderrow");

            let prodQuant = $("<p>")        
                                .addClass("col-2")
                                .html(1)
                                .appendTo("#orderrow");

            let prodPrice = $("<span>")
                            .addClass("col-2")
                            .html(product.price+" SEK") 
                            .appendTo("#orderrow");
                            
            let totPrice = $("<span>")
                            .addClass("col-2")
                            .html("subtotalen")
                            .appendTo("#orderrow");
            });
    };
    printOrder();
};

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
