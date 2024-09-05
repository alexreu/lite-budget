import { SignInForm } from "./sign-in-form";

export default async function AuthPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignInForm />
    </div>
  );
}
