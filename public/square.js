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

  // $("#form").submit(function(){       //post attempt
  //   $.post(url, function(data) {
  //       $("#content").html(data);
  //   });
  });
  
});


// $.post("submit.php", { body: 'Will be ready in 10 minutes' }, function(response) {
//   // all done commenting
});
