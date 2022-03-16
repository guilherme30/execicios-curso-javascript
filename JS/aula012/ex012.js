var agr = new Date()
var hrs = agr.getHours()

console.log(`Agora são exatamente ${hrs} horas!`)

if (hrs <= 12 || hrs >= 6) {
    console.log("Bom dia!")
}
else if (hrs > 12) {
    console.log("Boa tarde!")
}
else if (hrs > 18) {
    console.log("Boa noite!")
}
else if (hrs >= 0 || hrs < 6) {
    console.log("Boa madrugada!")
}