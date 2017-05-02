$(document).ready(function() {



  $('#searchButton').click(()=> {

    var searchOption = $('#searchOption').val();
    var url = 'http://localhost:5000/'+searchOption;

    $('#searchResult').empty();

    var searchString = $('#searchInput').val();
    console.log(String(searchString));
    url = url + '?q='  + String(searchString);
    console.log(url);

    axios.get(url)
      .then((response) => {
        if(response) {
          response.data.statuses.forEach((status)=> {
            // console.log(status.text);
            $('#searchResult').append(`<p>${status.text}</p>`);
          });
        } else {
          console.log('no data found');
        }
      }).catch((err) => {
        console.log(err);
      });
  });

  // USER TIMELINE IS UNFINISHED

  $('#userTL').click(()=> {

    var searchOption = $('#searchOption').val();
    var url = 'http://localhost:5000/'+searchOption;

    $('#searchResult').empty();

    var searchString = $('#searchInput').val();
    console.log(String(searchString));
    url = url + '?q='  + String(searchString);
    console.log(url);

    axios.get(url)
      .then((response) => {
        if(response) {
          response.data.statuses.forEach((status)=> {
            // console.log(status.text);
            $('#searchResult').append(`<p>${status.text}</p>`);
          });
        } else {
          console.log('no data found');
        }
      }).catch((err) => {
        console.log(err);
      });
  });


});
