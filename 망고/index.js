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
