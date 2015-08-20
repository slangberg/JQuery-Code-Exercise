(function( $ ) {
  var methods = {
        init : function(data,els) {
          this['calculateCost'](data,els);
        },
        calculateCost : function(data,els) {
          data.total = parseFloat(data.number*parseFloat(data.price))
          data.total = parseFloat(data.total.toFixed(2));
          els.cost.text(data.total);
          $(document).trigger( "updateCart", [data,'update'] ); 
        },
        removeItem : function(data,els) { 
          $(document).trigger( "updateCart", [data,"remove"]);
          els.row.remove()
        },
        validate : function(input) { 
          if(!isNaN(input)){
            if(input <= 10 && input >= 0){
              return true;
            }

            else {
              return false;
            }
          }
          else{
            return false;
          }
        }
    };

  $.fn.basketItem = function() {
    var els = {
      row: $(this),
      amount: $(this).find('.picker-amount'),
      cost: $(this).find('.js-cost'),
      increasebtn: $(this).find('.amount-increase-btn'),
      decreasebtn: $(this).find('.amount-decrease-btn'),
      deletebtn: $(this).find('.delete-btn')
    }
  
    var data = {
      id: $(this).data('prodid'),
      price: parseFloat($(this).data('price').toFixed(2)),
      number: parseInt(els.amount.val())
    }

    els.amount.on('change keyup', function() {
      var inputval = $(this).val();
      if(inputval != data.number){
        if(methods['validate'](inputval)){
            data.number = inputval
            methods['calculateCost'](data,els)
        }

        else {
          inputval = $(this).val(data.number);  
        }  
      }
    })


   els.increasebtn.click(function(event) {
      if(methods['validate'](data.number) && data.number != 10) {
        data.number++;
        els.amount.val(data.number);
        methods['calculateCost'](data,els);
      }
    });

    els.decreasebtn.click(function(event) {
      if(methods['validate'](data.number) && data.number != 0) {
        data.number--;
        els.amount.val(data.number);
        methods['calculateCost'](data,els);
      }
    });

    els.deletebtn.click(function(event) {
       methods['removeItem'](data,els);
    });

    setTimeout(function() {
        methods['init'](data,els);
    },10);

    
    return this;
  };

}( jQuery ));
 