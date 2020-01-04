const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const express =

exports.sendMessage = function(body1, body2) {
    client.messages
        .create({
            body: 'Hello Mat! This is your friendly reminder. Your current bill is ' + body1 + '. And here is your ' + body2,
            from: '+17143404784',
            to: '+19516409304'
        })
        .then(
            message => console.log(new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"}), message.sid)
        );
};
