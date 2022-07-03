import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	const sections = [
		{
	title: "Daftar Menu (Group)",
	rows: [
    {title: "AFK", rowId: '.afk berak'},
    {title: "Speed", rowId: '.speed'}
	]
    },
]

const listMessage = {
  text: `Halo ${conn.getName(m.sender)},\nPilih menu dengan sentuh tombol Pilih Menu dibawah.`,
  footer: global.wm,
  title: "*Daftar Menu Group*",
  buttonText: "Pilih Menu",
  sections
}

  let user = global.db.data.users[m.sender]
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, m)
}
handler.help = ['menugrup', 'menugroup']
handler.tags = ['main']
handler.command = /^(menugrup|menugroup|\?)$/i

handler.group = false
handler.private = false

export default handler