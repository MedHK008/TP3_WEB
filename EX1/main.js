document.addEventListener("DOMContentLoaded", function () {
    var code = document.getElementById("code");
    var nom = document.getElementById("nom");
    var age = document.getElementById("age");
    var salaire = document.getElementById("salaire"); // Corrected the variable name
    var taux = document.getElementById("taux");
    var Nsalaire = document.getElementById("Nsalaire");
    var button = document.getElementById("calcule");
    var buttonDelete = document.getElementById("delete");
  
    button.addEventListener("click", function () {
      this.style.backgroundColor = "#db6415";
      if (
        code.value === "" ||
        nom.value === "" ||
        age.value === "" ||
        salaire.value === ""
      ) {
        alert("Please fill in all fields needed.");
        return;
      }
  
      if (isNaN(age.value) || isNaN(parseFloat(salaire.value))) {
        alert("Age and Salary must be numbers.");
        return;
      }
  
      if (age.value < 5) taux.value = 0;
      else if (age.value < 10 && age.value >= 5) taux.value = 2.5;
      else taux.value = 4;
  
      Nsalaire.value =
        parseFloat(salaire.value) +
        (parseFloat(taux.value) * parseFloat(salaire.value)) / 100;
  
      console.log(Nsalaire.value);
    });
  
    buttonDelete.addEventListener("click", function () {
      code.value = null;
      nom.value = null;
      age.value = null;
      salaire.value = null;
      taux.value = null;
      Nsalaire.value = null;
    });
  });
  