let handler = async (m, { conn, text, usedPrefix, command }) => {
    // let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    // if (!teks) throw `Command error`
    m.reply(`Cara menggunakan perintah Readmore:\nketik .readmore <text>\nContoh: .readmore test`)
}

handler.help = ['carareadmore']
handler.tags = ['internet']
handler.command = /^(carareadmore)$/i

// handler.limit = true
handler.group = true
handler.private = false

export default handler