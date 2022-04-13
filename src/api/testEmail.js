import sendGrid from '@sendgrid/mail';

sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const message = {
    to: process.env.EMAIL_RECIPIENT,
    from: process.env.EMAIL_SENDER,
    subject: 'test',
    text: 'test',
    html: '<h1>Test email!</h1>',
  };

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
    return res.status(500).json({ message: 'There was an error.', error: err });
  }
}
