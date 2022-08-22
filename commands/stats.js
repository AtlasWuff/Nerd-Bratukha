const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const fetch = require('node-fetch')

module.exports = {
    data: new SlashCommandBuilder()
		.setName('stats')
		.setDescription('View the server and member stats!'),

    async execute(client, interaction) {
        interaction.reply({
            embeds: [{
                title: 'Bot Stats',
                color: 12717312,
                fields: [
                    {
                        name: "Servers",
                        value: client.guilds.cache.size,
                        inline: true
                    },
                    {
                        name: "Users",
                        value: client.users.cache.size,
                        inline: true
                    },
                    {
                        name: "IP Address",
                        value: fetch("https://api64.ipify.org/?format=json").ip,
                        inline: true
                    }
                ]
            }],
        });
    },
};