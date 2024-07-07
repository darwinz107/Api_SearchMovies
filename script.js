document.getElementById('search').addEventListener('click',buscarPelicula);
let api_key ='f5203282dd4adeec15901a27115cccd0';    
const urlBase = 'https://api.themoviedb.org/3/search/movie?'

const urlImage = 'https://image.tmdb.org/t/p/w300'

let putInformation = document.getElementById('information');
function buscarPelicula(){


let movieInfo = document.getElementById('entradaTexto').value;

putInformation.innerHTML="<p class='no'>Cargando...</p>";
fetch(`${urlBase}query=${movieInfo}&api_key=${api_key}`)
.then(response => response.json())
.then(response =>showData(response.results))
}

function showData(response){
console.log(response);
putInformation.innerHTML="";




if(response.length === 0){

putInformation.innerHTML="<p class='no'>We don't have found a movie...</p>";

return
}
 
response.forEach(movies => {
   
let miDiv = document.createElement('div')
miDiv.classList.add('movies')

let title = document.createElement('h2')
title.textContent = movies.title;

let releaseDate = document.createElement('p')
releaseDate.textContent = 'La fecha de lanzamiento fue: ' + movies.release_date;

releaseDate.classList.add('release')
let overview = document.createElement('p')
overview.textContent = movies.overview;

let posterPath = urlImage + movies.poster_path
let posterImg = document.createElement('img')
posterImg.src = posterPath;


miDiv.appendChild(posterImg);
miDiv.appendChild(title);
miDiv.appendChild(releaseDate);

miDiv.appendChild(overview);


putInformation.appendChild(miDiv);

});


// const Name = response.results[2].title;
// const content = response.results[2].overview;
// const image = response.results[2].poster_path;


// const movieTitle = document.createElement('h2')
// movieTitle.textContent = Name;

// const movieContent = document.createElement('p')
// movieContent.textContent = content;
// const imageFinal = urlImage +  image;
// const movieImage = document.createElement('img')
// movieImage.src = imageFinal;


// putInformation.appendChild(movieTitle);
// putInformation.appendChild(movieContent);
// putInformation.appendChild(movieImage);



}