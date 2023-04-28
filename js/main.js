$(document).ready(function () {
    $('.currency').click(function (e) {
        e.preventDefault();
        var selected = $(this).html();
        $('.dropdown-toggle.from').html(selected);
    });
});

$(document).ready(function () {
    $('.currencyto').click(function (e) {
        e.preventDefault();
        var selected = $(this).html();
        $('.dropdown-toggle.to').html(selected);
    });
});

function myFunction() {
    window.open("/html/InternetBanking.html");
}

$('#night-theme').click(function () {
    $('#display_advance').toggle('100');
    $("i", this).toggleClass("bi bi-moon-stars bi bi-brightness-high");

});

$(document).ready(function () {
    $("#night-theme").click(function () {
        $("#night-theme").css("background-color", "white");
        $("#night-theme").css("color", "black");

        $("body,header").css("background-color", "black");
        $("body,b,a,.cl").css("color", "white");
        $(".bc").css("background-color", "#1A1A1A");
        $("#Valyuta-calculator,.bc2").css("background-color", "#313131");
        $("#input,#input2").css("background-color", "#464646");
    });
});


let ferdibtn = document.querySelector('#button-ferdi')
let biznesbtn = document.querySelector('#button-biznes')
biznesbtn.onclick= function(){
biznesbtn.classList.add('change');
ferdibtn.classList.add('default');
biznesbtn.classList.remove('default')
}
ferdibtn.onclick = function(){
    ferdibtn.classList.remove('default');
    biznesbtn.classList.add('default');
  
}

