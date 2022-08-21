const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('View the available commands!'),

    async execute(client, interaction) {
        const cmds = []

        // For every folder in commands
        fs.readdirSync('./commands').forEach(file => {
            // Push commands and stuff to be used for things
            cmds.push(file.replace(".js", ""))
        });

        interaction.reply({
            embeds: [{
                title: 'Slash Commands',
                color: 12717312,
                description: "`" + cmds.join("` - `") + "`",
            }],
        });
    },
};