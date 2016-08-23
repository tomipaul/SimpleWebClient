const readline = require('readline');
var request = require('request');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('Welcome to Web client\nPlease enter your Medium integration token\n', (answer) => {
    authTokens = answer;
    request({
        url: 'https://api.medium.com/v1/me', //URL to hit
        method: 'GET', //Specify the method
        headers: { //We can define headers too
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+authTokens,
            'Custom-Header': 'Custom Value',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        }
    }, function(error, response, body){
        if(error) {
            console.log(error);
        } else {
            var obj = JSON.parse(body);
            userId = obj.data.id;
            console.log('\nName: '+obj.data.name+'\nUsername: '+obj.data.username+'\nURL: '+obj.data.url);
            console.log('Response status code: ',response.statusCode);
        }
    });
    rl.close();
});