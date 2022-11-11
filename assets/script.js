// TODO: create input for user to enter a city's name into
const api = "c90b5488ed6ad2675575883e578f5209";

var city;

$('#submitButton').on('click', function(event) {
  event.preventDefault();
  city = $('#cityInput').val();
  console.log(city);
  getDrink(city)
});



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

function getDrink(city){
  var drink
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=imperial`)
    .then(data =>{
        return data.json()
    }).then(function(apiResults) { 
        console.log('weather API: ', apiResults)
        if(apiResults.main.temp > 79) {
          // code here for sunny day
          drink = sunnyCocktails[Math.floor(Math.random() * sunnyCocktails.length)]
        } else if(apiResults.main.temp > 50) {
          // code here for rainy day
          drink = rainyCocktails[Math.floor(Math.random() * rainyCocktails.length)]
        } else {
          // code here for cold day
          drink = snowyCocktails[Math.floor(Math.random() * snowyCocktails.length)]
        }
        getCocktailAPI(drink)
        

        // var html = 
        // `<div class="card" style="width:10rem">
        //   <div class="card-body">
        //     <h5 class="card-title">${city}
        //       <img src="http://openweathermap.org/img/wn/${apiResults.weather[0].icon}@2x.png" class="card-img-top" alt="...">
        //     </h5>
        //       <p class="card-text">Temp: ${apiResults.main.temp}</p>
        //       <p class="card-text">Humidity: ${apiResults.main.humidity}</p>
        //       <p class="card-text">Windspeed: ${apiResults.wind.speed}</p>
        //       <p class="card-text">Description: ${apiResults.weather[0].descriptn}</p>
        //   </div>
        // </div>`
      // document.getElementById("#weatherHeader").innerHTML = html
      // getFiveDayForcast(lat,lon,city)
      // TODO pass function that will use conditions to choose drink based on weather
    })
    
}

function getCocktailAPI(drink) {
  console.log(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((response) => {
              return response.json()
    }).then((data) => {
      console.log("API", data);
      var html = `<div class="card">
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


