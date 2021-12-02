import React, { useState } from 'react';
import { Input, Label } from '@rebass/forms';
import { Box, Button, Flex } from 'rebass';

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../../utils/mutations';
import Auth from '../../../utils/auth';

export default function CreateUserForm() {
  const [formValues, setFormValues] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [newUser, { loading, data, error }] = useMutation(CREATE_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    try {
      const { data } = await newUser({
        variables: {
          email: formValues.email,
          username: formValues.username,
          password: formValues.password,
        },
      });

      Auth.login(data.newUser.token);

      setFormValues({
        email: '',
        username: '',
        password: '',
      });
    } catch (err) {
      alert('Failed to create new user');
    }
  };

  const handleChange = (e) => {
    const currentState = { ...formValues };
    currentState[e.target.name] = e.target.value;
    setFormValues(currentState);
  };

  return (
    <Box as='form' onSubmit={handleSubmit} onChange={handleChange} py={3}>
      <Flex mx={-2} mb={3}>
        <Box width={1 / 2} px={2}>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' name='email' placeholder='example@email.com' />
        </Box>
        <Box width={1 / 2} px={2}>
          <Label htmlFor='username'>Username</Label>
          <Input id='username' name='username' placeholder='NuggetMaster69' />
        </Box>
        <Box width={1 / 2} px={2}>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            name='password'
            placeholder='password!!123ABC'
            type='password'
          />
        </Box>
        <Box px={2} ml='auto'>
          <Button>Submit</Button>
        </Box>
      </Flex>
    </Box>
  );
}
