// Тоглогчийн ээлжийн хадгалах хувьсагч 1-р тоглогч 0, 2-р тоглогч 1
var activePlayer = 0;

//Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//Тоглогчдийн ээлжин дээр цуглуулж байгаа оноог хадгалах увьсагч
var roundScore = 0;

//<div class="player-score" id="score-0">43</div>
//Программ эхэлхэд бэлтгье
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// Шоо шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
  //Шооны талыг хадгалах хувьсагч 1-6 утгатай
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //Шооны зураг гарж ирж байгаа
  diceDom.style.display = "block";
  //Буусан шооны тооны зураг гарж ирж байгаа хэсэг
  diceDom.src = "dice-" + diceNumber + ".png";
  //Буусан тоо 1 ээс ялгаатай бол идэвхитэй тоглогчийн оноог өөрчилнө
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    switchToNextPlayer();
  }
});
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (activePlayer === 0) {
    scores[0] = scores[0] + roundScore;
  } else {
    scores[1] = scores[1] + roundScore;
  }
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 10) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    switchToNextPlayer();
  }
});
function switchToNextPlayer() {
  diceDom.style.display = "none";
  // document.getElementById("score-" + activePlayer).textContent = roundScore;
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;
  if (activePlayer === 1) {
    activePlayer = 0;
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
  } else {
    activePlayer = 1;
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.add("active");
  }
}
document.querySelector(".btn-new").addEventListener("click", function() {
  alert("clicked");
});
