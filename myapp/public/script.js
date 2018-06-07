$(function () {

    $.ajax({
        type: "GET",
        url: "http://localhost:3011/competence",
        success: function (datas) {


            datas.sort(function (a, b) {
                return b.niveau - a.niveau;
            });


            //première liste (ul)
            $('#list').html('<ul id="elementlist" class="list-group  border border-dark  p-5  mt-5"> </ul> ');

            $('#list2').html('<ul id="elementlist2" class="list-group  border border-dark  p-5  mt-5"> </ul> ');

            $.each(datas, function (index, data) {
                var niveau = data.niveau;
                var competence = data.competence;
// to do : améliorer le code pour pouvoir avoir toujour un tableau de 5
                if (competence.length <= 5) {

                    //première liste (les li)
                    $('#elementlist').append('<li class="mb-3 list-group-item text-uppercase" > <span class="font-weight-bold">'
                        + data.competence + "</span> </br>" + inserEtoile(data.niveau));
                } else {

                    // deuxieme liste (les li)
                    $('#elementlist2').append('<li class="mb-3 list-group-item text-uppercase" > <span class="font-weight-bold">'
                        + data.competence + "</span> </br>" + inserEtoile(data.niveau));
                }

                // fonction pour afficher les étoiles 
                function inserEtoile(niveau) {
                    var stars = "";
                    var couleur = "";
                    for (var i = 0; i < niveau; i++) {


                        if (niveau <= 2) {
                            couleur = "color-red";
                        } else if (niveau <= 4) {
                            couleur = "color-dgreen";
                        } else if (niveau <= 6) {
                            couleur = "color-lgreen";
                        }
                        var etoile = "<i class='fas fa-star " + couleur + "'></i>";
                        stars = stars + etoile;
                    }
                    console.log(stars)
                    return stars;


                }



            });

        }

    });


});