import React, { useState } from "react";
import { ADD_COMMENT } from "../../utils/mutations";
import { Label, Input } from "@rebass/forms";
import { Box, Button } from "rebass";
import { useMutation } from "@apollo/client";
import { useParams } from 'react-router-dom';

export default function CommentForm() {
    const { id } = useParams();
    console.log(id);
  const [addComment, { error, loading, data }] = useMutation(ADD_COMMENT);
  const [formValues, setFormValues] = useState({
    content: "",
  });

  const handleFormChange = (e) => {
    const currentState = { ...formValues };
    currentState[e.target.name] = e.target.value;
    setFormValues(currentState);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Comment submitted");

    try {
      const { data } = await addComment({
        variables: {
            eventId: id,
          content: formValues.content,
        },
      });
      console.log(data);
      setFormValues({
        content: '',
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box as='form' onSubmit={handleFormSubmit} className='commentForm' px={2} py={2}>
      <Box>
        <Label htmlFor='content'>Comment: </Label>
        <Input onChange={handleFormChange} id='content' name='content'></Input>
      </Box>
      <Box>
          <Button type="submit" bg="blue">Add comment</Button>
      </Box>
    </Box>
  );
}
