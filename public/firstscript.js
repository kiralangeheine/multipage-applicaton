const authorForm = document.querySelector('#authorForm');

authorForm.addEventListener('submit', event => {

    const messageAuthor = document.querySelector('#messageAuthor');

    const author = messageAuthor.value;

    const error = document.querySelector('#validationError');

    if(!author){
        event.preventDefault();// stop form submission to server
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
});