const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
/*youtube
youtubedev
poker
betrayal
fishing
chess
chessdev
lettertile
wordsnack
doodlecrew
awkword
spellcast
checkers
puttparty*/
module.exports={
    name:'together',
execute(message,args){
let  type = args[0];
if(type==undefined)return message.reply('you have to type the discord activity name') 

try{
if(message.member.voice.channel) {
        client.discordTogether.createTogetherCode(message.member.voice.channelID, args[0])
        .then(async invite => {
            return message.channel.send(`${invite.code}`).catch((err)=>message.reply('there are no discord actvite with this name '));
        });  }else{
        message.reply('ypu have to be in voice channel');
        }
    }catch(error){
            message.reply('there are no discord actvite with this name');  
        }
    }
}