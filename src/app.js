const express = require('express');

const app = express();

app.use("/test", (req,res) => {
    res.send('test is successfull');
});
app.use('/',(req,res)=> {
     res.send('Hello World!');
});


app.listen(3000, () => {
    console.log('Server started successfully!');
})