$('input,textarea').attr('size',3);

// from http://www.mediacollege.com/internet/javascript/number/round.html
function roundNumber(number,decimals) {
  var newString;// The new rounded number
  decimals = Number(decimals);
  if (decimals < 1) {
    newString = (Math.round(number)).toString();
  } else {
    var numString = number.toString();
    if (numString.lastIndexOf(".") == -1) {// If there is no decimal point
      numString += ".";// give it one at the end
    }
    var cutoff = numString.lastIndexOf(".") + decimals;// The point at which to truncate the number
    var d1 = Number(numString.substring(cutoff,cutoff+1));// The value of the last decimal place that we'll end up with
    var d2 = Number(numString.substring(cutoff+1,cutoff+2));// The next decimal, after the last one we want
    if (d2 >= 5) {// Do we need to round up at all? If not, the string will just be truncated
      if (d1 == 9 && cutoff > 0) {// If the last digit is 9, find a new cutoff point
        while (cutoff > 0 && (d1 == 9 || isNaN(d1))) {
          if (d1 != ".") {
            cutoff -= 1;
            d1 = Number(numString.substring(cutoff,cutoff+1));
          } else {
            cutoff -= 1;
          }
        }
      }
      d1 += 1;
    }
    if (d1 == 10) {
      numString = numString.substring(0, numString.lastIndexOf("."));
      var roundedNum = Number(numString) + 1;
      newString = roundedNum.toString() + '.';
    } else {
      newString = numString.substring(0,cutoff) + d1.toString();
    }
  }
  if (newString.lastIndexOf(".") == -1) {// Do this again, to the new string
    newString += ".";
  }
  var decs = (newString.substring(newString.lastIndexOf(".")+1)).length;
  for(var i=0;i<decimals-decs;i++) newString += "0";
  //var newNumber = Number(newString);// make it a number if you like
  return newString; // Output the result to the form field (change for your purposes)
}
function update_price(itemRow) {
  var row;
  if($(itemRow).hasClass('item-row')){
    // if called directly
    row = $(itemRow)
  } else {
    // if called from blur
    row = $(this).parents('.item-row');
  }
    var precio = row.find('.cost').val();
    var price = row.find('.cost').val().replace("$","") * 0.16;
    
    price = roundNumber(price,2);
    isNaN(price) ? row.find('.price').html("N/A") : row.find('.price').val(price);
    
    var iva = parseFloat(precio) + parseFloat(price);
    iva = roundNumber(iva,2);
    isNaN(iva) ? row.find('.iva').html("N/A") : row.find('.iva').val(iva);

 //update_total();
      var precio_cotiza = parseFloat($('#cantidad_precio').val());
        $("input#precio_cotiza").val(parseFloat(precio_cotiza).toFixed(2));
    
    var cantidad_opc = 0;
        $('.opc').each(function(k,v) {
            cantidad_opc += parseFloat($(this).val() || 0);
        });
 
      $('#total_opcionales').val(cantidad_opc.toFixed(2));
      
      var cantidad_iva = 0;
  

         $('.iv').each(function(k,v) {
            cantidad_iva += parseFloat($(this).val() || 0);
        });
     //   console.log(cantidad_iva);

     $('#total_iva').val(cantidad_iva.toFixed(2));
    $('#total_total').val((precio_cotiza + cantidad_opc + cantidad_iva).toFixed(2));
    
}


function bind() {
  $("body").on('keyup', '.cost, .iva, .price, .iv, .opc', update_price);
}

$(document).ready(function() {

  $('input').click(function(){
    $(this).select();
  });
        


  bind();
    
});
							         

        $('#porcentaje').change(function() {
         		   var total_total = parseFloat($('#total_total').val());
            var porcentaje  	= parseFloat($('#porcentaje').val());
            var porcentaje2 = parseFloat($('#porcentaje2').val());
			            var fifty2      = parseFloat($("#fifty2").val());
            				//  console.log(fifty2);
         		   // iva = roundNumber(iva,2);
            $("#fifty").val((total_total * porcentaje).toFixed(2));
          
        		    var fifty       = parseFloat($("#fifty").val());
          
											            $("#porcentaje2").val(((1-porcentaje)*100).toFixed(0));
            			$("#fifty2").val(parseFloat(total_total - fifty).toFixed(2));
          
        });
