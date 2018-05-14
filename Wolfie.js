const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('My Self been Develop', {type: 'WATCHING'});
});

client.on('message', async message => {
    if(message.author.bot) return;

    if (message.content === '!about') {
      let aboutembed = new Discord.RichEmbed()
      .setTitle('Want to Know More About Me?')
      .setDescription('Im a Public Bot With more Intelligent than The Normal Wolfie Im is Assistant I Help him with a lot of sfuff example tell him that bots will rule the world or etc.')
      .setColor('#FFFF00')
      .addField('GitHub', 'https://github.com/Wolfkid200444/FakeWolfkidBOT')
      .addField('Report Issues', 'https://github.com/Wolfkid200444/FakeWolfkidBOT/issues')
      .addField('Discord', 'https://discord.gg/Z42u23M')

      return message.channel.send(aboutembed);
    };

    if (message.content ==='!channel') {
      let channelembed = new Discord.RichEmbed()
      .setTitle('Wanna Check out Wolfie Channel?')
      .setURL('https://www.youtube.com/c/Wolfkid')
      .setColor('#FFFF00')

      return message.channel.send(channelembed);
    };

    if (message.content === '!info') {
      let infoembed = new Discord.RichEmbed()
      .setTitle('Information')
      .setDescription('This bot was created on 11 May 2018 by using code with Discord.js!')
      .addField('Owner', 'WolfKid200444')
      .addField('Twitter', 'https://mobile.twitter.com/@TheRealWolfkid/')
      .setColor('#FFFF08')

      return message.channel.send(infoembed);
    };

    if (message.content === '!changelog') {
    	message.channel.send('**__Changelog__** ```___```*** Bot Version 0.1 : Added Few Commands ***');
    };

    if (message.content === '!help') {
      let helpembed = new Discord.RichEmbed()
      .setDescription('Help Commands')
      .setColor('#FFFF00')
      .setField('``!help | !changelog | !info | !about``');

      return message.channel.send(helpembed);
    };
});

client.login(process.env.BOT_TOKEN);
