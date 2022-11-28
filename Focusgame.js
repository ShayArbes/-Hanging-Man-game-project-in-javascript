const teachingGame=[
'פוטין הכניס את זלנסקי לכלא עם פצצה אם תצליח לנחש מילה או ביטוי שנבחרו בתוך הקטגוריה באמצעות ניחוש של האותיות המרכיבות אותה תציל את זלנסקי. בכל ניחוש של אות שאינה נמצאת במילה המיועדת, תוריד עוד שנייה בפצצה ותקרב את הנשיא למוות בהצלחה!!', 'aaaa ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aliquid ex in suscipit cumque doloribus! Magni fugiat tenetur architecto quasi consectetur aperiam, alias natus ratione nulla unde veniam atque laudantium.', 'bbbb ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aliquid ex in suscipit cumque doloribus! Magni fugiat tenetur architecto quasi consectetur aperiam, alias natus ratione nulla unde veniam atque laudantium.', 'cccc ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aliquid ex in suscipit cumque doloribus! Magni fugiat tenetur architecto quasi consectetur aperiam, alias natus ratione nulla unde veniam atque laudantium.', 'dddd ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aliquid ex in suscipit cumque doloribus! Magni fugiat tenetur architecto quasi consectetur aperiam, alias natus ratione nulla unde veniam atque laudantium.', 'eeee ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aliquid ex in suscipit cumque doloribus! Magni fugiat tenetur architecto quasi consectetur aperiam, alias natus ratione nulla unde veniam atque laudantium.'
]
const nameH1=["איש תלוי","סנוקר","פרקטי","ריזיס","סיבר פאנק","סנוקר"]


let thumbnails = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('active')

for (let i=0; i < thumbnails.length; i++){

    thumbnails[i].addEventListener('click', function(){
        
        console.log(i)
        activeImages[0].classList.remove('active')
        this.classList.add('active')
        document.getElementById('featured').src = this.src
        document.querySelector("#id_h1").innerHTML = nameH1[i]
        document.querySelector("#id_h3").innerHTML = teachingGame[i]

      })
     
     
}


let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft -= 180
})

buttonRight.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft += 180
})
