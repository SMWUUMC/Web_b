let i = j = 0;


function addActiveList() {
    let todovalue = document.querySelector(".addToDoInfo").value;
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.className = "doneBtn" + i;
    li.innerHTML = todovalue;
    button.innerHTML = "완료";
    li.appendChild(button);
    document.querySelector(".listActive").appendChild(li);
    document.querySelector(".doneBtn"+i).addEventListener('click', doneActive);
    document.querySelector(".addToDoInfo").value = '';
    i++;
    return false;
}

function doneActive() {;
    let content = this.parentNode;
    this.innerHTML = "삭제";
    this.className = "deleteBtn" + j;
    document.querySelector(".deleteBtn"+j).addEventListener('click', deleteDone);
    j++;
    document.querySelector(".listDone").appendChild(content);
}

function deleteDone() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}