const  Canvas = require('canvas');
const { execute } = require('./unban');
module.exports={
    name:'welcome',
    description:'unban user from dicord server',
async execute(member){

var welcomeCanvas ={}
welcomeCanvas.create = Canvas.createCanvas(1024,500)
welcomeCanvas.context = welcomeCanvas.create.getContext('2d')
welcomeCanvas.context.font ='72px sans-serif';
welcomeCanvas.context.fillStyle='#ffffff'
Canvas.loadImage("C:/Users/Ahmed salah/Desktop/node/welcome.png").then(async (img)=>{
    welcomeCanvas.context.drawImage(img,0,0,1024,500);
    welcomeCanvas.context.fillText("welcome",360,360);
    welcomeCanvas.context.beginPath();
    welcomeCanvas.context.arc(512,166,128,0,Math.PI*2,true);
    welcomeCanvas.context.stroke();
    welcomeCanvas.context.fill();
    const welcomechannel = client.channels.cache.get('482746975922421785');
    welcomeCanvas.context.font='42px sans-serif ';
    welcomeCanvas.context.textAlign='center';
    welcomeCanvas.context.fillText(member.user.tag.toUpperCase(),512,410);
    welcomeCanvas.context.font='32px sans-serif';
    welcomeCanvas.context.fillText(`you are the ${member.guild.memberCount}th`,512,455);
    welcomeCanvas.context.closePath()
    welcomeCanvas.context.clip()
    await Canvas.loadImage(member.user.displayAvatarURL({format:'jpg',size:1024}))
    .then(img=>{
        welcomeCanvas.context.drawImage(img,385,38,255,260);
    })
    
    let attachment =new Discord.MessageAttachment(welcomeCanvas.create.toBuffer(),`welcome-${member.id}.png`);
    
    try{
        welcomechannel.send(`:wave: hello ${member}, welcome to zone`,attachment)
    }catch(err){
        console.log(error)
    }
})

}
}