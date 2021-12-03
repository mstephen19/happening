import React, { useState } from 'react';
import { Input, Label } from '@rebass/forms';
import { Box } from 'rebass';
import { Button } from 'react-bootstrap';
import Auth from '../../../utils/auth';

import { useMutation } from '@apollo/client';
import { LOG_IN } from '../../../utils/mutations';

export default function LoginForm() {
  const [login, { error, loading, data }] = useMutation(LOG_IN);
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const currentState = { ...formValues };
    currentState[e.target.name] = e.target.value;
    setFormValues(currentState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: {
          username: formValues.username,
          password: formValues.password,
        },
      });

      Auth.login(data.login.token);
    } catch (err) {
      alert('Failed to log in!');
    }
  };

  return (
    <Box as='form' onSubmit={handleSubmit} onChange={handleChange} py={3}>
      
        <Box width={1} px={2}>
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
        <Box px={2} py={1} ml='auto'>
          <Button type="submit" variant='primary'>Submit</Button>
        </Box>
      
    </Box>
  );
}
