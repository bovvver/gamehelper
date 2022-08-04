import { Client, GatewayIntentBits, Routes } from "discord.js";
import { REST } from "@discordjs/rest";
import { commands } from './commands';
import { custom, help } from './functions'

require("dotenv").config();

const token = process.env.TOKEN as string;
const guildId = process.env.GUILD_ID as string;
const clientId = process.env.CLIENT_ID as string;
export const members: string[] = [];

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates
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


client.on('interactionCreate', async (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if(commandName === 'custom') {
        const respond = await custom(interaction, 10);
        interaction.reply(respond);
    } else if(commandName === '4v4'){
        const respond = await custom(interaction, 8);
        interaction.reply(respond);
    } else if(commandName === '3v3'){
        const respond = await custom(interaction, 6);
        interaction.reply(respond);
    } else if(commandName === '2v2'){
        const respond = await custom(interaction, 4);
        interaction.reply(respond);
    }else if(commandName === 'help'){
        const respond = await help(commands);
        interaction.reply(respond);
    }
})

client.login(token) //last line