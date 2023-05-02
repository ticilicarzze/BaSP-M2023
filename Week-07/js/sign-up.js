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
  var signUpValidation = document.querySelector("[name=button-validate]");
  var arrayError = [];

  function validateAll() {
    if (
      validateLetter(nameI) &&
      validateMinLength(3, nameI) &&
      validateLetter(lastName) &&
      validateMinLength(3, lastName) &&
      validateNumber(dni) &&
      validateMinLength(8, dni) &&
      !lengthCero(birthdate) &&
      validateNumber(phone) &&
      validateMinLength(10, phone) &&
      validateMaxLength(10, phone) &&
      validateAlphaNumeric(address) &&
      validateMinLength(5, address) &&
      validateAddress(address) &&
      validateAlphaNumeric(location) &&
      validateMinLength(3, location) &&
      validateNumber(postalCode) &&
      validateMinLength(4, postalCode) &&
      validateMaxLength(5, postalCode) &&
      validateEmail(email) &&
      validateMinLength(8, password) &&
      validatePassword(password) &&
      validateMinLength(8, repeatPassword) &&
      validateRepeatPassword(password, repeatPassword) &&
      validatePassword(repeatPassword)
    ) {
      return true;
    }
  }

  function cleanAll() {
    nameI.value = "";
    lastName.value = "";
    dni.value = "";
    birthdate.value = "";
    phone.value = "";
    address.value = "";
    location.value = "";
    postalCode.value = "";
    email.value = "";
    password.value = "";
    repeatPassword.value = "";
    signUpValidation.value = "";
    nameI.classList.remove("correct");
    lastName.classList.remove("correct");
    dni.classList.remove("correct");
    birthdate.classList.remove("correct");
    phone.classList.remove("correct");
    address.classList.remove("correct");
    location.classList.remove("correct");
    postalCode.classList.remove("correct");
    email.classList.remove("correct");
    password.classList.remove("correct");
    repeatPassword.classList.remove("correct");
    signUpValidation.classList.remove("correct");
  }

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

  function lengthCero(text) {
    if (text.value.length === 0) {
      return true;
    }
    return false;
  }

  nameI.onblur = function () {
    if (validateLetter(nameI) && validateMinLength(3, nameI)) {
      nameI.nextElementSibling.classList.remove("on");
      nameI.classList.remove("fail");
      nameI.classList.add("correct");
    } else {
      nameI.nextElementSibling.classList.add("on");
      nameI.nextElementSibling.innerText = "Must have more than 3 letters";
      nameI.classList.remove("correct");
      nameI.classList.add("fail");
    }
  };

  lastName.onblur = function () {
    if (validateLetter(lastName) && validateMinLength(3, lastName)) {
      lastName.nextElementSibling.classList.remove("on");
      lastName.classList.remove("fail");
      lastName.classList.add("correct");
    } else {
      lastName.nextElementSibling.classList.add("on");
      lastName.nextElementSibling.innerText = "Must have more than 3 letters";
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
      dni.nextElementSibling.innerText = "Must have more than 7 numbers";
      dni.classList.remove("correct");
      dni.classList.add("fail");
    }
  };

  birthdate.onblur = function () {
    if (!lengthCero(birthdate)) {
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
      phone.nextElementSibling.innerText = "Must have 10 numbers";
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
      address.nextElementSibling.innerText =
        "Must have more than 5 letters, a blank space and at least one number";
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
      location.nextElementSibling.innerText = "Must have 3 numbers or letters";
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
      postalCode.nextElementSibling.innerText =
        "Must have between 4 and 5 numbers";
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
      password.nextElementSibling.innerText =
        "Must have more than 8 numbers or letters";
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
      repeatPassword.nextElementSibling.innerText = "Not same Password";
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

  signUpValidation.onclick = function (e) {
    e.preventDefault();
    if (validateAll()) {
      ("Valid Account");
      alert(
        "Valid Account\n" +
          "name: " +
          nameI.value +
          "\nLast Name: " +
          lastName.value +
          "\nDNI: " +
          dni.value +
          "\nBirth Date: " +
          birthdate.value +
          "\nPhone: " +
          phone.value +
          "\nAddress: " +
          address.value +
          "\nLocation: " +
          location.value +
          "\nPost Code: " +
          postalCode.value +
          "\nEmail: " +
          email.value +
          "\nPassword: " +
          password.value +
          "\nRepeat Password: " +
          repeatPassword.value
      );
      fetch;
      cleanAll();
    } else {
      if ((validateLetter(nameI) && validateMinLength(3, nameI)) == false) {
        arrayError.push("Invalid Name!\n");
        if (lengthCero(nameI)) {
          nameI.nextElementSibling.classList.add("on");
          nameI.nextElementSibling.innerText = "Complete this field";
        }
      }
      if (
        (validateLetter(lastName) && validateMinLength(3, lastName)) == false
      ) {
        arrayError.push("Invalid Last Name!\n");
        if (lengthCero(lastName)) {
          lastName.nextElementSibling.classList.add("on");
          lastName.nextElementSibling.innerText = "Complete this field";
        }
      }
      if ((validateNumber(dni) && validateMinLength(8, dni)) == false) {
        arrayError.push("Invalid DNI!\n");
        if (lengthCero(dni)) {
          dni.nextElementSibling.classList.add("on");
          dni.nextElementSibling.innerText = "Complete this field";
        }
      }
      if (!lengthCero(birthdate) == false) {
        arrayError.push("Invalid Birthdate!\n");
        if (lengthCero(birthdate)) {
          birthdate.nextElementSibling.classList.add("on");
          birthdate.nextElementSibling.innerText = "Complete this field";
        }
      }
      if (
        (validateNumber(phone) &&
          validateMinLength(10, phone) &&
          validateMaxLength(10, phone)) == false
      ) {
        arrayError.push("Invalid Phone!\n");
        if (lengthCero(phone)) {
          phone.nextElementSibling.classList.add("on");
          phone.nextElementSibling.innerText = "Complete this field";
        }
      }
      if (
        (validateAlphaNumeric(address) &&
          validateMinLength(5, address) &&
          validateAddress(address)) == false
      ) {
        arrayError.push("Invalid Address!\n");
        if (lengthCero(address)) {
          address.nextElementSibling.classList.add("on");
          address.nextElementSibling.innerText = "Complete this field";
        }
      }
      if (
        (validateAlphaNumeric(location) && validateMinLength(3, location)) ==
        false
      ) {
        arrayError.push("Invalid Location!\n");
        if (lengthCero(location)) {
          location.nextElementSibling.classList.add("on");
          location.nextElementSibling.innerText = "Complete this field";
        }
      }
      if (
        (validateNumber(postalCode) &&
          validateMinLength(4, postalCode) &&
          validateMaxLength(5, postalCode)) == false
      ) {
        arrayError.push("Invalid Postal Code!\n");
        if (lengthCero(location)) {
          postalCode.nextElementSibling.classList.add("on");
          postalCode.nextElementSibling.innerText = "Complete this field";
        }
      }
      if (validateEmail(email) == false) {
        arrayError.push("Invalid email!\n");
        if (lengthCero(email)) {
          email.nextElementSibling.classList.add("on");
          email.nextElementSibling.innerText = "Complete this field";
        }
      }
      if (
        (validateMinLength(8, password) && validatePassword(password)) == false
      ) {
        arrayError.push("Invalid Password!\n");
        if (lengthCero(location)) {
          password.nextElementSibling.classList.add("on");
          password.nextElementSibling.innerText = "Complete this field";
        }
      }
      if (
        (validateMinLength(8, repeatPassword) &&
          validateRepeatPassword(password, repeatPassword) &&
          validatePassword(repeatPassword)) == false
      ) {
        arrayError.push("Not same Password!\n");
        if (lengthCero(repeatPassword)) {
          repeatPassword.nextElementSibling.classList.add("on");
          repeatPassword.nextElementSibling.innerText = "Complete this field";
        }
      }
      alert(arrayError);
      arrayError = [];
    }
  };
});
