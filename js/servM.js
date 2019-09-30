// Oculta barra superior
$('header').slideUp('fast');

// monitorar botões de serviço
$(document).on('click', '.btnServ', function(){
    servHref = $(this).attr('href');
    servTipo = $(this).attr('data-serv');
    conf.set('servico', servTipo);
    $.get('html/agendar.html', function(htmlHome){
        $('main').html(htmlHome);
    });
});