const username = document.querySelector("#username");
const useremail = document.querySelector("#useremail");
const userage = document.querySelector("#userage");
const userpswd = document.querySelector("#userpassword");
const pswdConfirm = document.querySelector("#pswd_confirm");
const failureName = document.querySelector(".failure-name");
const successName = document.querySelector(".success-name");
const failureEmail = document.querySelector(".failure-email");
const successEmail = document.querySelector(".success-email");
const failureAgeNoninput = document.querySelector(".failure-age-noninput");
const failureAgeNotNumber = document.querySelector(".failure-age-notnumber");
const failureAgeNegative = document.querySelector(".failure-age-negative");
const failureAgeDecimal = document.querySelector(".failure-age-decimal");
const failureAgeUnderage = document.querySelector(".failure-age-underage");
const successAge = document.querySelector(".success-age");
const failurePswdShort = document.querySelector(".failure-pswd-short");
const failurePswdLong = document.querySelector(".failure-pswd-long");
const failurePswdConditon = document.querySelector(".failure-pswd-condition");
const successPswd = document.querySelector(".success-pswd");
const failurePswdConfirm = document.querySelector(".failure-pswd_confirm");
const successPswdConfirm = document.querySelector(".success-pswd_confirm");
const button = document.querySelector("button");
const email_condition = /[\w\-\.]+\@[\w\-\.]+/g;
const age_condition = /^([1-9]{1}\d{0,1}|0{1})(\.{1}\d{0,2})?$/g;
const pswd_condition = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

function nonInput (value){
    return value.length == 0;
}

function shortPswd(value) {
    return value.length < 4;
}

function longPswd(value) {
    return value.length > 12;
}


function emailValid (email) {
    return email_condition.test(email);
}

function ageValid (age) {
    if(age <= 0) { 
        return 1;
    } else if(age % 1 == 0) {
        return 2;
    } else if (age < 15) {
        return 3;
    } else if(!age_condition.test(age)) {
        return 4;
    }
}

function pswdUnvalid (pswd) {
    if(!pswd_condition.test(pswd)) {
        return true;
    } else {
        return false;
    }
}

function isMatch(pswd1, pswd2) {
    if(pswd1 === pswd2) {
        return true;
    } 
    return false;
}

button.onclick = function () {
    if (nonInput(username.value)) {
        failureName.classList.remove("hide");
        successName.classList.add("hide");
    } else {
        failureName.classList.add("hide");
        successName.classList.remove("hide");
    }

    if (emailValid(useremail.email)) {
        failureEmail.classList.add("hide");
        successEmail.classList.remove("hide");
    } else {
        failureEmail.classList.remove("hide");
        successEmail.classList.add("hide");
    }

    if (nonInput(userage.value)) {
        failureAgeNoninput.classList.remove("hide");
        failureAgeNotNumber.classList.add("hide");
        failureAgeNegative.classList.add("hide");
        failureAgeDecimal.classList.add("hide");
        failureAgeUnderage.classList.add("hide");
        successAge.classList.add("hide");
    } else if (ageValid(userage.value) == 1) {
        failureAgeNoninput.classList.add("hide");
        failureAgeNotNumber.classList.add("hide");
        failureAgeNegative.classList.remove("hide");
        failureAgeDecimal.classList.add("hide");
        failureAgeUnderage.classList.add("hide");
        successAge.classList.add("hide");
    } else if(ageValid(userage.value) == 2) {
        failureAgeNoninput.classList.add("hide");
        failureAgeNotNumber.classList.add("hide");
        failureAgeNegative.classList.add("hide");
        failureAgeDecimal.classList.add("hide");
        failureAgeUnderage.classList.remove("hide");
        successAge.classList.add("hide");
    } else if(ageValid(userage.value) == 3) {
        failureAgeNoninput.classList.add("hide");
        failureAgeNotNumber.classList.add("hide");
        failureAgeNegative.classList.add("hide");
        failureAgeDecimal.classList.remove("hide");
        failureAgeUnderage.classList.add("hide");
        successAge.classList.add("hide"); 
    } else if(ageValid(userage.value) == 4) {
        failureAgeNoninput.classList.add("hide");
        failureAgeNotNumber.classList.remove("hide");
        failureAgeNegative.classList.add("hide");
        failureAgeDecimal.classList.add("hide");
        failureAgeUnderage.classList.add("hide");
        successAge.classList.add("hide"); 
    }else {
        failureAgeNoninput.classList.add("hide");
        failureAgeNotNumber.classList.add("hide");
        failureAgeNegative.classList.add("hide");
        failureAgeDecimal.classList.add("hide");
        failureAgeUnderage.classList.add("hide");
        successAge.classList.remove("hide");
    }

    if (shortPswd(userpswd.value)) {
        failurePswdShort.classList.remove("hide");
        failurePswdLong.classList.add("hide");
        failurePswdConditon.classList.add("hide");
        successPswd.classList.add("hide");
    } else if (longPswd(userpswd.value)) {
        failurePswdShort.classList.add("hide");
        failurePswdLong.classList.remove("hide");
        failurePswdConditon.classList.add("hide");
        successPswd.classList.add("hide");
    } else if (pswdUnvalid(userpswd.pswd)) {
        failurePswdShort.classList.add("hide");
        failurePswdLong.classList.add("hide");
        failurePswdConditon.classList.remove("hide");
        successPswd.classList.add("hide");
    } else {
        failurePswdShort.classList.add("hide");
        failurePswdLong.classList.add("hide");
        failurePswdConditon.classList.add("hide");
        successPswd.classList.remove("hide");
    }

    if(isMatch(userpswd.pswd, pswdConfirm.pswd)) {
        failurePswdConfirm.classList.remove("hide");
        successPswdConfirm.classList.add("hide");
    } else {
        failurePswdConfirm.classList.add("hide");
        successPswdConfirm.classList.remove("hide");
    }
    
}

