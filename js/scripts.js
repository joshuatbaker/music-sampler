$(document).ready(() => {

function hideAll(){
  $('#boxerdiv').hide();
  $('#highvioletdiv').hide();
  $('#troublewillfindmediv').hide();
  $('#sleepwellbeastdiv').hide();
}
hideAll();

$('.images').click(function() {

hideAll();

switch ($(this).attr("id")) {
  case "boxer":
    $('#boxerdiv').show();
    break;
  case "highviolet":
    $('#highvioletdiv').show();
    break;
  case "troublewillfindme":
      $('#troublewillfindmediv').show();
    break;
  case "sleepwellbeast":
        $('#sleepwellbeastdiv').show();
    break;
  }
  $('audio').each(function() {
      this.pause();
      this.currentTime = 0;
});


});
$('#info').hide();

$('#largeimage').click(function() {
  $('#info').slideToggle();
});

});
