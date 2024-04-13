document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("work");
    const todoList = document.querySelector(".tasks div:nth-child(1)");
    const doneList = document.querySelector(".tasks div:nth-child(2)");

     // 입력 필드에서 Enter 키 입력 시 이벤트 처리
     inputField.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // 기본 동작 방지
            const text = inputField.value.trim();
            if (text !== "") {
                addTodoItem(text);
            }
        }
    });   
    // 해야할 일 추가 함수
    function addTodoItem(text) {
        const todoItem = document.createElement("div");
        todoItem.innerHTML = `
            <div class="task_section">
                <p>${text}</p>
                <button class="complete-btn">완료</button>
            </div>
            <hr>
        `;
        todoList.appendChild(todoItem);
        inputField.value = ""; // 입력 필드 초기화
        addCompleteEventListener(todoItem);
    }

    // 해야할 일 -> 해낸 일
    function moveToDoneList(todoItem) {
        const doneItem = todoItem.cloneNode(true);
        const completeBtn = doneItem.querySelector(".complete-btn");
        completeBtn.textContent = "삭제";
        doneList.appendChild(doneItem);
        todoList.removeChild(todoItem);
        addDeleteEventListener(doneItem);
    }    
    // 완료버튼 클릭 시 이벤트 리스너
    function addCompleteEventListener(todoItem) {
        const completeBtn = todoItem.querySelector(".complete-btn");
        completeBtn.addEventListener("click", function() {
            moveToDoneList(todoItem);
        });
    }

    // 삭제 버튼 클릭 시 이벤트 리스너
    function addDeleteEventListener(doneItem) {
        const deleteBtn = doneItem.querySelector(".complete-btn");
        deleteBtn.addEventListener("click", function() {
            deleteDoneItem(doneItem);
        });
    }

     // 완료된 일 삭제 함수
     function deleteDoneItem(doneItem) {
        doneList.removeChild(doneItem);
    }   

});
