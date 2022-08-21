export default function (req, res) {
  require('dotenv').config()
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'abdo.errafaiy@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from: 'abdo.errafaiy@gmail.com',
    to: 'abdo.errafaiy@gmail.com',
    subject: `Mi7fadti`,
    text: " Commande de : " + req.body.first_name,
    html: `<div>Nom & Prenom : ${req.body.first_name} ${req.body.last_name} <br/> Tel :${req.body.phone} <br/> Email : ${req.body.email} <br/> Adress : ${req.body.adress} <br/> Liste : ${req.body.list}`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      res.redirect('/thanks') 
  })
  res.status(200)
}