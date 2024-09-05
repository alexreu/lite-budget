"use client";

import { Card } from "@/sdk/ui/data-display/Card";
import { Button } from "@/sdk/ui/general/Button";
import { Typography } from "@/sdk/ui/general/Typography";
import Image from "next/image";
import { signInAction } from "./sign-in.action";

const { Title } = Typography;

export const SignInForm = () => {
  return (
    <Card className="w-full max-w-md shadow-lg">
      <Title level={3} className="text-center mb-6">
        Welcome Back
      </Title>
      <form className="flex flex-col items-center" action={signInAction}>
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
    </Card>
  );
};
