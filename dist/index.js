"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.members = void 0;
const discord_js_1 = require("discord.js");
const rest_1 = require("@discordjs/rest");
const commands_1 = require("./commands");
const functions_1 = require("./functions");
require("dotenv").config();
const token = process.env.TOKEN;
const guildId = process.env.GUILD_ID;
const clientId = process.env.CLIENT_ID;
exports.members = [];
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMembers,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
        discord_js_1.GatewayIntentBits.GuildVoiceStates
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
client.on('interactionCreate', (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    if (!interaction.isChatInputCommand())
        return;
    const { commandName } = interaction;
    if (commandName === 'custom') {
        const respond = yield (0, functions_1.custom)(interaction);
        interaction.reply(respond);
    }
    else if (commandName === 'help') {
        const respond = yield (0, functions_1.help)(commands_1.commands);
        interaction.reply(respond);
    }
}));
client.login(token); //last line
