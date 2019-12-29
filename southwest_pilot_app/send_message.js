const accountSid = 'AC767c3e457efb5b99f99892c3571e745e';
const authToken = '787706dc826247d1c6e91daf6a846425';
const client = require('twilio')(accountSid, authToken);

exports.sendMessage = function(body) {
    client.messages
        .create({
            body: body,
            from: '+17148315612',
            to: '+19516409304'
        })
        .then(
            message => console.log(message.sid)
        );
};
