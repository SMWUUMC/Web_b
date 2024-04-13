/*
function validateForm() {
  const form = document.querySelector('.login');
  const name = form.name.value;
  const email = form.email.value;
  const age = form.age.value;
  const password = form.password.value;
  const pwdcheck = form.pwdcheck.value;

  // 비밀번호 일치 확인
  if (password !== pwdcheck) {
    alert("비밀번호가 일치하지 않습니다.");
    return false;
  }

  // 모든 검증을 통과하면 성공 메시지 표시
  showSuccessMessage();
  
  // 실제로는 여기서 서버로 폼 데이터를 전송하는 코드를 작성합니다.
  // 폼 제출 이벤트의 기본 동작을 방지하여 페이지 새로고침이 발생하지 않도록 합니다.
  return false; 
}

function showSuccessMessage() {
  const successDiv = document.querySelector('.modal-wrapper');
  successDiv.style.display = 'block';
}

function closeSuccessMessage() {
  const successDiv = document.querySelector('.modal-wrapper');
  successDiv.style.display = 'none';
}

const close = document.getElementById("close");

close.onclick = () => {
  modal.style.display = "none";
};
*/
/*
window.onload = function() {
  const close = document.querySelector(".close-wrapper button");
  close.onclick = closeMessage;
};

function validateForm() {
  const form = document.querySelector('.login');
  const name = form.name.value;
  const email = form.email.value;
  const age = form.age.value;
  const password = form.password.value;
  const pwdcheck = form.pwdcheck.value;

  if (password < 4) {
    errorMessage.innerText = "비밀번호는 최소 4자리 이상이어야 합니다.";
    errorMessage.style.display = 'block';
    return false;
  }

  if (password > 12) {
    errorMessage.innerText = "비밀번호는 최대 12자리까지 가능합니다.";
    errorMessage.style.display = 'block';
    return false;
  }

  if (password !== pwdcheck) {
    errorMessage.innerText = "비밀번호가 일치하지 않습니다.";
    errorMessage.style.display = 'block';
    return false;
  }

  // 모든 검증을 통과하면 성공 메시지 표시
  showMessage();
  
 
  return false; 
}

function showMessage() {
  const successDiv = document.querySelector('.modal-wrapper');
  successDiv.style.display = 'flex';
}

function closeMessage() {
  const successDiv = document.querySelector('.modal-wrapper');
  successDiv.style.display = 'none';
}
*/
/*

document.getElementById("submit").addEventListener("click",
    function(event) {
      var name = document.getElementsByName("name")[0].value;
      var email = document.getElementsByName("email")[0].value;
      var age = document.getElementsByName("age")[0].value;
      var password = document.getElementsByName("password")[0].value;
      var pwdcheck = document.getElementsByName("pwdcheck")[0].value;
      var submit = document.getElementsById("submitBtn");
    
      var nameError = document.getElementById("nameError");
      var emailError = document.getElementById("emailError");
      var ageError = document.getElementById("ageError");
      var passwordError = document.getElementById("passwordError");
      var pwdcheckError = document.getElementById("pwdcheckError");
    
      var nameCorrect = document.getElementById("nameCorrect");
      var emailCorrect = document.getElementById("emailCorrect");
      var ageCorrect = document.getElementById("ageCorrect");
      var passwordCorrect = document.getElementById("passwordCorrect");
      var pwdcheckCorrect= document.getElementById("pwdcheckCorrect");
    
      if (name === "") {
          nameError.textContent = "필수 입력 항목입니다.";
          return false;
      } else {
          nameError.textContent = "";
          nameCorrect.textContent = "멋진 이름이네요!";
      }
    
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === "") {
          emailError.textContent = "올바른 이메일 형식이 아닙니다.";
          return false;
      } else if (!emailPattern.test(email)) {
          emailError.textContent = "올바른 이메일 형식이 아닙니다.";
          return false;
      } else {
          emailError.textContent = "";
          emailCorrect.textContent = "올바른 이메일 형식입니다.";
      }
    
      if (age === "") {
          ageError.textContent = "나이를 입력해주세요.";
          return false;
      } else if (isNaN(age)) {
          ageError.textContent = "나이는 숫자 형식이어야 합니다.";
          return false;
      } else if (age < 0) {
          ageError.textContent = "나이는 음수가 될 수 없습니다.";
          return false;
      } else if (age.includes(".")) {
          ageError.textContent = "나이는 소수가 될 수 없습니다.";
          return false;
      } else if (age < 19) {
          ageError.textContent = "미성년자는 가입할 수 없습니다.";
          return false;
      } else {
          ageError.textContent = "";
          ageCorrect.textContent = "올바른 나이 형식입니다.";
      }
    
      if (password === "") {
          passwordError.textContent = "비밀번호는 최소 4자리 이상이어야 합니다.";
          return false;
      } else if (password.length < 4) {
          passwordError.textContent = "비밀번호는 최소 4자리 이상이어야 합니다.";
          return false;
      } else if (password.length > 12) {
          passwordError.textContent = "비밀번호는 최대 12자리까지 가능합니다.";
          return false;
      } else if (!isValidPwd(password)) {
          passwordError.textContent = "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.";
          return false;
      } else {
          passwordError.textContent = "";
          passwordCorrect.textContent = "올바른 비밀번호입니다.";
      }
    
      if (password !== pwdcheck) {
          pwdcheckError.textContent = "비밀번호가 일치하지 않습니다.";
          return false;
      } else {
          pwdcheckError.textContent = "";
          pwdcheckCorrect.textContent = "비밀번호가 일치합니다.";
      }
    
      document.querySelector(".modal-box").style.display = "flex";
    
      return true;
    

    
    event.preventDefault();
  });



document.querySelector(".modal-content button").addEventListener("click", function() {
  document.querySelector(".modal-box").style.display = "none";
});

function isValidPwd(password) {
  var pwdPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+[\]{}|\\:;<>?,./-]).{4,12}$/;
  return pwdPattern.test(password);
}
*/
/*
document.getElementById("submitBtn").addEventListener("click", function (event) {
    event.preventDefault();
  


  var name = document.getElementsByName("name")[0].value;
  var email = document.getElementsByName("email")[0].value;
  var age = document.getElementsByName("age")[0].value;
  var password = document.getElementsByName("password")[0].value;
  var pwdcheck = document.getElementsByName("pwdcheck")[0].value;

  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var ageError = document.getElementById("ageError");
  var passwordError = document.getElementById("passwordError");
  var pwdcheckError = document.getElementById("pwdcheckError");

  var nameCorrect = document.getElementById("nameCorrect");
  var emailCorrect = document.getElementById("emailCorrect");
  var ageCorrect = document.getElementById("ageCorrect");
  var passwordCorrect = document.getElementById("passwordCorrect");
  var pwdcheckCorrect= document.getElementById("pwdcheckCorrect");

  if (name === "") {
      nameError.textContent = "필수 입력 항목입니다.";
      return false;
  } else {
      nameError.textContent = "";
      nameCorrect.textContent = "멋진 이름이네요!";
  }

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
      emailError.textContent = "올바른 이메일 형식이 아닙니다.";
      return false;
  } else if (!emailPattern.test(email)) {
      emailError.textContent = "올바른 이메일 형식이 아닙니다.";
      return false;
  } else {
      emailError.textContent = "";
      emailCorrect.textContent = "올바른 이메일 형식입니다.";
  }

  if (age === "") {
      ageError.textContent = "나이를 입력해주세요.";
      return false;
  } else if (isNaN(age)) {
      ageError.textContent = "나이는 숫자 형식이어야 합니다.";
      return false;
  } else if (age < 0) {
      ageError.textContent = "나이는 음수가 될 수 없습니다.";
      return false;
  } else if (age.includes(".")) {
      ageError.textContent = "나이는 소수가 될 수 없습니다.";
      return false;
  } else if (age < 19) {
      ageError.textContent = "미성년자는 가입할 수 없습니다.";
      return false;
  } else {
      ageError.textContent = "";
      ageCorrect.textContent = "올바른 나이 형식입니다.";
  }

  if (password === "") {
      passwordError.textContent = "비밀번호는 최소 4자리 이상이어야 합니다.";
      return false;
  } else if (password.length < 4) {
      passwordError.textContent = "비밀번호는 최소 4자리 이상이어야 합니다.";
      return false;
  } else if (password.length > 12) {
      passwordError.textContent = "비밀번호는 최대 12자리까지 가능합니다.";
      return false;
  } else if (!isValidPwd(password)) {
      passwordError.textContent = "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.";
      return false;
  } else {
      passwordError.textContent = "";
      passwordCorrect.textContent = "올바른 비밀번호입니다.";
  }

  if (password !== pwdcheck) {
      pwdcheckError.textContent = "비밀번호가 일치하지 않습니다.";
      return false;
  } else {
      pwdcheckError.textContent = "";
      pwdcheckCorrect.textContent = "비밀번호가 일치합니다.";
  }

  document.querySelector(".modal-box").style.display = "flex";

  return true;

});

function isValidPwd(password) {
  var pwdPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+[\]{}|\\:;<>?,./-]).{4,12}$/;
  return pwdPattern.test(password);
}

document.querySelector(".modal-content button").addEventListener("click", function() {
  document.querySelector(".modal-box").style.display = "none";
});
*/

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    
    var isValid = true;
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var age = document.getElementsByName("age")[0].value;
    var password = document.getElementsByName("password")[0].value;
    var pwdcheck = document.getElementsByName("pwdcheck")[0].value;

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var ageError = document.getElementById("ageError");
    var passwordError = document.getElementById("passwordError");
    var pwdcheckError = document.getElementById("pwdcheckError");

    var nameCorrect = document.getElementById("nameCorrect");
    var emailCorrect = document.getElementById("emailCorrect");
    var ageCorrect = document.getElementById("ageCorrect");
    var passwordCorrect = document.getElementById("passwordCorrect");
    var pwdcheckCorrect= document.getElementById("pwdcheckCorrect");

    if (name === "") {
        nameError.textContent = "필수 입력 항목입니다.";
        isValid = false;
    } else {
        nameError.textContent = "";
        nameCorrect.textContent = "멋진 이름이네요!";
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.textContent = "올바른 이메일 형식이 아닙니다.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "올바른 이메일 형식이 아닙니다.";
        isValid = false;
    } else {
        emailError.textContent = "";
        emailCorrect.textContent = "올바른 이메일 형식입니다.";
    }

    if (age === "") {
        ageError.textContent = "나이를 입력해주세요.";
        isValid = false;
    } else if (isNaN(age)) {
        ageError.textContent = "나이는 숫자 형식이어야 합니다.";
        isValid = false;
    } else if (age < 0) {
        ageError.textContent = "나이는 음수가 될 수 없습니다.";
        isValid = false;
    } else if (age.includes(".")) {
        ageError.textContent = "나이는 소수가 될 수 없습니다.";
        isValid = false;
    } else if (age < 19) {
        ageError.textContent = "미성년자는 가입할 수 없습니다.";
        isValid = false;
    } else {
        ageError.textContent = "";
        ageCorrect.textContent = "올바른 나이 형식입니다.";
    }

    if (password === "") {
        passwordError.textContent = "비밀번호는 최소 4자리 이상이어야 합니다.";
        isValid = false;
    } else if (password.length < 4) {
        passwordError.textContent = "비밀번호는 최소 4자리 이상이어야 합니다.";
        isValid = false;
    } else if (password.length > 12) {
        passwordError.textContent = "비밀번호는 최대 12자리까지 가능합니다.";
        isValid = false;
    } else if (!isValidPwd(password)) {
        passwordError.textContent = "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.";
        isValid = false;
    } else {
        passwordError.textContent = "";
        passwordCorrect.textContent = "올바른 비밀번호입니다.";
    }

    if (password === "" || pwdcheck === "") {
        pwdcheckError.textContent = "비밀번호가 일치하지 않습니다.";
        isValid = false;
    } else if(password !== pwdcheck) {
        pwdcheckError.textContent = "비밀번호가 일치하지 않습니다.";
        isValid = false;
    } else {
        pwdcheckError.textContent = "";
        pwdcheckCorrect.textContent = "비밀번호가 일치합니다.";
    }
    if (!isValid) {
        event.preventDefault();
    } else {
        document.querySelector(".modal-box").style.display = "flex";
    }
});

function isValidPwd(password) {
  var pwdPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+[\]{}|\\:;<>?,./-]).{4,12}$/;
  return pwdPattern.test(password);
}

document.querySelector(".modal-content button").addEventListener("click", function() {
  document.querySelector(".modal-box").style.display = "none";
});
