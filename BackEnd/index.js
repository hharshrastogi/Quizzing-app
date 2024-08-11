const { PrismaClient } = require('@prisma/client')
const express = require('express');

const app = express();

const prisma = new PrismaClient()



const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});



app.get('/v1/flash_cards', async (req,res)=> {
        try{
            res.send('Hello')
        }
        catch (e){
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
        }
  

})


app.post('/v1/flash_cards', async (req, res) => {
try {
        let body = req.body
        var flashcardentry = await prisma.flash_card.create({
            data:{
                fid : body.fid,
                question : body.question,
                answer: body.answer
            }
        })

        res.status(201).json({"status":"Created Succesfully","data":body})
} catch (e) {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
}
})