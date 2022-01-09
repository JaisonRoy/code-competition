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
    var usermail ={
        email:req.params("email")
    }
})


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jaisonroy700@gmail.com',
      
    }
  });
  
  var mailOptions = {
    from: 'jaisonroy700@gmail.com',
    to: 'email',
    subject: 'Sending Email',
    text: 'automatic mailing program'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });


app.listen(3000,() => {
    console.log("server is running on port 3000")
});
