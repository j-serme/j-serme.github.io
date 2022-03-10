let username = document.querySelector('#username')
let password = document.querySelector('#password')
let button = document.querySelector('#send')
let content = document.querySelector('.content');


button.addEventListener('click', ()=>{getToken(username.value, password.value)})


function getToken(user, pass) {

    const url = "http://hidden-castle-30865.herokuapp.com/api/login_check"

    let corpsDeRequete = {
        username: user,
        password: pass
    }

    let requete = {

        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(corpsDeRequete)

    }

    fetch(url, requete)
        .then(reponse=>reponse.json())
        .then(reponseDeserialisee=> {
            // console.log(reponseDeserialisee)
             getData(reponseDeserialisee.token)
        })


}


function getData(token){


    let url = "http://hidden-castle-30865.herokuapp.com/api/coucou"


    let requete = {

        method: "GET",
        headers: {"Content-type": "application/json",
                    "Authorization": `Bearer ${token}`}


    }

    fetch(url,requete)
        .then(response => response.json())
        .then(coucou => {content.innerHTML = coucou}
        )


}


