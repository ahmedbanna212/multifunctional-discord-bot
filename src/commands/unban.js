module.exports={

    name:'unban',
    description:'unban user from dicord server',

    execute(message, args){
    const member =message.mentions.users.first();
    
    if(!message.member.hasPermission('UNBAN_MEMBERS'))return message.channel.send('you do not have BAN permissions'); 

    message.guild.fetchBans().then( async bans =>{
        if(bans.size === 0)return message.channel.send('there are no banned members');
        let bannedUser =bans.find(ban =>ban.user.id == args[0]);
        if(!bannedUser) return message.channel.send('the user is not on the banned list');
        await message.guild.members.unban(args[0])
        .then(message.channel.send(`${args[0]} was unbenned :egg: .`))
        .catch((err)=>message.channel.send(`i cant unban this user`));
        
        
    })
    }
}
