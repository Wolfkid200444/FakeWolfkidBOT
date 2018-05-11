const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('Minecraft!', {type: 'PLAYING'});
});

client.on('message', async msg => {
    if(msg.author.bot) return;
    
    if (msg.content === '#help') {
    	msg.channel.send('**__Commands List__** ```[ #info | #help | #version | #changelog]```'); 
    } else
        if (msg.content === 'help') {
    	msg.channel.send('**__Commands List__** ```[ $info | $help | $version ]```');
    } else
        if (msg.content === '#info') {
    	msg.channel.send('**This bot was created on 11 May 2018 by using code with Discord.js!** [Owner: __WolfKid200444__]');
    } else
        if (msg.content === '#changelog') {
    	msg.channel.send('**__Changelog__** ```___```'); 
    }
});

client.login(process.env.BOT_TOKEN);

