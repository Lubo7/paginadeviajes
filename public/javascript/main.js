$(".viaje").click(function(){
  var id = $(this).attr("id");
  $(location).attr('href', 'http://localhost:3000/travels/'+id);
  });
