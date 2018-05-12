const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('!help**|WolfieBot!', {type: 'STREAMING'});
});

client.on('message', async msg => {
    if(msg.author.bot) return;
    
    if (msg.content === '!help') {
    	msg.channel.send('**__Commands List__** ```[ !info | !help | !version | !changelog | !about ]```'); 
    } else
        if (msg.content === '!about') {
    	msg.channel.send('**Want to Know More About Me ?**');
    } else
        if (msg.content === '!info') {
    	msg.channel.send('**This bot was created on 11 May 2018 by using code with Discord.js!** [Owner: __WolfKid200444__] go follow him on [Twitter](https//:mobile.twitter.com/@TheRealWolfkid/)');
    } else
        if (msg.content === '!changelog') {
    	msg.channel.send('**__Changelog__** ```___```');
    } else
        if (msg.content === '!help embed') {
        
        let botembed = new Discord.RichEmbed()
        .setDescription("Help Commands")
        .setColor("#FFFF00")
        .setField("``!help | !changelog | !info | !about``");
        
        return messages.channel.send(botembed);
      }
});

client.login(process.env.BOT_TOKEN);

