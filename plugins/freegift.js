let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode FreeGiftmu!`, m)
    if (args[0] == 'Dapi1' || args[0] == 'Dapi2' || args[0] == 'Dapi3' || args[0] == 'Dapi4' || args[0] == 'Dapi5' || args[0] == 'Dapi6') {

    if (new Date - global.db.data.users[m.sender].lastclaim > 86400000) {
       conn.reply(m.chat, '*🎉 SELAMAT!*\nKamu telah mendapatkan\n1000 XP ✨\n 1 Limit! 🎫\n1000 Money 💹\n1 Potion 🥤', m)
    global.db.data.users[m.sender].exp += 1000
    global.db.data.users[m.sender].limit += 1
    global.db.data.users[m.sender].money +=1000
    global.db.data.users[m.sender].potion += 1
    global.db.data.users[m.sender].lastclaim = new Date * 1
} else conn.reply(m.chat, '[❗] Kode Gift Gratis hanya dapat digunakan sehari sekali ! dan kode hanya bisa di pakai sekali !\n\nKetik *!buygift* untuk membeli kodegift premium', m)
   } else {
        conn.reply(m.chat, `*「 KODE FREE TIDAK VALID 」*\n\nSilahkan daftar terlebih dahulu untuk mendapatkan kodegift gratis!\n\nKetik !daftar namamu|umurmu`, m)
    }
}
handler.help = ['freegift <kode>']
handler.tags = ['xp']
handler.command = /^(freegift)$/i

module.exports = handler
