// yeh text aur id leta hai jo drag func ne di hai
function drop(e) {
  e.preventDefault();
  let taskId = e.dataTransfer.getData("text");
  //   console.log(taskId);
  if (e.target.id.includes("task")) return;
  e.target.appendChild(document.getElementById(taskId));
  //update count jab bhi ham drop karenge
  updateQuantity();
}

// yeh drag ko allow karta hai
function allowdrop(e) {
  e.preventDefault();
}

//  yeh text aur id bhejega
function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

// quantity btayega kitne task hai column hai aur update karega
function updateQuantity() {
  const todoColumn = document.getElementById("todo");
  const inProgressColumn = document.getElementById("in-progress");
  const inQaColumn = document.getElementById("in-qa");
  const doneColumn = document.getElementById("done");

  const todoHeader = document.getElementById("todo-header");
  const inProgressHeader = document.getElementById("in-progress-header");
  const inQaHeader = document.getElementById("in-qa-header");
  const doneHeader = document.getElementById("done-header");

  //   todoHeader.innerText = `${todoHeader.innerText.split(" ")[0]} (${
  //     todoColumn.children.length
  //   })`;

  //update header kr rhe hai yha hum function ka use karke parameter
  //  bhej rhe hum header,column ka name
  updateHeader(todoHeader, todoColumn);
  updateHeader(inProgressHeader, inProgressColumn);
  updateHeader(inQaHeader, inQaColumn);
  updateHeader(doneHeader, doneColumn);
}

function updateHeader(header, column) {
  header.innerText = `${header.innerText.split(" ")[0]} (${
    column.children.length
  })`;
}

//update count karenge runtime per aur jab bhi drop hoga
updateQuantity();
