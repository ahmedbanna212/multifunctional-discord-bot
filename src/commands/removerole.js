const embed = new Discord.MessageEmbed()
embed.setColor('#00000F')
embed.setTitle('Role Removed :sparkles: ')

module.exports={
    name:'removerole',
    description:' remove roles to users',
    execute(message, args){
        
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('you dont have removerole permissions')
        const member =message.mentions.users.first();
        if(member){
        const MT=message.guild.members.cache.get(member.id)
        let roles= args[1];
        var role = message.guild.roles.cache.find(role => role.name.includes(roles));

        if(role === undefined)return message.channel.send('There are no role with this name');
        embed.setDescription(`${member} now do not have ${role} role :peach: `)
        MT.roles.remove(role).then(message.channel.send(embed));
            }else{
                message.channel.send('the id do not exist')
            }
        }
}