'use srict';

document.getElementById('signUp').addEventListener('submit',(e)=>{
    e.preventDefault();
    let userName = document.getElementById('userName').value,
        email = document.getElementById('email').value,
        password = document.getElementById('password').value,
        confirmPassword=document.getElementById('confirmPassword').value,
        typeOfUser = document.getElementById('typeOfUser').value;
    fetch("/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          userName,
          email,
          password,
          confirmPassword,
          typeOfUser
        })
      })
        .then(response => response.json())
        .catch(err => console.log(err));
});