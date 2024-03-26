let eleDetails={
    elementName:"div",
    className:"userTaska",
    idName:"userTask",
}

let userEditTaskId="no";
createNewElement(UserTasks.length,"taskWindow",eleDetails);

function addContentInUi(){
    for(let i=0;i<UserTasks.length;i++){
      document.getElementsByClassName("userTask")[i].textContent=UserTasks[i].usertask;
    }
  }
  addContentInUi();


_("addNewUserTask").addEventListener("click",(Event)=>{
    if((_("userNewTask").value).trim(" ")!=""){
      if(userEditTaskId!="no"){
        removeTask(userEditTaskId);
        userEditTaskId=="no";
      }
      addTask((_("userNewTask").value),_("taskpriority").value);
    createNewElement(UserTasks.length,"taskWindow",eleDetails);
    addContentInUi();
    showCompleteTask();
    setpriorityInUi();
    setTaskDetailsInBoxUi();
    _("userNewTask").value="";
    _("editpage").style.height="0";
    }
    
})






function showCompleteTask(){
  for(let i=0;i<UserTasks.length;i++){
    if(UserTasks[i]["stats"]==true){
     
      document.getElementsByClassName("completebox")[i].style.backgroundColor="rgb(10, 199, 199)";
      }
      else{
        document.getElementsByClassName("completebox")[i].style.backgroundColor="white";
      }
  }
  
}
showCompleteTask();

function setpriorityInUi(){
  for(let i=0;i<UserTasks.length;i++){
    document.getElementsByClassName("userTask")[i].style.color="black";
    if(UserTasks[i]["priority"]=="High"){
      document.getElementsByClassName("userTask")[i].style.color="rgb(9, 150, 300 )";
    }
  }
}
setpriorityInUi();


_("taskWindow").addEventListener("click",(Event)=>{
    userEditTaskId=Event.target.parentNode.id.slice(8);
    if(Event.target.className == "userTask"){
        _("deleteButton").style.display="inline";
        _("addTaskLable").textContent = "Edit Your Task";
        _("userNewTask").value=UserTasks[userEditTaskId]["usertask"];
        _("editpage").style.height="100vh";
    }
})

_("deleteButton").addEventListener("click",()=>{
    removeTask(userEditTaskId);
    _("editpage").style.height="0";
    createNewElement(UserTasks.length,"taskWindow",eleDetails);
    addContentInUi();
    showCompleteTask();
    setpriorityInUi();
    setTaskDetailsInBoxUi();
})

_("ProfileImg").addEventListener("click",(Event)=>{
  if(Event.target.className=="userProfile"){
    setEditProfileImg(Event.target.id);
  }
})


_("userEditName").placeholder="  Name below 12 char";
_("userEditName").addEventListener("input",(Event)=>{
  if(Event.target.value.length<=12 && Event.target.value.trim(" ")!=""){
  _("EditUsername").textContent=Event.target.value;
  }
})


let profifeNumber = "profile1";
function setEditProfileImg(profifeNum){
  profifeNumber=profifeNum;
  switch(profifeNum){
  case "profile1":
  _("EditProfile").style.backgroundImage="url(data:image/jpeg;base64,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)";
  break;

  case "profile2":
    _("EditProfile").style.backgroundImage="url(https://i.pinimg.com/originals/09/24/a7/0924a7ef295741e916c8f42512bbe5bd.jpg)";
    // _("profile").style.backgroundImage=_("EditProfile").style.backgroundImage;
  break;

  case "profile3":
    _("EditProfile").style.backgroundImage="url(data:image/jpeg;base64,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)";
  break;

  case "profile4":
  _("EditProfile").style.backgroundImage="url(https://images.pexels.com/photos/262325/pexels-photo-262325.jpeg?cs=srgb&dl=pexels-pixabay-262325.jpg&fm=jpg)";
  }

}

_("saveProfileDetails").addEventListener("click",()=>{
  _("username").textContent=_("EditUsername").textContent;
  _("profile").style.backgroundImage=_("EditProfile").style.backgroundImage;
  ProfileDetails[0]=`${profifeNumber}`;
  ProfileDetails[1]=_("EditUsername").textContent;
  setProfileDetailsInStroge();
  _("profilePage").style.height="0";
})


function setUserProfileInUI(){
  console.log(ProfileDetails);
  setEditProfileImg(ProfileDetails[0]);
  _("EditUsername").textContent=ProfileDetails[1];
  _("username").textContent=ProfileDetails[1];
  _("profile").style.backgroundImage=_("EditProfile").style.backgroundImage;
}
setUserProfileInUI();

function setTaskDetailsInBoxUi(){
let pirmaryCount=0;
let CompletedCount=0;
for(let i=0;i<UserTasks.length;i++){
   if(UserTasks[i]["priority"]=="High"){
       pirmaryCount++;
   }
   if(UserTasks[i]["stats"]==true){
      CompletedCount++;
   }
}

C("TaskCount")[0].textContent=UserTasks.length;
C("TaskCount")[1].textContent=pirmaryCount;
C("TaskCount")[2].textContent=UserTasks.length-pirmaryCount;
C("TaskCount")[3].textContent=CompletedCount;
C("TaskCount")[4].textContent=UserTasks.length-CompletedCount;
}
setTaskDetailsInBoxUi();


let ConformMsg = "complete";
_("task_filters").addEventListener("click",(Event)=>{
  if(Event.target.id=="selectAll_icon"){
        _("ConformBox").style.transform="translatey(200%)";
        _("confofmMsg").textContent="Do You want To mark Completed For ALL tasks";
        ConformMsg = "complete";
       
  }
  else if(Event.target.id=="removeall_icon"){
    _("ConformBox").style.transform="translatey(200%)";
    _("confofmMsg").textContent="Do You want To Remove ALL Tasks";
    ConformMsg = "remove";
  }
})


_("ConformBox").addEventListener("click",(Event)=>{
  if(Event.target.id=="conformYesButton"){
    if(ConformMsg=="complete"){
      markAllTaskToComplete();
    }
    else if(ConformMsg=="remove"){
      removeAllTasks();
    }
    _("ConformBox").style.transform="translatey(-200%)";

  }
  else if(Event.target.id=="conformNoButton"){
    _("ConformBox").style.transform="translatey(-200%)";
  }
})


function markAllTaskToComplete(){
  for(let i=0;i<UserTasks.length;i++){
    UserTasks[i]["stats"]=true;
  }
    addContentInUi();
    showCompleteTask();
    setpriorityInUi();
    setTaskDetailsInBoxUi();
    setDataInStorage();
}

function removeAllTasks(){
  for(let i=0;i<UserTasks.length;i++){
    removeTask(i);
  }
  localStorage.removeItem("TaskDetails");
  while (resultBox.firstChild) {
    resultBox.removeChild(resultBox.firstChild);
  }
    UserTasks=[];
    setTaskDetailsInBoxUi();
}



let ChooseFilterUser="";
_("filterBox").addEventListener("click",(Event)=>{
  for(let i=0;i<5;i++){
    C("filter_user_option")[i].style.color="black";
  }
  if(Event.target.className=="filter_user_option"){
    _(`${Event.target.id}`).style.color="rgb(1, 1, 157)";
    ChooseFilterUser=Event.target.id;
  }
})


_("StartFilterButton").addEventListener("click",()=>{
  filterConditionUser(ChooseFilterUser);
  _("filterBox").style.width="0%";
  _("filterBox").style.padding="0";
})


function filterConditionUser(filter){
    if(filter=="filter_completed"){
      filterCompleted();
    }
    else if(filter=="filter_incompleted"){
      filterInCompleted();
    }
    else if(filter=="filter_primary"){
      filterPrimary();
    }
    else if(filter=="filter_secondary"){
      filterSecondary();
    }
    else if(filter=="filter_All"){
      for(let i=0;i< UserTasks.length;i++){
        C("userTaska")[i].style.display="flex";
      }
    }

}


function filterCompleted(){
  hiddenTaskInUi();
  UserTasks.filter(function (task,index){
    if(task["stats"]){
      C("userTaska")[index].style.display="flex";
    }
  })
}

function filterInCompleted(){
  hiddenTaskInUi();
  UserTasks.filter(function (task,index){
    if(task["stats"]==false){
      C("userTaska")[index].style.display="flex";
    }
  })
}

function filterPrimary(){
  hiddenTaskInUi();
  UserTasks.filter(function (task,index){
    if(_("filter_primary_option").value=="all"){
        if(task["priority"]=="High"){
          C("userTaska")[index].style.display="flex";
        }
    }
    
    else if(_("filter_primary_option").value=="Completed"){
      if(task["priority"]=="High" && task["stats"]==true){
        C("userTaska")[index].style.display="flex";
      }
    }
  
    else if(_("filter_primary_option").value=="Incompleted"){
      if(task["priority"]=="High" && task["stats"]==false){
        C("userTaska")[index].style.display="flex";
      }
    }

  })
}

function filterSecondary(){
  hiddenTaskInUi();
  UserTasks.filter(function (task,index){
    if(_("filter_secondary_option").value=="all"){
        if(task["priority"]=="Low"){
          C("userTaska")[index].style.display="flex";
        }
    }
    
    else if(_("filter_secondary_option").value=="Completed"){
      if(task["priority"]=="Low" && task["stats"]==true){
        C("userTaska")[index].style.display="flex";
      }
    }
  
    else if(_("filter_secondary_option").value=="Incompleted"){
      if(task["priority"]=="Low" && task["stats"]==false){
        C("userTaska")[index].style.display="flex";
      }
    }

  })
}

function hiddenTaskInUi(){
  for(let i=0;i< UserTasks.length;i++){
    C("userTaska")[i].style.display="none";
  }
}














