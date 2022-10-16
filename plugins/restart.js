let { spawn }  = require('child_process');
let handler  = async (m, { conn }) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Sedang Me-Restart Bot...\nMohon tunggu sekitar 1 menit')
    //await global.db.save()
    await global.db.write()
    process.send('reset')
  } else throw 'Eits'
}
handler.help = ['restart']
handler.tags = ['owner']
handler.command = /^restart$/i
handler.owner = false
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler

