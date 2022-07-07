import { caklontong } from '@bochilteam/scraper'

let timeout = 60000
let poin = 5000
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) return conn.reply(m.chat, 'Masih ada soal yang belum terjawab.', conn.caklontong[id][0])
    let json = await caklontong()
    console.log(json.jawaban)
    let caption = `[Game - Caklontong]
${json.soal}
Waktu menjawab *${(timeout / 1000).toFixed(2)} detik*
Hadiah: ${poin} Exp
`.trim()
    conn.caklontong[id] = [
        await conn.sendButton(m.chat, caption, author, null, [['Hint', `${usedPrefix}calo`]], m),
        json, poin,
        setTimeout(async () => {
            if (conn.caklontong[id]) await conn.sendButton(m.chat, `Waktu menjawab telah habis!\nJawabannya adalah *${json.jawaban}*\n${json.deskripsi}`, author, null, [['Cak Lontong', `${usedPrefix}caklontong`]], conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i

handler.limit = true
handler.group = true
handler.private = false

export default handler