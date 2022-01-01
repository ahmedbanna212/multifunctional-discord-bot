
module.exports=(client)=>{
    client.on('message', async message => {
        if (message.author.bot) return
        if (!message.content.startsWith(prefix)) return
        const args = message.content
            .slice(prefix.length)
            .trim()
            .split(/ +/g)
        const command = args.shift()
        if (command === 'play'){ distube.play(message, args.join(' ')).catch((err)=>message.channel.send('type the song')); 
        }
        try{
        if (command === 'pause') distube.pause(message).then('the song is paused ');
        if (command === 'resume') distube.resume(message);
        if (command === 'disconnect') distube.stop(message).then( message.channel.send('`Disconnected`!'));
        if (command === 'skip') distube.skip(message).catch((err)=>message.channel.send('no songs next'))
        if (command === 'queue') {
            const queue = distube.getQueue(message)
            if (!queue) {
                message.channel.send('queue is empty')
            } else {
                message.channel.send(`Current queue:\n${queue.songs.map((song, id) =>
            `**${id ? id : 'Playing'}**. ${song.name} - \`${song.formattedDuration}\``,)
            .slice(0, 10).join('\n')}`,)
            }
        }
    }catch(error){
        message.channel.send('you have to play a song first');
    }
            }
            
            
    )
    
}