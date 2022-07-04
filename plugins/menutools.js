import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	const sections = [
		{
	title: "Daftar Menu (Tools)",
	rows: [
    {title: "Readmore", rowId: '.carareadmore'},
    {title: "Style text", rowId: '.carastyletext'},
    {title: "Create sticker", rowId: '.carasticker'},
    {title: "KBBI", rowId: '.carakbbi'},
	]
    },
]

const listMessage = {
  text: `Halo ${conn.getName(m.sender)},\nPilih menu dengan sentuh tombol Pilih Menu Tools dibawah.`,
  footer: global.wm,
  title: "*Daftar Menu Tools*",
  buttonText: "Pilih Menu Tools",
  sections
}

  let user = global.db.data.users[m.sender]
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, m)
}
handler.help = ['menutool', 'menutools']
handler.tags = ['main']
handler.command = /^(menutool|menutools|\?)$/i

handler.group = false
handler.private = false

export default handler