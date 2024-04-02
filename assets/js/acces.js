function loguear()
{
    let user = document.getElementById("username").value;
    let password = document.getElementById("password").value;



if(user == "user" && password == "user")
{
    window.location = "hell.html";
}

else if(user == "vampy" && password == "sec" || user == "invitado" && password == "invitado")
{
    window.location = "ch.html";
}

else
{
    alert("Vuelve a revisar los datos por favor");
}

}