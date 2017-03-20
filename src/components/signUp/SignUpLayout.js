// @flow
import React from 'react';
import type { UserData } from '../../flux/user/UserQuery';

const Wrapper = (props: {}) => (
  <div {...props} className="w100 pa4 flex justify-center" />
);

const Loading = (props: {}) => (
  <div {...props} className="w-100 pa3 mv2">Loading...</div>
);

const Email = (props: { value: string }) => (
  <input {...props} className="w-100 pa3 mv2" placeholder="Email" />
);

const Name = (props: { value: string }) => (
  <input {...props} className="w-100 pa3 mv2" placeholder="Name" />
);

const SignUpButton = (props: { onClick: EventHandler }) => (
  <button
    className="pa3 bg-black-10 bn dim ttu pointer"
    onClick={props.onClick}
  >
    Sign up
  </button>
);

type Props = {
  data: UserData,
  email: string,
  name: string,
  onNameChange: EventHandler,
  onEmailChange: EventHandler,
  onSignUp: EventHandler
};

const SignUpLayout = (props: Props) => {
  if (!props.data || props.data.loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <Email value={props.email} onChange={props.onEmailChange} />
      <Name value={props.name} onChange={props.onNameChange} />
      {props.name && <SignUpButton onClick={props.onSignUp} />}
    </Wrapper>
  );
};

export default SignUpLayout;
