const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const usernameSpan = document.querySelector('.username');
const welcome = document.querySelector('.welcome');
const cookieName = 'username';

const search = () => {
    const searchQuery = searchInput.value;
    const URL = `https://google.com/search?q=${searchQuery}`;
    window.location = URL;
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    search();
});

let username;
const askUsername = (question) => {
    username = Cookies.get(cookieName);
    while (username == undefined || username.trim() == ''|| username.trim() == 'null') {
        username = prompt(question);
        Cookies.set(cookieName, username);
    }
    usernameSpan.innerHTML = username;
}

window.onload = () => {
    askUsername('What\'s your name?');
}

welcome.addEventListener('click', (e) => {
    Cookies.set(cookieName, 'null');
    askUsername('Change your name to?');
});