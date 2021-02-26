

let tasks = [
    {   id:1,
        taskName: "cooking",
        date: "10.01.21",
        remainder: false,
        
    },
    {   id: 2,
        taskName: "biking",
        date: "11.01.21",
        remainder: false,
        
    },
    {   id: 3,
        taskName: "playing",
        date: "12.01.21",
        remainder: true,
        
    }
];



function showTaskForm() {
    //console.log('add')
    let element = document.getElementsByClassName("task-input")[0];
    element.setAttribute("style", "display: block;");
}
function hideTaskForm(event) {
    //console.log('remove')
    event.preventDefault();
    let element = document.getElementsByClassName("task-input")[0];
    element.removeAttribute("style", "display: none;");
}



function submitTask(){

    let taskNameValue = document.getElementById('task-title-text').value;
    let taskDateValue = document.getElementById('task-date').value;
    let taskRemainderValue = document.getElementById('task-remainder').value;
    if(taskNameValue || taskDateValue !=""){
        let taskValues ={
            id:Math.floor(Math.random() * 1000),
            taskName:taskNameValue,
            date: taskDateValue,
            remainder: taskRemainderValue,
            
        };
        tasks.push(taskValues);
        showTask(tasks);
        cleanInputForms();
        console.log("task array after push",tasks);
    }else{
        alert("fill forms");
    }

}


function showTask(tasks){
    //console.log(task.length);
    document.getElementById("to-do-chart").innerHTML = "";
    for( let i = 0; i < tasks.length; i++ ){
        let taskHtml = `        
                    <h2>${tasks[i].taskName}</h2>
                    <h3>${tasks[i].date}</h3>
                    <button id="taskClose" value="${tasks[i].id}">close</button>        
            `;
    
        let addDiv= document.createElement("div");
        addDiv.classList.add('task');
        addDiv.innerHTML = taskHtml;
    
        let taskContainerDiv = document.getElementById("to-do-chart");
        taskContainerDiv.appendChild(addDiv);
    
    }


}


function deleteTask(event) { 
    let closeId = event.target.value; 
    tasks= tasks.filter(singleTask => singleTask.id != closeId);
    showTask(tasks);

}

function cleanInputForms(){
    document.getElementById("taskForm").reset();
}