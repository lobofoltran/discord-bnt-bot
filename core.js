const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require("./config.json"); 

client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.cache.size} usuários, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores.`); 
  client.user.setPresence({ 
      activities: [{ // seta jogando
        name: 'BNT Bot' // nome do jogo
        }], 
      status: 'dnd' // status não pertube
    });
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  if(comando === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${Date.now() - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ws.ping)}ms`);
  }  
  
});

client.login(config.token);
