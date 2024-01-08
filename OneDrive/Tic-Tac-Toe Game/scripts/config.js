function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid ;   // +'1' => 1
    console.log(event,"event")
    playerConfigOverlayElement.style.display = 'block' ;
    backdropElement.style.display = 'block' ;
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none' ;
    backdropElement.style.display = 'none' ;
    formElement.firstElementChild.classList.remove('error') ;
    errorsOutputElement.textContent ='' ;
    formElement.firstElementChild.lastElementChild.value = '' ;
    console.log(formElement,"formElement");
}


function savePlayerConfig(event) {
    event.preventDefault() ;
    const formData = new FormData(event.target) ;
    const enteredPlayername = formData.get('player-name').trim() ;
    
    if (!enteredPlayername) { // enterdPlayername === ''
        event.target.firstElementChild.classList.add('error') ;
        errorsOutputElement.textContent = 'Please enter a valid name!' ;
        return ;
    }
   
    
    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data') ;
    updatedPlayerDataElement.children[1].textContent = enteredPlayername ;

    players[editedPlayer - 1].name = enteredPlayername ;

    closePlayerConfig() ;
}