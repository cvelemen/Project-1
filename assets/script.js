// TODO: create input for user to enter a city's name into
// TODO: see what the current weather is (know the keywords the weather API uses)
// TODO: display the weather conditions for that city
// // connect to Open Weather Map API
// // get current weather information


// TODO: randomly find a cocktail from the array based on the weather
// // create arrays that hold cocktails by weather category
sunnyCocktails = [
  aperol_spritz,
  caipirinha,
  daiquiri,
  mai_tai,
  margarita,
  mint_julep,
  mojito,
  moscow - mule,
  tom_collins,
  pina_colada
]

rainyCocktails = [
  cosmopolitan,
  espresso_martini,
  last_word,
  old_fashioned,
  manhattan,
  martinez,
  martini,
  negroni,
  rusty_nail,
  vesper
]

snowyCocktails = [
  hot_creamy_bush,
  hot_toddy,
  irish_coffee,
  nutty_irishman,
  orange_scented_hot_chocolate,
  rum_toddy,
  spanish_chocolate,
  snowday,
  swedish_coffee,
  talos_coffee
]


function getCocktailAPI() {
  fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then((response) => {
      if (!response.ok) { // check for !falsy values
        console.table(response)
        document.body.append('response came back not ok!')
        document.query
      }
      return response.json()
    }).then((data) => {
      console.log(data);
      return data;
    }).catch((err) => {
      console.error(err)
      const errorElement = document.createElement("p")
      errorElement.textContent = err.toString() || "500 Internal Server Error at The Cocktail DB"
      document.body.append(errorElement)
    })
    .finally(() => console.info('I will always run in the finally block'))
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
















