# Nerd Bratukha

A discord bot capable of creating and managing to-do lists w/ several topic instances. Can also act as a template for other discord bots to be made from.

# Invite

https://bit.ly/NerdBratukha

# Hosting

## For paranoid people

## Dependencies

- Node 16.15.1

## Instructions

1. Create an application & bot at https://discord.com/developers/applications
2. Take note of your bot's token when creating one

### 3rd party provider (Recommended)

1. Create a heroku account and project as desired
2. Create a heroku project with the button below

   [![Deployheroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Its-Tachanks/Nerd-Bratukha)

3. Go to Settings -> Config Vars and create a var called "DISCORD_TOKEN" with a value of your bot's token
4. Go to Deploy -> Enable automatic deploys
5. Go to Overview -> Dyno formation and disable web npm start & and enable worker node index.js (If you dont see these, deploy your branch manually once and let it build)

### Locally hosted

1. Clone this repository
2. Create a file named ".env" in your project root with the content of "DISCORD_TOKEN="Your bot token here""
3. Modify the config.json to hold your bot's client id found within the discord developer website
4. CD within the root
5. Run "node index.js"
