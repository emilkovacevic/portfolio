const scrollButton = document.getElementById('scroll-to-top-btn')

let page = 1, pageStart = 0, pageEnd = 3 


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

scrollButton.addEventListener('click', ()=>{
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
})


function page1(){
  page = 1
  pageStart = 0
  pageEnd = 3
  loadCards();
}

function page2(){
  page = 2
  pageStart = 3
  pageEnd = 6
  loadCards();
}
function page3(){
  page = 3
  pageStart = 6
  pageEnd = 9
  loadCards();
}

const cards = document.getElementById('cards-container')
let data = []
const json = './data/data.json';
const loadCards = async () =>{
  data = []
  let jsonData = await fetch(json)
  data = await jsonData.json()
  RenderCards ()
}
function RenderCards (){
  let createCard = data.website.cards
  createCard = createCard.slice(pageStart,pageEnd)
  console.log(createCard)
  cards.innerHTML=''
  if(createCard.length === 0){
   return  cards.innerHTML = `<p>Sorry No Data Found</p>`
  }
  createCard.forEach(card => {
    cards.innerHTML += `
      <div class="card" style="max-width:500px;">
      <img src="${card.image}" class="card-img-top" alt="${card.imageAlt}">
      <div class="card-body">
        <h5 class="card-title">${card.title}</h5>
        <p class="card-text">${card.text}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Rooms: ${card.rooms}</li>
        <li class="list-group-item">Beds: ${card.beds}</li>
        <li class="list-group-item">Room Service: ${card.roomService}</li>
        <li class="list-group-item">Swimming pool: ${card.swimmingpool}</li>
      </ul>
      <div class="card-body">
        <p>Suite price per night: ${card.suitePrice}</p>
      </div>
      <div class="card-body">
        <a href="#" class="card-link">Read More</a>
        <a href="#" class="card-link">Book NOW</a>
      </div>
      </div>
`;


  });
}



loadCards()