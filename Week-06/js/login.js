var email = document.getElementById("input-email");
var password = document.getElementById("input-password");
var signInValidation = document.querySelector("[name=button-validate]");

function validateEmail(inputText) {
  var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (inputText.value.match(emailExpression)) {
    return true;
  } else {
    return false;
  }
}

password.onblur = function () {
  if (validateCharCode(password) && lengthPassword(password)) {
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

function lengthPassword(text) {
  if (text.value.length >= 8) {
    return true;
  }
  return false;
}

function validateCharCode(text) {
  for (var i = 0; i < text.length; i++) {
    var charCode = text.charCodeAt(i);
    if (
      !(charCode > 47 && charCode < 58) && // numeric (0-9)
      !(charCode > 64 && charCode < 91) && // upper alpha (A-Z)
      !(charCode > 96 && charCode < 123) // lower alpha (a-z)
    ) {
      return false; // non-alphanumeric character found
    }
  }
  return true;
}

signInValidation.onclick = function (e) {
  e.preventDefault();
  if (
    validateCharCode(password) &&
    validateEmail(email) &&
    lengthPassword(password)
  ) {
    alert("Valid account!");
  } else {
    if ((validateCharCode(password) && lengthPassword(password)) === false) {
      if (lengthCero(password)) {
        password.nextElementSibling.classList.add("on");
        password.classList.add("fail");
        password.nextElementSibling.innerText = "Complete this field";
      }
      alert("Invalid password!");
    }
    if (validateEmail(email) === false) {
      if (lengthCero(email)) {
        email.nextElementSibling.classList.add("on");
        email.classList.add("fail");
        email.nextElementSibling.innerText = "Complete this field";
      }
      alert("Invalid email!");
    }
  }
};
