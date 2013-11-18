$(document).ready(function () {
    $('.newPatientBtn').click(function () {
        if (confirm("Are you sure you want to reset the fields?")) {
            window.location = "/triage";
        }
        else {
            return;
        }

    });

    $('#femaleBtn').change(function () {
        if ($('#pregnantWrap').hasClass('hidden')) {
            $('#pregnantWrap').removeClass('hidden');
        }
    });
    $('#maleBtn').change(function () {
        if (!$('#pregnantWrap').hasClass('hidden')) {
            $('#pregnantWrap').addClass('hidden');
        }
        if ($('#yesPregnantBtn').is(':checked')) {
            $('#yesPregnantBtn').prop('checked', false);
            $('#yesPregnantBtn').parent().removeClass('active');
        }
        if (!$('#weeksWrap').hasClass('hidden')) {
            $('#weeksWrap').addClass('hidden');
        }
    });

    $('#yesPregnantBtn').change(function () {
        $('#weeksWrap').removeClass('hidden');
        $('#boolPregnant').val(true);
    });

    $('#noPregnantBtn').change(function () {
        $('#weeksWrap').addClass('hidden');
        $('#boolPregnant').val(false);
    });

    $(document).ready(function () {
        $('.datepicker-age').datepicker({
            format: "yyyy-mm-dd",
            autoclose: true
        });
    });


    $('#age').change(function (){
        $('#age').css('border', '');

        // birthdate not null calculate age in years
        if ($('#age').val() && isDate($('#age').val()) == true) {
            var birthString = $('#age').val();
            var birthDate = new Date(birthString);
            var ageInYears = ~~((Date.now() - birthDate)/(31557600000));
            console.log(ageInYears);
            // birthdate is not a date clear fields
            var nan = randomString(ageInYears);
            if (birthDate <= Date.now()) {
                $('#years').val(Math.floor(ageInYears));
            }
            else{
                $('#age').val('');
                $('#years').val('');
                $('#age').css('border-color', 'red');
                $('#age').attr('placeholder', 'Future dates are not allowed.');
            }

        }
        else if (isDate($('#age').val()) == false) {
            $('#age').val("");
            $('#years').val("");
            $('#age').css('border-color', 'red');
            $('#age').attr('placeholder', 'Enter a date: yyyy-mm-dd');
        }
        else if (!$('#age').val()) {
            $('#years').val('');
        }
    });

    $('#years').change(function () {
        $('#years').css('border', '');
        var checkyears = parseInt($('#years').val());
        // years in age not null calculate birthdate
        if ($('#years').val() && integerCheck(checkyears) == true) {
          //  var yrs = $('#years).val();
            //console.log(yrs);
            var birthDate = new Date();
            birthDate.setFullYear(birthDate.getFullYear() - checkyears);
            var birthString = birthDate.toYMD();
            var nan = randomString(birthDate);
            var checkDate = new Date();
            if (nan == false) {
                $('#age').val(birthString);
            }
        }
        else if ($('#years').val() && integerCheck(checkyears) == false) {
            $('#years').val('');
            $('#age').val('');
            $('#years').css('border-color', 'red');
            $('#years').attr('placeholder', 'Enter correct age in Years');
        }
        // age in years erased, clear birthdate field
        else if (!$('#years').val()) {
            $('#age').val('');
        }
    });
});

//BMI auto- calculator
window.setInterval(function () {
    if ($('#heightFeet').val() && $('#weight').val() && $('#heightInches').val()) {

        var weight_lbs = parseInt($('#weight').val());
        var height_in = parseInt($('#heightInches').val());
        var height_ft = parseInt($('#heightFeet').val());

        height_in = height_in + height_ft * 12;

        $('#bmi').val(Math.round((weight_lbs / (height_in * height_in)) * 703));

    }
}, 500);

// Format date object as yyyy-MM-dd
(function () {
    Date.prototype.toYMD = Date_toYMD;
    function Date_toYMD() {
        var year, month, day;
        year = String(this.getFullYear());
        month = String(this.getMonth() + 1);
        if (month.length == 1) {
            month = "0" + month;
        }
        day = String(this.getDate());
        if (day.length == 1) {
            day = "0" + day;
        }
        return year + "-" + month + "-" + day;
    }
})();

// reset border colors on input change
$('#firstName').change(function () {
    $('#firstName').css('border', '');
});

$('#lastName').change(function () {
    $('#lastName').css('border', '');
});

$('#city').change(function () {
    $('#city').css('border', '');
});

$('#respirations').change(function () {
    $('#respirations').css('border', '');
});

$('#bloodPressureSystolic').change(function () {
    $('#bloodPressureSystolic').css('border', '');
});

$('#bloodPressureDiastolic').change(function () {
    $('#bloodPressureDiastolic').css('border', '');
});

$('#heartRate').change(function () {
    $('#heartRate').css('border', '');
});

$('#oxygen').change(function () {
    $('#oxygen').css('border', '');
});

$('#temperature').change(function () {
    $('#temperature').css('border', '');
});

$('#weight').change(function () {
    $('#weight').css('border', '');
});

$('#heightFeet').change(function () {
    $('#heightFeet').css('border', '');
});

$('#heightInches').change(function () {
    $('#heightInches').css('border', '');
});

$('#weeksPregnant').change(function () {
    $('#weeksPregnant').css('border', '');
});

//BMI auto- calculator
window.setInterval(function () {
    if ($('#heightFeet').val() && $('#weight').val()) {

        var weight_lbs = parseInt($('#weight').val());
        var height_in = parseInt($('#heightInches').val());
        var height_ft = parseInt($('#heightFeet').val());

        if (!$('#heightInches').val()) {
            height_in = 0;
        }

        height_in = height_in + height_ft * 12;

        $('#bmi').val(Math.round((weight_lbs / (height_in * height_in)) * 703));

    }
}, 500);

