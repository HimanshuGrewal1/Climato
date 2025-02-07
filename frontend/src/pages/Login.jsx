import { TextInput, PasswordInput, Button, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Login() {
  const form = useForm({
    initialValues: { email: "", password: "" },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 6 ? null : "Password must be at least 6 characters",
    },
  });

  const handleSubmit = (values) => {
    console.log("Login data:", values);
  };

  return (
    <Box maw={400} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Email"
          placeholder="Enter your email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          mt="md"
          {...form.getInputProps("password")}
        />
        <Button type="submit" fullWidth mt="xl">
          Login
        </Button>
      </form>
    </Box>
  );
}
