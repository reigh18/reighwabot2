import { siapakahaku } from '@bochilteam/scraper'

let timeout = 30000
let poin = 5000
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'Masih ada soal yang belum terjawab.', conn.siapakahaku[id][0])
        throw false
    }
    const json = await siapakahaku()
    let caption = `
Siapakah aku? ${json.soal}
Waktu menjawab selama *${(timeout / 1000).toFixed(2)} detik*
Bonus jika jawaban benar: ${poin} Exp
`.trim()
    conn.siapakahaku[id] = [
        await conn.sendButton(m.chat, caption, author, ['Bantuan', `${usedPrefix}who`], m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.sendButton(m.chat, `Waktu menjawab telah habis!\nJawabannya adalah *${json.jawaban}*`, author, ['Main lagi', '/siapakahaku'], conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i

export default handler
