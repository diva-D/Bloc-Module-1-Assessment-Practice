//{title: "Potato and Cheese Frittata",
// href: "http://allrecipes.com/Recipe/Potato-and-Cheese-Frittata/Detail.aspx", 
// ingredients: "cheddar cheese, eggs, olive oil, onions, potato, salt", 
// thumbnail: "http://img.recipepuppy.com/2.jpg"}

fetch("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api")
    .then(r => r.json())
    .then(r => {
        let data = r.results;
        console.log(data);
        let main = document.querySelector("main");
        let p = document.createElement("p");
        data.map(e => {
            // section
            let recipeSection = document.createElement("div")
            main.appendChild(recipeSection);
            //title
            let recipeTitle = document.createElement("h2");
            recipeSection.appendChild(recipeTitle);
            recipeTitle.innerHTML = "<a href='" + e.href + "'>" + e.title + "</a>";
            //thumbnail
            let recipeThumb = document.createElement("img");
            recipeSection.appendChild(recipeThumb);
            recipeThumb.setAttribute("src", e.thumbnail);
            // ingredients
            let ingredientTitle = document.createElement("h3");
            recipeSection.appendChild(ingredientTitle);
            ingredientTitle.innerText = "Ingredients";
            let ingredientList = document.createElement("ul");
            recipeSection.appendChild(ingredientList);
            let ingredients = e.ingredients.split(", ");
            ingredients.forEach(e => {
                let item = document.createElement("li");
                ingredientList.appendChild(item);
                item.innerText = e;
            });
        });
    })
    .catch(e => `Error found: ${e}`);