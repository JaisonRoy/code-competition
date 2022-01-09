const express = require('express');
const nodemailer = require('nodemailer')



const app = express();

app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.get('/',(req,res) =>
      res.send("Welcome to coding competition  #2 by Jaison Roy , NORKA B3")
);

app.get('/home',(req,res) =>{

    res.render('home',{});
    
});

app.get('/mailer',(req,res) => {
  console.log(req.query.email)
    var usermail ={
        email:req.query.email

    }
    
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jaisonroy700@gmail.com',
        pass:'jaison777'
        
      }
    });
    
    var mailOptions = {
      from: 'jaisonroy700@gmail.com',
      to:usermail.email,
      subject: 'Sending Email',
      text: 'automatic mailing program'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.send(error)
        console.log(error);
      } else {
        res.send("email send to " + usermail.email)
      }
    });
})





app.listen(3000,() => {
    console.log("server is running on port 3000")
});
