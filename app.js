// Тоглогчийн ээлжийн хадгалах хувьсагч 1-р тоглогч 0, 2-р тоглогч 1
var activePlayer = 1;

//Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//Тоглогчдийн ээлжин дээр цуглуулж байгаа оноог хадгалах увьсагч
var roundScore = 0;

//Шооны талыг хадгалах хувьсагч 1-6 утгатай
var diceNumber = Math.floor(Math.random() * 6) + 1;
//<div class="player-score" id="score-0">43</div>
//Программ эхэлхэд бэлтгье
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
