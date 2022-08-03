import { Client, GatewayIntentBits, Routes } from "discord.js";
import { REST } from "@discordjs/rest";
import { commands } from './commands';

require("dotenv").config();

const token = process.env.TOKEN as string;
const guildId = process.env.GUILD_ID as string;
const clientId = process.env.CLIENT_ID as string;

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.once('ready', () => {
    console.log('Game Helper Running.');
    client.user!.setActivity('Doing cool stuff 😎');
})

const rest = new REST({version: '10'}).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);


client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if(commandName === 'test') {
        
    }
        
})

client.login(token) //last line