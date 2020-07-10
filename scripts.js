// Prices per component (millions)
const prices = {
    laserCannon: 50,
    missileLauncher: 40,
    machineGun: 30,
    enginePhoton: 75,
    enginePlasma: 80,
    engineWarpDrive: 100,
    radar: 60,
    flares: 5,
    cloakingDevice: 300,
    escapePods: 200
  };
  
  var price = 0;
  
  /**
  Calculates the price of the aircraft depending on input from the JS form.
  **/
  function calculatePrice() {
    event.preventDefault(); /* Prevents codepen reloading page */
    price = 0;
    
    var form = document.getElementById("quote-form");
    for (var i = 0; i < form.elements.length; i++) {
      // Go through each element of the form, matching their name (for engine/radio boxes) or value (for other fields) to keys in the prices dictionary above
      let element = form.elements[i];
      var key;
      if (element.name == "engine") {
        key = element.value;
      } else {
        key = element.name;
      }
      
      /**
      Update the price accordingly.
      If from a number field (weapons),
        price += prices[key] * number.
      Otherwise,
        price += prices[key]
       **/
      if (element.type == "number") {
        price += prices[key] * element.value;
        console.log("Appending " + key + " : " + prices[key] + " times " + element.value);
      } else if (element.checked) {
        price += prices[key];
        console.log("Appending " + key + " : " + prices[key]);
      }  
    }
    console.log("Price: " + price);
    showPrice();
  }
  
  /**
  Shows the price on to the user.
  **/
  function showPrice() {
    let priceDiv = document.getElementById("price-div");
    let priceHtml = document.getElementById("price");
    priceDiv.style.display = "block";
    priceHtml.innerHTML = price;
  }
  