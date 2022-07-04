import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	const sections = [
		{
	title: "Daftar Menu (Owner)",
	rows: [
    {title: "Add owner", rowId: '.add'},
    {title: "Add group admin", rowId: '.opromote @tag'},
    {title: "Delete group admin", rowId: '.odemote @tag'},
    {title: "Add premium user", rowId: '.addprem'},
    {title: "Delete premium user owner", rowId: '.delprem'},
    {title: "List premium user", rowId: '.listprem'},
    {title: "Delete user", rowId: '.deluser'},
    {title: "Kick user", rowId: '.kick @tag'},
	]
    },
]

const listMessage = {
  text: `Halo ${conn.getName(m.sender)},\nPilih menu dengan sentuh tombol Pilih Menu Group dibawah.`,
  footer: global.wm,
  title: "*Daftar Menu Owner*",
  buttonText: "Pilih Menu Owner",
  sections
}

  let user = global.db.data.users[m.sender]
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, m)
}
handler.help = ['menuowner', 'menuown']
handler.tags = ['main']
handler.command = /^(menuowner|menuown|\?)$/i

handler.group = true
handler.owner = true

export default handler