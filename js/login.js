// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function getCookieName(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    console.log(ca);
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getCookieLogin(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    console.log(ca);
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(modalname) {
    var user = getCookieName("username");
    var dados1 = user.split('=');
    var dados2 = dados1[0].split(',');
    var name = dados2[0]
    if (user != "") {
        alert(name + ", você já possui um cadastro!");
    } else {
        user = document.getElementById('uname')
        psw = document.getElementById('psw')
        email = document.getElementById('email')
        if (user != "" && user != null) {
            document.cookie = "username=" + user.value + ",psw=" + psw.value + ",email=" + email.value + ";";
        }
        alert(user.value + ", bem-vindo ao MyBooksList!");
    }
    document.getElementById(modalname).style.display='none'
}

function checkCookieLogin(modalname) {
    var user = getCookieName("username");
    var dados1 = user.split('=');
    console.log(dados1)
    var dados2 = dados1[0].split(',');
    var dados3 = dados1[1].split(',');
    var user = dados2[0]
    var psw = dados3[0]
    
    if (user != "") {
        pswL = document.getElementById('pswL')
        if ((pswL.value == psw) && (user == document.getElementById('user').value)) {
            // Mudar o nome do botão de login
            document.getElementById('login1').style.display='none'
            document.getElementById('login2').style.display='none'
            document.getElementById('logado').style.display='block'
            document.getElementById('username').innerHTML=user
            document.getElementById('useremail').innerHTML=dados1[2]
        }
    } else {
        alert("Este usuário não existe no MyBooksList!");
    }
    document.getElementById(modalname).style.display='none'
}

function logoff() {
    document.getElementById('login1').style.display='block'
    document.getElementById('login2').style.display='block'
    document.getElementById('logado').style.display='none'
    document.getElementById('id03').style.display='none'
}