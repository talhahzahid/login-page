
const email = localStorage.getItem('email')
const password = localStorage.getItem('password')


// const emailLogin = document.querySelector('#email')
// const passwordLogin = document.querySelector('#password')
// const form = document.querySelector('form');


const formLogin = document.querySelector('form');

formLogin.addEventListener('submit', function(event){
    event.preventDefault();
    if (email === null || password === null) {
        alert('Please register before attempting to login.');
        return
    }
    const emailLogin = document.querySelector('#email').value;
    const passwordLogin = document.querySelector('#password').value;

    if(emailLogin === email && passwordLogin === password ){
        alert('Login Successful')
    }else{
        alert('Email and Password do not match')
    }
    formLogin.reset()
})


