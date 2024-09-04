import { signIn } from "@/auth";
import { Button } from "@/sdk/ui/general/Button";
import { AuthError } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
export const SignInForm = () => {
  return (
    <form
      action={async () => {
        "use server";
        try {
          await signIn("google");
        } catch (error) {
          if (error instanceof AuthError) {
            return redirect(`/signin?error=${error.type}`);
          }
          throw error;
        }
      }}
    >
      <Button
        htmlType="submit"
        shape="round"
        className="inline-flex items-center gap-2"
      >
        <Image
          src="/pictures/g-logo.svg"
          alt="Google logo"
          width={24}
          height={24}
        />
        <span>Sign in with Google</span>
      </Button>
    </form>
  );
};
