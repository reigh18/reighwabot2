import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "Pilih umur disini",
	rows: [
	    {title: "Acak usia", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
		{
	title: "Masa Dewasa Awal",
	rows: [
	    {title: "35 Years", rowId: '.daftar ' + namae + '.35 '},
	    {title: "34 Years", rowId: '.daftar ' + namae + '.34 '},
	    {title: "33 Years", rowId: '.daftar ' + namae + '.33 '},
	{title: "32 Years", rowId: '.daftar ' + namae + '.32 '},
	{title: "31 Years", rowId: '.daftar ' + namae + '.31 '},
	{title: "30 Years", rowId: '.daftar ' + namae + '.30 '},
	{title: "29 Years", rowId: '.daftar ' + namae + '.29 '},
	{title: "28 Years", rowId: '.daftar ' + namae + '.28 '},
	{title: "27 Years", rowId: '.daftar ' + namae + '.27 '},
	{title: "26 Years", rowId: '.daftar ' + namae + '.26 '}
	]
    },
		{
	title: "Masa Remaja Akhir",
	rows: [
	    {title: "25 Years", rowId: '.daftar ' + namae + '.25 '},
	    {title: "24 Years", rowId: '.daftar ' + namae + '.24 '},
	    {title: "23 Years", rowId: '.daftar ' + namae + '.23 '},
	{title: "22 Years", rowId: '.daftar ' + namae + '.22 '},
	{title: "21 Years", rowId: '.daftar ' + namae + '.21 '},
	{title: "20 Years", rowId: '.daftar ' + namae + '.20 '},
	{title: "19 Years", rowId: '.daftar ' + namae + '.19 '},
	{title: "18 Years", rowId: '.daftar ' + namae + '.18 '},
	{title: "17 Years", rowId: '.daftar ' + namae + '.17 '}
	]
    },
    {
	title: "Masa Remaja Awal",
	rows: [
	    {title: "16 Years", rowId: '.daftar ' + namae + '.16 '},
	    {title: "15 Years", rowId: '.daftar ' + namae + '.15 '},
	    {title: "14 Years", rowId: '.daftar ' + namae + '.14 '},
	{title: "13 Years", rowId: '.daftar ' + namae + '.13 '},
	{title: "12 Years", rowId: '.daftar ' + namae + '.12 '}
	]
    },
]

const listMessage = {
  text: `Pilih usia pada button dubawah\n*Nama kamu:* ${conn.getName(m.sender)}\nJika ingin nama bebas ketik *${usedPrefix + command} yourname.age*`,
  footer: global.wm,
  title: "*Pendaftaran*",
  buttonText: "Pilih Usia",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, m)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Usia tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 35) throw 'Hmmm??'
  if (age < 5) throw 'Lohhheee??'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  m.reply(`
*Pendaftaran Berhasil*

*Name:* ${name}
*Age:* ${age} Years
*Sn:* ${sn}`.trim())
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

handler.group = false
handler.private = true

export default handler