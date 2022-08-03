import token from "./token";

const Discord = require('discord.js');
const client = new Discord.Client({ 
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers
    ]
})

client.login(token) //last line