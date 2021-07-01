const form=document.querySelector('#task-form');
const tasklist=document.querySelector('.collection');
const clearbtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskinput=document.querySelector('#task');
// load all event listeners
loadEventListeners();

function loadEventListeners()
{
  //load all event listneers
  document.addEventListener('DOMContentLoaded',getTasks);
  //add task event
  form.addEventListener('submit',addtask);
  //remove tasks
  tasklist.addEventListener('click',removetask);
  //clear tasks
  clearbtn.addEventListener('click',cleartask);
  //filter tasks
  filter.addEventListener('keyup',filtertasks);
}
function getTasks()
{
  let tasks;
  if(localStorage.getItem('tasks')===null)
  {
    tasks=[];
  }
  else
  {
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task)
  {
    //create li
  const li=document.createElement('li');
  //add class
  li.className='collection-item';
  //create textnode and eppend
  li.appendChild(document.createTextNode(task));
  //create link element
  const link=document.createElement('a');
  link.className='delete-item secondary-content';
  link.innerHTML='<i class="fa fa-remove"></i>';
  li.appendChild(link);
  //append li to ul
  tasklist.appendChild(li);
  });
}
function addtask(e)
{
//check if nothing entered
  if(taskinput.value==='')
  {
    alert('Please enter a value');
  }
  //create li
  const li=document.createElement('li');
  //add class
  li.className='collection-item';
  //create textnode and eppend
  li.appendChild(document.createTextNode(taskinput.value));
  //create link element
  const link=document.createElement('a');
  link.className='delete-item secondary-content';
  link.innerHTML='<i class="fa fa-remove"></i>';
  li.appendChild(link);
  //append li to ul
  tasklist.appendChild(li);
  //add to local storage
  storeinlocalstorage(taskinput.value);
  //clear input
  taskinput.value='';
  e.preventDefault();
}
function storeinlocalstorage(task)
{
  let tasks;
  if(localStorage.getItem('tasks')===null)
  {
    tasks=[];
  }
  else
  {
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks',JSON.stringify(tasks));
}
function removetask(e)
{
  if(e.target.parentElement.classList.contains('delete-item'))
  {
    if(confirm('are you sure ?'))
    {
      e.target.parentElement.parentElement.remove();
      //remove from local storage
      removefromls(e.target.parentElement.parentElement);
    }
  }
}
function removefromls(taskItem)
{
  if(localStorage.getItem('tasks')===null)
  {
    tasks=[];
  }
  else
  {
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task,index)
  {
    if(taskItem.textContent==task)
    {
      tasks.splice(index,1);
    }
  });
  localStorage.setItem('tasks',JSON.stringify(tasks));
}
function cleartask(e)
{
  //way 1
  tasklist.innerHTML='';
  //way 2
  while(tasklist.firstChild)
  {
    tasklist.removeChild(tasklist.firstChild);
  }
  //clear from ls
  clearFromLs();
}
function clearFromLs()
{
  localStorage.clear();
}
function filtertasks(e)
{
  const val=e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(p)
  {
    const v=p.firstChild.textContent;
    if(v.toLowerCase().indexOf(val)!=-1)
    {
      p.style.display='block';
    }
    else{
      p.style.display='none';
    }
  })
}