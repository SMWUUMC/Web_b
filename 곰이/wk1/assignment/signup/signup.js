// 폼 제출 막기
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
});

const Validation = () => {
  // 오류메시지 display
  const vals = document.getElementsByClassName("validation");
  for (let i = 0; i < vals.length; i++) {
    vals[i].style.display = "flex";
  }

  // 이름, 이메일, 나이, 비밀번호, 비밀번호확인에 대한 유효성 검사 결과값들
  let valList = [false, false, false, false, false];

  const name_value = document.getElementById("name_val").value;
  const email_value = document.getElementById("email_val").value;
  const age_value = document.getElementById("age_val").value;
  const password_value = document.getElementById("password_val").value;
  const passwordRE_value = document.getElementById("passwordRE_val").value;

  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/;

  // 이름 유효성 검사
  if (name_value !== null && name_value.trim() !== "") {
    document.getElementById("name_valid").innerText = "멋진 이름이네요!";
    valList[0] = true;
  } else {
    document.getElementById("name_valid").innerText = "필수 입력 항목입니다.!";
    valList[0] = false;
  }

  // 이메일 유효성검사
  if (email_value !== null && email_regex.test(email_value)) {
    document.getElementById("email_valid").innerText =
      "올바른 이메일 형식입니다.";
    valList[1] = true;
  } else {
    document.getElementById("email_valid").innerText =
      "잘못된 이메일 형식입니다.";
    valList[1] = false;
  }

  // 나이 유효성 검사
  if (age_value == "") {
    document.getElementById("age_valid").innerText = "나이를 입력해주세요.";
    valList[2] = false;
  } else if (isNaN(age_value)) {
    document.getElementById("age_valid").innerText =
      "나이는 숫자를 입력받아야 합니다.";
    valList[2] = false;
  } else if (age_value < 0) {
    document.getElementById("age_valid").innerText =
      "나이는 음수가 될 수 없습니다.";
    valList[2] = false;
  } else if (age_value != Math.floor(age_value)) {
    document.getElementById("age_valid").innerText =
      "나이는 소수가 될 수 없습니다.";
    valList[2] = false;
  } else if (age_value >= 0 && age_value < 19) {
    document.getElementById("age_valid").innerText =
      "우리 영화 사이트는 19살 이상만 가입이 가능합니다.";
    valList[2] = false;
  } else if (age_value >= 19) {
    document.getElementById("age_valid").innerText = "올바른 나이 형식입니다.";
    valList[2] = true;
  } else {
    document.getElementById("age_valid").innerText = "필수 입력 항목입니다.!";
    valList[2] = false;
  }

  // 비밀번호 유효성 검사
  if (password_value.length < 4) {
    document.getElementById("password_valid").innerText =
      "비밀번호는 최소 4자리 이상이어야 합니다.";
    valList[3] = false;
  } else if (password_value.length > 12) {
    document.getElementById("password_valid").innerText =
      "비밀번호는 최대 12자리까지 가능합니다.";
    valList[3] = false;
  } else if (!passwordRegex.test(password_value)) {
    document.getElementById("password_valid").innerText =
      "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.";
    valList[3] = false;
  } else {
    document.getElementById("password_valid").innerText =
      "올바른 비밀번호 형식입니다.";
    valList[3] = true;
  }

  // 비밀번호 재입력 유효성 검사
  if (
    passwordRE_value.trim() !== "" &&
    passwordRE_value == document.getElementById("password_val").value
  ) {
    document.getElementById("passwordRE_valid").innerText =
      "비밀번호가 일치합니다.";
    valList[4] = true;
  } else {
    document.getElementById("passwordRE_valid").innerText =
      "비밀번호가 일치하지 하지 않습니다.";
    valList[4] = false;
  }
  console.log(valList);

  // valList값에 따른 글자색 변경
  const validations = ["name", "email", "age", "password", "passwordRE"];
  validations.forEach((field) => {
    const color = valList[validations.indexOf(field)] ? "#00ff00" : "#ff0000";
    document.getElementById(`${field}_valid`).style.color = color;
  });

  // 유효성 검사 전체 통과시 sumit
  if (valList.every((value) => value)) {
    // submit으로 처리시 모달을 띄울 수 없음
    // 일단 submit 함수 주석 처리
    // document.getElementById("myForm").submit();
    openModal();
  }
};

// 모달 열기
const openModal = () => {
  const modals = document.getElementsByClassName("modal-wrapper");
  for (let i = 0; i < modals.length; i++) {
    modals[i].style.display = "flex";
  }
};

// 모달 닫기
const closeModal = () => {
  const modals = document.getElementsByClassName("modal-wrapper");
  for (let i = 0; i < modals.length; i++) {
    modals[i].style.display = "none";
  }
};
