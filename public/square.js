$(document).ready(function() {
  how_many_forms = $('form').length;

  console.log(how_many_forms);

  var coffee = 0;

  $('form').on('change', 'select', function(){


    $('#drinks').text(coffee += 1);

    var total_cost = 0;

    $('select').each(function() {
      console.log(

        total_cost = total_cost + parseFloat($(this).find(':selected').attr('data-price'))
        );
    });
    $('form').append($('.field').first().html());
    $('#cost').text(total_cost/100); // converted to decimal
  
  });

  $(".button").click(function(event) {
      event.preventDefault();
      $.post("/shop", $("#coffee_order").serialize(), function() {
        alert("Order Submitted: Cya in 15!!! <3")
      });
    });

});

