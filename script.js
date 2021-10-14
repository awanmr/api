$('button').on('click', function () {
    searchMovie();
});

$('input').on('keyup', function (e) {
    if (e.keyCode == 13) {
        searchMovie();
    }
});

function searchMovie() {
    let search = $('input').val();
    $.ajax({
        url: 'http://www.omdbapi.com/',
        dataType: 'json',
        data: {
            apikey: '88136e0',
            s: search
        },
        success: function (res) {
            if (res.Response === 'False') {
                $('.movie').html(`<div class="col">
                                    <h2 class="text-center">${res.Error}</h2>
                                  </div>`);
            } else {
                let html = '';
                res.Search.forEach(e => {
                    html += `<div class="col-md-3">
                                <div class="card mb-3">
                                    <img class="card-img-top" src="${e.Poster}">
                                    <div class="card-body">
                                        <p class="card-text">${e.Title}</p>
                                    </div>
                                </div>
                            </div>`
                });
                $('.movie').html(html);
            }
            console.log(res);
        }
    })
}