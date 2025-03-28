//pacchetti 
import express from 'express';
import cors from 'cors'
import productRouter from './routers/productRouter.js';

//impostiamo express e la porta del server
const app = express();
const port = process.env.SERVER_PORT || 3000;


app.use(cors({
    origin: process.env.FRONTEND_APP
  }));
// Middleware
app.use(express.static('public')); // File statici (es. immagini)
app.use(express.json()); // Parsa i body JSON

app.use('/products', productRouter) 

//attivazione del server
app.listen(port, () => {
    console.log(`Server kick-shop in funzione sulla porta: ${port}`);
});