document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    var initialPrice = this.getElementById("iprice");
    var age= this.getElementById("age");
    var finalPrice = this.getElementById("fprice");
    var button = this.getElementById("submit");
    button.addEventListener("click", function (event) {
        event.preventDefault();
      if (
        initialPrice.value === "" 
      ) {
        alert("veuillez entrer le prix finale");
        return;
      }
      if (isNaN(initialPrice.value) || initialPrice.value < 0) {
        alert("le prix initiale du ticket doit être un nombre positif!!!!");
        return;
      }

        if (age.value === "0" || age.value === "3") finalPrice.value = initialPrice.value;
        else if (age.value === "1") finalPrice.value = 0;
        else finalPrice.value = 0.5 * initialPrice.value;
    });
  
    buttonDelete.addEventListener("click", function () {
      initialPrice.value = null;
      finalPrice.value = null;
      age.value = null;
    });
  });
  