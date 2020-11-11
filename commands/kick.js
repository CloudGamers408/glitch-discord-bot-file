if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send({embed: {color: "RED", description: "You don't have permission to do that"}});

if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send({embed: {color: "RED", description: "I don't have permission to do that"}})

const args = message.content.split(" ")
const shifter = args.shift()

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

if(!user) member = message.member

if(!args[1]) return message.channel.send({embed: {color: "RED", description: "Please, give the reason to kick the person"}});

if(!member.kickable) return message.channel.send({embed: {color: "RED", description: "I can't kick that person"}})

member.user.send({embed: {color: "GREEN", title: `You were kicked from ${message.guild.name}`, description: `You were kicked from ${message.guild.name} by ${message.author.tag}`, fields: [{name: "Reason", value: `\`\`\`` + args.slice(1, args.length + 1).join(" ") + `\`\`\``, inline: true}]}}).then(() => member.kick().then(() => message.channel.send({embed:{color: "GREEN", description: `${member.user.tag} kicked successfully`}})))
