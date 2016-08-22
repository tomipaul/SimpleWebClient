const readline = require('readline');
var request = require('request');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Welcome to Web client\nPlease enter your Medium integration token', (answer) => {
	var authTokens = answer;
    request({
        url: 'https://api.medium.com/v1/me', //URL to hit
        method: 'GET', //Specify the method
        headers: { //We can define headers too
            'Content-Type': 'MyContentType',
            'Authorization': 'Bearer '+authTokens,
            'Custom-Header': 'Custom Value'
        }
    }, function(error, response, body){
        if(error) {
            console.log(error);
        } else {
            console.log(response.statusCode, body);
        }
    });
    rl.close();
});
