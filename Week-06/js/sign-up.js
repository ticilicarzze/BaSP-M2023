window.addEventListener("load", function () {
  var nameI = document.getElementById("input-name");
  var lastName = document.getElementById("input-last-name");
  var dni = document.getElementById("input-dni");
  var birthdate = document.getElementById("input-birthdate");
  var phone = document.getElementById("input-phone");
  var address = document.getElementById("input-address");
  var location = document.getElementById("input-location");
  var postalCode = document.getElementById("input-postal-code");
  var email = document.getElementById("input-email");
  var password = document.getElementById("input-password");
  var repeatPassword = document.getElementById("input-repeat-password");
  var inputG = document.getElementsByTagName("input");
  var signInValidation = document.querySelector("[name=button-validate]");

  function validateNumber(text) {
    var numbers = "0123456789";
    for (i = 0; i < text.value.length; i++) {
      if (numbers.indexOf(text.value.charAt(i), 0) == -1) {
        return false;
      }
    }
    return true;
  }

  function validateLetter(text) {
    var letters = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
    for (i = 0; i < text.value.length; i++) {
      if (letters.indexOf(text.value.charAt(i), 0) == -1) {
        return false;
      }
    }
    return true;
  }

  function validateAlphaNumeric(text) {
    var letters =
      "1234567890abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
    for (i = 0; i < text.value.length; i++) {
      if (letters.indexOf(text.value.charAt(i), 0) == -1) {
        return false;
      }
    }
    return true;
  }

  function validateMinLength(min, text) {
    if (text.value.length >= min) {
      return true;
    }
    return false;
  }

  function validateMaxLength(max, text) {
    if (text.value.length <= max) {
      return true;
    }
    return false;
  }

  function validateAddress(text) {
    var spaceUbication = text.value.indexOf(" ");
    if (validateAlphaNumeric(text) && spaceUbication != -1) {
      if (validateLetter(text)) {
        return false;
      } else if (validateNumber(text)) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  }

  function validateEmail(text) {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (text.value.match(emailExpression)) {
      return true;
    } else {
      return false;
    }
  }

  function validatePassword(text) {
    if (validateAlphaNumeric(text)) {
      if (validateLetter(text)) {
        return false;
      } else if (validateNumber(text)) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  }

  function validateRepeatPassword(pass, repPass) {
    if (pass.value === repPass.value) {
      return true;
    }
    return false;
  }

  function lenghtCero(inputText) {
    if (inputText.value.length == 0) {
      return false;
    }
    return true;
  }

  nameI.onblur = function () {
    if (validateLetter(nameI) && validateMinLength(3, nameI)) {
      nameI.nextElementSibling.classList.remove("on");
      nameI.classList.remove("fail");
      nameI.classList.add("correct");
      array[0] = 0;
    } else {
      nameI.nextElementSibling.classList.add("on");
      nameI.nextElementSibling.innerText = "Must have more than 3 letters";
      nameI.classList.remove("correct");
      nameI.classList.add("fail");
      array[0] = "Invalid Name\n";
    }
  };

  lastName.onblur = function () {
    if (validateLetter(lastName) && validateMinLength(3, lastName)) {
      lastName.nextElementSibling.classList.remove("on");
      lastName.classList.remove("fail");
      lastName.classList.add("correct");
    } else {
      lastName.nextElementSibling.classList.add("on");
      lastName.nextElementSibling.innerText = "Invalid Last Name";
      lastName.classList.remove("correct");
      lastName.classList.add("fail");
    }
  };

  dni.onblur = function () {
    if (validateNumber(dni) && validateMinLength(8, dni)) {
      dni.nextElementSibling.classList.remove("on");
      dni.classList.remove("fail");
      dni.classList.add("correct");
    } else {
      dni.nextElementSibling.classList.add("on");
      dni.nextElementSibling.innerText = "Invalid DNI";
      dni.classList.remove("correct");
      dni.classList.add("fail");
    }
  };

  birthdate.onblur = function () {
    if (lenghtCero(birthdate)) {
      birthdate.nextElementSibling.classList.remove("on");
      birthdate.classList.remove("fail");
      birthdate.classList.add("correct");
    } else {
      birthdate.nextElementSibling.classList.add("on");
      birthdate.nextElementSibling.innerText = "Add a Birthdate";
      birthdate.classList.remove("correct");
      birthdate.classList.add("fail");
    }
  };

  phone.onblur = function () {
    console.log("hola");
    if (
      validateNumber(phone) &&
      validateMinLength(10, phone) &&
      validateMaxLength(10, phone)
    ) {
      phone.nextElementSibling.classList.remove("on");
      phone.classList.remove("fail");
      phone.classList.add("correct");
    } else {
      phone.nextElementSibling.classList.add("on");
      phone.nextElementSibling.innerText = "Invalid Phone";
      phone.classList.remove("correct");
      phone.classList.add("fail");
    }
  };

  address.onblur = function () {
    if (
      validateAlphaNumeric(address) &&
      validateMinLength(5, address) &&
      validateAddress(address)
    ) {
      address.nextElementSibling.classList.remove("on");
      address.classList.remove("fail");
      address.classList.add("correct");
    } else {
      address.nextElementSibling.classList.add("on");
      address.nextElementSibling.innerText = "Invalid Address";
      address.classList.remove("correct");
      address.classList.add("fail");
    }
  };

  location.onblur = function () {
    if (validateAlphaNumeric(location) && validateMinLength(3, location)) {
      location.nextElementSibling.classList.remove("on");
      location.classList.remove("fail");
      location.classList.add("correct");
    } else {
      location.nextElementSibling.classList.add("on");
      location.nextElementSibling.innerText = "Invalid Location";
      location.classList.remove("correct");
      location.classList.add("fail");
    }
  };

  postalCode.onblur = function () {
    if (
      validateNumber(postalCode) &&
      validateMinLength(4, postalCode) &&
      validateMaxLength(5, postalCode)
    ) {
      postalCode.nextElementSibling.classList.remove("on");
      postalCode.classList.remove("fail");
      postalCode.classList.add("correct");
    } else {
      postalCode.nextElementSibling.classList.add("on");
      postalCode.nextElementSibling.innerText = "Invalid Postal Code";
      postalCode.classList.remove("correct");
      postalCode.classList.add("fail");
    }
  };

  email.onblur = function () {
    if (validateEmail(email)) {
      email.nextElementSibling.classList.remove("on");
      email.classList.remove("fail");
      email.classList.add("correct");
    } else {
      email.nextElementSibling.classList.add("on");
      email.nextElementSibling.innerText = "Invalid Email";
      email.classList.remove("correct");
      email.classList.add("fail");
    }
  };

  password.onblur = function () {
    if (validateMinLength(8, password) && validatePassword(password)) {
      password.nextElementSibling.classList.remove("on");
      password.classList.remove("fail");
      password.classList.add("correct");
    } else {
      password.nextElementSibling.classList.add("on");
      password.nextElementSibling.innerText = "Must have 8 numbers or letters";
      password.classList.remove("correct");
      password.classList.add("fail");
    }
  };

  repeatPassword.onblur = function () {
    if (
      validateMinLength(8, repeatPassword) &&
      validateRepeatPassword(password, repeatPassword) &&
      validatePassword(repeatPassword)
    ) {
      password.nextElementSibling.classList.remove("on");
      repeatPassword.classList.remove("fail");
      repeatPassword.classList.add("correct");
    } else {
      repeatPassword.nextElementSibling.classList.add("on");
      repeatPassword.nextElementSibling.innerText = "Incorrect Password";
      repeatPassword.classList.remove("correct");
      repeatPassword.classList.add("fail");
    }
  };

  nameI.onfocus = function () {
    nameI.classList.remove("correct");
    nameI.classList.remove("fail");
    nameI.nextElementSibling.classList.remove("on");
  };

  lastName.onfocus = function () {
    lastName.classList.remove("correct");
    lastName.classList.remove("fail");
    lastName.nextElementSibling.classList.remove("on");
  };

  dni.onfocus = function () {
    dni.classList.remove("correct");
    dni.classList.remove("fail");
    dni.nextElementSibling.classList.remove("on");
  };

  birthdate.onfocus = function () {
    birthdate.classList.remove("correct");
    birthdate.classList.remove("fail");
    birthdate.nextElementSibling.classList.remove("on");
  };

  phone.onfocus = function () {
    phone.classList.remove("correct");
    phone.classList.remove("fail");
    phone.nextElementSibling.classList.remove("on");
  };

  address.onfocus = function () {
    address.classList.remove("correct");
    address.classList.remove("fail");
    address.nextElementSibling.classList.remove("on");
  };

  location.onfocus = function () {
    location.classList.remove("correct");
    location.classList.remove("fail");
    location.nextElementSibling.classList.remove("on");
  };

  postalCode.onfocus = function () {
    postalCode.classList.remove("correct");
    postalCode.classList.remove("fail");
    postalCode.nextElementSibling.classList.remove("on");
  };

  email.onfocus = function () {
    email.classList.remove("correct");
    email.classList.remove("fail");
    email.nextElementSibling.classList.remove("on");
  };

  password.onfocus = function () {
    password.classList.remove("correct");
    password.classList.remove("fail");
    password.nextElementSibling.classList.remove("on");
  };

  repeatPassword.onfocus = function () {
    repeatPassword.classList.remove("correct");
    repeatPassword.classList.remove("fail");
    repeatPassword.nextElementSibling.classList.remove("on");
  };
});

signInValidation.onclick = function (e) {
  e.preventDefault();
  var j = 0,
    w = 0;
  var array2 = [];

  for (var i = 0; i <= 10; i++) {
    if (array[i] != 0 && array[i] != 1) {
      array2[j] = array[i];
      j++;
    }
    if (array[i] == 1) {
      w++;
      inputG[i].nextElementSibling.classList.add("on");
      inputG[i].nextElementSibling.innerText = "Complete this field";
    }
  }
  if (w > 0) {
    alert("Incompleted fields");
  }

  if (w == 0 && array2.length == 0) {
    alert("Account Created");
  } else {
    alert(array2);
  }
};
