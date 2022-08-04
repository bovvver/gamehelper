"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.custom = exports.help = void 0;
const _1 = require(".");
;
const randomNum = (team) => {
    let randomNum = Math.floor(Math.random() * _1.members.length);
    team.push(_1.members[randomNum]);
    _1.members.splice(randomNum, 1);
};
//HELP COMMAND
const help = (commands) => {
    let res = '';
    commands.forEach((el, index) => {
        res += `${index + 1}. ${el.name.toUpperCase()} - ${el.description}\n`;
    });
    return `Game Helper commands\n\n${res}`;
};
exports.help = help;
// CUSTOM COMMAND
const custom = (interaction, players) => {
    if (!_1.members.includes(interaction.user.username))
        _1.members.push(interaction.user.username);
    else
        return `<@${interaction.user.id}> you have joined already!`;
    if (_1.members.length === 1) {
        setTimeout(() => {
            if (_1.members.length !== 0) {
                _1.members.splice(0, _1.members.length); // timing out the bot
            }
        }, 120000);
    }
    if (_1.members.length === players) {
        const team1 = [];
        const team2 = [];
        let finished1 = '';
        let finished2 = '';
        while (_1.members.length !== 0) {
            randomNum(team1);
            randomNum(team2);
        }
        team1.forEach((el, index) => {
            finished1 += `${index + 1}. ${el}\n`;
        });
        team2.forEach((el, index) => {
            finished2 += `${index + 1}. ${el}\n`;
        });
        return `**(${players}/${players})** Drawing teams!\n\n🔵 Team Blue 🔵\n${finished1}\n🔴 Team Red 🔴\n${finished2}`;
    }
    else if (_1.members.length < players) {
        return `**(${_1.members.length}/${players})** | ${players - _1.members.length} to go!`;
    }
    else {
        return 'Something went wrong! :face_with_raised_eyebrow:';
    }
};
exports.custom = custom;
