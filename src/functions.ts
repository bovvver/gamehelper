import { Interaction } from "discord.js";
import { members } from ".";
import { commandType } from "./interfaces";

interface commandsObj extends Array<commandType>{};

const randomNum = (team: string[]) => {
    let randomNum = Math.floor(Math.random()*members.length);
    team.push(members[randomNum])
    members.splice(randomNum, 1);
}

//HELP COMMAND

export const help = (commands: commandsObj): string => {
    let res = '';
    commands.forEach((el, index) => {
        res += `${index + 1}. ${el.name.toUpperCase()} - ${el.description}\n`;
    });

    return `Game Helper commands\n\n${res}`;
}

// CUSTOM COMMAND

export const custom = (interaction: Interaction, players: number): string => {
    if(!members.includes(interaction.user.username))
        members.push(interaction.user.username);
    else
        return `<@${interaction.user.id}> you have joined already!`

    if(members.length === 1) {
        setTimeout(() => {
            if(members.length !== 0) {
                members.splice(0, members.length); // timing out the bot
            }
        }, 120000);
    }

    if(members.length === players) {

        const team1: string[] = [];
        const team2: string[] = [];
        let finished1= '';
        let finished2= '';

        while(members.length !== 0 as number){
            randomNum(team1);
            randomNum(team2);
        }

        team1.forEach((el, index) => {
            finished1 += `${index + 1}. ${el}\n`;
        })

        team2.forEach((el, index) => {
            finished2 += `${index + 1}. ${el}\n`;
        })

        return `**(${players}/${players})** Drawing teams!\n\n🔵 Team Blue 🔵\n${finished1}\n🔴 Team Red 🔴\n${finished2}`;
    } else if(members.length < players) {
        return `**(${members.length}/${players})** | ${players - members.length} to go!`;
    } else {
        return 'Something went wrong! :face_with_raised_eyebrow:';
    }
}