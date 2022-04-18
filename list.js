import data from './data.js';

const lsit = document.querySelector(".book-list");

for(let i = 0; i<data.length; i++){
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerHTML = data[i].Title;
    const h3 = document.createElement('h3');
    h3.innerHTML = data[i].Author;
    const hr = document.createElement('hr');

    lsit.appendChild(div)
    div.appendChild(h2)
    div.appendChild(h3)
    div.appendChild(hr)
}