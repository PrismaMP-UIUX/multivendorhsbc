function cbuFunction(cbu) {
  $(cbu).bind('keyup', function(){
      cbuFunction()
  });
  var cbuFlag = false;
  function cbuFunction() {
    var cbuLength = $(cbu).val().length;


    $(".cbu-counter").attr('class', 'cbu-counter mg-b-20');

    if ( cbuLength >= 23 && cbuLength <= 25) {
      $(".cbu-counter").addClass("naranja");
      cbuFlag = false;
    };

    if ( cbuLength == 26) {
      $(".cbu-counter").addClass("verde");

      if(cbuFlag){
        $(".cbu-counter").addClass("pulse animated infinite");
      }
      cbuFlag = true;
    };

    //Character count
    $(".cbu-counter span").text(cbuLength);
  }
}



// Listen the input element masking it to format with pattern.
// VMasker(document.querySelector("#cbu")).maskPattern("999 9999 9 9999999999999 9");

// // Converts value to masked phone
// VMasker.toPattern(1099911111, "(99) 9999-9999"); // -> (10) 9991-1111
// // Converts value to masked date
// VMasker.toPattern(12122000, "99/99/9999"); // -> 12/12/2000
// // Converts value to masked document
// VMasker.toPattern(99911111101, "999.999.999-99"); // -> 999.111.111-01
// // Converts value to masked car plate
// VMasker.toPattern('ABC1234', "AAA-9999"); // -> ABC-1234
// // Converts value to masked vehicle identification
// VMasker.toPattern('9BGRD08X04G117974', "SS.SS.SSSSS.S.S.SSSSSS"); // -> 9B.GR.D08X0.4.G.117974

// // Pass in an optional placeholder option to represent remaining characters to be entered
// VMasker.toPattern('4', {pattern: "(999) 999-9999", placeholder: "x"}); // -> (4xx) xxx-xxxx
