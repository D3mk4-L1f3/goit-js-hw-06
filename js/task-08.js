document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = {};

    for (const element of form.elements) {
      if (element.name && element.value !== '') {
        formData[element.name] = element.value;}
    }

    if (Object.keys(formData).length === 0) {
      alert('Please, fill every input!');
      return;
    }

    console.dir(formData);

    form.reset();
  });
