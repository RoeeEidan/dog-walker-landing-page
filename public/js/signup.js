

$('input')
    .focus(function () {
        $(this).attr('placeholder', ' ')
    })
    .blur(function () {
        $(this).attr('placeholder', 'Your email')
    })

function validateEmail() {
    email = $('input').val()
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}


$('.button').on('click', function (e) {
    e.preventDefault()

    if (!validateEmail()) {
        if ($(window).width() > 800)
            $('#err').css('opacity', 1)
        else
            $('input').css('border', '1px solid red')

        return
    }

    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbw2N0X2-GkZp_9k6FP5JPYQ1c3no8ItSXp9ipWv4UmA2CMoHeg/exec',
        method: "GET",
        dataType: "json",
        data: `${$('form').serialize()}`,
        success: () => $('.content').html('<h2>Thanks for signing up we will be in touch shortly<h2>')
    })

    const content = $('.content')
    content.height(content.outerHeight()).html('');
    (new Spinner()).spin(content[0])
})