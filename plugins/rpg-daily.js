const rewards = {
  exp: 9999,
  money: 4999,
  potion: 5,
}
const cooldown = 86400000
let handler = async (m) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `Kamu sudah mengambil Exp harian, lakukan kembali setelah *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  // m.reply(text.trim())
  conn.sendButton(m.chat,'*Daily*', text.trim(), null, [['Inventory', '.inv'], ['Weekly', '.weekly']],m)
  user.lastclaim = new Date * 1
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = /^(daily)$/i

handler.cooldown = cooldown

export default handler
