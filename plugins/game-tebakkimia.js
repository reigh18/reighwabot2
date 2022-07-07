import fetch from 'node-fetch'

let timeout = 60000
let poin = 5000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (id in conn.tebakkimia) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkimia[id][0])
        throw false
    }
    let res = await fetch(global.API('http://zekais-api.herokuapp.com', '/tebakunsur'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (json.status != 200) throw json
    console.log(json.name)
    let caption = `[Game - Tebak kimia]
Nama unsur dari lambang ${json.simbol} adalah...
Waktu menjawab *${(timeout / 1000).toFixed(2)} detik*
Hadiah: ${poin} Exp
`.trim()
    conn.tebakkimia[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkimia[id]) conn.reply(m.chat, `Waktu menjawab telah habis!\nJawabannya adalah *${json.name}*`, conn.tebakkimia[id][0])
            delete conn.tebakkimia[id]
        }, timeout)
    ]
}
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command = /^tebakkimia/i

handler.limit = true
handler.group = true
handler.private = false

export default handler