btn.onclick = function() {
    var buscar = document.getElementById("buscar").value;
    if (buscar == "hola") {
        panel.innerHTML ="Hola Amigo";
    } 
    else if (buscar == "metasploit"){
        panel.innerHTML = `<a href="#metasploit">Metasploit</a>`;
    } 
    else if (buscar == "anonimo"){
        panel.innerHTML = `<a href="#anonimo">Anonimo</a>`;
    } 
    else if (buscar == "termux"){
        panel.innerHTML = `<a href="#termux">Termux</a>`;
    } 
    else if (buscar == "oreiro"){
        panel.innerHTML = `<a href="#oreiro">Oreiro</a>`;
    } 
    else if (buscar == "cool edit"){
        panel.innerHTML = `<a href="#cool">Cool Edit</a>`;
    } 
    else if (buscar == "offices"){
        panel.innerHTML = `<a href="#of">Offices</a>`;
    } 
    else if (buscar == "activar"){
        panel.innerHTML = `<a href="#activar">activadores</a>`;
    }
    else if (buscar == "nmap"){
        panel.innerHTML = `<a href="#nmap">Nmap</a>`;
    } 
    else if (buscar == "loquendo"){
        panel.innerHTML = `<a href="#lo">Loquendo</a>`;
    } 
    else if (buscar == "httrack"){
        panel.innerHTML = `<a href="#ht">HTTrack</a>`;
    } 
    else if (buscar == "fl studio"){
        panel.innerHTML = `<a href="#fl">FL STUDIO</a>`;
    } 
    else if (buscar == "camtasia"){
        panel.innerHTML = `<a href="#ca">Camtasia</a>`;
    } 
    else if (buscar == "xgrinda"){
        panel.innerHTML = `<a href="#xg">Xgrinda</a>`;
    } 
    else if (buscar == "3utools"){
        panel.innerHTML = `<a href="#utool">3Utools</a>`;
    } 
    else if (buscar == "roms"){
        panel.innerHTML = `<a href="#rm">Roms para Celulares</a>`;
    } 
    else if (buscar == "drivers"){
        panel.innerHTML = `<a href="#drivers">Drivers para Celulares</a>`;
    } 
    else if (buscar == "checkrain"){
        panel.innerHTML = `<a href="#check">Checkra1in</a>`;
    } 
    else {
        panel.innerHTML = "No se Ha Encotrado Ningun Resultado Asegurate De Escribir Bien"
    }
}
