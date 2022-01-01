require('dotenv').config();
global.Discord = require('discord.js');
global.client = new Discord.Client({ intents: [ 'DIRECT_MESSAGES', 'GUILD_MESSAGES','GUILD_VOICE_STATES'] });
client.commands = new Discord.Collection();
const connect =require('../database/database')
const buttons =require('discord-buttons');
const levels  = require('../src/commands/levels');
const levelboard  = require('../src/commands/leadBoard');
const music  = require('../src/commands/music');
const musicEventListner  = require('../src/commands/musicEventListner');
const { Client, Message } = require('discord.js');
const mongoose = require('mongoose');
const Canvas = require('canvas');
const fs=require('fs');
global.prefix ="--";
global.DisTube =require('distube');

global.distube = new DisTube.default(client, {
	searchSongs: 1,
	searchCooldown: 30,
	leaveOnEmpty: true,
	emptyCooldown: 0,
	leaveOnFinish: true,
	leaveOnStop: true,
	
})

console.log(process.env.DISCOEDJS_BOT_TOKEN);
client.login(process.env.DISCOEDJS_BOT_TOKEN);
connect();
music(client);
musicEventListner(distube);
levels(client);
levelboard(client);
const commands = fs.readdirSync("C:/Users/Ahmed salah/Desktop/node/src/commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
    const commandName = file.split(".")[0];
    const command = require(`C:/Users/Ahmed salah/Desktop/node/src/commands/${file}`);
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(command.name, command);
};


client.on('ready',()=>{
    console.log(`${client.user.username} has logged in`);
    
    
});

client.on('message', message =>{
    console.log(`${message.author.tag} : ${message.content}`);
});

client.on('guildMemberAdd',async member =>{
    
    client.commands.get('welcome').execute(member);
})



client.on('message',async message =>{
    if(message.author.bot)return;
    if(message.content.startsWith(prefix)){
        const [cname, ...args] = message.content.trim().substring(prefix.length).split(/\s+/);
        console.log(args[1]);
        
        if(cname === 'kick' ){
            client.commands.get('kickm').execute(message , args);
        }
        else if(cname==='ban'){
            client.commands.get('ban').execute(message , args);
        }
        else if(cname==='unban'){
            client.commands.get('unban').execute(message , args);
        }
        else if(cname==='addrole'){
            client.commands.get('addRoles').execute(message , args);
        }
        else if(cname==='removerole'){
            client.commands.get('removerole').execute(message , args);
        }
        else if(cname==='meme'){
            client.commands.get('meme').execute(message , args);
        }
        else if(cname==='Riot'){
            client.commands.get('Riot').execute(message , args);
        }
        else if(cname==='start'){
            client.commands.get('together').execute(message , args);
            
        }
        else if(cname==='help'){
            client.commands.get('help').execute(message,client);
            
        }
        else if(cname==='Avatar'){
            client.commands.get('Avatar').execute(message);
            
        }
        else if(cname==='translate'){
            client.commands.get('Translate').execute(message);
            
        }
            
        
    }
})





