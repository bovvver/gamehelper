"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const rest_1 = require("@discordjs/rest");
const commands_1 = require("./commands");
require("dotenv").config();
const token = process.env.TOKEN;
const guildId = process.env.GUILD_ID;
const clientId = process.env.CLIENT_ID;
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMembers,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent
    ]
});
client.once('ready', () => {
    console.log('Game Helper Running.');
    client.user.setActivity('Doing cool stuff 😎');
});
const rest = new rest_1.REST({ version: '10' }).setToken(token);
rest.put(discord_js_1.Routes.applicationGuildCommands(clientId, guildId), { body: commands_1.commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand())
        return;
    const { commandName } = interaction;
    if (commandName === 'test') {
    }
});
client.login(token); //last line
