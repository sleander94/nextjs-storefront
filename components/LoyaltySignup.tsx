import Image from 'next/image';
import { useState } from 'react';
import SignupForm from './SignupForm';

const LoyaltySignup = () => {
  const [signupForm, setSignupForm] = useState<boolean>(false);

  return (
    <>
      <section id="loyalty-signup">
        <Image
          className="background-image"
          src="/images/stars.png"
          layout="fill"
        ></Image>
        <div className="content">
          <h2>BE THE FIRST TO GET EXCLUSIVE DEALS!</h2>
          <div className="form-actions">
            <div className="rocket">
              <Image
                style={{
                  filter:
                    'invert(30%) sepia(42%) saturate(3555%) hue-rotate(313deg) brightness(92%) contrast(101%)',
                }}
                src="/rocket.svg"
                alt="rocket ship blasting off"
                width={100}
                height={100}
              />
            </div>
            <div className="call-to-action">
              <h3>Sign up for our text & loyalty program today.</h3>
              <button onClick={() => setSignupForm(true)}>
                <div className="background-gradient">
                  <p>Join Now!</p>
                </div>
                <Image
                  className="button-image"
                  src="/images/stars.png"
                  layout="fill"
                ></Image>
              </button>
            </div>
          </div>
        </div>
      </section>
      {signupForm && <SignupForm setSignupForm={setSignupForm} />}
    </>
  );
};

export default LoyaltySignup;
