import Image from 'next/image';
import { useState, FormEvent, ChangeEvent } from 'react';

const LoyaltySignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthday: '',
  });

  const [isMedical, setIsMedical] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const [nameErr, setNameErr] = useState<string>();
  const [emailErr, setEmailErr] = useState<string>();
  const [phoneErr, setPhoneErr] = useState<string>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(formData);
      console.log(isMedical);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section id="loyalty-signup">
      <Image
        className="background-image"
        src="/images/stars.png"
        alt=""
        layout="fill"
      ></Image>
      <div className="content">
        <div className="call-to-action">
          <h2>BE THE FIRST TO GET EXCLUSIVE DEALS!</h2>
          <h3>Sign up for our text & loyalty program today.</h3>
        </div>
        <form id="signup-form" action="" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="name">Name*</label>
            <input
              id="name"
              aria-label="name"
              type="text"
              name="name"
              required
              onChange={(e) => handleChange(e)}
              onBlur={(e) => {
                e.target.className = 'touched';
                formData.name === ''
                  ? setNameErr('Name is required.')
                  : setNameErr(undefined);
              }}
            />
            {nameErr && <p className="error">{nameErr}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone*</label>
            <input
              id="phone"
              aria-label="phone"
              type="tel"
              name="phone"
              required
              onChange={(e) => handleChange(e)}
              onBlur={(e) => {
                e.target.className = 'touched';
                formData.phone.length === 0
                  ? setPhoneErr('Phone number is required.')
                  : formData.phone.match(/[a-zA-Z]/gi)
                  ? setPhoneErr('Invalid phone number.')
                  : setPhoneErr(undefined);
              }}
            />
            {phoneErr && <p className="error">{phoneErr}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              aria-label="email"
              type="email"
              name="email"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => {
                e.target.className = 'touched';
                formData.email.length > 0 &&
                !formData.email.match(
                  /([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
                )
                  ? setEmailErr('Invalid email.')
                  : setEmailErr(undefined);
              }}
            />
            {emailErr && <p className="error">{emailErr}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="phone">Birthday</label>
            <input
              id="birthday"
              aria-label="birthday"
              type="date"
              name="birthday"
              required
              onChange={(e) => {
                handleChange(e);
              }}
              onBlur={(e) => {
                e.target.className = 'touched';
              }}
            />
          </div>

          <div className="form-field-check">
            <input
              type="checkbox"
              name="isMedical"
              onChange={() => setIsMedical(!isMedical)}
            />
            <label htmlFor="textAlert">I am a medical patient.</label>
          </div>

          <button>
            <div className="background-gradient">
              <p>Join Now!</p>
            </div>
            <div className="image-container">
              <Image
                className="button-image"
                src="/images/stars.png"
                alt=""
                layout="fill"
              ></Image>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoyaltySignup;
