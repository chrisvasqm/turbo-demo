import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

app.get('/', (res, req) => {
    res.send({ message: 'Backend here'})
})

app.listen(3000, () => console.log('Server listening on port 3000'))
