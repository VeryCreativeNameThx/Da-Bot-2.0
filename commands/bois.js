const replies = ['😎', 'Da Bot 🤖', 'Oh Yah 👌', 'Ring Ring 🔔', 'Robots will Takeover!']

module.exports = function (msg, args) {
const index = Math.floor(Math.random() * replies.length);
msg.channel.send(replies[index]);
};
