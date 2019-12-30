const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

exports.sendMessage = function(body) {
    client.messages
        .create({
            body: body,
            from: '+17143404784',
            to: '+19516409304'
        })
        .then(
            message => console.log(message.sid)
        );
};
