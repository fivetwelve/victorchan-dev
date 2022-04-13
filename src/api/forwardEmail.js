import fetch from 'cross-fetch';
import sendGrid from '@sendgrid/mail';

sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

const formatMessage = (params) => {
  const message = {
    from: process.env.EMAIL_SENDER,
    subject: `${params.emailSubject} [via victorchan.dev]`,
    text: params.emailMessage,
    html: `<h2>You've got mail!</h2>
              <h3>From:</h3>
              <p>
              Name: ${params.contactName}<br/>
              Email: ${params.contactEmail}
              </p>
              <h3>Message:</h3>
              <p>${params.emailMessage}</p>`,
    reply_to: {
      email: params.contactEmail,
      name: params.contactName,
    },
    personalizations: [
      {
        to: [
          {
            email: process.env.EMAIL_RECIPIENT,
            name: 'Victor Chan',
          },
        ],
      },
    ],
  };
  return message;
};

export default async function handler(req, res) {
  if (req.body && req.body.contactEmail) {
    console.log('body');
    console.log(req.body);

    const recaptchaResponse = await fetch(process.env.RECAPTCHA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.gRecaptchaResponse}`,
    });

    const recaptchaData = await recaptchaResponse.json();

    if (recaptchaData.success) {
      const message = formatMessage(req.body);
      try {
        return sendGrid.send(message).then(
          () => {
            res.status(200).json({
              message: 'I will send email',
            });
          },
          (error) => {
            console.error(error);
            if (error.response) {
              return res.status(500).json({
                error: error.response,
              });
            }
          },
        );
      } catch (err) {
        console.log(err);
        return res
          .status(500)
          .json({ message: 'There was an error.', error: err });
      }
    } else {
      res.status(500).json(recaptchaData);
    }
  } else {
    return res
      .status(500)
      .json({ message: 'There was an error.', error: 'Empty request.' });
  }
}
