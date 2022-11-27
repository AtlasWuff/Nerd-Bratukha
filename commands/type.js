const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("type")
		.setDescription("Makes the bot start typing so it is on forever"),

	async execute(client, interaction) {
		interaction.channel.startTyping();
	},
};
