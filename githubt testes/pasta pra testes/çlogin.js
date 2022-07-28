function validate()
{
    var user= document.getElementById("user").value;
    var password= document.getElementById("password").value;

    if (user=="kadu"&& password=="112233")
    {
        window.location.href = "http://127.0.0.1:5500/teste2.html"
        let token = Math.random().toString(16).substring(2)
        sessionStorage.setItem("token", token)
        alert("log ok")
    }
}

// if (localStorage.getItem('token') == null){
//     alert('you must to be logged to acess this page')
//     window.location.href = "http://127.0.0.1:5500/teste.html"
// }

// function sair()
// {
//     location.href = "http://127.0.0.1:5500/teste.html"
//     localStorage.removeItem('token')
// }