// TODO: create input for user to enter a city's name into
// TODO: see what the current weather is (know the keywords the weather API uses)
// TODO: display the weather conditions for that city
// // connect to Open Weather Map API
// // get current weather information


// TODO: randomly find a cocktail from the array based on the weather
// // create arrays that hold cocktails by weather category
sunnyCocktails = [
  "aperol_spritz",
  "caipirinha",
  "daiquiri",
  "mai_tai",
  "margarita",
  "mint_julep",
  "mojito",
  "moscow - mule",
  "tom_collins",
  "pina_colada"
]

rainyCocktails = [
  "cosmopolitan",
  "espresso_martini",
  "last_word ",
  "old_fashioned",
  "manhattan",
  "martinez",
  "martini",
  "negroni",
  "rusty_nail",
  "vesper"
]

snowyCocktails = [
  "hot_creamy_bush",
  "hot_toddy",
  "irish_coffee",
  "nutty_irishman",
  "orange_scented_hot_chocolate",
  "rum_toddy",
  "spanish_chocolate",
  "snowday",
  "swedish_coffee",
  "talos_coffee"
]


var randomSelect = Math.floor(Math.random() * sunnyCocktails.length)
var drink = sunnyCocktails[randomSelect]

getCocktailAPI(drink)
function getCocktailAPI(drink) {
  console.log(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((response) => {
              return response.json()
    }).then((data) => {
      console.log("API", data);
      var html = `<div id="drinkCard" class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="${data.drinks[0].strDrinkThumb}"alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
      
            <figure class="image is-48x48"></figure>
          
          <div class="media-content">
            <p class="title is-5">${data.drinks[0].strDrink}</p>
            ${getIngredients(data.drinks[0])}
          </div>
        </div>
    
        <div class="content">
          Cocktail photo, ingredients, and technique
          <a href="#">Ingredients: d</a> <a href="#">#responsive</a>
      </div>
      </div>
    </div>`
    document.getElementById("cocktailChoice").innerHTML = html
     
    }).catch((err) => {
      console.error(err)
    })

    function getIngredients(drink) {
      var ingredients = ""
      for(var i = 0; i < 15; i++) {
      var ingredientName = drink['strIngredient' + (i+1)]
      if(!ingredientName) {
        break
      }
      var measure = drink['strMeasure' + (i+1)]
      ingredients += `<p class="subtitle is-6">${ingredientName} ${measure}</p>
      `
      }
      return ingredients
    }
   
}

// // var randomDrinkNum = drinksByWeather.currentWeather.length * randomNumberExpressionHERE
// // var randomDrink = drinksByWeather.currentWeather[randomDrinkNum]
// fetch cocktail info from API
// // fetch(`cocktail..urlblah/${randomDrink}`){data}
// display relevent cocktail info













// var requestUrl = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

// $.get(requestUrl, function(data){
//   console.log(data);
//   console.log
// });
















