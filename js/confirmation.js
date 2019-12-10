$(document).ready(function() { 

min = 10000;
// max

// Generate a order Number when 
let buyOrder = localStorage.getItem('orderNumber', '');

    // if(buyOrder == null){
        buyOrder = Math.round(1) * (min + 3) + min;
        // buyOrder = Math.floor(Math.random() * 10000) +1;
        localStorage.setItem('orderNo', buyOrder);
    
    $("#on").text(buyOrder)
});



// function Range(begin, end) {
//     this.low = begin;
//     this.hi = end;
//     this.has = function(n) {
//        return this.low <= n <= this.hi;
//     }
//   }
  
//   // code example
//   var range = new Range(1,100);
//   var num = 5;
  
//   if (range.has(num)) {
//     alert("Number in range");
//   }


// let numbers = []

// for (let i = 1; i <= 100; i++) {
//     numbers.push(i)
//     console.log(numbers[i])
// }

// let orderNumber = {
//                 from: 10000,
//                 to: 99999
// };

// for(let i = 0; i < orderNumber.length; i++) { 
//     console.log(orderNumber[i]);
// }




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

// });