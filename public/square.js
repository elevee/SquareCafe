$(document).ready(function() {
  how_many_forms = $('form').length;

  console.log(how_many_forms);

  var drinkQuantity = 0;

  $('form').on('change', 'select', function(){  

    $('#drinks').text(drinkQuantity += 1);

    var total_cost = 0;

    $('select').each(function() {
      console.log(

        total_cost = total_cost + parseFloat($(this).find(':selected').attr('data-price'))
        );
    });  // Takes all select tags and acts on them in the following manner: finds all the chosen select tags (drinks), parsing out the price of each drink, 
         // making the data type a float, adding it to the total cost, and assigning that to the global total cost
    
    $('form').append($('.field').first().html());
    $('#cost').text(total_cost/100); // Replaced cost id text with our total cost text; converted to a decimal
  
  });  // when the 'form' changes, do this!!

  $(".button").click(function(event) {
      event.preventDefault();
      $("button").attr("disabled", "disabled");

      // $.post(
      //   "/shop", 
      //   $("#coffee_order").serialize(), 
      //   function() {
      //     alert("Order Submitted: Cya in 15!!! <3");
      // });

      $.ajax({
        type: "POST",
        url: "/shop",
        data: $('form').serialize(),
        success: function(response){
        alert(response)
        },
      });

  });

});

