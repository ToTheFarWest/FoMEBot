exports.run = (client, member) => {
  member.guild.channels.find("name", "welcome").send(member.username + ' just left the server! 🙁');
  console.log(member.displayName + " left " + member.guild.name);
};
