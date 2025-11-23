import recipes from "./recipes.mjs";

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

function recipeTemplate(recipe) {
	return `<div class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.name}" />
        <div>
            <span class="tag">${tagsTemplate(recipe.tags)}</span>
            <h2 class="recipe-name">${recipe.name.toUpperCase()}</h2>
            ${ratingTemplate(recipe.rating)}
            <p>${recipe.description}</p>
        </div>
    </div>`;
}

function ratingTemplate(rating) {
    // begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
        // check to see if the current index of the loop is less than or equal to our rating
        if (i <= rating) {
            // if so then output a filled star
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            // else output an empty star
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function tagsTemplate(tags) {
    return tags[0];
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const mainElement = document.querySelector('main');
    // Clear any existing content
    mainElement.innerHTML = '';
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const htmlStrings = recipeList.map(recipe => recipeTemplate(recipe));
	// Set the HTML strings as the innerHTML of our output element.
    mainElement.innerHTML = htmlStrings.join('');
}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();

function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        // Check name
        if (recipe.name.toLowerCase().includes(query)) return true;
        // Check description
        if (recipe.description.toLowerCase().includes(query)) return true;
        // Check tags (Array.find is perfect for this)
        if (recipe.tags.find(tag => tag.toLowerCase().includes(query))) return true;
        // Check ingredients (Array.find for ingredients list)
        if (recipe.recipeIngredient.find(item => item.toLowerCase().includes(query))) return true;
        return false;
    });
	// sort by name alphabetically
	const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}

function searchHandler(e) {
	e.preventDefault();
	// get the search input
    const searchInput = document.querySelector('header form input[type="text"]');
    // convert the value in the input to lowercase
    const query = searchInput.value.toLowerCase();
    // use the filter function to filter our recipes
    const filteredRecipes = filterRecipes(query);
    // render the filtered list
    renderRecipes(filteredRecipes);
}

document.querySelector('header form').addEventListener('submit', searchHandler);

// to test
console.log(getRandomListEntry(recipes));
console.log(recipeTemplate(recipe));