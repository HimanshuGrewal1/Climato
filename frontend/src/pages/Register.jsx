import React, { useState } from "react";
import { Stepper, Button, Group, TextInput, PasswordInput, Code } from "@mantine/core";
import { useForm } from "@mantine/form";

const Register = () => {
  const [active, setActive] = useState(0);

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
      name: "",
      email: "",
      website: "",
      github: "",
    },

    validate: (values) => {
      if (active === 0) {
        return {
          username: values.username.trim().length < 6
            ? "Username must be at least 6 characters"
            : null,
          password: values.password.length < 6
            ? "Password must be at least 6 characters"
            : null,
        };
      }

      if (active === 1) {
        return {
          name: values.name.trim().length < 2 ? "Name must be at least 2 characters" : null,
          email: /^\S+@\S+$/.test(values.email) ? null : "Invalid email",
        };
      }

      return {};
    },
  });

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) return current;
      return current < 3 ? current + 1 : current;
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

        <Stepper active={active}>
          {/* Step 1: Profile Settings */}
          <Stepper.Step label="Profile" description="Set up your account">
            <TextInput
              label="Username"
              placeholder="Enter username"
              {...form.getInputProps("username")}
            />
            <PasswordInput
              mt="md"
              label="Password"
              placeholder="Enter password"
              {...form.getInputProps("password")}
            />
          </Stepper.Step>

          {/* Step 2: Personal Info */}
          <Stepper.Step label="Personal Info" description="Your basic details">
            <TextInput
              label="Name"
              placeholder="Enter your name"
              {...form.getInputProps("name")}
            />
            <TextInput
              mt="md"
              label="Email"
              placeholder="Enter your email"
              {...form.getInputProps("email")}
            />
          </Stepper.Step>

          {/* Step 3: Social Media */}
          <Stepper.Step label="Social Links" description="Your online presence">
            <TextInput
              label="Website"
              placeholder="Enter your website"
              {...form.getInputProps("website")}
            />
            <TextInput
              mt="md"
              label="GitHub"
              placeholder="Enter GitHub username"
              {...form.getInputProps("github")}
            />
          </Stepper.Step>

          {/* Step 4: Completion */}
          <Stepper.Completed>
            <h3 className="text-lg font-semibold">Registration Completed!</h3>
            <Code block mt="xl">
              {JSON.stringify(form.values, null, 2)}
            </Code>
          </Stepper.Completed>
        </Stepper>

        {/* Navigation Buttons */}
        <Group justify="flex-end" mt="xl">
          {active !== 0 && (
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
          )}
          {active !== 3 ? (
            <Button onClick={nextStep}>Next Step</Button>
          ) : (
            <Button color="green">Finish</Button>
          )}
        </Group>
      </div>
    </div>
  );
};

export default Register;
