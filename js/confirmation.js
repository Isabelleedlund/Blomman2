let cart= JSON.parse(localStorage.getItem("cart")) || [];

$(document).ready(function() { 

    changeFooterIcon()

min = 10000;

buyOrder = $.map(product => ({title: product.title, pricePerUnit: product.pricePerUnit}));
console.log(buyOrder);

        buyOrder = Math.floor(Math.random() * 10000) + min;
        localStorage.setItem(buyOrder, JSON.stringify(cart));
    
    $("#on").text(buyOrder);

});

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