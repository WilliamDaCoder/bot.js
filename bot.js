const Discord = require('discord.js');
const client = new Discord.Client();
var rephrase = 'messages'
var SentSinceOnline = 0
var token = 0


 client.once('ready', () => {
  console.log('Ready!');
  rephrase === 'messages'
});
client.on('message', message => {
console.log(`${message.author.username from ${message.channel} said ${message.content}
if (message.content === 'ping'
message.channel.send('pong :)'
}


client.login(token)