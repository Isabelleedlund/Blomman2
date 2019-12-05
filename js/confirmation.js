

$(document).ready(function() { 
  $("<div>").html(getRandomInt()).appendTo("#on"); 
}); 


function getRandomInt() {
    return Math.floor(Math.random(10000) * Math.floor(99999));

    let randomNumber 
}
  console.log(getRandomInt());


// let orderNumber = $("<span>")
//     .attr("id", "orderNumber")
//     .html("hej");

//     $("#on").append(orderNumber);   
//     console.log(orderNumber); 

  
// // $( "span" ).appendTo( "#orderNumber" );


// // $("<p>").html("hej").appendTo(".on");


// function getRandomInt() {
//     return Math.floor(Math.random(10000) * Math.floor(99999));
// }
//   console.log(getRandomInt());
