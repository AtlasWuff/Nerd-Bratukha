module.exports = async (client) => {
    console.log("\x1b[32m", `\n${client.user.username} is live: \nServers: ${client.guilds.cache.size} \nUsers: ${client.users.cache.size}`);
    console.log("\x1b[0m", "")
};
