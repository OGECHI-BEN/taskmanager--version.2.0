   let toDO =[
    {
       nameOftask: 'Get my transcript',
        status: 'incomplete'
    },
    {
       nameOftask: 'Go to South-Korea',
        status: 'incomplete'
    },
    {
       nameOftask: 'Shoot my dangerous shot',
        status: 'incomplete'
    },
    {
       nameOftask: ' finish one pot of spaghetti',
        status: 'incomplete'
    },
    {
       nameOftask: ' Register at the gym',
        status: 'incomplete'
    },
    {
       nameOftask: 'be active on Twitter',
        status: 'incomplete'
    },
    {
       nameOftask: 'Send my cold mail',
        status: 'incomplete'
    },
    {
       nameOftask: 'Write my SOP',
        status: 'incomplete'
    },
    {
       nameOftask: 'Travel to Monaco',
        status: 'incomplete'
    },
];

 function updateUI (){ 
    let task_content = " ";
   for (let i=0; i<toDO.length; i++){
      // this would change the status icon from complete, inprogress and complete;
      let StatusIcon; 
      if (toDO[i].status == 'incomplete'){ StatusIcon = `icons.images/circle-regular (1).svg`}
      else if(toDO[i].status =='inprogress'){StatusIcon = `icons.images/hourglass-regular.svg`}
      else{StatusIcon =`icons.images/check-double-solid.svg`};
      //console.log(StatusIcon);

      //

       task_content +=`<div id ="task" class="task" onclick ="closeStatusIcon(${i})">
                           <div class ="task_contents" id ="task_contents_${i}">
                              <div>
                                 <div class = "status_container">
                                    <div onclick="openStatusDropdown(${i})" id ="defaultIcon"><img class="icons" src="${StatusIcon}" alt=""></div> 
                                       <div id="status_dropdown_${i}" class="status_dropdown">
                                          <div id="incompletIcons"  class="incompletIcons" onclick ="changeStatus(${i},'incomplete')"><img src="./circle-regular (1).svg" alt=""></div>
                                          <div id="inprogressIcons" class="inprogressIcons" onclick ="changeStatus(${i},'inprogress')"><img src="./hourglass-regular.svg" alt=""></div>
                                          <div id="completedIcons" class="completedIcons" onclick ="changeStatus(${i},'completed')"><img src="./icons.images/check-double-solid.svg" alt=""></div>
                                       </div>        
                                    </div>
                                 </div>
                               
                                 ${toDO[i].nameOftask}

                                 <div class="icons">
                                    <span ><img src="./icons.images/pen-solid.svg" alt="" onclick ="OpenEditTask(${i})"></span> 
                                    <span ><img src="./icons.images/trash-can-regular.svg" alt="" onclick ="deleteTask(${i})"></span> 
                                 </div>
                              </div>
                           </div>
                           <div id ="while_editing_${i}" class="while_editing">
                               <input id="edit_bar_${i}" class = "edit_bar" type = "text" placeholder = "edit task">
                               <div class= "icons">
                                  <span ><img src="./icons.images/check-double-solid.svg" alt=""onclick ="saveEditedTask(${i})" ></span> 
                                  <span ><img src="./icons.images/xmark-solid.svg" alt="" onclick ="cancelEditedTask(${i})"></span> 
                               </div>
                           </div>
                        </div>`
  };       
    document.getElementById("task_items").innerHTML = task_content;
 }

 updateUI();

 // adding an object array to the array
 function add(){
    let newToDoName= document.getElementById('input_bar').value;
     //because this an object this how or what the input template should look like
     let newTask = {
        nameOftask:  newToDoName,
        status: 'incomplete'
     };

    if (newTask.nameOftask ==''){
        alert('please add a task');
     } else {
        toDO.push(newTask);
     };
     console.log(toDO);
     document.getElementById('input_bar').value ="";
    updateUI();
    
 };
 
 function   OpenEditTask (task_id){
    document.getElementById(`edit_bar_${task_id}`).value = toDO[task_id].nameOftask;
    document.getElementById(`while_editing_${task_id}`).style.display = 'flex';
    document.getElementById(`task_contents_${task_id}`).style.display = 'none';
  }

  function deleteTask(task_id){
    toDO.splice(task_id,1);
     console.log(toDO);
    updateUI();
  }

   function cancelEditedTask (task_id){
    document.getElementById(`edit_bar_${task_id}`).value ="";
   };

  function saveEditedTask(task_id){
    toDO[task_id].nameOftask = document.getElementById(`edit_bar_${task_id}`).value;
   updateUI();
   saveData();
 }

 function saveData (){
    localStorage.setItem("data", task_items.innerHTML);
 }


 function openStatusDropdown(task_id){
  // document.getElementById('defaultIcon').style.display = 'none';
   document.getElementById(`status_dropdown_${task_id}`).style.display = 'flex';
}
  // change the status of the Icons
 function changeStatus(task_id, status){
    toDO[task_id].status = status;
   //  console.log(toDO);
   // document.getElementById(`status_dropdown_${task_id}`).style.display = 'none';
    updateUI();
}
function closeStatusIcon(task_id) {
    document.getElementById('defaultIcon').style.display = 'flex';
    console.log(toDO);
}
const div = document.querySelector('.my-div');

