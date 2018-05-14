const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('My Self been Develop', {type: 'WATCHING'});
});

client.on('message', async msg => {
    if(msg.author.bot) return;

    if (msg.content === '!about') {
      let aboutembed = new Discord.RichEmbed()
      .setTitle('Want to Know More About Me?')
      .setDescription('Im a Public Bot With more Intelligent than The Normal Wolfie Im is Assistant I Help him with a lot of sfuff example tell him that bots will rule the world or etc.')
      .setColor("#FFFF00")
      .addField('GitHub', 'https://github.com/Wolfkid200444/FakeWolfkidBOT')
      .addField('Report Issues', 'https://github.com/Wolfkid200444/FakeWolfkidBOT/issues')
      .addField('Discord', 'https://discord.gg/Z42u23M')

      return messages.channel.send(aboutembed);
    };

    if (msg.content ==="!channel") {
        msg.reply('Wanna Check out Wolfie Channel? Here is the link www.youtube.com/c/Wolfkid');
    };

    if (msg.content === '!info') {
    	msg.channel.send('**This bot was created on 11 May 2018 by using code with Discord.js!** [Owner: __WolfKid200444__] go follow him on ``____``**Twitter** (https//:mobile.twitter.com/@TheRealWolfkid/)');
    };

    if (msg.content === '!changelog') {
    	msg.channel.send('**__Changelog__** ```___```*** Bot Version 0.1 : Added Few Commands ***');
    };

    if (msg.content === '!help embed') {
      let helpembed = new Discord.RichEmbed()
      .setDescription("Help Commands")
      .setColor("#FFFF00")
      .setField("``!help | !changelog | !info | !about``");

      return messages.channel.send(helpembed);
    };
});

client.login(process.env.BOT_TOKEN);
