const form=document.querySelector('form');
const i=document.getElementById('task');
const heading=document.querySelector('h5');
const s=document.querySelector('select');
//clear input

//form.addEventListener('submit',run);
//events to run on input
// i.addEventListener('keydown',run);
// i.addEventListener('keyup',run);
//i.addEventListener('keypress',run);
//i.addEventListener('focus',run);
//i.addEventListener('blur',run);
// i.addEventListener('cut',run);
// i.addEventListener('copy',run);
//i.addEventListener('paste',run);
//i.addEventListener('input',run);
//change event used for select list
s.addEventListener('change',run)




function run(e)
{
  console.log(`${e.type}`)
  console.log(e.target.value);
  heading.innerText=e.target.value;
  //e.preventDefault();
}