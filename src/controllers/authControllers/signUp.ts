import User from "../../models/User";
import bcrypt from "bcrypt";
import { createToken } from "../../helpers";
import "dotenv/config";
import nodemailer from "nodemailer";
import Mailgen from "mailgen";

const signUp = async (userData: any) => {
  // userData.birthdate = new Date(userData.birthdate)
  // console.log()

  if (userData) {
    //1234
    userData.password = await bcrypt.hash(userData.password, 10); //$2b$10$ZgjhmJXXRzXM6P.vvCiaUuBOyIbAt5dg.l93OEMCdgu21weCDPZU6
  }
  const newUser = await User.create(userData);

  // ! ////////

  // new chat requirement

  newUser.status = 'online'
  await newUser.save()

  // ! ////////

  //Configuramos para que pueda recibir emails
  let config = {
    service: "gmail",
    auth: {
      user: "henrymoon.latam@gmail.com",
      pass: "xdgpunccyritkucn",
    },
  };

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Welcome to HenryMoon!",
      link: "https://mailgen.js/",
    },
  });

  let response = {
    body: {
      name: userData.name,
      intro:
        "Welcome to our community! We are pleased to have you as a member of our Henry Moon website. We hope you enjoy your experience on our platform and that you find everything you need. \n\n As a new member, you will have access to all functions and features of our website, including:",
      table: {
        data: [
          {
            description:
              "Play games, chat, have live calls, team schedule, among many other options",
          },
        ],
      },
      outro: "If you have any questions or problems while using our website, feel free to contact our support team. We are here to help you and make sure you have the best experience possible. Thank you so much. Kind regards. Henrymoon",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: "henrymoon.latam@gmail.com",
    to: userData.email,
    subject: "Henry Moon",
    html: mail,
  };

  await transporter.sendMail(message);

  return {
    access: true,
    token: createToken({ id: newUser._id, email: newUser.name }),
    user: newUser,
  };
};

export default signUp;

// const { userEmail, userName } = req.body

// let config = {
//   service: 'gmail',
//   auth: {
//     user: EMAIL,
//     pass: PASSWORD
//   }
// }

// let transporter = nodemailer.createTransport(config)

// let MailGenerator = new Mailgen({
//   theme: 'default',
//   product: {
//     name: 'Mailgen',
//     link: 'https://mailgen.js/'
//   }
// })

// let response = {
//   body: {
//     name: userName,
//     intro: 'Your bill has arrived',
//     table: {
//       data: [
//         {
//           item: 'Nodemailer Stack Book',
//           description: 'A backend application',
//           price: '$10.99'
//         }
//       ]
//     },
//     outro: 'Nos vemos parcerito'
//   }
// }

// let mail = MailGenerator.generate(response)

// let message = {
//   from: EMAIL,
//   to: userEmail,
//   subject: 'Una bella orden de prueba',
//   html: mail
// }

// const resp = await transporter.sendMail(message)
