const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('My Self been Develop', {type: 'WATCHING'});
});

client.on('message', async msg => {
    if(msg.author.bot) return;
    
    if (msg.content === '!help') {
    	msg.channel.send('**__Commands List__** ```[ !info | !help | !version | !changelog | !about | !channel ]```');     
    } else
        if (msg.content === '!about') {
    	msg.channel.send('**Want to Know More About Me ?** ```________________________________``` Im a Public Bot With more Intelligent than The Normal Wolfie Im is Assistant I Help him with a lot of sfuff example tell him that bots will rule the world or etc. Check out Our Github heres the link: ``https://github.com/Wolfkid200444/FakeWolfkidBOT`` And of you wanna report bugs or issue with the bot then check out our discord ``https://discord.gg/Z42u23M`` in ``#report`` or go in github in this link ``https://github.com/Wolfkid200444/FakeWolfkidBOT/issues``   Cya :3');
    } else
        if (msg.content ==="!channel") {
        msg.reply('Wanna Check out Wolfie Channel? Here is the link www.youtube.com/c/Wolfkid');
    } else
        if (msg.content === '!info') {
    	msg.channel.send('**This bot was created on 11 May 2018 by using code with Discord.js!** [Owner: __WolfKid200444__] go follow him on ``____``**Twitter** (https//:mobile.twitter.com/@TheRealWolfkid/)');
    } else
        if (msg.content === '!changelog') {
    	msg.channel.send('**__Changelog__** ```___```*** Bot Version 0.1 : Added Few Commands ***');

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

