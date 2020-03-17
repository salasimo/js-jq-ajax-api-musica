$(document).ready(function(){

    var source = $("#card-template").html();
    var cardTemplate = Handlebars.compile(source);

    $(".filtro-genere").change(function(){
        var genereSelezionato = $(this).val();
        if (genereSelezionato == ""){
            $(".card").show();
        } else {
            $(".card").each(function () {
                if (genereSelezionato.toLowerCase() == $(this).data("genere").toLowerCase()){
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });



    $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        method: "GET",
        success: function(data){
            var albums = data.response;
            for (var i = 0; i < albums.length; i++) {
                var album = albums[i];
                var albumTemplate = {
                    coverUrl: album.poster,
                    album: album.title,
                    artista: album.author,
                    anno: album.year,
                    genere: album.genre
                }
                var card = cardTemplate(albumTemplate);
                $('.cards-container').append(card);
            }
        },
        error: function(){
            alert("Errore!");
        }
    })




}); // FINE DOCUMENT READY ==============
