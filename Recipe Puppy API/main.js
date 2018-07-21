fetch("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api")
    .then(r => r.json())
    .then(r => {
        let data = r.results;
        console.log(data);
        let body = document.querySelector("body");
        let p = document.createElement("p");
        data.map(e => {
            let recipe = document.createElement("p");
            body.appendChild(recipe);
            recipe.innerText = e.title;
        });
    })
    .catch(e => `Error found: ${e}`);