import { useState } from "react";
import { Container, VStack, Input, Button, Heading, FormControl, FormLabel, FormErrorMessage, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const validateForm = () => {
    let valid = true;
    let errors = { email: "", password: "" };

    if (!email) {
      errors.email = "Email is required";
      valid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle login logic here
      console.log("Form submitted", { email, password });
    }
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack as="form" spacing={4} onSubmit={handleSubmit} width="100%">
        <Heading as="h1" size="xl">
          Login
        </Heading>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" value={email} onChange={handleEmailChange} />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <Input id="password" type={showPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} />
            <InputRightElement>
              <IconButton aria-label={showPassword ? "Hide password" : "Show password"} icon={showPassword ? <FaEyeSlash /> : <FaEye />} onClick={toggleShowPassword} size="sm" />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="teal" width="full">
          Login
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
