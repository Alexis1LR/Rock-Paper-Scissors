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


function getHumanChoice() {
    message = "What will be your choice?"
    let choice = prompt(message)
    if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissors") {
        return choice
    }
    else { //lets user know that they have an invalid choice 
        console.log("Invalid choice! Please try again.")
        return getHumanChoice();
    }

}

function compare(user_choice, computer_choice) {

    if (user_choice == computer_choice) {
        console.log("Its a tie! No points awarded.");
    }
    else if (user_choice == "rock" && computer_choice == "paper") {
        console.log("Computer wins! ");
        computer_score += 1;
    }
    else if (user_choice == "rock" && computer_choice == "scissors") {
        console.log("User wins! ");
        user_score += 1;
    }
    else if (user_choice == "paper" && computer_choice == "rock") {
        console.log("User wins! ");
        user_score += 1;
    }
    else if (user_choice == "paper" && computer_choice == "scissors") {
        console.log("Computer wins! ");
        computer_score += 1;
    }
    else if (user_choice == "scissors" && computer_choice == "rock") {
        console.log("Computer wins! ");
        computer_score += 1;
    }
    else if (user_choice == "scissors" && computer_choice == "paper") {
        console.log("User wins! ");
        user_score += 1;
    }
}


rounds = 1
user_score = 0;
computer_score = 0;
console.log("Lets play rock paper scissors!");

while (rounds <= 5) { //plays 5 rounds
    user_choice = getHumanChoice();
    computer_choice = getComputerChoice();
    console.log("Your choice: " + user_choice);
    console.log("Computers choice: " + computer_choice);
    compare(user_choice, computer_choice); //see who wins
    console.log("User score: " + user_score);
    console.log("Computer score: " + computer_score);
    rounds += 1;
}
