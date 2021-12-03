import React, { useState } from 'react';
import { Input, Label } from '@rebass/forms';
import { Box } from 'rebass';
import { Button } from 'react-bootstrap';

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
      
        <Box width={1} px={2} py={1}>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' name='email' placeholder='example@email.com' />
        </Box>
        <Box width={1} px={2} py={1}>
          <Label htmlFor='username'>Username</Label>
          <Input id='username' name='username' placeholder='NuggetMaster69' />
        </Box>
        <Box width={1} px={2} py={1}>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            name='password'
            placeholder='password!!123ABC'
            type='password'
          />
        </Box>
        <p>
          Must include at least 8 characters, 1 uppercase character, 1 lowercase
          character, 1 number, and 1 symbol.
        </p>
        <Box px={2} py={1} ml='auto'>
          <Button variant='primary'>Submit</Button>
        </Box>
     
    </Box>
  );
}
