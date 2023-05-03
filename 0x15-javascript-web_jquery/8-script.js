const url = 'https://swapi-api.alx-tools.com/api/films/?format=json';

$.getJSON(url, function (data) {
  $.each(data.results, function (i, movie) {
    $('UL#list_movies').append('<li>' + movie.title + '</li>');
  });
});
