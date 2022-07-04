let handler = async (m, { conn, text, usedPrefix, command }) => {
    // let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    // if (!teks) throw `Command error`
    m.reply(`Cara menggunakan quick create sticker:\n1. Unggah foto dengan caption .sticker\n2. Reply foto dengan pesan .sticker`)
}

handler.help = ['carasticker']
handler.tags = ['sticker']
handler.command = /^(carasticker)$/i

// handler.limit = true
handler.group = true
handler.private = false

export default handler