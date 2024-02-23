const formulario = document.querySelector('#form')
const modal = document.querySelector('#modal')
const closeButton = document.querySelector('#btn_close-modal')

function openModal() {
  modal.open = true
}

function closeModal() {
  modal.open = false
}

function sendEmail(e) {
  e?.preventDefault()
  const params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  }

 if (params.name && params.email && params.subject && params.message) {
    emailjs.send('default_service','template_x8pzlox', params).then(openModal())
  }
  


}

closeButton.addEventListener('click', closeModal)
formulario.addEventListener('submit', sendEmail)

export default sendEmail