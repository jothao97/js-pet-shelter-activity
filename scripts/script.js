document.addEventListener("DOMContentLoaded", function() {
    // Define an array to shelter your pets
    var petShelter = [];
  
    // Function to add a pet to the shelter - needs to have a param to add a name, type of animal, and age
    function addPet (petName, petType, petAge){
      let pet = {
        name: petName,
        type: petType,
        age: petAge,
      }
      petShelter.push(pet);
      console.log(petShelter);
    }
  
    // Function to display pets in the shelter - given to you!
    function displayPets() {
      let petList = document.getElementById("pet-list");
      petList.innerHTML = ""; // Clear the previous pet list
  
      // Loop through each pet in the shelter and create a list item for each
      for( let i=0; i < petShelter.length; i++){
        let pet = petShelter[i];
        let petItem = document.createElement('li');
        petItem.textContent= `${pet.name}: ${pet.type} (${pet.age} years old)`;
        petList.appendChild(petItem);      //will assist with adding each pet item to be shown in the list on the browser

      }
    }
  
  
    // Add some sample pets to the shelter
    addPet("Fido", "Hamster", 3); //example
    addPet("Twyla", "Dog", 2);
    addPet("Penny", "cat", 3);
    addPet("Nita", "fish", 1);
    addPet("Kora", "Guinea Pig", 5);
    
    // Display the pets in the shelter
    displayPets();

    //STRETCH GOALS:
    // Function to check if the pet shelter has animals that need homes (based on how many animals are in the shelter)
    function checkAnimalsInShelter (){
      if (petShelter.length > 0){
        console.log ("Animals need homes")
      } else {
        console.log ("All animals have homes")
      }
    }
  
    // Check if the pet shelter has animals that need homes by calling the previous function
    checkAnimalsInShelter ();

    }
  
    // Function to calculate the average age of pets in the shelter
    function averageAge(petShelter){
      let average = 0;
      for (let i=0; petShelter.length; i++){
        let pet = petShelter[i];
        average= pet.age;

      }
      let ageAvg= avg / petShelter.length;
    }
  
  
    // Calculate the average age of pets in the shelter by calling the previous function



  );
  