let cart = JSON.parse(localStorage.getItem("cart")) || [];

function printOrder(){
    $.each(cart, function(i, product) {
        let orderRow = $("<div>")
                        .addClass("row")
                        .attr("id", "orderrow")
                        .appendTo("#orderctn");

        let prodRow = $("<div>")
                        .addClass("col-12")
                        .addClass("d-flex")
                        .attr("id", "productrow")
                        .appendTo("#orderrow");

        let orderimg = $("<img>")
                        .attr("src", "../"+product.img)
                        .addClass("col-2 p-2")
                        .appendTo("#orderrow");
        
        let prodTitle = $("<p>") 
                        .addClass("col-3 prodtitle pl-0 ")
                        .html(product.title)
                        .appendTo("#orderrow");

//        let prodQuant = $("<p>")        
//                      .addClass("col-2")
//                      .html(quant)
//                       .appendTo("#orderrow" + i);

        let quantityContainer = $("<div>")
                           .addClass("col-2 input-group plus-minus-input")
                           .appendTo("#orderrow");

        let InputGrMinBtn = $("<div>")
                            .addClass ("input-group-button")
                            .appendTo(quantityContainer);

        let quantMinBtn = $("<button>")
                          .addClass("btn btn-small")
                          .attr("type", "button")
                          .attr("data-quantity", "minus")
                          .attr("data-field", "quantity")
                          .html("<i class='fa fa-minus'></i>")
                          .appendTo(InputGrMinBtn);
        
        let quantitySpan  = $("<span>")
                          .attr("id", "quantitySpan")
                          .html(product.quantity)
                          .appendTo(quantityContainer);

        let InputGrPluBtn = $("<div>")
                            .addClass ("input-group-button")
                            .appendTo(quantityContainer);

        let quantPluBtn = $("<button>")
                          .addClass("btn btn-small")
                          .attr("type", "button")
                          .attr("data-quantity", "plus")
                          .attr("data-field", "quantity")
                          .html("<i class='fa fa-plus'></i>")
                          .appendTo(InputGrPluBtn);

        let prodPrice = $("<span>")
                        .addClass("col-2 pprice")
                        .html(product.price+" SEK") 
                        .appendTo("#orderrow");

        let totPrice = $("<span>")
                        .addClass("col-2 pprice")
                        .html(quant*product.price+" SEK")
                        .appendTo("#orderrow");

        let del = $("<p>")        
                    .addClass("col-1")
                    .attr("id", "delbtn")
                    .appendTo("#orderrow");
                        
        let deleteButton = $("<button>")
                            .addClass("btn btn-small m-0")
                            .attr("id", "delbutton")
                            .attr("type", "button")
                            .html("<i class='fas fa-trash-alt'></i>")
                            .appendTo(del)
                            .click(function() {
                                deleteItem(i);
                            });           
            });     
};

function deleteItem(i) {
    $("#orderrow" + i).remove();
    cart.splice(i , 1);
    localStorage.setItem("cart", JSON.stringify(cart));
}

function submitForm() {
    'use strict';
    
      // Get the forms we want to add validation styles to
      let forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      let validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
};



window.onload = function() {
    printOrder();
   $("#submitFormButton").on("click", submitForm());
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