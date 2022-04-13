// import fetch from 'cross-fetch';
// import Mailjet from 'node-mailjet';
// import 'dotenv/config';

// /* stored not only keys but destination email in .env to make it secure and easy to update */
// const {
//   EMAIL_ADDRESS,
//   MJ_APIKEY_PUBLIC,
//   MJ_APIKEY_PRIVATE,
//   RECAPTCHA_SECRET_KEY,
//   RECAPTCHA_URL,
// } = process.env;
// const mailjet = Mailjet.connect(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE);

// const formatRequest = (params) => {
//   /* n.b. destination email is in the form of
//      an array even if it is a single addressee */
//   let request = {
//     Messages: [
//       {
//         From: {
//           Email: params.contactEmail,
//           Name: params.contactName,
//         },
//         To: [
//           {
//             Email: EMAIL_ADDRESS,
//             Name: 'Victor Chan',
//           },
//         ],
//         Subject: 'Message via victorchan.dev!',
//         TextPart: params.emailMessage,
//         HTMLPart: `<h1>A new message has arrived from victorchan.dev</h1>
//               <h3>Subject: ${params.emailSubject}</h3>
//               <ul>
//               <li>Name: ${params.contactName}</li>
//               <li>Email: ${params.contactEmail}</li>
//               </ul>
//               <h3>Message:</h3>
//               <p>${params.emailMessage}</p>`,
//       },
//     ],
//   };
//   return request;
// };

// export default async function handler(req, res) {
//   const params = JSON.parse(req.body);

//   const recaptchaResponse = await fetch(RECAPTCHA_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     body: `secret=${RECAPTCHA_SECRET_KEY}&response=${params.gRecaptchaResponse}`,
//   });

//   const recaptchaData = await recaptchaResponse.json();

//   if (recaptchaData.success) {
//     const message = formatRequest(params);
//     return mailjet
//       .post('send', { version: 'v3.1' })
//       .request(message)
//       .then((res) => {
//         // res.status(200).json({ message: 'ok' });
//         return res.json();
//       })
//       .catch((error) => {
//         res.status(500).send(error);
//       });
//   } else {
//     res.status(500).json(recaptchaData);
//   }
// }
