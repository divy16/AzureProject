const form = document.getElementById('nameForm');
const result = document.getElementById('result');

const funnyNames = [
    "Captain Coolpants",
    "Sir Giggle-a-Lot",
    "Duke Doodle",
    "Madam Sillybean",
    "Count Chuckles",
    "Baron Von LOL",
    "Princess Goofball",
    "Sultan of Snicker",
    "Master Chucklehead",
    "Queen Quirk"
];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const randomName = funnyNames[Math.floor(Math.random() * funnyNames.length)];
    result.textContent = `${username}, your funny name is: ${randomName}!`;
});
