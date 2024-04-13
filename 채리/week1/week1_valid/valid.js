//HTML 문서에서 각 요소에 대한 참조를 가져오기
let name_unvalid = document.getElementById("name_unvalid");
let name_valid = document.getElementById("name_valid");
let email_unvalid = document.getElementById("email_unvalid");
let email_valid = document.getElementById("email_valid");
let age_19 = document.getElementById("age_19");
let age_unvalid = document.getElementById("age_unvalid");
let age_valid = document.getElementById("age_valid");
let underpwd = document.getElementById("underpwd");
let overpwd = document.getElementById("overpwd");
let pwd_valid = document.getElementById("pwd_valid");
let pwdCheck_unvalid = document.getElementById("pwdCheck_unvalid");
let pwdCheck_valid = document.getElementById("pwdCheck_valid");
let nic = document.getElementById("nic");
let email = document.getElementById("email");
let age = document.getElementById("age");
let pwd = document.getElementById("pwd");
let pwdCheck = document.getElementById("pwdCheck");

const button = document.getElementById("submit");
// 제출 버튼 활성화를 위한 변수
let rightName, rightEmail, rightAge, rightPwd, rightPwdCheck;

//사용자 입력에 대한 이벤트 핸들러를 등록 ; 유효성 검사
//이름
nic.onkeyup = function() {
    if (isStr(nic.value)) {
        rightName = true;
        name_unvalid.classList.add("fail");
        name_valid.classList.remove("fail");
    } else {
        name_valid.classList.add("fail");
        name_unvalid.classList.remove("fail");
    }
}

//이메일
email.onkeyup =function() {
    if (emailRule(email.value)) {
        rightEmail = true;
        email_unvalid.classList.add("fail");
        email_valid.classList.remove("fail");
    } else {
        email_unvalid.classList.remove("fail");
        email_valid.classList.add("fail");
    }
}

// 나이
age.onkeyup = function() {
    if (isRightAge(age.value)) {
        if(age19(age.value)){ //숫자와 미자조건 둘다 충족
            rightAge = true;
            age_unvalid.classList.add("fail");
            age_19.classList.add("fail");
            age_valid.classList.remove("fail");
        } else{ // 숫자는 충족했지만 미자조건은 충족하지 않음
            age_unvalid.classList.add("fail");
            age_19.classList.remove("fail");
            age_valid.classList.add("fail");
        }
    } else { //아예 음수거나 소수
        age_unvalid.classList.remove("fail");
        age_19.classList.add("fail");
        age_valid.classList.add("fail");
    }
}

// 비밀번호
pwd.onkeyup = function() {
    if (lengthofPwd(pwd.value)) {
        if (pwdRule(pwd.value)){ // 길이와 조건 둘 다 충족
            rightPwd = true;
            pwd_valid.classList.remove("fail");
            underpwd.classList.add("fail");
            overpwd.classList.add("fail");
        } else { // 길이는 충족했지만 조건은 충족하지 않음
            pwd_valid.classList.add("fail");
            underpwd.classList.add("fail");
            overpwd.classList.add("fail");
        }
    } else { // 길이가 4자 미만이거나 12자 초과
        pwd_valid.classList.add("fail");//(?)
        if (pwd.value.length < 4) { // 길이가 4자 미만
            underpwd.classList.remove("fail");
            overpwd.classList.add("fail");
        } else { // 길이가 12자 초과
            underpwd.classList.add("fail");
            overpwd.classList.remove("fail");
        }
    }
}

// 비밀번호 확인
pwdCheck.onkeyup = function() {
    if (pwdEqual(pwd.value, pwdCheck.value)) {
        rightPwdCheck = true;
        pwdCheck_valid.classList.remove("fail");
        pwdCheck_unvalid.classList.add("fail");
    } else {
        pwdCheck_valid.classList.add("fail");
        pwdCheck_unvalid.classList.remove("fail");
    }
}

// 제출 버튼 활성화
button.onclick = function() {
    if (nic.value !== "" && email.value !== "" && age.value !== "" && pwd.value !== "" && pwdCheck !== ""){
        return true;
    } else {return false;}
}


//유효성 검사하는 함수들 정의
function isStr(value) {
    return (typeof value === 'string' && value !== "");
}

function emailRule(value) {
    var rightE = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (rightE.test(value)) {
        return true;
    } else {return false;}
}

function isRightAge(age) {
    if (age >= 0 && age % 1 === 0) {
        return true
    } else {return false;}
}

function age19(age) {
    if (age >= 19) return true;
}

function lengthofPwd(pwd) {
    if (pwd.length <= 12 && pwd.length >=4 ) {
        return true;
    } else {return false;}
}


function pwdRule(pwd) {
    // 최소한 하나의 영어, 숫자, 특수문자를 포함하는 정규표현식
    var rightP = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    if (rightP.test(pwd)){
        return true;
    } else {return false;}
}


function pwdEqual(pwd1, pwd2) {
    if (pwd1 === pwd2) {
        return true;
    } else {return false;}
}

const modal = document.querySelector(".modal");
const modal_body = document.querySelector(".modal_body");
const close = document.querySelector(".close");


// 제출 버튼 클릭 -> 모달 창 표시
// .addEventListener("click", ()=>{내용...});
button.addEventListener("click", ()=>{
    if (rightName && rightEmail && rightAge && rightPwd && rightPwdCheck) {
        modal.style.display = "flex";
        modal_body.style.display = "block";
     }
});

// 제출 기본 동작 막기
button.addEventListener("click", (event) => {
    event.preventDefault();
    if (rightName && rightEmail && rightAge && rightPwd && rightPwdCheck) {
        modal.style.display = "flex";
        modal_body.style.display = "block";
    }
});

// 모달 창 닫기
close.addEventListener("click", ()=>{
    modal.style.display = "none";
    modal_body.style.display = "none";
});