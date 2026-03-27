    let userScore = 0;
    let compScore = 0;
    let gameActive = true;
    let winningScore = 10;
    
    const userScorePara = document.querySelector("#user-score");
    const compScorePara = document.querySelector("#comp-score");
    const choices = document.querySelectorAll(".choice");
    const msg = document.querySelector("#msg");
    const userMoveDisplay = document.querySelector("#user-move");
    const compMoveDisplay = document.querySelector("#comp-move");

    const moveEmojis = {
      rock: "✊",
      paper: "✋",
      scissors: "✌️"
    };

    const getCompChoice = () => {
      let options = ["rock", "paper", "scissors"];
      const ranIdx = Math.floor(Math.random() * 3);
      return options[ranIdx];
    };

    const updateMoveDisplay = (userChoice, compChoice) => {
      userMoveDisplay.textContent = moveEmojis[userChoice];
      compMoveDisplay.textContent = moveEmojis[compChoice];
      
      // Add animation
      userMoveDisplay.style.transform = "scale(1.2)";
      compMoveDisplay.style.transform = "scale(1.2)";
      setTimeout(() => {
        userMoveDisplay.style.transform = "scale(1)";
        compMoveDisplay.style.transform = "scale(1)";
      }, 200);
    };

    const animateScore = (element) => {
      element.style.animation = "none";
      element.offsetHeight; // Trigger reflow
      element.style.animation = "scoreUpdate 0.3s ease-out";
    };

    const checkGameWinner = () => {
      if (userScore >= winningScore) {
        gameActive = false;
        msg.innerText = "🎉 CONGRATULATIONS! You won the match! 🎉";
        msg.style.backgroundColor = "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
        msg.style.background = "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
        disableChoices(true);
        return true;
      } else if (compScore >= winningScore) {
        gameActive = false;
        msg.innerText = "💔 Game Over! Computer won the match! Better luck next time! 💔";
        msg.style.backgroundColor = "linear-gradient(135deg, #fa709a 0%, #fee140 100%)";
        msg.style.background = "linear-gradient(135deg, #fa709a 0%, #fee140 100%)";
        disableChoices(true);
        return true;
      }
      return false;
    };

    const disableChoices = (disabled) => {
      choices.forEach(choice => {
        if (disabled) {
          choice.style.pointerEvents = "none";
          choice.style.opacity = "0.5";
        } else {
          choice.style.pointerEvents = "auto";
          choice.style.opacity = "1";
        }
      });
    };

    const drawGame = () => {
      msg.innerText = "🤝 It's a draw! Play again! 🤝";
      msg.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      msg.style.backgroundColor = "transparent";
    };

    const showWinner = (userWin, userChoice, compChoice) => {
      if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        animateScore(userScorePara);
        msg.innerText = `🎉 You win! ${moveEmojis[userChoice]} ${userChoice} beats ${compChoice} ${moveEmojis[compChoice]} 🎉`;
        msg.style.background = "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)";
        msg.style.backgroundColor = "transparent";
      } else {
        compScore++;
        compScorePara.innerText = compScore;
        animateScore(compScorePara);
        msg.innerText = `💔 You lose! ${moveEmojis[compChoice]} ${compChoice} beats your ${userChoice} ${moveEmojis[userChoice]} 💔`;
        msg.style.background = "linear-gradient(135deg, #fa709a 0%, #fee140 100%)";
        msg.style.backgroundColor = "transparent";
      }
      
      // Check if match is over
      checkGameWinner();
    };

    const playGame = (userChoice) => {
      if (!gameActive) return;
      
      const compChoice = getCompChoice();
      updateMoveDisplay(userChoice, compChoice);
      
      if (userChoice === compChoice) {
        drawGame();
      } else {
        let userWin = true;
        if (userChoice === "rock") {
          userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          userWin = compChoice === "scissors" ? false : true;
        } else {
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
      }
    };

    const resetGame = () => {
      userScore = 0;
      compScore = 0;
      gameActive = true;
      userScorePara.innerText = "0";
      compScorePara.innerText = "0";
      msg.innerText = "🎯 Game reset! Make your move! 🎯";
      msg.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      msg.style.backgroundColor = "transparent";
      userMoveDisplay.textContent = "❓";
      compMoveDisplay.textContent = "❓";
      disableChoices(false);
      
      // Add celebration animation
      const container = document.querySelector(".game-container");
      container.style.animation = "none";
      container.offsetHeight;
      container.style.animation = "fadeIn 0.5s ease-out";
    };

    const showRules = () => {
      const modal = document.getElementById("modal");
      modal.style.display = "flex";
    };

    const closeModal = () => {
      const modal = document.getElementById("modal");
      modal.style.display = "none";
    };

    // Add click event listeners
    choices.forEach((choice) => {
      choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
      });
    });

    // Close modal when clicking outside
    window.onclick = function(event) {
      const modal = document.getElementById("modal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
