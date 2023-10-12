let toDO =[
    {
       nameOftask: 'Get my transcript',
        status: 'inprogress'
    },
    {
       nameOftask: 'Go to South-Korea',
        status: 'incomplete'
    },
    {
       nameOftask: 'Shoot my dangerous shot',
        status: 'inprogress'
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
        status: 'inprogress'
    },
    {
       nameOftask: 'Send my cold mail',
        status: 'incompleted'
    },
    {
       nameOftask: 'Write my SOP',
        status: 'completed'
    },
    {
       nameOftask: 'Travel to Monaco',
        status: 'completed'
    },
];
 function updateUI (){ 
    let task_content = " ";

    for (let i=0; i<toDO.length; i++){
        let changeStatusIcon; 
        if(toDO [i].status =='completed'){
            changeStatusIcon = `<div onclick="completed(${i})"><img class="icons"  src="icons.images/check-solid.svg" alt=""></div>`
        }else if (toDO[i].status == 'incomplete') {
          changeStatusIcon =`<div onclick="progress(${i})"> <img class="icons"  src="icons.images/bars-progress-solid.svg" alt=""></div>`}
          else{changeStatusIcon =`<div onclick="incomplete(${i})"> <img class="icons"  src="icons.images/circle-regular (1).svg" alt=""></div>`
          }

       task_content +=`<div id ="task">
                           <div class ="task_contents" id ="task_contents_${i}">
                              <div class ="change_status_icon">
                                <span class="changestat">${changeStatusIcon} </span> 
                              </div>
                                 ${toDO[i].nameOftask}
                              <div class="icons">
                                  <span ><img src="./icons.images/pen-solid.svg" alt="" onclick ="OpenEditTask(${i})"></span> 
                                  <span ><img src="./icons.images/trash-can-regular.svg" alt="" onclick ="deleteTask(${i})"></span> 
                              </div>
                           </div>
                           <div id ="while_editing_${i}" class="while_editing">
                               <input id="edit_bar_${i}" class = "edit_bar" type = "text" placeholder = "edit task">
                               <div class= "icons">
                                  <span ><img src="./icons.images/check-solid.svg" alt=""onclick ="saveEditedTask(${i})" ></span> 
                                  <span ><img src="./icons.images/xmark-solid.svg" alt="" onclick ="cancelEditedTask(${i})"></span> 
                               </div>
                           </div>
                        </div>`
  };       


    document.getElementById("task_items").innerHTML = task_content;
    //console.log(task_content)
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
    //console.log(task_id);
    //delete item
    toDO.splice(task_id,1);
     console.log(toDO);

    updateUI();
  }

   function cancelEditedTask (task_id){
    document.getElementById(`edit_bar_${task_id}`).value ="";
   };

  function saveEditedTask(task_id){
    toDO[task_id].nameOftask = document.getElementById(`edit_bar_${task_id}`).value;
   //let rat = document.getElementById(`edit_bar_${task_id
 
   updateUI();
   saveData()

 }
 function saveData (){
    localStorage.setItem("data", task_items.innerHTML);
 
 }
 