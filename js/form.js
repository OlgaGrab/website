$('form input[type="submit"]').click(sendForm);

function sendForm(e) {
    const form = $('form')[0];
    if (!form.checkValidity()) {
        return;
    }
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/olga1grabchak@gmail.com", 
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            topic: $('#topic').val(),
            coments: $('#textarea').val()
        },
       dataType: "json"
    })
    .done(function(){
        $('form')[0].reset();
        $('#msg').html('Дякую за звернення <br> Відповім при нагоді');
    })
    .fail(function(){
        $('#msg').html('Будь ласка, введіть текст');
    });
}