const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  
  event.preventDefault();

  const inputEmail = form.elements.email.value;

  const inputPassword = form.elements.password.value;

  const result = {
    email: inputEmail,
    password: inputPassword
  };
  
  !inputEmail || !inputPassword
    
  ?
    alert('Pleace! fill every input!!!')
  :
    console.dir(result);
  
    form.reset();
  });


  