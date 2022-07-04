let handler = async (m, { conn, text, usedPrefix, command }) => {
    // let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    // if (!teks) throw `Command error`
    m.reply(`Cara menggunakan perintah KBBI:\nketik .kbbi <kata>\nContoh: .kbbi makan`)
}

handler.help = ['carakbbi']
handler.tags = ['internet']
handler.command = /^(carakbbi)$/i

// handler.limit = true
handler.group = true
handler.private = false

export default handler