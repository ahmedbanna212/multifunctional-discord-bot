
module.exports=(distube)=>{
    
            distube.on('playSong', (queue, song) =>{
            queue.textChannel.send(`Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n`,)})

            distube.on('error', (textChannel, e) => {
                console.error(e)
                textChannel.send(`An error encountered`)
            })

            }