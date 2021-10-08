const axios = require('axios');



function postThat() {
    user = document.getElementById('user').value;
    mail = document.getElementById('mail').value;
    mess = document.getElementById('message').value;

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
