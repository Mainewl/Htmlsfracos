if (localStorage.getItem('token') == null){
    alert('you must to be logged to acess this page')
    window.location.href = "http://127.0.0.1:5500/teste.html"
}

function sair()
{
    location.href = "http://127.0.0.1:5500/teste.html"
    sessionStorage.removeItem('token')
}