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
function getQuotes(key,page, searchType){

    let url = `${apiUrl}/quotes`;

    if(searchType === "anime"){
        url = `${apiUrl}/quotes/${searchType}?title=${key}&page=${page}`;
    }else if(searchType === "character"){
        url = `${apiUrl}/quotes/${searchType}?name=${key}&page=${page}`;
    }

    fetch(url,(response) => {

        showQuotes(response);
   
    });

}


// show quotes in DOM
function showQuotes(quotes){
    
    const list = document.querySelector('#quots-list');

    list.innerHTML = '';

    quotes.forEach(q => {
        
        const p = document.createElement('p');
        p.textContent = q.quote;
        p.classList.add('quote');

        const author = document.createElement('cite');
        author.innerHTML = `<strong>${q.character}</strong> from <strong>${q.anime}</strong>`;
        author.classList.add('author');

        const quote = document.createElement('div');
        quote.classList.add('quote-card');
        quote.appendChild(p);
        quote.appendChild(author);
        list.appendChild(quote);

    });
}


// search for quotes
const search = () => {
    const titleType = document.querySelector('#title-type').value;
    const title = document.querySelector('#title').value;

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

searchButton.addEventListener('click',(e) => {
    e.preventDefault();

    search();
});
// const cards_element = document.getElementById("qcards");
// const pagination_element = document.getElementById("pagination");
// let current_page = 1;
// let rows = 5;
// function DisplaytList (items ,wrapper,rows_per_page,page ){
//     wrapper.innerHTML="";
//     page--;

//     let loop_sart = rows_per_page =page;
//     let paginatedItems = items.slice(loop_sart,loop_sart
//         + rows_per_page);
//         console.log(paginatedItems);
//     for (let i = loop_sart; i < loop_sart+rows_per_page; i++){

//     }
// }
// DisplaytList( getQuotes ,cards_element , rows, current_page)