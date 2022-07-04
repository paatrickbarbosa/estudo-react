const form = document.getElementById('task-form'); //pegar form
const taskList = document.getElementById('tasks'); //pegar input

//quando o form submit for clicado
form.onsubmit = function (j) {
	j.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

//adiciona a task
function addTask(description) {
	const taskContainer = document.createElement('div'); //cria a div
	const newTask = document.createElement('input'); //cria o input
	const taskLabel = document.createElement('label'); // cria a label
	const taskDescriptionNode = document.createTextNode(description); //cria o texto

	newTask.setAttribute('type', 'checkbox'); // seta os atributos 
	newTask.setAttribute('name', description); // seta os atributos
	newTask.setAttribute('id', description); // seta os atributos

	taskLabel.setAttribute('for', description);  //seta os atribustos
	taskLabel.appendChild(taskDescriptionNode); //apende o item criado

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);  //apende o item criado
	taskContainer.appendChild(taskLabel); //apende o item criado

	taskList.appendChild(taskContainer); //apende o item criado
}






//1º Tentei fazer sem usar o form
function btnCriar(){
    
    let task = document.getElementById('task');
    let taskValor = task.value;
    let res = document.getElementById('res');
   
    let check = document.createElement('input');
    check.setAttribute("type","checkbox");
    let label = document.createTextNode(taskValor);
    
    res.appendChild(check);
    res.appendChild(label);
}


