const Discord = require("discord.js");

module.exports = {
  name: "say-e",
  description: "Say message",
  usage: "say-e <text>",
  alias: ["sy"],
  run: async (client, message, args) => {
   
    if(message.guild === null)return;

  
    if (message.author.bot) return;
    const sayMessage = args.join(" ");
    message.delete({ timeout: 3000 });
    
    const sayEmbed = new Discord.MessageEmbed()
    .setDescription(sayMessage)
    .setColor("BLUE")
    message.channel.send(sayEmbed);
    
          

  }
}  
