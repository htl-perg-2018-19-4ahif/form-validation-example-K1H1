let errorCount = 0;

$('index.html').ready(function () {



  //Check if first- and lastname is empty
  $('#firstName').keypress(function () {
    if ($('#firstName').val() != '') {
      $('#firstNameMandatory').hide(1000);




    } else {
      $('#firstNameMandatory').show(1000);
    }
  });

  $('#lastName').keypress(function () {
    if ($('#lastName').val() != '') {
      $('#lastNameMandatory').hide(1000);



    } else {

      $('#lastNameMandatory').show(1000);
    }
  });


  // show mandatory text when email- field is empty and the checkbox is set
  $('#newsletter').click(function () {

    if ($('#newsletter').prop('checked')) {
      if ($('#email').val() == '') {
        $('#emailMandatory').show(1000);
      }
    } else {
      $('#emailMandatory').hide(1000);
    }

  });


  // Texteare is only visible when "How did you hear from us?" has the type 'other'
  $('#mediaChannelSelect').change(function () {
    if ($('#mediaChannelSelect').val() == 'Other') {
      $('#otherMediaChannel').show(1000);


    } else {
      $('#otherMediaChannel').hide(1000);
    }
  });

  //disable submit button when there are validation errors

  if ($('#submit').valid()) {
    $('#submit').prop('disabled', false);
  }
  else {
    $('#submit').prop('disabled', 'disabled');
  }








});

