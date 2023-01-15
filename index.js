const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('สวัสดีทู๊กคนนน อย่ากดมั่วน่ะ เดี๋ยวซุปเปอร์แมนจะวิ่งหนี')
})

app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/product.html')
})


app.listen(3000, () => {
    console.log("Start Server at Port [3000]")
})