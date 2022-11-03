//Random Number
const rand_num = Math.floor(Math.random() * 100 + 1);

//Listens for submit click
document.querySelector('.submit').addEventListener('click', reset);
function reset(){
    //Gets the input
    let input = document.querySelector(".field").value;
    //Resets the input field
    document.querySelector(".field").value = '';
    document.querySelector(".field").focus();
    //Updates the guesses
    let update = document.getElementById('guesses').textContent + ` ${input}`;
    document.getElementById('guesses').textContent = update;
    //Clue for the number
    if(rand_num < input){
        document.querySelector('.status').innerHTML = '<h3>Go Lower</h3>';
    }
    else if(rand_num > input){
        document.querySelector('.status').innerHTML = '<h3>Go Higher</h3>'
    }
    //Updates for the correct answer
    else{
        document.querySelector('.inputblock').remove();
        let congrats = document.createElement('p');
        congrats.innerHTML = `<h1>Congrats You Won!! ${rand_num} is the number</h1>`;
        document.querySelector('body').appendChild(congrats);
    }
}