 
function AddToObj() {
    let getu = localStorage.getItem("users");
    getu = JSON.parse(getu)
    console.log(getu);
        
    let user =null;
    let pass =null;
        user = document.getElementById("fname").value;
        pass = document.getElementById("num").value;

if(!(user==""||pass=="")){
    if(user in getu){
        alert("המשתמש כבר קיים")
    }
    else{
        let newUser = {
            password : pass,
            name : user,
         
        }
        
    getu[user] = newUser;
    newUser.wins = 0;
    console.log(getu);

    localStorage.setItem("users",JSON.stringify(getu));
    localStorage.setItem("currentUser", JSON.stringify(newUser))
    alert("חשבונך נוצר - אשר כדי להמשיך !");
    location.href = "./index.html"
    }
}
else{
    alert("אופס!! נראה שלא הכנסת שם משתמש או סיסמה")
}
}


