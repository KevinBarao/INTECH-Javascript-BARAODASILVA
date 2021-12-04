const body = document.querySelector("body");
texts = body.querySelectorAll("*")

texts.forEach(element => element.textContent = element.textContent.toUpperCase())