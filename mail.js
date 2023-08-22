// jslsmojkgpkbmgrv
const nodemailer = require("nodemailer");
const fs = require('fs');
const Handlebars = require('handlebars');
const path = require('path');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'hksshah111@gmail.com',
    pass: "jslsmojkgpkbmgrv"
  }
});
transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });


  const userdetails = [{email: "hksshah111@gmail.com", username: "Hari", ph:"+917091517943"}, {email: "hksshh111@gmail.com", username: "Krishna", ph:"9844523112"}, {email: "harikrishna.shah2021@vitstudent.ac.in", username: "Shah", ph:"9844889623"}]
  const subject = "Big Billion Sales"


// const htmlFilePaths = [
//   path.join("./email.handlebars"),
//   path.join("./welcome.handlebars"),
//   // Add more paths as needed
// ];
// async function main(userDetails, subject) {
//   const htmlContents = htmlFilePaths.map(filePath => fs.readFileSync(filePath, 'utf-8'));
//   const combinedHTML = htmlContents.join('<hr>'); 
//   const htmlFile = Buffer.from(combinedHTML).toString();
//   const sample = Handlebars.compile(htmlFile);
//   const mail = sample(userDetails);
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: "hksshah111@gmail.com", // sender address
//     to: userDetails.email, // list of receivers
//     subject: subject, // Subject line
//     text: "", // plain text body
//     html: mail,
//     // attachments: [{
//     //     filename: 'image.png',
//     //     path: './image.png',
//     //     cid: 'unique@nodemailer.com' //same cid value as in the html img src
//     // }]
//   });

//   console.log("Message sent: %s", info.messageId);
// }

// async..await is not allowed in global scope, must use a wrapper
async function main(userDetails, subject) {
  const htmlmainfile = fs.readFileSync("./email.handlebars");
  const htmlFile = Buffer.from(htmlmainfile).toString();
  const sample = Handlebars.compile(htmlFile);
  const mail = sample(userDetails);
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "hksshah111@gmail.com", // sender address
    to: userDetails.email, // list of receivers
    subject: subject, // Subject line
    text: "", // plain text body
    html: mail,
    // attachments: [{
    //     filename: 'image.png',
    //     path: './image.png',
    //     cid: 'unique@nodemailer.com' //same cid value as in the html img src
    // }]
  });

  console.log("Message sent: %s", info.messageId);
}

let sentsuccess = 0;
// main().catch(console.error);
userdetails.map((userDetails)=>{
  main(userDetails, subject).catch(console.error);
  console.log("Message sent to " + userDetails.username + " at " + userDetails.email);
  sentsuccess++;

});


