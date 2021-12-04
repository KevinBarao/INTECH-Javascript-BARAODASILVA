const p = document.querySelectorAll("p");

// First manner
p.forEach(element => element.prepend(element.textContent.length))
// Second manner
p.forEach(element => element.insertAdjacentHTML('afterbegin', element.textContent.length + " "))
