let User__score = 0;
let Computer__score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#result_text');
const userscore = document.querySelector('#user_score');
const computerscore = document.querySelector('#computer_score');

const generate_computer_choice = () => {
    const choices = ["rock", "paper", "scissors"];
    const random_number = Math.floor(Math.random() * 3);
    return choices[random_number];
};

const playing_game = (userid) => {
    console.log("User choice is", userid);
    const computer_choice = generate_computer_choice();
    console.log("Computer choice is", computer_choice);
    if (userid === computer_choice) {
        console.log("It's a tie!");
        msg.innerText = "It's a tie! Please try again.";
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";
    }
    else if ((userid === "rock" && computer_choice === "scissors") ||
             (userid === "paper" && computer_choice === "rock") ||
             (userid === "scissors" && computer_choice === "paper")) {
        console.log("User wins!");
        msg.innerText = `You win! ${userid} beats ${computer_choice}`;
        msg.style.backgroundColor = "green";
        User__score++;
        userscore.innerText = User__score;
    }
    else {
        console.log("Computer wins!");
        msg.innerText = `You lost! ${computer_choice} beats ${userid}`;
        msg.style.backgroundColor = "red";
        Computer__score++;
        computerscore.innerText = Computer__score;
    }
};




choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userid = choice.getAttribute("id");
        playing_game(userid);
    });
});

