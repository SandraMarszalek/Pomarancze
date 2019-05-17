var name;
var email;
var recipe;

function save(){
 name = document.getElementById("imie").value;
 email = document.getElementById("email").value;
 recipe = document.getElementById("jakiprzepis").value; 

localStorage.setItem("imie", name);
localStorage.setItem("email", email);
localStorage.setItem("jakiprzepis", recipe);

sessionStorage.setItem("imiesS", name);
sessionStorage.setItem("emailsS", email);
sessionStorage.setItem("jakiprzepissS", recipe);
}

//dla przeglądarek nie wspierających 'date' 
if ( $('[type="date"]').prop('type') != 'date' ) {
    $('[type="date"]').datepicker();
}