import data from '../data.json' assert {'type': 'json'}

const btn = document.querySelector('#login')
btn.addEventListener('click', (event)=>{
    event.preventDefault();

    const user = document.getElementById('user').value
    const password = document.getElementById('password').value

    const login = data.find((object)=>object.usuario === user && object.senha === password)

    if(login){
        window.location = '../index.html'
    }else{
        alert('Usuário não encontrado')
    }

    
})