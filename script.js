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

document.getElementsByClassName("col-md-4")[1].addEventListener("click", function(event){
      
    if (event.target.className == "btn btn-sm btn-outline-secondary" && 
        document.getElementsByClassName("card-text")[1].style.color == "green"){
      
      document.getElementsByClassName("card-text")[1].style.color = null;
    }
        
    else if (event.target.className == "btn btn-sm btn-outline-secondary"){
            
      document.getElementsByClassName("card-text")[1].style.color = "green"
                
    };
});

/////////////////////////////Function 5/////////////////////////////

document.querySelector("header").addEventListener("dblclick",psy);

console.log(psy.detail)

function psy(){
    document.querySelector("head").childNodes[3].setAttribute("href", "");
    setTimeout(returnNormaly, 5000)
}

function returnNormaly(){
    document.querySelector("head").childNodes[3].setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"); 
}