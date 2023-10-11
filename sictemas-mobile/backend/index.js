const express = require('express');
const PORT = 3001;
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: true }));  // Para parsear el cuerpo de las solicitudes POST
app.use(express.json());  // Para parsear el cuerpo de las solicitudes POST en formato JSON
app.use(cors());  // Habilitar CORS


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tickets.sictemas@gmail.com',
        pass: 'oguc ylrb bscl ysxv '
    }
});

app.post('/send-email', (req, res) => {
  const { username, description, company, endDate, contact} = req.body;

  console.log(username);

  const mailOptions = {
      from: 'tickets.sictemas@gmail.com',
      to: 'incidencias@sictemas.com',
      subject: `Ticket de: ${username} | ${company}`,
      text: `\nInc | ${description} | ${username}\n\n Cliente: ${company}\n\n Fecha fin: ${endDate}\n\n Contacto: ${contact} `
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
          res.status(500).send('Server Error');
      } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send('Email Sent');
      }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
