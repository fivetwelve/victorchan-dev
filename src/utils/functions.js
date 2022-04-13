/* use to switch between local or prod environment for Netlify functions without setting up proxying */
const apiUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.hostname === 'localhost'
      ? 'http://localhost:8888/api'
      : `https://${window.location.hostname}/api`;
  }
  return false;
};

/* my utility for key generation, with less likelihood for name collision */
const makeid = (length = 5) => {
  /* from https://stackoverflow.com/a/1349426 */
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export { apiUrl, makeid };
