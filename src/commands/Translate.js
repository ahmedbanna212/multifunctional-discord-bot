const embed = new Discord.MessageEmbed()
const translate =require('@iamtraction/google-translate');

module.exports={
    name:'Translate',
    description:'translate',
    execute(message){
        const [cname, lang,...args] = message.content.trim().substring(prefix.length).split(/\s+/);
        if(args[0]===undefined)return message.reply('you have to type some thing');
        
        translate(args,{to:lang}).then(res=>{
            embed.setDescription(res.text)
            .setColor('#ffffff')
            .setTimestamp();
            message.channel.send(embed);
        })
        .catch((err)=>
        message.reply(' this language is not supported \n or you typed it wrong  it has to follow ISO 639-1 codes  \n for example english is en and arabic is ar'))
        
    }
}