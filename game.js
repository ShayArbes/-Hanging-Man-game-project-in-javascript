function init(){}
let arryaGameSelection = "";
let randomWordChoice = "";
let myArrayChoice = [];

let user = JSON.parse(localStorage.getItem("currentUser"))
console.log(user);

const fruits = [
  "תפוח",
  "אפרסק",
  "תפוז",
  "ענבים",
  "אפרסמון",
  "גויבה",
];
const countries =["ישראל","אנגליה", "הולנד","תאילנד","גרמניה","רוסיה","פולין"]
const cities = ["חיפה","אלעד","חדרה","גדרה","אשקלון","לוד","רמלה","יבנה","אילת"]
const animals=["אריה","פיל","שפן","כבשה","פרה","כלב","חמור","זברה"]


const myLetters = [
  "א",
  "ב",
  "ג",
  "ד",
  "ה",
  "ו",
  "ז",
  "ח",
  "ט",
  "י",
  "כ",
  "ל",
  "מ",
  "נ",
  "ס",
  "ע",
  "פ",
  "צ",
  "ק",
  "ר",
  "ש",
  "ת",
  "ם",
  "ן",
  "ך",
  "ץ",
];


function gameSelection(value) {
  arryaGameSelection = value;
  console.log(arryaGameSelection);
  randomWordChoice =
    arryaGameSelection[Math.floor(Math.random() * arryaGameSelection.length)];
  console.log(randomWordChoice);
  for (let i = 0; i < randomWordChoice.length; i++) {
    myArrayChoice[i] = "_";
  }
  console.log(myArrayChoice);

  let removeButton = document.getElementById("game_select");
  removeButton.remove();

  document.querySelector("#id_img").innerHTML = `<img src="img1/2523 [Converted]-01.png">`;
  document.querySelector("#div_new_game").innerHTML = `<button onClick="window.location.reload();">משחק חדש</button>`;
document.body.innerHTML+=`<div id="div_first_boxs_letters"><div id="div_boxs_letters"></div></div>`
  for (let i = 0; i < myLetters.length; i++) {
    console.log("v");
    document.querySelector("#all_letters").innerHTML += `<div id="div_lett${i}"><button class="hebrew_letters" id="lett${i}" value="${myLetters[i]}" onclick="clickLetter(this)">${myLetters[i]}</button></div>`;
  }

  for (let i = 0; i < randomWordChoice.length; i++) {
    document.querySelector(
      "#div_boxs_letters"
    ).innerHTML += `<div class="box_letters">${myArrayChoice[i]}</div>`;
  }
  console.log(i);
}
let i = 0;
let j = 0;
let x = 2;
function clickLetter(elemnt) {
  let clickPage = elemnt.innerHTML;
  console.log(clickPage);
  let idClickPage =`div_${elemnt.id}` ;
  console.log(idClickPage);
  
  for (i = 0; i <= randomWordChoice.length; i++) {
    if (clickPage === randomWordChoice[i]) {
      myArrayChoice[i] = clickPage;
      document.querySelector("#div_boxs_letters").innerHTML = "";
      for (let i = 0; i < randomWordChoice.length; i++) {
        
        document.querySelector("#div_boxs_letters").innerHTML += `<div class="box_letters">${myArrayChoice[i]}</div>`;
        if (j === randomWordChoice.length-1) {
          document.querySelector("#id_img").innerHTML = `<img src="img1/10-01.png">`;
          removeButton = document.getElementById("div_boxs_letters");
          removeButton.remove();
          document.getElementById("all_letters").innerHTML = `<h2>כל הכבוד הצלת את זלנסקי</h2>`;
          currentUser = JSON.parse(localStorage.getItem("currentUser"))
          currentUser.wins++
          localStorage.setItem("currentUser", JSON.stringify(currentUser))
        }
      }
      j++;
      break;
    } else if (x < 8 && i == randomWordChoice.length) {
      document.querySelector(
        "#id_img"
      ).innerHTML = `<img src="img1/${x}-01.png">`;
      x++;
    } else if (x == 8 && i == randomWordChoice.length) {
      document.querySelector("#id_img").innerHTML = `<img src="img1/${x}-01.png">`;


      const imageSwap=setTimeout(imageAfterTime, 0700);
function imageAfterTime(){
      /****להחליף תמונה */
      x++;
      document.querySelector(
        "#id_img"
      ).innerHTML = `<img src="img1/${x}-01.png">`;
      removeButton = document.getElementById("div_boxs_letters");
      removeButton.remove();
      document.getElementById(
        "all_letters"
      ).innerHTML = `<h4>זהו הרגת את זלנסקי הלך על אוקראינה</h4>`;
      }
    }
  }
  console.log(myArrayChoice);
  document.querySelector(`#${idClickPage}`).innerHTML = `<div></div>`
  document.querySelector(`#${idClickPage}`).innerHTML = `<div><button class="hebrew_letters hebrew_letters_used" value="${clickPage}">${clickPage}</button></div>`;

}
