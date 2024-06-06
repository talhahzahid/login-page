const form  = document.querySelector('form');
const fullname  = document.querySelector('#full-name');
const email  = document.querySelector('#email');
const password  = document.querySelector('#password');


function addData(){
  localStorage.setItem('name',fullname.value);
  localStorage.setItem('email',email.value);
  localStorage.setItem('password',password.value);
}

const arr = []
form.addEventListener('submit',function(event){
    event.preventDefault()
    const userdata = 
     arr.push(
      { name:fullname.value, 
        email:email.value, 
        password:password.value,
      }  
     ) 
    addData();
    form.reset()
    console.log(userdata);
})