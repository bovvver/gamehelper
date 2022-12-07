

<div  align="center">
<a  href="https://github.com/MemeeMaster/gamehelper">
<img  src="/icon/logo.png"  alt="Logo"  width="80"  height="80">
</a>
<h2>Game Helper 🎮</h2>
<p>
<strong>Discord bot</strong> created to help gamers in drawing teams 
<br/>⭐ (and <strong>more</strong> in future) ⭐
</div>


## Installation
To install this application you'll need [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/).

Once you have them, do the following in your command line:
```bash
# Clone the repository
$ git clone https://github.com/MemeeMaster/gamehelper

# Open repository
$ cd gamehelper

# Install essential dependencies
$ npm install

# Run project with Node.js
$ node .
```
If you are working on your local machine, you'll need to create your own bot and get **TOKEN**, **CLIENT ID** and **GUILD ID** from [Discord Developer Portal](https://discord.com/developers/docs/intro).

Once you get your keys, create `.env` file in your home directory and complete it like **this**:
```
TOKEN=your_token
CLIENT_ID=your_client_id
GUILD_ID=your_guild_id
```

## Commands

**/help** - list of commands,
**/custom**  - Draws two teams for 5v5 League of Legends custom game. 
**/4v4** - Draws two teams for 4v4 League of Legends custom game. 
**/3v3** - Draws two teams for 3v3 League of Legends custom game. 
**/2v2** - Draws two teams for 2v2 League of Legends custom game.

> :warning: **Note**: There are only commands for one game for now. It'll be expanded in future. 

## Credits

Packages used to complete this project:
- [Discord API](https://discord.com/developers/docs/intro)
- [dotenv](https://github.com/motdotla/dotenv)
