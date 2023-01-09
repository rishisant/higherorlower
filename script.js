/*
    Script.js
    ---------
    This file contains the JavaScript code for the game. This includes
    game board creation, game logic, and game state management.
*/

/*
    Main menu click functions
    -------------------------
    These functions are called when the user clicks on the main menu buttons
    and include animation rendering, window relocation, etc.
*/

function mmenu_buttonclick(but) {

    if (but == 1) {
        document.getElementById("start_game").style.animation = "selected 2s";
    } else if (but == 2) {
        document.getElementById("instructions").style.animation = "selected 2s";
    } else if (but == 3) {
        document.getElementById("continue").style.animation = "selected 2s";
    } else if (but == 4) {
        document.getElementById("achievements").style.animation = "selected 2s";
    } else if (but == 5) {
        document.getElementById("credits").style.animation = "selected 2s";
    }

    setTimeout(function() {
        if (but == 1) {
            document.getElementById("start_game").style.animation = "none";
            // localStorage.setItem("style", "normalcard");
            if (localStorage.getItem("style") == "tamilcard") {
                // do nothing
                window.location.href = "init.html";
            } else {
                window.location.href = "init.html";
                localStorage.setItem("style", "normalcard");
            }
            

        } else if (but == 2) {
            document.getElementById("instructions").style.animation = "none";
            window.location.href = "instructions.html";
        } else if (but == 3) {
            document.getElementById("continue").style.animation = "none";
            window.location.href = "levelselect.html";
        } else if (but == 4) {
            document.getElementById("achievements").style.animation = "none";
            window.location.href = "achievements.html";
        } else if (but == 5) {
            document.getElementById("credits").style.animation = "none";
            window.location.href = "credits.html";
        }
    }, 2000);

}