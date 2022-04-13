import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'cross-fetch';
import Recaptcha from 'react-google-recaptcha';
import labels from '../utils/constants';
import { apiUrl } from '../utils/functions';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactName: '',
      contactEmail: '',
      emailSubject: '',
      emailMessage: '',
      gRecaptchaResponse: null,
      message: null,
      submitDisabled: true,
    };
    this.recaptchaRef = React.createRef();
  }

  handleChange = (evt) => {
    const { target } = evt;
    const { message } = this.state;
    if (message) {
      this.setState({ message: null });
    }
    this.setState({
      [target.name]: target.value,
    });
  };

  handleRecaptcha = (value) => {
    const { message } = this.state;
    if (message) {
      this.setState({ message: null });
    }
    if (value) {
      this.setState({ gRecaptchaResponse: value, submitDisabled: false });
    } else {
      this.setState({ gRecaptchaResponse: null, submitDisabled: true });
    }
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const { gRecaptchaResponse } = this.state;
    const params = {};
    const keys = Object.keys(this.state);
    const values = Object.values(this.state);
    keys.forEach((elem, index) => {
      if (elem.indexOf('contact') > -1 || elem.indexOf('email') > -1) {
        params[elem] = values[index] || '';
      }
    });
    params.gRecaptchaResponse = gRecaptchaResponse;

    try {
      const response = await fetch(`${apiUrl()}/forwardEmail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...params }),
      });
      if (response.ok) {
        this.setState({
          message: labels.FORM_SENT,
        });
        this.resetForm();
        this.recaptchaRef.current.reset();
      } else {
        this.setState({
          message: labels.FORM_SORRY,
          submitDisabled: true,
        });
        this.recaptchaRef.current.reset();
      }
    } catch (err) {
      this.setState({
        message: labels.FORM_SORRY,
        submitDisabled: true,
      });
      this.recaptchaRef.current.reset();
    }
  };

  resetForm = () => {
    this.setState({
      contactName: '',
      contactEmail: '',
      emailMessage: '',
      emailSubject: '',
      submitDisabled: true,
    });
  };

  render() {
    const {
      contactName,
      contactEmail,
      emailMessage,
      emailSubject,
      message,
      submitDisabled,
    } = this.state;

    const disabledButton =
      'bg-slate-400 text-white rounded px-14 py-2 text-xl transition-colors duration-300';

    const activeButton =
      'bg-amber-200 hover:bg-amber-400 text-slate-800 rounded px-14 py-2 text-xl transition-colors';
    return (
      <form
        className="contact-form"
        name="contact"
        method="POST"
        onSubmit={this.handleSubmit}
      >
        <div className="field">
          <label htmlFor="contactName">
            <div className="label">
              <span className="label-input">Name</span>
              <span className="required text-sm"> (required)</span>
            </div>
            <input
              className="rounded mb-6 w-full md:w-2/3"
              type="text"
              name="contactName"
              onChange={(evt) => this.handleChange(evt)}
              required
              value={contactName}
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="contactEmail">
            <div className="label">
              <span className="label-input">Email</span>
              <span className="required text-sm"> (required)</span>
            </div>
            <input
              className="rounded mb-6 w-full md:w-2/3"
              type="email"
              name="contactEmail"
              onChange={(evt) => this.handleChange(evt)}
              required
              value={contactEmail}
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="emailSubject">
            <div className="label">
              <span className="label-input">Subject</span>
              <span className="required text-sm"> (required)</span>
            </div>
            <input
              className="rounded mb-6 w-full md:w-2/3"
              type="text"
              name="emailSubject"
              onChange={(evt) => this.handleChange(evt)}
              required
              value={emailSubject}
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="emailMessage">
            <div className="label">
              <span className="label-input">Message</span>
              <span className="required text-sm"> (required)</span>
            </div>
            <textarea
              className="rounded mb-6 w-full md:w-2/3"
              name="emailMessage"
              onChange={(evt) => this.handleChange(evt)}
              required
              value={emailMessage}
            />
          </label>
        </div>
        <div className="field">
          <Recaptcha
            ref={this.recaptchaRef}
            sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
            onChange={this.handleRecaptcha}
            className="mb-6"
          />
        </div>
        <div className="field">
          <button
            className={
              submitDisabled ? `disabled ${disabledButton}` : `${activeButton}`
            }
            type="submit"
            disabled={submitDisabled}
          >
            Send
          </button>
        </div>
        {message && (
          <div className="feedback text text-lg mt-6 bg-slate-200 text-center px-2 py-2">
            {message}
          </div>
        )}
      </form>
    );
  }
}

ContactForm.defaultProps = {
  email: [],
  emailSubject: null,
  label: {},
};

ContactForm.propTypes = {
  email: PropTypes.arrayOf(PropTypes.string),
  emailSubject: PropTypes.string,
  label: PropTypes.shape({
    common: PropTypes.instanceOf(Object),
  }),
};

export default ContactForm;
