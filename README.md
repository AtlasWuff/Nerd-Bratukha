# Nerd Bratukha

A discord bot capable of creating and managing to-do lists w/ several topic instances. Can also act as a template for other discord bots to be made from.

# Hosting

## Dependencies

- Node 16.15.1

## Instructions

1. Create an application & bot at https://discord.com/developers/applications
2. Take note of your bot's token when creating one

### 3rd party provider (Recommended)

1. Create a heroku account and project as desired
2. Go to Settings -> Config Vars and create a var called "DISCORD_TOKEN" with a value of your bot's token
3. Go to Deploy -> De

### Locally hosted

1. Clone this repository
2. Create a file named ".env" in your project root with the content of "DISCORD_TOKEN="Your bot token here""
3. CD within the root
4. Run "node index.js"
