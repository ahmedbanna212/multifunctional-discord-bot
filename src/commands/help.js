const { MessageEmbed } = require('discord.js');



module.exports={
    name:'help',
    aliases:["hlp"],
execute(message,client){


    const EMBEDMESSAGE = new MessageEmbed()

    .setColor('GREEN')
	.setTitle('HELP MENU')
	.setURL('https://www.google.com/')
	.setThumbnail('https://i.imgur.com/jtyzeCq.jpeg')
	.addFields(
		{ name: 'ADD ROLE :scroll: ', value: 'Adds a role to a member' },
        { name: ' ADD Method ', value: `\`${prefix}addrole <@member> <role>\`` },
        { name: 'AVATAR :frame_photo: : ', value: 'shows members avatar' },
        { name: ' Avatar Method ', value: `\`${prefix}Avatar <@member>\`` },
		{ name: 'REMOVE ROLE :regional_indicator_d: ', value: 'remove a role from a member' },
        { name: ' REMOVE Method ', value: `\`${prefix}removerole <@member> <role>\`` },
        { name: 'BAN :bangbang: ', value: 'ban  a member' },
        { name: ' BAN Method ', value: `\`${prefix}ban <@member> \`` },
        { name: 'UNBAN :arrows_counterclockwise:  ', value: 'unban  a member' },
        { name: ' UNBAN Method ', value: `\`${prefix}unban <@member> \`` },
        { name: 'KICK :athletic_shoe:   ', value: 'kick a member' },
        { name: ' KICK Method ', value: `\`${prefix}kick <@member> \`` },
        { name: 'MEME :laughing:    ', value: 'send a random meme from reddit' },
        { name: ' MEME Method ', value: `\`${prefix}meme \`` },
        { name: 'LEVELING SYSTEM :level_slider:     ', value: 'calculate each member xp and level' },
        { name: 'LEVELING Method ', value: `\`every message the user send is counted \`` },
        { name: 'RIOT PROFILE STATUS :video_game:', value: 'fetchs the user data from op.gg and display it to users ' },
        { name: 'status Method ', value: `\`${prefix}Riot <riot ID> \`` },
        { name: 'WELCOME :japanese_ogre: ', value: 'welcomes every new member in the general channel' },
        { name: 'WELCOME Method ', value: `\`automated  \`` },
        { name: 'LEADBOARD :medal: ', value: 'displayes a list of top 5 mebers based on level' },
        { name: 'LEADBOARD Method ', value: `\`${prefix}leadboard  \`` },
        { name: 'TRANSLATE :scroll:  ', value: 'transled a text entered by users based on the chosen language' },
        { name: 'TRANSLATE Method ', value: `\`${prefix}translate <language> <text> \`` },
        { name: 'DISCORD ACTVITES  :radioactive: ', value: 'when triggered the bot sends a link to a discord activitys from below \n youtube\npoker\nbetrayal\nchess\nwordsnack\ndoodlecrew\nawkword\nspellcast\ncheckers\n' },
        { name: 'ACTVITES Method ', value: `\`${prefix}start <activity name> \`` },
        { name: 'MUSIC :musical_note: ', value: 'the bot offers a full music serves contains commands like \n paly, queue, pause, resume and disconnect ' },
        { name: 'MUSIC Methods ', value: `\`${prefix}play <song name||song URL> \` \n 
                                            \`${prefix}queue\` \n 
                                            \`${prefix}pause\` \n 
                                            \`${prefix}resume\` \n 
                                            \`${prefix}disconnect\`` },
        { name: 'HELP :helmet_with_cross:  ', value: 'Displays the bots commands' },
        { name: 'HELP Method ', value: `\`${prefix}help\`` },


        
	)
	.setTimestamp()
	.setFooter('bota discord bot', 'https://i.imgur.com/jtyzeCq.jpeg');

    message.channel.send(EMBEDMESSAGE);

    }



}