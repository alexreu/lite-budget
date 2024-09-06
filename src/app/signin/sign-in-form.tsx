"use client";

import { Card } from "@/sdk/ui/data-display/Card";
import { Input } from "@/sdk/ui/data-entry/Input";
import { Button } from "@/sdk/ui/general/Button";
import { Typography } from "@/sdk/ui/general/Typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { Divider, Flex, Form } from "antd";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { signInAction } from "./sign-in.action";
import { SignInSchema, signInSchema } from "./sign-in.schema";

const { Title, Text } = Typography;

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInSchema>({ resolver: zodResolver(signInSchema) });

  const onSubmit = (data: SignInSchema) => {
    console.log(data);
  };

  return (
    <Card className=" w-full max-w-md shadow-lg">
      <Flex gap={24} vertical>
        <Flex justify="start" align="start" vertical>
          <Title level={3}>Connexion</Title>
          <Text>
            Entrez votre email ci-dessous pour vous connecter à votre compte
          </Text>
        </Flex>
        <form className="flex flex-col items-center" action={signInAction}>
          <Button
            htmlType="submit"
            shape="round"
            className="inline-flex items-center gap-2"
            block
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
      </Flex>
      <Divider orientationMargin={12} />
      <Form name="login" layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          name="email"
          label="Email"
          validateStatus={errors.email ? "error" : ""}
          help={errors.email?.message}
        >
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input {...field} placeholder="exemple@domaine.com" />
            )}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          validateStatus={errors.password ? "error" : ""}
          help={errors.password?.message}
        >
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input.Password placeholder="Password" {...field} />
            )}
          />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="mt-2"
          shape="round"
          block
        >
          Connexion
        </Button>
      </Form>
    </Card>
  );
};
