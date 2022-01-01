
const profileSchema =require('C:/Users/Ahmed salah/Desktop/node/models/profile')

module.exports=(client)=>{
    client.on('message', async message=>{
        var members= [];
        if(message.author.bot)return;
        if(message.content===`${prefix}leadboard`){
        const result = await profileSchema.find
        ({}).sort( { level: -1 } )
        
        for(let i =0;i<10;i++){
            fetchuser = client.users.cache.get(result[i].userId)
            members[i] = fetchuser.tag
        }
        const embed = new Discord.MessageEmbed()
        embed.setTitle('TOP TEN USERS IN THE SERVER :clipboard: ')
        embed.setColor('#ffffff')
        for(let i =0;i<5;i++){
            if(i==0){
                embed.addField(`the first place is ${members[i]} in level ${result[i].level} :first_place:  `,'------------------------------------------------------------------')
            }else if(i==1){
                embed.addField(`the second place is ${members[i]} in level ${result[i].level} :second_place: `,'------------------------------------------------------------------')
            }else if(i==2){
                embed.addField(`the third place is ${members[i]} in level ${result[i].level} :third_place: `,'------------------------------------------------------------------')
    }else{
        embed.addField(`the ${i+1}th place is ${members[i]} in level ${result[i].level}  `,'------------------------------------------------------------------')
    }
    }
    embed.setTimestamp();
    embed.setFooter('bota discord bot', 'https://i.imgur.com/jtyzeCq.jpeg');
        message.channel.send(embed);
        }
    })
    
}