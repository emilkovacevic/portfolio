const logIn = document.getElementById('log-in-btn')
logIn.addEventListener('click',() => {
    alert('Error! 😵 Can\'t Log In')
})

const createAccount = document.getElementById('create-account-btn')
createAccount.addEventListener('click',() => {
    alert('Aw snap! 😮 Can\'t Create A New Account')
})

const mobileNav = document.getElementById('mobile-nav')
mobileNav.addEventListener('click', ()=>{
    alert('Aw snap! 😮 The Nav Menu Is Empty')
})

const search = document.getElementById("search");
const moviesContainer = document.getElementById("movies-container");
let recfilms = []

let getFilms = async () => {
    const request = await fetch("./films.json");
    const films = await request.json();
    return films;
}

let grade = () =>{
    let ratingMSG = document.getElementById('rating-msg')
    let starWidget = document.querySelector('.star-widget')
    let ratedMsg = document.querySelector('#rated-msg')
    setTimeout(() => {
      ratingMSG.style.display = 'none'
    starWidget.style.display = 'none'
    ratedMsg.innerHTML = ' <p>Thanks for rating!</p>'
    }, 500);
}

let createCard = (film) => {
  const div = document.createElement("div");
  div.setAttribute("tabindex", "0");
  div.classList.add("card");
  div.innerHTML = `
    <img src='${film.Poster}' alt='${film.Title}'>
     <div class='hover-imdb-rating'>
        IMDb rating: ${film.imdbRating} <br>
        IMDb votes: ${film.imdbVotes} <br>
        <p>Genre: ${film.Genre}</p>
        <p>Languages: ${film.Language}</p>
    </div>
    `;
    div.addEventListener("click", () => {
    openModal(film);
  });
 moviesContainer.appendChild(div);
}

let openModal = (film) => {
  let div = document.createElement("div");
  div.classList.add('modal')
  div.id = "modal";
  div.innerHTML = `
        <div class='modal-inner-card'>
            <button id="closeModal" title="Close" class="modal-close">Close</button>
            <div class='modal-content'>
            <div class='modal-inner-header'>
                <h2>${film.Title}</h2>
            </div>
            <div class='modal-inner-main'>
        
              <h4>Plot</h4>
              <p>${film.Plot}
                <iframe class='iframe' src="${film.Video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </p>
              
            </div>
            <div class='modal-inner-aside'>
                    <div class='modal-inner-ratings'>
                        <h5>Movie Ratings</h5>
                        <div>
                        <p>IMDB: ${film.imdbRating}</p>
                        <p>${film.Ratings[1].Source}: ${film.Ratings[1].Value}</p>
                        <p>${film.Ratings[2].Source}: ${film.Ratings[2].Value}</p>
                    </div>
                </div>
                <div class='modal-inner-info'>
                    <hr>
                        <p>Released:<br>${film.Released}</p>
                        <hr>
                        <p>Genre: <br>${film.Genre}</p>
                        <hr>
                        <p>Director:  <br>${film.Director}</p>
                        <hr>
                        <p>Actors:  <br>${film.Actors}</p>
                </div>
            </div>
                <div class='modal-inner-footer container'>
                        <div id="rating-msg">
                            <p class="text">Rate This Movie</p>
                        </div>    
                        <div class="star-widget" id='gradeFilm'>
                            <input type="radio" name="rate" id="rate-5">
                            <label for="rate-5" class="fas fa-star"></label>
                            <input type="radio" name="rate" id="rate-4">
                            <label for="rate-4" class="fas fa-star"></label>
                            <input type="radio" name="rate" id="rate-3">
                            <label for="rate-3" class="fas fa-star"></label>
                            <input type="radio" name="rate" id="rate-2">
                            <label for="rate-2" class="fas fa-star"></label>
                            <input type="radio" name="rate" id="rate-1">
                            <label for="rate-1" class="fas fa-star"></label>
                        </div>
                        <p id="rated-msg">
                        </p>
                    </div>
                </div>
    `;
  document.body.appendChild(div);
    
  let gradeFilm = document.getElementById('gradeFilm')
  gradeFilm.addEventListener('click',grade)
  
  let closeModal = document.getElementById("closeModal")
  closeModal.addEventListener('click', () =>{
     modal.remove()
  })
  
  div.addEventListener('click', (e) => {
    if(e.target.id === 'modal'){
        div.remove()
        }
    })
}

getFilms()
.then((films) => {
  films.forEach((film) => {
    recfilms.push(film)
    createCard(film);
    });
  })
  .catch(() => {
    moviesContainer.style.display = "block";
    moviesContainer.innerHTML = `
    <h1 style='text-align: center;'>Oops!</h1>
    <h2 style='text-align: center;'>Can't Load Data</h2>
    `;
  });

search.addEventListener('keyup', function(e){
    moviesContainer.style.display = "grid"
    let value = e.target.value.toLowerCase()
    let searchedFilms = []
    for (let i = 0; i < recfilms.length; i++){
      let temp = recfilms[i].Title.toLowerCase()
      if(value === ''){
        moviesContainer.innerHTML = ``
        recfilms.forEach(film =>{
          createCard(film)
        })
      }
    else if (temp.includes(value)){
        searchedFilms.push(recfilms[i])
    }
    else{
        moviesContainer.style.display = "flex"
        moviesContainer.innerHTML = `
        <div class='card' style='display:flex; justify-content:center; align-items:center'>
        <h2 style='text-align: center; display:block'>Sorry, no more results</h2>
        </div>
        `
        }
    }
    for(const i of searchedFilms){
        createCard(i)
      }
    }
  )
