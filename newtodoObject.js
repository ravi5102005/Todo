let UserTasks = [
    // {taskId   : 1,
    // usertask : "read book",
    // priority : "High",
    // stats    : true
    // },

    // {   taskId   : 3,
    //     usertask : "playing",
    //     priority : "Low",
    //     stats    : false
    // }
        
]
let ProfileDetails=["profile1","Ravi"];

function setDataInStorage(){
  let a =JSON.stringify(UserTasks);
  localStorage.setItem("TaskDetails",a);
}


function getDataInStroge(){
  let strogeDetails = JSON.parse(localStorage.getItem("TaskDetails"));
  for(let i=0;i<strogeDetails.length;i++){
    UserTasks[i]=strogeDetails[i];
  }
}

try{
getDataInStroge();
}
catch(error){}

function setProfileDetailsInStroge(){
  let pro =JSON.stringify(ProfileDetails);
  localStorage.setItem("user_Profile_Details",pro);
}


function getProfileDetailsInStroge(){
  let ProDetails = JSON.parse(localStorage.getItem("user_Profile_Details"));
  for(let i=0;i<2;i++){
    ProfileDetails[i]=ProDetails[i];
  }
}
getProfileDetailsInStroge();


function addTask(task , Taskpriority){
  let newTask = {
    taskId   : UserTasks.length+1,
    usertask : task,
    priority : Taskpriority,
    stats    : false
   }
   UserTasks.push(newTask);
   setDataInStorage();
}

function removeTask(taskId){
    UserTasks.splice(taskId,1);
    setDataInStorage();
}

function changeStats(tasknum){
   if(UserTasks[tasknum].stats==false){
    UserTasks[tasknum].stats=true;
   }
   else{
    UserTasks[tasknum].stats=false;
   }
   setDataInStorage();
}


