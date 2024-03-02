import { useState } from "react";
import {
  StyledAuthFormContainer,
  StyledAuthHeader,
  StyledAuthForm,
  ORDivider,
  AuthBodyText,
} from "./Styles";

import Button from "../shared/components/Button";
import InputField from "../shared/components/InputField";
import Separator from "../shared/components/Separator";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <div>
      <StyledAuthHeader>
        {isSignup ? "Sign Up for Designify" : "Sign In to Designify"}
      </StyledAuthHeader>
      <StyledAuthFormContainer>
        <Button
          text={isSignup ? "Sign Up with Google" : "Sign In with Google"}
          variant="outlined"
          icon={"google"}
          onClick={() => {}}
        />
        <ORDivider>
          <Separator />
          <p>OR</p>
          <Separator />
        </ORDivider>
        <StyledAuthForm>
          <InputField placeholder="Email" type="email" />
          <InputField placeholder="Password" type="password" />
          {isSignup && (
            <InputField placeholder="Confirm Password" type="password" />
          )}
          <Button
            text={isSignup ? "Create Account" : "Sign In"}
            onClick={() => {}}
            variant="primary"
          />
        </StyledAuthForm>
        <AuthBodyText>
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            style={{ cursor: "pointer", fontWeight: "600" }}
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </span>
        </AuthBodyText>
      </StyledAuthFormContainer>
    </div>
  );
};

export default Auth;
