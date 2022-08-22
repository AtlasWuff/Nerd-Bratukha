const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

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
                    }
                ]
            }],
        });
    },
};