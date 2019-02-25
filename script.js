/////////////////////////////Function 1/////////////////////////////

var footer = document.querySelector('footer');
var incrementation = 0;

footer.addEventListener('click', showText);

function showText(){
    console.log("Clique" + " " + incrementation)
    incrementation ++
};

/////////////////////////////Function 2/////////////////////////////

let burgerMenu = document.getElementById('navbarHeader');
var button = document.getElementsByTagName("button")[0];

button.addEventListener('click', remove);

function remove(){
 burgerMenu.classList.toggle('collapse')   


};
/////////////////////////////Function 3/////////////////////////////

let buttonEditRed = document.getElementsByClassName("btn-group")[0];

 console.log(buttonEditRed);

 buttonEditRed.addEventListener('click', function (redButton){

     if (redButton.target.className == "btn btn-sm btn-outline-secondary"){
         redButton.target.style.color = 'red';}
         else {
             console.log(buttonEditRed);
         }
 }
 , false);

/////////////////////////////Function 4/////////////////////////////

let buttonEditGreen = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[2];

console.log(buttonEditGreen);

buttonEditGreen.addEventListener('click', function (greenButton){
    if (greenButton.style.color === 'green'){ 
        greenButton.style.color = '' ;}
        else{
            console.log(buttonEditGreen);
        }
}
,false);

/////////////////////////////Function 5/////////////////////////////