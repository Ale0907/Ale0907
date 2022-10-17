//Make an ordering system for an ice cream shop
//Your program will:
//  1. Display a menu of possible toppings and flavors
//  2. Display a menu of price per ice cream and price per topping
//  3. Prompt the user to input their ice cream flavor choice and number of toppings
//  4. Calculate the total of their order
//  5. Read their full order back to them

//REQUIREMENT: Different items must have different prices - use an if statement to change prices

var total = 0;
var vanilla = 1.50
var chocolate = 1.50
var mintChocolateChip = 1.60
var butterPecan = 1.75
var sprinkles = .75
var oreos = .54
var gummies = .45

var welcome = alert("Welcome to Alan's All Ice Cream Emporium!");
var menu = prompt("Here's what's on the menu today: Vanilla for $1.50, Chocolate for $1.50, Mint Chocolate Chip for $1.60, and Butter Pecan for $1.75. What would you like to order today?");
if (menu === "none" || menu === "no") {
  alert("Aw, what a shame. Maybe you'll go fix your tastebuds elsewhere.");
}
else if (menu === "None" || menu === "No") {
  alert("Aw, what a shame. Maybe you'll go fix your tastebuds elsewhere.");
}
else if (menu === "Vanilla" || menu === "vanilla") {
  var toppings = prompt("Now, what kind of topping would you like? Please choose one. We feature: Sprinkles for $0.75, Oreos for $0.54, or Gummies for $0.45.");
  if (toppings === "none" || toppings === "None") {
    total += vanilla;
    alert("Alright, your total is $" + total + ".");
  }
  else if (toppings === "no" || toppings === "No") {
    total += vanilla;
    alert("Alright, your total is $" + total + ".");
  }
  else if (toppings === "sprinkles" || toppings === "Sprinkles") {
    total += Number(vanilla) + Number(sprinkles);
    alert("Alright, your total is $" + total + ".");
  }
  else if (toppings === "oreos" || toppings === "Oreos") {
    total += Number(vanilla) + Number(oreos);
    alert("Alright, your total is $" + total + ".");
  }
  else if (toppings === "gummies" || toppings === "Gummies") {
    total += Number(vanilla) + Number(gummies);
    alert("Alright, your total is $" + total + ".");
  }
  else {
    alert("Sorry, we don't have that here."); 
  }
  if (menu.toLowerCase() === "vanilla") {
    var weapons = prompt("Congratulations! You are our favored 1,000,000th customer!! For our special today, can we interest you in our finest selection of premium grade weapons? Our top-grade armory boasts: Nichirin Katana for $400, Soul-slaying Kunai $250, Earth-rending Mace $500, and an Aerial Bo Staff $800.");
    var katana = 400
    var kunai = 250
    var mace = 500
    var boStaff = 800
    if (weapons === "no" || weapons === "No") {
      total = total;
      alert("Hmmmm. Alright then. Please take this free ice cream as a consolation gift. Combined with your bought ice cream, your total is $" + total + ".");   
    }
    else if (weapons.toLowerCase() === "katana") {
      total += Number(katana) + Number(total);
      alert("Excellent taste. Your final order comes out to $" + total + ".");
    }
    else if (weapons.toLowerCase() === "kunai") {
      total += Number(kunai) + Number(total);
      alert("Excellent taste. Your final order comes out to $" + total + ".");
    }
    else if (weapons.toLowerCase() === "mace") {
      total += Number(mace) + Number(total);
      alert("Excellent taste. Your final order comes out to $" + total + ".");
    }
    else if (weapons.toLowerCase() === "bo staff") {
      total += Number(boStaff) + Number(total);
      alert("Excellent taste. Your final order comes out to $" + total + ".");
    }
}
else if (menu.toLowerCase() === "chocolate") {
  var toppings = prompt("Now, what kind of topping would you like? Please choose one. We feature: Sprinkles for $0.75, Oreos for $0.54, or Gummies for $0.45.");
  if (toppings === "none" || toppings === "None") {
    total += chocolate;
    alert("Alright, your total is $" + total + ".");
  }
  else if (toppings === "no" || toppings === "No") {
    total += chocolate;
    alert("Alright, your total is $" + total + ".");
  }
  else if (toppings === "sprinkles" || toppings === "Sprinkles") {
    total += Number(chocolate) + Number(sprinkles);
    alert("Alright, your total is $" + total + ".");
  }
  else if (toppings === "oreos" || toppings === "Oreos") {
    total += Number(chocolate) + Number(oreos);
    alert("Alright, your total is $" + total + ".");
  }
  else if (toppings === "gummies" || toppings === "Gummies") {
    total += Number(chocolate) + Number(gummies);
    alert("Alright, your total is $" + total + ".");
  }
  else {
    alert("Sorry, we don't have that here."); 
  }
  if (menu.toLowerCase() === "chocolate") {
    var weapons = prompt("Congratulations! You are our favored 1,000,000th customer!! For our special today, can we interest you in our finest selection of premium grade weapons? Our top-grade armory boasts: Nichirin Katana for $400, Soul-slaying Kunai $250, Earth-rending Mace $500, and an Aerial Bo Staff $800.");
    var katana = 400
    var kunai = 250
    var mace = 500
    var boStaff = 800
    if (weapons === "no" || weapons === "No") {
      total = total;
      alert("Hmmmm. Alright then. Please take this free ice cream as a consolation gift. Combined with your bought ice cream, your total is $" + total + ".");   
    }
    else if (weapons.toLowerCase() === "katana") {
      total += Number(katana) + Number(total);
      alert("Excellent taste. Your final order comes out to $" + total + ".");
    }
    else if (weapons.toLowerCase() === "kunai") {
      total += Number(kunai) + Number(total);
      alert("Excellent taste. Your final order comes out to $" + total + ".");
    }
    else if (weapons.toLowerCase() === "mace") {
      total += Number(mace) + Number(total);
      alert("Excellent taste. Your final order comes out to $" + total + ".");
    }
    else if (weapons.toLowerCase() === "bo staff") {
      total += Number(boStaff) + Number(total);
      alert("Excellent taste. Your final order comes out to $" + total + ".");
    }
}
else if (menu.toLowerCase() === "mint chocolate chip") {
  var toppings = prompt("Now, what kind of topping would you like? Please choose one. We feature: Sprinkles for $0.75, Oreos for $0.54, or Gummies for $0.45.");
  if (toppings === "none" || toppings === "None") {
    total += mintChocolateChip;
    alert("Alright, your total is $" + total + ".");
  }
  else if (toppings === "no" || toppings === "No") {
    total += mintChocolateChip;
    alert("Alright, your total is $" + total + ".");
  }
  else if (toppings === "sprinkles" || toppings === "Sprinkles") {
    total += Number(mintChocolateChip) + Number(sprinkles);
    alert("Alright, your total is $" + total + ".");
  }
  else if (toppings === "oreos" || toppings === "Oreos") {
    total += Number(mintChocolateChip) + Number(oreos);
    alert("Alright, your total is $" + total + ".");
  }
  else if (toppings === "gummies" || toppings === "Gummies") {
    total += Number(mintChocolateChip) + Number(gummies);
    alert("Alright, your total is $" + total + ".");
  }
  else {
    alert("Sorry, we don't have that here."); 
  }
  if (menu.toLowerCase() === "mint chocolate chip") {
    var weapons = prompt("Congratulations! You are our favored 1,000,000th customer!! For our special today, can we interest you in our finest selection of premium grade weapons? Our top-grade armory boasts: Nichirin Katana for $400, Soul-slaying Kunai $250, Earth-rending Mace $500, and an Aerial Bo Staff $800.");
    var katana = 400
    var kunai = 250
    var mace = 500
    var boStaff = 800
    if (weapons === "no" || weapons === "No") {
      total = total;
      alert("Hmmmm. Alright then. Please take this free ice cream as a consolation gift. Combined with your bought ice cream, your total is $" + total + ".");   
    }
    else if (weapons.toLowerCase() === "katana") {
      total += Number(katana) + Number(total);
      alert("Excellent taste. Your final order comes out to $" + total + ".");
    }
    else if (weapons.toLowerCase() === "kunai") {
      total += Number(kunai) + Number(total);
      alert("Excellent taste. Your final order comes out to $" + total + ".");
    }
    else if (weapons.toLowerCase() === "mace") {
      total += Number(mace) + Number(total);
      alert("Excellent taste. Your final order comes out to $" + total + ".");
    }
    else if (weapons.toLowerCase() === "bo staff") {
      total += Number(boStaff) + Number(total);
      alert("Excellent taste. Your final order comes out to $" + total + ".");
    }
}
else if (menu.toLowerCase() === "butter pecan") {
  var toppings = prompt("Now, what kind of topping would you like? Please choose one. We feature: Sprinkles for $0.75, Oreos for $0.54, or Gummies for $0.45.");
  var butterPecanPrice = Number(butterPecan) + Number(toppings)
  if (toppings === "none" || toppings === "None") {
    total += butterPecan; 
    alert("Alright, your total is $" + total + ".");
  }
  else if (toppings === "no" || toppings === "No") {
    total += butterPecan; 
    alert("Alright, your total is $" + total + ".");
  }
  else if (toppings === "sprinkles" || toppings === "Sprinkles") {
    total += Number(butterPecan) + Number(sprinkles); 
    alert("Alright, your total is $" + total + ".");
  }
  else if (toppings === "oreos" || toppings === "Oreos") {
    total += Number(butterPecan) + Number(oreos);
    alert("Alright, your total is $" + total + ".");
  }
  else if (toppings === "gummies" || toppings === "Gummies") {
    total += Number(butterPecan) + Number(gummies);
    alert("Alright, your total is $" + total + ".");
  }
  else {
    alert("Sorry, we don't have that here."); 
  }
  if (menu.toLowerCase() === "butter pecan") {
    var weapons = prompt("Congratulations! You are our favored 1,000,000th customer!! For our special today, can we interest you in our finest selection of premium grade weapons? Our top-grade armory boasts: Nichirin Katana for $400, Soul-slaying Kunai $250, Earth-rending Mace $500, and an Aerial Bo Staff $800.");
    var katana = 400
    var kunai = 250
    var mace = 500
    var boStaff = 800
    if (weapons === "no" || weapons === "No") {
      total = total;
      alert("Hmmmm. Alright then. Please take this free ice cream as a consolation gift. Combined with your bought ice cream, your total is $" + total + ".");   
    }
    else if (weapons.toLowerCase() === "katana") {
      total += Number(katana) + Number(total);
      alert("Excellent taste. Your final order comes out to $" + total + ".");
    }
    else if (weapons.toLowerCase() === "kunai") {
      total += Number(kunai) + Number(total);
      alert("Excellent taste. Your final order comes out to $" + total + ".");
    }
    else if (weapons.toLowerCase() === "mace") {
      total += Number(mace) + Number(total);
      alert("Excellent taste. Your final order comes out to $" + total + ".");
    }
    else if (weapons.toLowerCase() === "bo staff") {
      total += Number(boStaff) + Number(total);
      alert("Excellent taste. Your final order comes out to $" + total + ".");
    }
  }
}
 



