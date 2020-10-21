let chat = document.createElement('div')
chat.id= "chat"
let hide = document.createElement('input')
hide.type = 'submit'
hide.value = 'Hide Chat'
hide.addEventListener('click', function() {chat.className = 'hidden'})
document.body.appendChild(hide)
document.body.appendChild(chat)

fetch('http://localhost:3000/messages')
.then(response => response.json())
.then(console.log(response))