// $(function() {
//   var turn = 0;
//
//   $('td').on('click', function() {
//
//     if (turn % 2 === 0) {
//       $(this).html('X');
//     } else {
//       $(this).html('O');
//     }
//
//     turn++;
//
//     // this.isTerminal = funtion() {
//     //   var B = this.board;
//     //
//     //   for(var i = 0; i )
//     // }
//
//
//   });
// });
//
$(function() {
  var turn = 0;

  $('.box').on('click', function() {

    if ($(this).hasClass('X') || $(this).hasClass('O')) {
      alert("Yikes! Wrong move. Try again.");
    }
    else {
      if (turn % 2 === 0) {
        $(this).html('X');
        $(this).addClass('X');
        $('.players-turn').text("Go Second Player!");
        noWinner('X');
        winCheck('X');
        turn++;
      }
      else {
        $(this).html('O');
        $(this).addClass('O');
        $('.players-turn').text("Your Turn First Player!");
        noWinner('O');
        winCheck('O');
        turn++;
      }
    }
  });

// var winConditions = [['.1', '.2', '.3'], ['.4', '.5', '.6'], ['.7', '.8', '.9'], ['.1', '.4', '.7'],
// ['.2', '.5', '.8'], ['.3', '.6', '.9'], ['.1', '.5', '.9'], ['.3', '.5', '.7']];


  function winCheck(check) {
    if ($('#1').hasClass(check) && $('#2').hasClass(check) && $('#3').hasClass(check)) {
      $('.game-result').fadeIn('start');
      $('.players-turn').text("WINNER! Yo,You're good at this!");
    }
    else if ($('#4').hasClass(check) && $('#5').hasClass(check) && $('#6').hasClass(check)) {
        $('.game-result').fadeIn('start');
        $('.players-turn').text("WINNER! Yo,You're good at this!");
    }
    else if ($('#7').hasClass(check) && $('#8').hasClass(check) && $('#9').hasClass(check)) {
        $('.game-result').fadeIn('start');
        $('.players-turn').text("WINNER! Yo,You're good at this!");
    }
    else if ($('#1').hasClass(check) && $('#4').hasClass(check) && $('#7').hasClass(check)) {
        $('.game-result').fadeIn('start');
        $('.players-turn').text("WINNER! Yo,You're good at this!");
    }
    else if ($('#2').hasClass(check) && $('#5').hasClass(check) && $('#8').hasClass(check)) {
        $('.game-result').fadeIn('start');
        $('.players-turn').text("WINNER! Yo,You're good at this!");
    }
    else if ($('#3').hasClass(check) && $('#6').hasClass(check) && $('#9').hasClass(check)) {
        $('.game-result').fadeIn('start');
        $('.players-turn').text("WINNER! Yo,You're good at this!");
    }
    else if ($('#1').hasClass(check) && $('#5').hasClass(check) && $('#9').hasClass(check)) {
        $('.game-result').fadeIn('start');
        $('.players-turn').text("WINNER! Yo,You're good at this!");
    }
    else if ($('#3').hasClass(check) && $('#5').hasClass(check) && $('#7').hasClass(check)) {
        $('.game-result').fadeIn('start');
        $('.players-turn').text("WINNER! Yo,You're good at this!");
    }
    else {

    }
  }

  function noWinner() {
    if (($('#1').hasClass('X') || $('#1').hasClass('O')) && ($('#2').hasClass('X') || $('#2').hasClass('O'))
     && ($('#3').hasClass('X') || $('#3').hasClass('O')) && ($('#4').hasClass('X') || $('#4').hasClass('O'))
     && ($('#5').hasClass('X') || $('#5').hasClass('O')) && ($('#6').hasClass('X') || $('#6').hasClass('O'))
     && ($('#7').hasClass('X') || $('#7').hasClass('O')) && ($('#8').hasClass('X') || $('#8').hasClass('O'))
     && ($('#9').hasClass('X') || $('#9').hasClass('O'))) {
      $('.game-result').fadeIn('start');
      $('.players-turn').text("Looks like we have a tie! We need a winner! Play again!");
    }
  }

  $('button').on('click', function resetGame() {
    var turn = 0;
    $('.game-result').fadeOut('start');
    $('.box').removeClass('X');
    $('.box').removeClass('O');
    $('.box').html('');
  });
});

//
// $(function() {
//   var turn = 0;
//
//   $('td').on('click', function() {
//
//     if ($(this).hasClass('X') || $(this).hasClass('O')) {
//       alert("Yikes! Wrong move. Try again.");
//     }
//     else {
//       if (turn % 2 === 0) {
//         $(this).html('X');
//         $(this).addClass('X');
//         $('.players-turn').text("Go Second Player!");
//         noWinner('X');
//         winCheck('X');
//         turn++;
//       }
//       else {
//         $(this).html('O');
//         $(this).addClass('O');
//         $('.players-turn').text("Your Turn First Player!");
//         noWinner('O');
//         winCheck('O');
//         turn++;
//       }
//     }
//   });
//
// // var winConditions = [['.1', '.2', '.3'], ['.4', '.5', '.6'], ['.7', '.8', '.9'], ['.1', '.4', '.7'],
// // ['.2', '.5', '.8'], ['.3', '.6', '.9'], ['.1', '.5', '.9'], ['.3', '.5', '.7']];
//
//
//   function winCheck(check) {
//     if ($('.1').hasClass(check) && $('.2').hasClass(check) && $('.3').hasClass(check)) {
//       $('.game-result').fadeIn('start');
//       $('.players-turn').text("WINNER! Yo,You're good at this!");
//     }
//     else if ($('.4').hasClass(check) && $('.5').hasClass(check) && $('.6').hasClass(check)) {
//         $('.game-result').fadeIn('start');
//         $('.players-turn').text("WINNER! Yo,You're good at this!");
//     }
//     else if ($('.7').hasClass(check) && $('.8').hasClass(check) && $('.9').hasClass(check)) {
//         $('.game-result').fadeIn('start');
//         $('.players-turn').text("WINNER! Yo,You're good at this!");
//     }
//     else if ($('.1').hasClass(check) && $('.4').hasClass(check) && $('.7').hasClass(check)) {
//         $('.game-result').fadeIn('start');
//         $('.players-turn').text("WINNER! Yo,You're good at this!");
//     }
//     else if ($('.2').hasClass(check) && $('.5').hasClass(check) && $('.8').hasClass(check)) {
//         $('.game-result').fadeIn('start');
//         $('.players-turn').text("WINNER! Yo,You're good at this!");
//     }
//     else if ($('.3').hasClass(check) && $('.6').hasClass(check) && $('.9').hasClass(check)) {
//         $('.game-result').fadeIn('start');
//         $('.players-turn').text("WINNER! Yo,You're good at this!");
//     }
//     else if ($('.1').hasClass(check) && $('.5').hasClass(check) && $('.9').hasClass(check)) {
//         $('.game-result').fadeIn('start');
//         $('.players-turn').text("WINNER! Yo,You're good at this!");
//     }
//     else if ($('.3').hasClass(check) && $('.5').hasClass(check) && $('.7').hasClass(check)) {
//         $('.game-result').fadeIn('start');
//         $('.players-turn').text("WINNER! Yo,You're good at this!");
//     }
//     else {
//
//     }
//   }
//
//   function noWinner() {
//     if (($('.1').hasClass('X') || $('.1').hasClass('O')) && ($('.2').hasClass('X') || $('.2').hasClass('O'))
//      && ($('.3').hasClass('X') || $('.3').hasClass('O')) && ($('.4').hasClass('X') || $('.4').hasClass('O'))
//      && ($('.5').hasClass('X') || $('.5').hasClass('O')) && ($('.6').hasClass('X') || $('.6').hasClass('O'))
//      && ($('.7').hasClass('X') || $('.7').hasClass('O')) && ($('.8').hasClass('X') || $('.8').hasClass('O'))
//      && ($('.9').hasClass('X') || $('.9').hasClass('O'))) {
//       $('.game-result').fadeIn('start');
//       $('.players-turn').text("Looks like we have a tie! We need a winner! Play again!");
//     }
//   }
//
//   $('button').on('click', function resetGame() {
//     var turn = 0;
//     $('.game-result').fadeOut('start');
//     $('td').removeClass('X');
//     $('td').removeClass('O');
//     $('td').html('');
//   });
// });
