const opggScraper = require('opgg-scraper');


module.exports={
    name:'Riot',
async execute(message,args){
let name =args[0]
let server =args[1]

message.reply('calculating...').then((x)=>{

opggScraper.getStats(name, 'euw', false).
then(stats => JSON.parse(JSON.stringify(stats))
+
x.edit(
    new Discord.MessageEmbed().setColor('#000FFF')
    .setTitle(stats.Name)
    .setDescription(`wins last 10 matchs : ${stats.Wins}`)
    .addFields(
        { name: 'Rank : ', value: stats.Rank, inline: true },
        { name: 'level : ', value: stats.Level, inline: true },
        { name: 'MainChampion : ', value: stats.MainChampion, inline: true },
        
    ).setImage(stats.ProfilePic))
).catch(err=>message.reply('try agin'));   

}
)}
}