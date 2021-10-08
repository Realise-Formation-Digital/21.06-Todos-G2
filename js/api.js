const axios = require('axios');


function postThat() {
    console.log("allo");
    let user = document.getElementById('user').value;
    let mail = document.getElementById('mail').value;
    let mess = document.getElementById('message').value;

    console.log(user);

    axios.post('http://localhost:3000/post', {
    user: user,
    mail: mail,
    message: mess
}).then(resp => {
    console.log(resp.data);
}).catch(error => {
    console.log(error);
});   
}
