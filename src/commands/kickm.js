module.exports={

    name:'kickm',
    description:' kicking user from dicord server',

    execute(message, args){
    const member =message.mentions.users.first();
    if(!member)return message.channel.send('there are nor user with this id')
    if(!message.member.hasPermission('KICK_MEMBERS'))return message.channel.send('you do not have kick permissions');
    if(member.id===message.guild.owner.user.id) return message.channel.send('you can not kick the owner');
    if(member.id===message.author.id) return message.channel.send('you can not kick yourself');
    if(member){
        const MT=message.guild.members.cache.get(member.id);
        MT.kick()
        .then(message.channel.send(`${member} was kicked :grapes: .`))
        .catch((err)=>message.channel.send('I am not allowed to kick this ID'))
        
    }else{
        message.channel.send('there is no meber with this id')
    }
    },

}




