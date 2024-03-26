function _(idName) {
    let id = document.getElementById(idName);
    return id;
  }

function C(className) {
    let UserClassName = document.getElementsByClassName(className);
    return UserClassName;
}


let resultBox = _("taskWindow");
function createNewElement(number,parentName,properties){

    while (resultBox.firstChild) {
        resultBox.removeChild(resultBox.firstChild);
    }

    for(let i=0;i<number;i++){
       const ele = document.createElement(`${properties["elementName"]}`);
     if(properties["className"]!=undefined){
       ele.setAttribute("class",`${properties["className"]}`);
     }
     if(properties["idName"]!=undefined){
       ele.setAttribute("id",`${properties["idName"]}${i}`);
     }
     _(`${parentName}`).appendChild(ele);1
     if(properties["content"]!=undefined){
       if(properties["idName"]!=undefined){
         _(`${properties["idName"]}${i}`).textContent=properties["content"];
       }
       else if(properties["className"]!=undefined){
           document.getElementsByClassName(`${properties["className"]}`)[i].textContent=properties["content"];
           
       }
     }


     const completedOption = document.createElement("div");
     completedOption.setAttribute("class","completebox");
   _(`${properties["idName"]}${i}`).appendChild(completedOption)

   const taskWindow = document.createElement("div");
   taskWindow.setAttribute("class","userTask");
 _(`${properties["idName"]}${i}`).appendChild(taskWindow)
     
    }
}


_("taskbox").addEventListener("click",(Event)=>{
    if(Event.target.className=="completebox"){
      let completeTaskNum =  Event.target.parentNode.id.slice(8);
      if(UserTasks[completeTaskNum]["stats"]==false){
      document.getElementsByClassName("completebox")[completeTaskNum].style.backgroundColor="rgb(10, 199, 199)";
      changeStats(completeTaskNum);
     
      }
      else{
        document.getElementsByClassName("completebox")[completeTaskNum].style.backgroundColor="white";
        changeStats(completeTaskNum);
      }
    }
    setTaskDetailsInBoxUi();
})






