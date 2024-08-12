import { PrismaClient } from '@prisma/client';
import express from 'express'
import { Prisma } from '@prisma/client';
import cors from 'cors'
const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(express.static("public"));
app.use(cors({
    origin:"http://localhost:5173",
}))
const prisma = new PrismaClient()



const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});

//function gets a question using its unique flashCardId
async function getQuestionById(flashCardId){
 return await prisma.flash_card.findUnique({
    where:{
        fid: flashCardId,
    }
 })
}

app.get('/v1/flash_cards/:fid' ,async (req,res)=>{
    try{
        let newQuestion = await getQuestionById(parseInt(req.params.fid))
        prisma.$disconnect
        res.json(newQuestion)
    }
    catch (e) {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
        }
      
})

app.get('/v1/flash_cards', async (req,res)=> {
        try{
            let body = req.body
            res.send("Request Accepted")
        }
        catch (e){
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
        }
  

})

app.post('/v1/edit_flash_cards/:fid',async(req,res)=>{
    try{
        let body = req.body;
        var flashCard = await prisma.flash_card.update({
            where:{
                fid:parseInt(req.params.fid)
            },
            data:{
                question:body.question,
                answer:body.answer
            }
        })
    }
    catch(e){
        console.log("Error in updating flash card",e);
    }
    });
app.post('/v1/flash_cards', async (req, res) => {
try {
        console.log("Hello");
        let body = req.body
        console.log(req.body);
        var flashcardentry = await prisma.flash_card.create({
            data:{
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

app.post('/v1/flash_cards/delete/:fid',async(req,res)=>{
    try{
        let body = req.body;
        var deleteflashcard = await prisma.flash_card.delete({
            where: {
                fid:parseInt(req.params.fid)
            },}
        )
    }
    catch(e){
            console.log("Error in deleting flash card:",e);
    }
});