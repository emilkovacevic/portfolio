// Bomberman game - made by Emil 

// ----------------   CODE   ---------------- //

let bombExplosionSound = new Audio('./Explosion.mp3');

const body = document.getElementById('body')
const startGameBtn = document.getElementById('start-game-btn')
const worldDisplay = document.getElementById('active-world-dispay')
const displayedWorldSpace = document.getElementById('world-container')
let head = document.getElementById('head')
let gameUi = document.getElementById('game-ui')
const timerDispay = document.getElementById('timer')

// game duration
let timer = 599
timerDispay.textContent = '10:00' 
gameUi.style.display = 'none'
worldDisplay.style.display = 'none'

//#region creted world templates

// 0 array index - walls => will fill the entire game world and kill as game time reaches 0
// 1 array index - destructiable-wall
// 2 array index - free path


let worldTemplate_lvl_One = [
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,2,2,2,2,2,1,1,2,1,1,1,1,1,2,2,2,2,2,2,2,2,2,1,0,
  0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,
  0,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,0,0,0,1,0,2,0,2,0,0,0,2,0,1,0,2,0,0,0,2,0,1,0,
  0,1,0,0,0,1,2,2,1,2,2,2,2,2,0,1,0,2,2,2,2,2,1,1,0,
  0,1,0,0,1,2,1,0,0,2,0,0,0,2,0,1,0,2,0,0,0,2,0,1,0,
  0,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
  0,1,0,1,0,1,0,0,0,0,0,1,0,2,0,1,0,0,0,0,1,0,0,1,0,
  0,1,0,2,2,1,2,2,2,2,2,2,1,2,1,1,1,2,2,2,2,1,1,1,0,
  0,1,0,1,0,1,0,0,0,0,0,1,0,2,0,1,0,0,0,0,2,0,0,1,0,
  0,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,2,2,1,1,2,1,1,1,0,
  0,1,0,1,2,1,0,0,0,1,0,0,1,0,0,0,0,2,0,0,1,0,0,1,0,
  0,1,2,2,2,1,2,1,1,1,1,1,1,1,2,0,2,2,1,1,1,1,1,1,0,
  0,1,2,1,0,1,2,0,0,1,0,0,1,0,0,0,0,2,0,0,0,0,0,1,0,
  0,1,1,1,1,1,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,2,1,0,
  0,1,0,1,0,0,2,0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,2,1,0,
  0,1,2,2,2,0,1,1,2,2,1,1,2,1,1,1,1,1,1,2,1,1,2,1,0,
  0,1,2,1,2,0,2,0,1,0,1,0,1,0,0,0,2,2,2,2,1,0,2,1,0,
  0,1,1,1,0,0,2,0,1,0,2,0,2,2,1,1,0,0,0,1,1,0,0,1,0,
  0,1,2,1,1,1,2,2,1,0,1,0,1,0,1,0,1,1,1,1,2,1,1,1,0,
  0,2,2,2,2,0,1,0,0,1,1,1,1,2,2,2,1,0,1,2,2,2,0,1,0,
  0,2,0,1,2,0,1,0,2,0,0,0,1,0,1,0,1,1,1,0,0,2,2,1,0,
  0,1,2,2,2,2,1,1,2,1,1,1,2,1,2,2,2,2,1,1,1,2,1,1,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
] 
let worldTemplate_lvl_Two = [
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
  0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,2,2,0,0,
  0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,2,1,0,2,0,0,
  0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,2,1,0,2,0,0,
  0,0,1,0,0,0,0,0,1,2,2,2,2,2,1,0,0,2,1,0,1,0,2,0,0,
  0,0,1,1,1,1,1,0,1,2,2,0,2,2,1,1,1,1,0,0,1,0,1,0,0,
  0,0,2,0,0,0,1,0,1,0,0,0,0,0,1,1,2,0,0,0,1,0,2,0,0,
  0,0,2,0,0,0,1,2,1,0,0,0,0,0,1,0,1,0,2,2,1,0,2,0,0,
  0,0,2,0,0,0,1,0,1,0,0,0,0,0,1,0,2,1,1,2,1,0,1,0,0,
  0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,2,1,2,1,0,2,0,0,
  0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,2,0,0,
  0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,1,0,0,
  0,0,1,1,1,1,1,1,1,0,1,1,1,2,0,1,1,1,1,1,1,0,2,0,0,
  0,0,1,1,1,1,1,1,1,0,1,2,2,1,0,1,1,1,1,1,1,0,2,0,0,
  0,0,1,0,2,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,
  0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,2,0,0,
  0,0,1,0,2,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,2,0,0,
  0,0,1,0,1,2,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,2,0,0,
  0,0,2,0,2,2,2,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,2,0,0,
  0,0,1,0,2,0,0,0,1,0,1,0,0,1,2,1,2,0,0,2,1,0,2,0,0,
  0,2,2,2,2,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,2,0,0,
  0,0,0,2,2,2,2,2,2,0,1,1,1,2,0,1,1,0,0,1,1,0,2,0,0,
  0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
] 
let worldTemplate_lvl_Tree = [
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,2,2,2,2,2,0,1,2,0,0,1,1,0,0,1,2,2,2,0,0,0,1,2,0,
  0,0,2,0,2,0,0,1,2,0,1,2,2,1,1,1,0,0,1,0,0,1,1,1,0,
  0,2,1,1,1,1,2,1,2,1,2,2,1,0,0,1,1,1,1,1,1,1,2,2,0,
  0,2,0,0,0,2,2,1,0,1,1,0,1,2,0,1,0,0,0,1,1,1,2,1,0,
  0,2,1,0,1,1,0,0,0,1,2,1,1,1,1,1,1,0,0,2,0,1,2,1,0,
  0,2,1,1,1,1,2,1,1,1,2,0,2,0,1,0,1,0,2,1,0,1,2,1,0,
  0,0,0,0,2,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,2,0,
  0,2,2,2,2,2,0,1,0,1,2,2,1,1,1,1,1,1,2,2,0,1,0,1,0,
  0,2,0,0,2,0,0,0,0,0,0,0,0,1,0,0,1,0,0,2,0,2,2,0,0,
  0,0,1,2,1,1,2,1,1,1,2,1,2,1,2,2,1,1,1,1,0,1,2,2,0,
  0,2,2,2,2,2,2,0,0,1,2,0,0,1,0,0,1,0,0,1,0,1,0,2,0,
  0,2,1,1,2,1,2,2,2,1,2,1,2,2,1,2,2,2,1,1,2,1,1,2,0,
  0,2,1,1,1,1,2,0,0,1,2,0,0,1,0,0,0,1,2,0,1,0,2,0,0,
  0,0,0,0,2,0,1,0,0,0,0,0,0,1,1,1,1,2,1,0,1,0,2,0,0,
  0,2,1,2,2,2,2,1,0,2,2,2,2,2,2,1,0,1,2,1,1,1,0,1,0,
  0,2,0,0,2,0,0,2,1,0,0,2,0,1,2,1,0,1,2,0,1,0,0,0,0,
  0,0,1,2,2,1,2,1,0,0,0,1,0,1,0,1,2,1,2,0,2,2,1,1,0,
  0,1,2,0,0,1,2,0,0,2,1,2,2,1,1,1,1,1,2,1,1,0,0,1,0,
  0,1,2,2,2,1,2,1,1,2,0,0,1,0,0,0,2,2,2,0,1,1,1,1,0,
  0,1,1,1,1,1,2,0,1,2,1,1,1,2,1,0,0,1,0,0,1,0,0,1,0,
  0,2,0,0,2,0,0,0,1,0,0,1,0,1,1,1,1,2,2,2,1,0,1,2,0,
  0,2,2,2,2,2,2,2,2,1,1,1,1,1,1,0,0,1,0,2,1,2,1,1,0,
  0,1,1,1,1,1,2,0,1,0,2,2,2,2,2,2,2,2,2,2,1,0,1,1,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
] 

//#endregion

startGameBtn.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.add('layout-x')
    choseWorld();
    head.style.display = 'none'
    startGameBtn.removeEventListener("click", choseWorld);
    startGameBtn.style.display = "none";
    gameUi.style.display = 'block'
  });
  
let activeWorld = 0;
const world_width = 25; // world size is 25 x 25 === 625 squares
  
// World Template picker / handler
let worlds = [
    worldTemplate_lvl_One,
    worldTemplate_lvl_Two,
    worldTemplate_lvl_Tree
];
  
// player object
 let player = {
    playerClassName: 'player',
    playerPosition_1: 526,
    possible_directions: [-1, world_width, 1, -world_width],
    bombSpawnCount_1: 1,  
    p_bombBlastSize_1: 1,
}
let {playerClassName, playerPosition_1, possible_directions, bombSpawnCount_1, p_bombBlastSize_1, isImortal} = player
    
// player object
 let player_2 = {
    playerClassName_2: 'player-two',
    playerPosition_2: 30,
    bombSpawnCount_2: 1,  
    p_bombBlastSize_2: 1,
}
let {playerClassName_2 ,playerPosition_2, bombSpawnCount_2, p_bombBlastSize_2, isImortal_2} = player_2
    
// GAME ENGINE init
function choseWorld() {
  activeWorld = Math.floor(Math.random() * worlds.length);
//  activeWorld = 0; /// delete this after building other worlds
  gameLoader();
}
// active world which changes based on the game engine
let worldDynamicsArray = []; 
  
function gameLoader() {
  worldGenerator();
  setInterval(setTimer, 1000);
}
let setTimer = () =>{
  let fixTimeMinute = Math.floor( timer / 60)
  let fixTimeSecond = (timer % 60) 
    timerDispay.textContent = fixTimeMinute + ":" + fixTimeSecond
    timer--
    if(timer === 0){
      document.getElementById('winner').textContent = 'Its a Draw'  
    gameOver()
  }
}

// world generator
////#region      
function worldGenerator() {
  worldDisplay.style.display = "block";
  worldDisplay.textContent = `world: ${activeWorld + 1}`;
  for (let i = 0; i < worlds[activeWorld].length; i++) {
    let worldSqare = document.createElement("div");
    worldDynamicsArray.push(worldSqare);
    displayedWorldSpace.appendChild(worldSqare);
      
  // add css styles to world
  if (worlds[activeWorld][i] === 0) {
  worldSqare.classList.add("wall");
  } else if (worlds[activeWorld][i] === 1) {
  worldSqare.classList.add("destructiable-wall");
  } else if (worlds[activeWorld][i] === 2) {
  worldSqare.classList.add("free-path");
  }
  }
  worldDynamicsArray[playerPosition_1].classList.add(playerClassName)
  worldDynamicsArray[playerPosition_2].classList.add(playerClassName_2)
}
////#endregion

// player controler
//#region 
function playerControler(e) {
  let p_movement
  let playerPosition
  let moveToDirection = possible_directions[0]
  let playerClass = ''
  let p_bombBlastSize
  
  if(
    e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40 || e.keyCode == 96){
      playerClass = playerClassName
      playerPosition = playerPosition_1
      p_bombBlastSize = p_bombBlastSize_1
      p_movement = e.keyCode
    }
    else if(e.keyCode === 65 || e.keyCode === 87 || e.keyCode === 68 || e.keyCode === 83 || e.keyCode === 66){ 
      playerPosition = playerPosition_2
      playerClass = playerClassName_2
      p_bombBlastSize = p_bombBlastSize_2
      p_movement = e.keyCode
  }
  switch (p_movement) {
    case 96:
      if(bombSpawnCount_1){ bombSpawnCount_1-- ; setBomb(playerClass, playerPosition, p_bombBlastSize,)}
    break

    case 66:  
      if(bombSpawnCount_2){ bombSpawnCount_2-- ; setBomb(playerClass, playerPosition, p_bombBlastSize,)}
    break;

    //             left   up      right   down
    // directions [-1, world_width, 1, -world_width],
    //move left
    case 37:
      moveToDirection = possible_directions[0]
      movePlayer(playerPosition, moveToDirection, playerClass)
    break
    case 65:
      moveToDirection = possible_directions[0]
      movePlayer(playerPosition, moveToDirection, playerClass)
    break
    //move up
    case 38:
      moveToDirection = possible_directions[3]
      movePlayer(playerPosition, moveToDirection, playerClass)
    break
    case 87:    
      moveToDirection = possible_directions[3]
      movePlayer(playerPosition, moveToDirection, playerClass)
    break
    //move right
    case 39:
      moveToDirection = possible_directions[2]
      movePlayer(playerPosition, moveToDirection, playerClass)
    break
    case 68:
      
      moveToDirection = possible_directions[2]
      movePlayer(playerPosition, moveToDirection, playerClass)
    break
    //move down
    case 40:
      moveToDirection = possible_directions[1]
      movePlayer(playerPosition, moveToDirection, playerClass)
    break
    case 83:
      
      moveToDirection = possible_directions[1]
      movePlayer(playerPosition, moveToDirection, playerClass)
    break
    default:
      console.log('wrong input')
  }
}
document.addEventListener("keyup", playerControler);

function movePlayer(playerPosition, moveToDirection, playerClass){
if(
  !worldDynamicsArray[playerPosition + moveToDirection].classList.contains("bomb") &&
  !worldDynamicsArray[playerPosition + moveToDirection].classList.contains("wall") &&
  !worldDynamicsArray[playerPosition + moveToDirection].classList.contains("destructiable-wall")
  && playerPosition > 0){
    if(worldDynamicsArray[playerPosition + moveToDirection].classList.contains("new-bomb")){
      worldDynamicsArray[playerPosition + moveToDirection].classList.remove("new-bomb")
      worldDynamicsArray[playerPosition + moveToDirection].classList.add("free-path")
      if(playerClass === 'player'){
        bombSpawnCount_1++
        console.log(bombSpawnCount_1)
      }
      else {
        bombSpawnCount_2++
        console.log(bombSpawnCount_2)
      }
    }
    else if(worldDynamicsArray[playerPosition + moveToDirection].classList.contains("bomb-upgrade")){
      worldDynamicsArray[playerPosition + moveToDirection].classList.remove("bomb-upgrade")
      worldDynamicsArray[playerPosition + moveToDirection].classList.add("free-path")
      if(playerClass === 'player'){
        p_bombBlastSize_1++
      }
      else {
          p_bombBlastSize_2++
        }
    }
    worldDynamicsArray[playerPosition].classList.remove(playerClass);
    playerPosition += moveToDirection
    if(playerClass === 'player'){
      playerPosition_1 = playerPosition
    }else{
      playerPosition_2 = playerPosition
    }
    worldDynamicsArray[playerPosition].classList.add(playerClass);
  }
}
//#endregion    

class Bomb {
  constructor(bombPosition, bombBlastSize, bombExplosion, bombTimeout, clearBomb, createPath){
    this.bombPosition = bombPosition
    this.bombBlastSize = bombBlastSize
    this.bombExplosion = bombExplosion
    this.bombTimeout = bombTimeout  //timelapse
    this.clearBomb = clearBomb   //timelapse
    this.createPath = createPath   //timelapse
  }
}

let bombBlastDirections =  [-1, world_width, 1, -world_width] 
function setBomb(playerClass, bombpos, p_bombBlastSize){
  let newBomb = new Bomb (bombpos, p_bombBlastSize, [], 2000, 600, 850)
  worldDynamicsArray[newBomb.bombPosition].classList.add("bomb");
  setTimeout(() => {
      bombExplosionSound.play()
      worldDynamicsArray[newBomb.bombPosition].classList.remove("bomb");
      worldDynamicsArray[newBomb.bombPosition].classList.add('bomb-blast')
      for(let j = 0; j < bombBlastDirections.length; j++)
      for(let i = 0; i<newBomb.bombBlastSize + 1; i++){
        if(worldDynamicsArray[newBomb.bombPosition + bombBlastDirections[j] * i].classList.contains("player")||
        worldDynamicsArray[newBomb.bombPosition + bombBlastDirections[j] * i].classList.contains("player-two")){
          worldDynamicsArray[newBomb.bombPosition + bombBlastDirections[j] * i].classList.remove(playerClass)
          worldDynamicsArray[newBomb.bombPosition + bombBlastDirections[j] * i].classList.add('dead-player')
          if(playerClass === "player"){
            document.getElementById('winner').textContent = 'Player 2 Won The Game'
          }else{document.getElementById('winner').textContent = 'Player 1 Won The Game'}
          gameOver()
        }
        if(!worldDynamicsArray[newBomb.bombPosition + bombBlastDirections[j] * i].classList.contains('wall')){
          if(worldDynamicsArray[newBomb.bombPosition + bombBlastDirections[j] * i].classList.contains('destructiable-wall')){
            worldDynamicsArray[newBomb.bombPosition + bombBlastDirections[j] * i].classList.remove('destructiable-wall')
            worldDynamicsArray[newBomb.bombPosition + bombBlastDirections[j] * i].classList.add('new-path')
            setTimeout(() => {
              worldDynamicsArray[newBomb.bombPosition + bombBlastDirections[j] * i].classList.remove('new-path')
              let spawnPowerUp = Math.floor(Math.random() * 10)
              if(spawnPowerUp > 5){
                if(spawnPowerUp > 7 ){
                  worldDynamicsArray[newBomb.bombPosition + bombBlastDirections[j] * i].classList.add('bomb-upgrade')
                }
                else {
                  worldDynamicsArray[newBomb.bombPosition + bombBlastDirections[j] * i].classList.add('new-bomb')  
                }
              }
              else{
                worldDynamicsArray[newBomb.bombPosition + bombBlastDirections[j] * i].classList.add('free-path')
              }
            }, newBomb.createPath);
            break
          }
          newBomb.bombExplosion.push(newBomb.bombPosition + bombBlastDirections[j] * i)
          newBomb.bombExplosion.forEach(exp => {
                worldDynamicsArray[exp].classList.add('bomb-blast')
                setTimeout(() => {
                  worldDynamicsArray[newBomb.bombPosition].classList.remove('bomb-blast')
                  newBomb.bombExplosion.forEach(exp => {
                    worldDynamicsArray[exp].classList.remove('bomb-blast')
                    newBomb.bombExplosion = []
                  });
                }, newBomb.clearBomb);
            }
          );
        }
        else if(worldDynamicsArray[newBomb.bombPosition + bombBlastDirections[j] * i].classList.contains('wall')){
          break
        }
        else{
          gameOver()
          // add UI something went wrong
          break
        }
      }
    if(playerClass === 'player'){
      bombSpawnCount_1++
    }else {
      bombSpawnCount_2++
    }
  },newBomb.bombTimeout)
}
//#endregion

function gameOver(){
  worldDisplay.textContent = 'GAME OVER'
  timerDispay.classList.add('hidden')
  document.removeEventListener("keyup", playerControler);
  worldDynamicsArray.forEach(div =>{
  })
  setTimeout(reloadGame, 10000)
  
  // add UI elements
}
const reloadGame = ()=>{
  window.reload();
}
