
module.exports={

    name:'Avatar',
    description:'displayes user Avatra',

    execute(message){
    const author =message.author;
    const member = message.mentions.users.first();if(member===undefined){ return message.reply('please tag the member')};
    const embedMessage =new Discord.MessageEmbed();
    try{
    embedMessage.setTitle(`${member.tag} avatar `)
    .setColor('#ffffff')
    .setImage(member.displayAvatarURL({size:4096,dynamic:true,format:"png"}))
    .setFooter(`Requested by ${author.tag}`, author.displayAvatarURL({dynamic:true}))
    
    message.channel.send(embedMessage);
    }
    catch(error){
    message.reply('something went wrong please try agin')
    }

    }
}
