import { tebakgambar } from '@bochilteam/scraper'

let timeout = 60000
let poin = 5000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (id in conn.tebakgambar) {
        conn.sendButton(m.chat, 'Masih ada soal yang belum terjawab.', author, null, buttons, conn.tebakgambar[id][0])
        throw false
    }
    let json = await tebakgambar()
    // if (!json.status) throw json
    let caption = `
Waktu menjawab ${(timeout / 1000).toFixed(2)} detik
Hadiah: ${poin} Exp
    `.trim()
    conn.tebakgambar[id] = [
        await conn.sendButton(m.chat, caption, author, json.img, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakgambar[id]) conn.sendButton(m.chat, `Waktu menjawab telah habis!\nJawabannya adalah *${json.jawaban}*`, author, null, [
                ['Tebak gambar', '.tebakgambar']
            ], conn.tebakgambar[id][0])
            delete conn.tebakgambar[id]
        }, timeout)
    ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i

handler.limit = true
handler.group = true
handler.private = false

export default handler

const buttons = [
    ['Hint', '/hint'],
    ['Menyerah', 'menyerah']
]