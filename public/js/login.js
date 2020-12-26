'use srict';

document.getElementById('logIn').addEventListener('submit',(e)=>{
    e.preventDefault();
    let email = document.getElementById('loginEmail').value,
        password =document.getElementById('loginPassword').value;
    fetch("/logIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          email,
          password
        })
      })
        .then(response => response.json())
        .catch(err => console.log(err));
});
