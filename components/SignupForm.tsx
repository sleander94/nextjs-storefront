import { useState, FormEvent } from 'react';
import Image from 'next/image';

export interface SignupFormProps {
  setSignupForm: Function;
}

export interface InterestsObj {
  Flower: boolean;
  Concentrate: boolean;
  Edible: boolean;
  Topical: boolean;
  Vape: boolean;
  'Pre-roll': boolean;
  CBD: boolean;
  Sativa: boolean;
  Indica: boolean;
  Hybrid: boolean;
}

const SignupForm = ({ setSignupForm }: SignupFormProps) => {
  const [firstName, setFirstName] = useState<string>();
  const [firstNameErr, setFirstNameErr] = useState<string>();

  const [lastName, setLastName] = useState<string>();
  const [lastNameErr, setLastNameErr] = useState<string>();

  const [email, setEmail] = useState<string>();
  const [emailErr, setEmailErr] = useState<string>();

  const [phone, setPhone] = useState<string>();
  const [phoneErr, setPhoneErr] = useState<string>();

  const [birthday, setBirthday] = useState<string>();

  const [isMedical, setIsMedical] = useState<boolean>(false);

  const [interests, setInterests] = useState<InterestsObj>({
    Flower: false,
    Concentrate: false,
    Edible: false,
    Topical: false,
    Vape: false,
    'Pre-roll': false,
    CBD: false,
    Sativa: false,
    Indica: false,
    Hybrid: false,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="overlay">
      <div className="content">
        <Image
          className="background-image"
          src="/images/stars.png"
          layout="fill"
          priority={true}
        ></Image>
        <form id="signup-form" action="" onSubmit={handleSubmit} noValidate>
          <button onClick={() => setSignupForm(false)}>X</button>
          <h1>Text & Loyalty Program Signup</h1>
          <div className="form-field">
            <label htmlFor="name">First Name*</label>
            <input
              id="first-name"
              aria-label="first-name"
              type="text"
              name="first-name"
              required
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={(e) => {
                e.target.className = 'touched';
                firstName === ''
                  ? setFirstNameErr('First name is required.')
                  : setFirstNameErr(undefined);
              }}
            />
            {firstNameErr && <p className="error">{firstNameErr}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="name">Last Name*</label>
            <input
              id="last-name"
              aria-label="last-name"
              type="text"
              name="last-name"
              required
              onChange={(e) => setLastName(e.target.value)}
              onBlur={(e) => {
                e.target.className = 'touched';
                lastName && lastName.length < 1
                  ? setLastNameErr('Last name is required.')
                  : setLastNameErr(undefined);
              }}
            />
            {lastNameErr && <p className="error">{lastNameErr}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              aria-label="email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => {
                e.target.className = 'touched';
                email &&
                !email.match(
                  /([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
                )
                  ? setEmailErr('Invalid email.')
                  : setEmailErr(undefined);
              }}
            />
            {emailErr && <p className="error">{emailErr}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone*</label>
            <input
              id="phone"
              aria-label="phone"
              type="tel"
              name="phone"
              required
              onChange={(e) => setPhone(e.target.value)}
              onBlur={(e) => {
                e.target.className = 'touched';
                phone && phone.match(/[a-zA-Z]/gi)
                  ? setPhoneErr('Invalid phone number.')
                  : setPhoneErr(undefined);
              }}
            />
            {phoneErr && <p className="error">{phoneErr}</p>}
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
                setBirthday(e.target.value);
                console.log(e.target.value);
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
          <div className="interests">
            <h2>I'm interested in:</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
