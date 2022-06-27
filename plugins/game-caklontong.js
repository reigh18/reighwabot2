import { caklontong } from '@bochilteam/scraper'

let timeout = 30000
let poin = 5000
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) return conn.reply(m.chat, 'Masih ada soal yang belum terjawab.', conn.caklontong[id][0])
    let json = await caklontong()
    let caption = `
${json.soal}
Waktu menjawab selama *${(timeout / 1000).toFixed(2)} detik*
Bonus: ${poin} Exp
`.trim()
    conn.caklontong[id] = [
        // await conn.sendButton(m.chat, caption, author, null, [['Bantuan', `${usedPrefix}calo`]], m),
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.caklontong[id]) await conn.sendButton(m.chat, `Waktu menjawab telah habis!\nJawabannya adalah *${json.jawaban}*\n${json.deskripsi}`, author, null, [['Main Lagi', `${usedPrefix}caklontong`]], conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i

export default handler