
const messageForm = document.querySelector('#messageForm');

messageForm.addEventListener('submit', event => {

    const messageText = document.querySelector('#messageText');

    const text = messageText.value;

    const error = document.querySelector('#validationError');

    if(!text){
        event.preventDefault();// stop form submission to server
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
});