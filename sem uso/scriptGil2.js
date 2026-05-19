

const title = "My tasks";
const taskList = [
	{
		status:"pending",
		description: "Go shopping"
	},
	{
		status:"pending",
		description: "Short Exercise"
	},
	{
		status:"pending",
		description: "Meditation"
	},
	{
		status:"close",
		description: "Reding"
	},
];
const subTitle = "Completed"

const listTasksContainer = document.querySelector('[tasks-pending]');
const listTasksCloedContainer = document.querySelector('[tasks-closed]');
const addTask = document.querySelector('#addTask');
// addTask.addEventListener('change', addTaskHandle)
taskList.forEach(task => {

	const paragraph = createElement({ tag: 'label', listaDePropriedades: [{ name: 'for', value: task.description}] });

	paragraph.innerHTML = task.description;

	paragraph.addEventListener('click', ()=>{
		const index = taskList.findIndex(taskTemp => taskTemp.description === task.description)
		taskList[index] = {...task, status: taskList[index].status === 'close' ?  'pending': 'close'}
		const taskTemp = listTasksContainer.querySelectorAll('div');
		taskTemp.forEach(div => {
			if(div.children[0].getAttribute('id') === taskList[index].description) div.remove();
		})

		mostrarNaTela(paragraph, taskList[index]);
	})

	mostrarNaTela(paragraph, task);
});

function createElement({ tag='div', listaDePropriedades = [{name: '', value: ''}]}){
	const elementTemp = document.createElement(tag)
	listaDePropriedades?.forEach(propriedade => {
		elementTemp.setAttribute(propriedade.name, propriedade.value)
	})
	return elementTemp
}
















function mostrarNaTela(paragraph, task){
	const inputTaskChoose = createElement({ 
			tag: 'input', 
			listaDePropriedades: 
				[{name: 'type', value: 'checkbox'}, {name: 'id', value: task.description}]
	});

	const taskContainer = createElement({ tag: "div", listaDePropriedades: []});
	taskContainer.append(inputTaskChoose);
	taskContainer.append(paragraph);

	if(task.status === 'close') {
		listTasksCloedContainer.append(taskContainer)
	}

	if(task.status === 'pending')	{
		listTasksContainer.append(taskContainer)
	}

	console.log('taskList', taskList)
}































function addTaskHandle(e){
	console.log(e)
	const newTask = {
		status:"pending",
		description: e.target.value
	}
	taskList.push(newTask);
	console.log(taskList);

	
	const paragraph = createElement({ tag: 'label', listaDePropriedades: [{ name: 'for', value: newTask.description}] });

	paragraph.innerHTML = newTask.description;

	paragraph.addEventListener('click', ()=>{
		const index = taskList.findIndex(taskTemp => taskTemp.description === newTask.description)
		taskList[index] = {...newTask, status: taskList[index].status === 'close' ?  'pending': 'close'}
		const taskTemp = listTasksContainer.querySelectorAll('div')
		taskTemp.forEach(div => {
			if(div.children[0].getAttribute('id') === taskList[index].description) div.remove()
		})

		mostrarNaTela(paragraph, taskList[index]);
	});

	mostrarNaTela(paragraph, newTask);
}
