const { model, Mongoose } = require('mongoose');
const mongo =require('C:/Users/Ahmed salah/Desktop/node/database/database');
const profileSchema =require('C:/Users/Ahmed salah/Desktop/node/models/profile')
const embed = new Discord.MessageEmbed()
embed.setColor('#FF0000')
embed.setTitle('Level Up :sparkles: ')

module.exports=(client)=>{
    client.on('message',message=>{
        if(message.author.bot)return;
        const {guild,member} =message;
        addXP(guild.id,member.id,13,message)
    })
    
}

const addXP = async (guildId,userId,xptoAdd,message)=>{
    await mongo().then(async (Mongoose)=>{
        
            const result = await profileSchema.findOneAndUpdate({
                guildId,
                userId
            },{
                guildId,
                userId,
                $inc:{
                    xp: xptoAdd
                }
                
            },{
                upsert:true,
                new:true,
            })
            let xp=result.xp
            let level=result.level
            
            if(xp>=100*level){
                xp -= 100*level
                await ++level
                
                embed.setDescription(`congratulations ${message.author} you are now level ${level} with xp ${xp}`)
                message.channel.send(embed)
                await profileSchema.findOneAndUpdate({
                    guildId,
                    userId },{ 
                        level,
                        xp
                    }
                )
                }
            
            //console.log('result: ',result)
        
    })
}

