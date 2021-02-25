

let task = [
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

//let task = [];
 



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

    var taskNameValue = document.getElementById('task-title-text').value;
    var taskDateValue = document.getElementById('task-date').value;
    var taskRemainderValue = document.getElementById('task-remainder').value;


    let taskValues ={
        id:Math.floor(Math.random() * 1000),
        taskName:taskNameValue,
        date: taskDateValue,
        remainder: taskRemainderValue,
        
    };

    task.push(taskValues);

    console.log("task array after push",task);
    //console.log(task[3].taskName);


    showTask(task);

    

}


function showTask(task){
    //console.log(task.length);
    document.getElementById("to-do-chart").innerHTML="";
    //console.log(task.length);
    for(let i=0;i<task.length;i++){
        let taskHtml = `        
                    <h2>${task[i].taskName}</h2>
                    <h3>${task[i].date}</h3>
                    <h4>${task[i].remainder}</h4>
                    <h4>id:${task[i].id}</h4>
                    <button id="taskClose" value="${task[i].id}">close</button>        
            `;
    
        let addDiv= document.createElement("div");
        addDiv.classList.add('task');
        addDiv.innerHTML = taskHtml;
    
        let taskContainerDiv = document.getElementById("to-do-chart");
        taskContainerDiv.appendChild(addDiv);

        // let closeId2 = document.getElementById("taskClose").value; 
        // console.log("closed task Id 2 ",closeId2);
    
    }

}

// function removeTask(task){
//     let closeId = document.getElementById("taskClose").value; 
//     //let closeId = 55;
//     console.log("closed task Id ",closeId);
//     console.log("task before close ",task);
//     let index= task.findIndex(obj=> obj.id===closeId);
//     console.log("close task index in array ",index);
//     task.splice(index, 1); 
//     console.log("array after close ",task);
//     showTask(task);
// } 

function myFunction(event) { 
    console.log("clicked button id",event.target.value);
    let closeId = event.target.value; 
    console.log("closed task Id ",closeId);
    console.log("task array before close ",task);
    let taskIndex= task.findIndex(singleTask=> singleTask.id === closeId);
    //let taskIndex = 0;
    console.log("close task index in array ",taskIndex);


    //task.splice(taskIndex, 1); 
    //console.log("array after close ",task);
    //showTask(task);

  }