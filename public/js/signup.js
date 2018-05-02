$('.button').on('click', function (e) {
    e.preventDefault();

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