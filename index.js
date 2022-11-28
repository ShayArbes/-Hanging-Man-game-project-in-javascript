


function enterGame() {
    console.log("fuc");
    let answer = document.getElementById("username").value;
    let answer1 = document.getElementById("password").value;
    let obj1 = JSON.parse(localStorage.getItem("users"))


    if (answer != "" || answer1 != "") {



        if (obj1[answer] && obj1[answer].password === answer1) {

            localStorage.setItem("users", JSON.stringify(obj1));
            window.location.replace("allGames.html");

        }

        else {
            alert("שם המשתמש או הסיסמה שהזנת שגוי ")
            console.log("else");
        }

    }
}
function enterSignIn() {
    window.location.replace("First.html");
}
