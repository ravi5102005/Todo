_("add_icon").addEventListener("click",()=>{
    _("editpage").style.height="100vh";
    _("addTaskLable").textContent = "Enter Your Task";
    _("deleteButton").style.display="none";
    _("userNewTask").value="";
})

_("editpageToHome").addEventListener("click",()=>{
    _("editpage").style.height="0";
})



_("ProfiolepageToHome").addEventListener("click",()=>{
    _("profilePage").style.height="0";
})


_("profile").addEventListener("click",()=>{
    _("profilePage").style.height="100vh";
})


_("filter_icon").addEventListener("click",()=>{
    _("filterBox").style.width="50%";
    _("filterBox").style.padding="1em";
})


_("filterBoxToHome").addEventListener("click",()=>{
    _("filterBox").style.width="0%";
    _("filterBox").style.padding="0";
})