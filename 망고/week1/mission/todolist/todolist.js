document.addEventListener("DOMContentLoaded", function() {
  const plan = document.getElementById("plan");
  const todo = document.getElementById("todo");
  const done = document.getElementById("done");

  plan.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      const studyPlan = plan.value.trim();
      if (studyPlan !== "") {
        addTodoItem(studyPlan);
        plan.value = "";
      }
    }
  });

  function addTodoItem(item) {
    const li = document.createElement("li");
    li.textContent = item;
    
    const successButton = document.createElement("button");
    successButton.textContent = "완료";
    successButton.addEventListener("click", function() {
      moveToDoneList(li);
    });

    li.appendChild(successButton);
    todo.appendChild(li);
    
  }

  function moveToDoneList(item) {
    const li = item.cloneNode(true);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.addEventListener("click", function() {
      done.removeChild(li);
    });
    li.appendChild(deleteButton);
    done.appendChild(li);
    todo.removeChild(item);
    li.removeChild(li.querySelector('button'));
  }
});
