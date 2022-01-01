
const fetch=require("node-fetch")


module.exports={
    name:'meme',
    async execute(message){
        let data = await fetch("https://meme-api.herokuapp.com/gimme/dankmemes")
        .then(res=> res.json())
        const embed=new  Discord.MessageEmbed();
        embed.setTitle(data.title)
        embed.setURL(data.postLink)
        embed.setColor("#00ff00")
        embed.setFooter(data.ups+"upvotes")
        embed.setTimestamp()
        embed.setImage(data.url)
        message.channel.send(embed)
    }
}