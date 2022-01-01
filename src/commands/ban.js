const embed = new Discord.MessageEmbed()
embed.setColor('#000FFF')
embed.setTitle('New Ban :sparkles: ')

module.exports={

    name:'ban',
    description:'ban user from dicord server',

    execute(message, args){
    const member =message.mentions.users.first();
    if(!member)return message.channel.send('there are nor user with this id')
    if(!message.member.hasPermission('BAN_MEMBERS'))return message.channel.send('you do not BAN have permissions');
    if(member.id===message.guild.owner.user.id) return message.channel.send('you can not ban the owner');
    if(member.id===message.author.id) return message.channel.send('you can not ban yourself');
    if(member){
        embed.setDescription(`${member} was banned :dango: .`)
        const MT=message.guild.members.cache.get(member.id);
        MT.ban().then(message.channel.send(embed))
        .catch((err)=>message.channel.send('I am not allowed to BAN this ID'))
        
    }else{
        message.channel.send('there is no meber with this id')
    }
    }
}
