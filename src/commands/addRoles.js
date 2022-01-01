const embed = new Discord.MessageEmbed()
embed.setColor('#FFFFFF')
embed.setTitle('new role :sparkles: ')


module.exports={
    name:'addRoles',
    description:' adding roles to users',
    execute(message, args){
        
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('you dont have addrole permissions')
        const member =message.mentions.users.first();
        if(member){
        const MT=message.guild.members.cache.get(member.id)
        let roles= args[1];
        var role = message.guild.roles.cache.find(role => role.name.includes(roles));
        if(role === undefined)return message.channel.send('There are no role with this name');
        embed.setDescription(`${member} now have ${role} role :peach: `)
        MT.roles.add(role).then(message.channel.send(embed)).catch((err) =>message.channel.send('YOU CANNT ADD ROLE FOR THIS ID'));
            }else{
                message.channel.send('the id do not exist')
            }
        }
}