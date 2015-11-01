import express from 'express'

const app= express()
app.use(express.static('.'))
app.listen(process.env.PORT,()=>{
  console.log('server running at http://localhost:%s/',process.env.PORT)
})
