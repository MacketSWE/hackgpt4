import { useState } from "react";
import { useSignUpEmailPassword, useSignInEmailPassword } from "@nhost/nextjs";
import { useAuthenticationStatus } from "@nhost/nextjs";
import { useUserData } from "@nhost/nextjs";
import { useSignOut } from "@nhost/nextjs";

import BeatLoader from "react-spinners/BeatLoader";

import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export const SignInContainer = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signUpEmailPassword, isLoading: loadingSignUp } =
    useSignUpEmailPassword();

  const { signInEmailPassword, isLoading: loadingSignIn } =
    useSignInEmailPassword();

  const { isLoading: loadingAuth, isAuthenticated } = useAuthenticationStatus();
  const user = useUserData();

  const { signOut } = useSignOut();

  const isLoading = loadingAuth || loadingSignUp || loadingSignIn;

  const handleOnSignUp = async () => {
    await signUpEmailPassword(email, password, {
      displayName: email.split("@")[0],
      metadata: {
        firstName: "Nice",
        lastName: "Stuff",
      },
    });
  };

  const handleOnSignIn = async () => {
    await signInEmailPassword(email, password);
  };

  const isLoggedIn = isAuthenticated && !!user?.displayName;

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 rounded-xl mt-5 p-4 w-80 space-y-2">
      {isLoading && <BeatLoader color="gray" />}
      {!isLoggedIn && !isLoading && (
        <>
          <Input value={email} onChange={setEmail} placeholder="Email" />
          <Input
            value={password}
            onChange={setPassword}
            placeholder="Lösenord"
            type="password"
          />
          <Button label="Skapa konto" onClick={handleOnSignUp} />
          <Button label="Logga in" onClick={handleOnSignIn} />
        </>
      )}
      {isLoggedIn && !isLoading && (
        <>
          <div>Inloggad som {user.displayName.split("@")[0]}</div>
          <Button label="Logga out" onClick={signOut} />
        </>
      )}
    </div>
  );
};
