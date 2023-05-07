const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_duarvfn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      //alert('Enviado!');
      Swal.fire('Tu mensaje fue enviado')
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});