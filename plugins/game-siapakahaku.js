import { siapakahaku } from '@bochilteam/scraper'

let timeout = 60000
let poin = 5000
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'Masih ada game yang sedang berjalan.', conn.siapakahaku[id][0])
        throw false
    }
    const json = await siapakahaku()
    // console.log(json.jawaban)
    let caption = `[Game - Siapakah aku?]

Siapakah aku? ${json.soal}
Waktu menjawab *${(timeout / 1000).toFixed(2)} detik.*
Bonus: ${poin} Exp
`.trim()
    conn.siapakahaku[id] = [
        await conn.sendButton(m.chat, caption, author, ['hint', `${usedPrefix}sahint`], m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.sendButton(m.chat, `Waktu menjawab telah habis.\nJawabannya adalah *${json.jawaban}*`, author, ['Main lagi', '/siapakahaku'], conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i

handler.limit = true
handler.group = true
handler.private = false

export default handler