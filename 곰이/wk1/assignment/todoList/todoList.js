// input에 todo를 적고 enter를 누르면 createTodo()를 불러와 todo Element 생성
const addTodo = () => {
  const input = document.getElementById("todo-input");
  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      createTodo();
    }
  });
};

// input value로 Element로 생성
const createTodo = () => {
  let input = document.getElementById("todo-input");

  if (input.value.trim() !== "") {
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    const itemText = document.createElement("p");
    itemText.textContent = input.value;
    const completeButton = document.createElement("button");
    completeButton.textContent = "완료";
    newItem.appendChild(itemText);
    newItem.appendChild(completeButton);

    const todoList = document.querySelector("#list-todo");
    todoList.appendChild(newItem);

    input.value = "";
  }
};

// '해야 할 일'에 들어있는 todo Element를 '해낸 일'로 옮기기
const moveTodo = () => {
  const todoList = document.getElementById("list-todo");
  const doneList = document.getElementById("list-done");

  todoList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const button = e.target;
      const item = button.parentElement;
      const list = item.parentElement;
      doneList.appendChild(item);
      button.textContent = "삭제";
      button.removeEventListener("click", moveTodo);
    }
  });
};

// '해낸 일'에 들어있는 todo Element를 삭제
const deleteDone = () => {
  const doneList = document.getElementById("list-done");

  doneList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const button = e.target;
      const item = button.parentElement;
      const list = item.parentElement;
      list.removeChild(item);
    }
  });
};

addTodo();
moveTodo();
deleteDone();
