
let createButton = document.getElementById("new-project-form");
let nameText = document.getElementById("name");
let taskList = document.getElementById("task-list");
let create = document.getElementById("create");
let mainFormButton = document.getElementById("main-form");
let submit = document.getElementById("submit");
let projectSelect = document.getElementById("projectChoice"); 
let priority = document.getElementById("choice")
let title = document.getElementById("title"); 
let description = document.getElementById("description"); 
let dueDate = document.getElementById("dueDate"); 
let editTaskModal = new bootstrap.Modal(document.getElementById("edit-task"));



createButton.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (nameText.value === "") {
    console.log('failure');
  } else {
    console.log('success');
    acceptData();
    create.setAttribute("data-bs-dismiss", "modal");
    create.click();
    createOptions(); 
    (() => {
      create.setAttribute("data-bs-dismiss", "");
    })();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = nameText.value;
  createTask();
};

let createTask = () => {


  taskList.innerHTML += `
    <div>
      <p>${data.text}</p>
    </div>
  `;
  resetForm();
};

let resetForm = () => {
  nameText.value = "";
};

mainFormButton.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidationMainForm();
  });

let formValidationMainForm = () => {
  
  if (title.value === "" || description.value === "" || dueDate.value === "" || priority.value === "" || projectSelect.value === "default") {
    console.log('failure');
  } else {
    console.log('success');
    acceptDataList();
    submit.setAttribute("data-bs-dismiss", "modal");
    submit.click();
  
   }
};

let dataList = {};

let acceptDataList = () => {
   dataList["title"] = title.value;
   dataList["description"] = description.value;
   dataList["date"] = dueDate.value;
   dataList["priority"] = priority.value;
   dataList["projectSelect"] = projectSelect.value;
   console.log(dataList);
   
}
// Function to update options in "Choose a Project"
let createOptions = () => {
  let option = document.createElement("option");
  option.text = data.text;
  option.value = data.text;
  projectSelect.add(option);
};







