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
         
        }
        catch (e){
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
        }
  

})


app.post('/v1/flash_cards', async (req, res) => {
try {

} catch (e) {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
}
})