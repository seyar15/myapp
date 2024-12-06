import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

// Express App
const app = express();
const port = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// App Routes
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/index.html'));
})


// Run App on Port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})