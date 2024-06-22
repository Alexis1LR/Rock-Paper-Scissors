// 1. Set starting screen for game
// 2. Wait for input from the user
// 3. Once user clicks on one of the buttons, get user's choice according to what button they choose 
//    and get computers choice
// 4. compare the choices
// 5. Update score of whoever wins 
// 6. Continue with rounds until one of them reaches 5 wins

//scores
let player_score = 0;
let computer_score = 0;

//UI
let result_section = document.createElement("div");
let body = document.querySelector("body");
body.appendChild(result_section);



//registers when user clicks on one of the buttons
//rock choice
const rBtn = document.querySelector(".r-button");
rBtn.addEventListener("click", () => playRound("rock"));

//paper choice
const pBtn = document.querySelector(".p-button");
pBtn.addEventListener("click", () => playRound("paper"));

//scissors choice
const sBtn = document.querySelector(".s-button");
sBtn.addEventListener("click", () => playRound("scissors"));


function getComputerChoice() {
    choice = Math.floor(Math.random() * 3); //choose random num from 0-2
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function show_result(round_result) { //takes in string that has who the winner is
    result_section.innerHTML = `Result: ${round_result}<br>
    Your score: ${player_score}<br>
    Computer score: ${computer_score}`;
    check_if_end();
}

function check_if_end() {
    if (player_score == 5) {
        result_section.innerHTML = "You reached 5 points first! Nice";
    }
    else if (computer_score == 5) {
        result_section.innerHTML = "The computer reached 5 points first. Darn"
    }
}

function compare(user_choice, computer_choice) {

    if (user_choice == computer_choice) {
        console.log("Its a tie! No points awarded.");
        show_result("Its a tie");
    }
    else if (user_choice == "rock" && computer_choice == "paper") {
        computer_score += 1;
        show_result("You lose");
    }
    else if (user_choice == "rock" && computer_choice == "scissors") {
        player_score += 1;
        show_result("You win");
    }
    else if (user_choice == "paper" && computer_choice == "rock") {
        player_score += 1;
        show_result("You win");
    }
    else if (user_choice == "paper" && computer_choice == "scissors") {
        computer_score += 1;
        show_result("You lose");
    }
    else if (user_choice == "scissors" && computer_choice == "rock") {
        computer_score += 1;
        show_result("You lose");
    }
    else if (user_choice == "scissors" && computer_choice == "paper") {
        player_score += 1;
        show_result("You win");
    }
}

function playRound(player_choice) { //takes in the players choice as a string (rock, paper, or scissors)

    let computer_choice = getComputerChoice();

    // console.log("Your choice: " + player_choice);
    // console.log("Computers choice: " + computer_choice);
    compare(player_choice, computer_choice); //see who wins
    // console.log("User score: " + player_score);
    // console.log("Computer score: " + computer_score);
    // console.log(" ");
}





