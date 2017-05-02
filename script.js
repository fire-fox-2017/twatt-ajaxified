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

  $('#userTLButton').click(()=> {

    var url = 'http://localhost:5000/';

    $('#userTLResult').empty();

    var user = $('#userTLSearchInput').val();
    var maxStatAmount = 10;
    console.log(String(user));
    url = url + String(user) + '/' + maxStatAmount;
    console.log(url);

    axios.get(url)
      .then((response) => {
        if(response) {
          // console.log(response.data);
          response.data.forEach((status)=> {
            console.log(status.text);
            $('#userTLResult').append(`<p>${status.text}</p>`);
          });
        } else {
          console.log('no data found');
        }
      }).catch((err) => {
        console.log(err);
      });
  });


});
