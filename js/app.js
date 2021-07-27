const apiUrl = "https://animechan.vercel.app/api";

const searchButton = document.querySelector('#search-button');
let currentPage = 1;

// fetch data from API
function fetch (url, callback) {
    var xhr = new XMLHttpRequest();
  
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        return callback(response);
      }else{
        console.log('error');
      }
    });
  
    xhr.open('GET', url);
    xhr.send();
}

// get quotes from API
function getQuotes(title,page, titleType){
    const url = `${apiUrl}/quotes/${titleType}?title=${title}&page=${page}`;

    fetch(url,(response) => {

        showQuotes(response);
   
    });

}


// show quotes in DOM
function showQuotes(quotes){
    console.log(quotes);

    // dom rendering
}


// search for quotes
const search = () => {
    const titleType = document.querySelector('#title-type');
    const title = document.querySelector('#title');

    getQuotes(title,currentPage,titleType);
}

// go to next page
function nextPage(){
    currentPage++;

    search();
}

// go to prevuis page
function previusPage(){
    if(currentPage !== 1){
        currentPage--;
    }

    search();
}

search();


// searchButton.addEventListener('click',search);