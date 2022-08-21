// .Env file for testing
const dotenv = require('dotenv');
dotenv.config();

// Basic Dependencies
const fs = require('node:fs');
const path = require('node:path');
const discord = require('discord.js');
const { Client, GatewayIntentBits, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');

// Create client object
var client = new discord.Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Commands array to be pushed for API
var commands = []

// Hold commands within client object
client.config = require("./config.json")
client.commands = new discord.Collection();
client.buttonevents = new discord.Collection();

// ** For every folder in commands
fs.readdirSync('./commands').forEach(file => {
    const command = require(`./commands/${file}`);
    console.log("\x1b[33m", `Loading Command: ${file}`);

    // Push commands and stuff to be used for things
    client.commands.set(command.data.name, command);
    commands.push(command.data.toJSON());
});

// ** For every folder in buttonevents
fs.readdirSync('./buttonevents').forEach(file => {
    const buttonevent = require(`./buttonevents/${file}`);
    console.log("\x1b[33m", `Loading Button Event: ${file}`);

    // Push buttonevents and stuff to be used for things
    client.buttonevents.set(file.replace(".js", ""), buttonevent);
});

// ** For each file in events, add event to client
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of events) {
    console.log("\x1b[33m", `Loading Event: ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

// Weird API slash command stuff that makes it work
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
rest.put(Routes.applicationCommands(client.config.clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

// Start bot with .env token
client.login(process.env.DISCORD_TOKEN);


