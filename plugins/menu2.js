import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	const sections = [
		{
	title: "Daftar Menu",
	rows: [
    {title: "Menu Group", rowId: '.menugroup'},
    {title: "Menu Tools", rowId: '.menutools'},
    {title: "Menu General", rowId: '.menugeneral'},
    {title: "Menu Media", rowId: '.menumedia'},
	]
    },
]

const listMessage = {
  text: `Halo ${conn.getName(m.sender)},\nPilih menu dengan sentuh tombol Pilih Menu dibawah.`,
  footer: global.wm,
  title: "*Daftar Menu*",
  buttonText: "Pilih Menu",
  sections
}

  let user = global.db.data.users[m.sender]
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, m)
}
handler.help = ['menu', 'help', '??']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.group = false
handler.private = false
// handler.register = true

export default handler