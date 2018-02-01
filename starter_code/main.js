//Add five additional options to the dropdown menu: 'nyc', 'la', 'austin', 'sf' and 'sydney'

//The user's input is defined when the user clicks on an option from the dropdown menu

//If user input returns 'nyc'
  //Change the background image to 'nyc.jpg'
//Else if user input returns 'la'
  //Change the background image to 'la.jpg'
//Else if user input returns 'austin'
  //Change the background image to 'austin.jpg'
//Else if user input returns 'sf'
  //Change the background image to 'sf.jpg'
//Else if user input returns 'sydney'
  //Change the background image to 'sydney.jpg'

console.log('connected');
var cities = ['nyc', 'la', 'austin', 'sf', 'sydney'];
// $('#city-type').append('<option>' + cities[0] + '</option>');
// $('#city-type').append('<option>' + cities[1] + '</option>');
// $('#city-type').append('<option>' + cities[2] + '</option>');
// $('#city-type').append('<option>' + cities[3] + '</option>');
// $('#city-type').append('<option>' + cities[4] + '</option>');
cities.forEach(function(city) {
  $('#city-type').append('<option>' + city + '</option>');
})

$('#city-type').change(function(event) {
  event.preventDefault();
  var userInput = $('#city-type').val();
  if (userInput === cities[0]) {
    // $('body').css('background', 'url(images/nyc.jpg)');
    $('body').addClass('nyc');
  } else if (userInput === cities[1]) {
    $('body').addClass('la');
  } else if (userInput === cities[2]) {
    $('body').addClass('austin');
  } else if (userInput === cities[3]) {
    $('body').addClass('sf');
  } else if (userInput === cities[4]) {
    $('body').addClass('sydney');
  }
})
