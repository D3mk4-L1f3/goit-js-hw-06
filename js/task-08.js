document.addEventListener('submit', (event) => {
  
  event.preventDefault();
  
  
  const inputForm = event.target;
  
  const { email, password } = inputForm.elements;
  
  if (!email.value || !password.value) {
    
    alert('Pleace! fill every input!!!')

  } else {
    
    const result = {
      
      email: email.value,
      
      password: password.value
    };
    
    console.dir(result);
  
    inputForm.reset()
  }
});

  