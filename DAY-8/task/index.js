let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia"
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
      capital: "Reykjavik"
    }
  ];





  // Function to create a country card
  function createCountryCard(country) {
    // Create the card-container div
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';
  
    // Create the image div
    const imageDiv = document.createElement('div');
    imageDiv.className = 'image';
  
    // Create the image element
    const image = document.createElement('img');
    image.src = country.flag;
    image.alt = `Flag of ${country.name}`;
    imageDiv.appendChild(image);
  
    // Create the description div
    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'discription';
  
    // Create the h3 and h5 elements
    const countryName = document.createElement('h3');
    countryName.textContent = country.name;
  
    const population = document.createElement('h5');
    population.textContent = `Population: ${country.population}`;
  
    const region = document.createElement('h5');
    region.textContent = `Region: ${country.region}`;
  
    const capital = document.createElement('h5');
    capital.textContent = `Capital: ${country.capital}`;
  
    // Append the h5 elements to the description div
    descriptionDiv.append(countryName, population, region, capital);
  
    // Append the image div and description div to the card-container
    cardContainer.append(imageDiv, descriptionDiv);
  
    return cardContainer;
  }
  
  // Append the country cards to the body
  countriesInfo.forEach(country => {
    const countryCard = createCountryCard(country);
    document.body.appendChild(countryCard);
  });