let handler = function (m) {
  this.sendContact(m.chat, '5538988313755', 'Nurutomo', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
