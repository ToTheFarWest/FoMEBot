exports.run = (client, member) => {
  member.guild.channels.find("name", "welcome").send(member.user.tag + ' just left the server! 🙁');
  console.log(member.user.tag + ' left ' + member.guild.name);
};
