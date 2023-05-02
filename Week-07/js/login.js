var email = document.getElementById("input-email");
var password = document.getElementById("input-password");
var signInValidation = document.querySelector("[name=button-validate]");
var arrayError = [];

password.onblur = function () {
  if (validateMinLength(8, password) && validatePassword(password)) {
    password.nextElementSibling.classList.remove("on");
    password.classList.remove("fail");
    password.classList.add("correct");
  } else {
    password.nextElementSibling.classList.add("on");
    password.nextElementSibling.innerText = "Invalid Password";
    password.classList.remove("correct");
    password.classList.add("fail");
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

email.onfocus = function () {
  email.classList.remove("correct");
  email.classList.remove("fail");
};

password.onfocus = function () {
  password.classList.remove("correct");
  password.classList.remove("fail");
};

function lengthCero(text) {
  if (text.value.length === 0) {
    return true;
  }
  return false;
}

function validateMinLength(min, text) {
  if (text.value.length >= min) {
    return true;
  }
  return false;
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

function cleanAll() {
  email.value = "";
  password.value = "";
}

signInValidation.onclick = function (e) {
  e.preventDefault();
  if (
    validatePassword(password) &&
    validateEmail(email) &&
    validateMinLength(8, password)
  ) {
    cleanAll();
    email.classList.remove("correct");
    password.classList.remove("correct");
    alert("Valid account!");
  } else {
    if (
      (validatePassword(password) && validateMinLength(8, password)) == false
    ) {
      if (lengthCero(password)) {
        password.nextElementSibling.classList.add("on");
        password.nextElementSibling.innerText = "Complete this field";
      }
      arrayError.push("Invalid password!\n");
    }
    if (validateEmail(email) == false) {
      if (lengthCero(email)) {
        email.nextElementSibling.classList.add("on");
        email.nextElementSibling.innerText = "Complete this field";
      }
      arrayError.push("Invalid email!\n");
    }
    alert(arrayError);
    arrayError = [];
  }
};

document
  .getElementById("sign-in-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();

    if (validateInformation() == "") {
      alert("email: " + emailValue + " " + "\npassword: " + passwordValue);
    } else {
      alert(validateInformation());
    }

    var url = `https://api-rest-server.vercel.app/login?email=${email.value}&password=${password.value}`;

    fetch(url)
      .then(function (res) {
        // if (!res.ok) throw new Error(res);
        return res;
      })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (data.success) {
          alert("Login success! Received data: " + JSON.stringify(data));
          return data;
        } else {
          alert("Login failed! Received data: " + JSON.stringify(data));
          return data;
        }
      })
      .catch(function (res) {
        console.error(res);
        alert("There is an error, try again: " + JSON.stringify(res));
      });
  });
