let cart = JSON.parse(localStorage.getItem("cart")) || [];

$(document).ready(function() {
    printOrder();
    $("#submitFormButton").on("click", submitForm());

    changeFooterIcon()
});


function printOrder(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    $("#orderRow").remove();

    let orderRow = $("<div>")
        .addClass("row")
        .attr("id", "orderRow")
        .appendTo(orderctn);

    $.each(cart, function(i, product) {

        // Append to prodRow

        let prodRow = $("<div>")
            .addClass("col-12 d-flex no-gutters")
            .attr("id", "prodRow")
            .appendTo(orderRow);

        let imgContainer = $("<div>")
            .addClass("col-3")
            .attr("id", "imgContainer")
            .appendTo(prodRow);

        // Append to above div imgContainer 

        let orderImg = $("<img>")
            .attr("src", "../" + product.img)
            .addClass("img-fluid")
            .appendTo(imgContainer);
        
        let prodTitle = $("<span>")
            .addClass("col-2")
            .html(product.title)
            .appendTo(prodRow);

        let quantityContainer = $("<div>")
            .addClass("col-2")
            .appendTo(prodRow);

        let prodPrice = $("<span>")
            .addClass("col-2")
            .attr("id", "prodPrice")
            .html(product.pricePerUnit + " SEK")
            .appendTo(prodRow);

        let totalPrice = $("<span>")
            .addClass("col-2")
            .attr("id", "totalPrice")
            .html(product.quantity * product.pricePerUnit + " SEK")
            .appendTo(prodRow);

        let deleteSpan = $("<span>")        
            .addClass("col-1")
            .attr("id", "deleteSpan")
            .appendTo(prodRow);


        // Append to qualityContainer

        let minusButton = $("<button>")
            .addClass("btn btn-primary")
            .attr("type", "button")
            .attr("id", "minusButton")
            .html("<i class='fa fa-minus'></i>")
            .on("click", { added: this }, function(event) {
                console.log("You want to decrease", event );
                if (event.data.added.quantity > 1) {

                    $.each(cart, function(index, product) {
                        if (product.id === event.data.added.id) {
                            product.quantity--;
                            product.price = product.pricePerUnit * product.quantity;
                        }
                    });

                    localStorage.setItem("cart", JSON.stringify(cart));
                    printOrder();

                } else {
                    console.log("you cant decrease from one!");
                }
            })
            .appendTo(quantityContainer);
        
        let quantitySpan = $("<span>")
            .attr("id", "quantitySpan")
            .html(product.quantity)
            .appendTo(quantityContainer);

        let plusButton = $("<button>")
            .addClass("btn btn-primary")
            .attr("type", "button")
            .attr("id", "plusButton")
            .html("<i class='fa fa-plus'></i>")
            .on("click", { added: this }, function (event) {
                console.log("You want to increase", event.data.added, event.data.added.quantity );
                
                // console.log(cart);

                $.each(cart, function(index, product) {
                    if (product.id === event.data.added.id) {
                        product.quantity++;
                        product.price = product.pricePerUnit * product.quantity;
                    }
                });

                localStorage.setItem("cart", JSON.stringify(cart));
                printOrder();

            })
            .appendTo(quantityContainer);

            // Append to deleteSpan
                        
        let deleteButton = $("<button>")
            .addClass("btn")
            .attr("type", "button")
            .attr("id", "deleteButton")
            .html("<i class='fas fa-trash-alt'></i>")
            .on("click", function(){
                console.log("You want to remove");
                cart.splice(i , 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                $(this).parents("#prodRow").remove();
                printOrder();
            })
            .appendTo(deleteSpan);

        });
        // let vatTotal = 
};




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


function changeFooterIcon() {
    
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
}