import { SignInForm } from "@/components/sign-in";

export default async function SignInPage() {
  return (
    <div className="flex flex-col gap-2">
      <SignInForm />
    </div>
  );
}
