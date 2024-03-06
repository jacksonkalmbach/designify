import { useState } from "react";
import {
  StyledAuthFormContainer,
  StyledAuthHeader,
  StyledAuthForm,
  ORDivider,
  AuthBodyText,
  StyledAuthPageContainer,
} from "./Styles";

import Button from "../shared/components/Button";
import InputField from "../shared/components/InputField";
import Separator from "../shared/components/Separator";

import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../utils/firebase";
import {
  checkUserExistsInDatabase,
  createUserInDatabase,
  getUserFromDatabaseByUid,
} from "../utils/user/userDatabaseUtils";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const { uid, email, displayName, photoURL } = user;
      const firstName = displayName ? displayName.split(" ")[0] : "";
      const lastName = displayName ? displayName.split(" ")[1] : "";
      const password = null;
      const userExists = await checkUserExistsInDatabase(uid);
      if (!userExists) {
        const newUser = await createUserInDatabase(
          uid,
          email,
          password,
          firstName,
          lastName,
          photoURL
        );
        localStorage.setItem("designify_user", JSON.stringify(newUser));
      } else {
        const user = await getUserFromDatabaseByUid(uid);
        localStorage.setItem("designify_user", JSON.stringify(user));
      }
      navigate("/inspiration");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <StyledAuthPageContainer>
      <StyledAuthHeader>
        {isSignup ? "Sign Up for Designify" : "Sign In to Designify"}
      </StyledAuthHeader>
      <StyledAuthFormContainer>
        <Button
          text={isSignup ? "Sign Up with Google" : "Sign In with Google"}
          variant="outlined"
          icon={"google"}
          onClick={handleGoogleSignIn}
        />
        <ORDivider>
          <Separator />
          <p>OR</p>
          <Separator />
        </ORDivider>
        <StyledAuthForm>
          <InputField placeholder="Email" type="email" label="Email Address" />
          <InputField placeholder="Password" type="password" label="Password" />
          {isSignup && (
            <InputField
              placeholder="Confirm Password"
              type="password"
              label="Confirm Password"
            />
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
    </StyledAuthPageContainer>
  );
};

export default Auth;
