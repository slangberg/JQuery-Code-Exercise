var order_data = {
  subtotal:0,
  basket_total:0,
  vat_total:0,
  item_list: {}
}

var vat_rate = 20;
var cart_emtpy = true;


$(document).ready(function(){
  $('.basket-item').each(function() {
    $(this).basketItem();
  });

  $("#buy_btn").on('click', function(event) {
    if(order_data.basket_total == 0){
      event.preventDefault();
    }

    else{
      alert( JSON.stringify(order_data));
      $.post( "site/order-submit", { order_data: order_data } );
    }
    
  });

  $(this).on( "updateCart", function( event, data, action ) {

      if(action == "remove") {
        delete order_data.item_list[data.id];
      }

      else {
        order_data.item_list[data.id] = data;
      }
    
      var subtotal = 0;
      $.each( order_data.item_list, function( key, value ) {
        subtotal+=value.total
      });

      subtotal = parseFloat(subtotal.toFixed(2));
      var tax = subtotal * (vat_rate / 100);
      tax = parseFloat(tax.toFixed(2));
      total = subtotal + tax;
      total = parseFloat(total).toFixed(2);

      order_data.subtotal = subtotal;
      order_data.vat_total = tax;
      order_data.basket_total = total;

      $('.js-subtotal').text(subtotal);
      $('.js-vat-total').text(tax);
      $('.js-basket-total').text(total);


     if(total == 0){
        $("#buy_btn").addClass('disabled');
      }

      else {
        $("#buy_btn").removeClass('disabled');
      }
  });

});




