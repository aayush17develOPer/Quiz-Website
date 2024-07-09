import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from '@mui/material';

const CreateQuiz = () => {
  const initialQuestion = { que: '', options: ['', '', '', ''], correctAnswer: '' };
  const [title, setTitle] = useState('');
  const [numberOfQues, setNumberOfQues] = useState(0);
  const [questions, setQuestions] = useState([]);

  const handleNumberOfQuesChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumberOfQues(num);
    if (num > 0) {
      setQuestions(Array(num).fill().map(() => ({ ...initialQuestion })));
    } else {
      setQuestions([]);
    }
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = questions.map((question, qIndex) =>
      qIndex === index ? { ...question, [field]: value } : question
    );
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (qIndex, optionIndex, value) => {
    const updatedQuestions = questions.map((question, index) =>
      index === qIndex
        ? { ...question, options: question.options.map((opt, i) => (i === optionIndex ? value : opt)) }
        : question
    );
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const quizData = { title, numberOfQues, qList: questions };
    fetch('http://localhost:8080/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quizData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Paper sx={{ padding: '2%', height: 'auto' }} elevation={3}>
      <Typography sx={{ margin: '3% auto' }} align="center" variant="h5">
        Create New Quiz
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <TextField
            type="string"
            sx={{ width: '50%', margin: '2% auto' }}
            required
            onChange={(e) => setTitle(e.target.value)}
            label="Quiz Title"
            variant="outlined"
            value={title}
          />
          <TextField
            type="number"
            sx={{ width: '50%', margin: '2% auto' }}
            required
            onChange={handleNumberOfQuesChange}
            label="Number of Questions"
            variant="outlined"
            value={numberOfQues}
            inputProps={{ min: 0 }}
          />
          {numberOfQues > 0 && questions.map((question, qIndex) => (
            <Box key={qIndex} sx={{ margin: '2% auto', width: '50%' }}>
              <TextField
                type="string"
                fullWidth
                required
                onChange={(e) => handleQuestionChange(qIndex, 'que', e.target.value)}
                label={`Question ${qIndex + 1}`}
                variant="outlined"
                value={question.que}
              />
              {question.options.map((option, optionIndex) => (
                <TextField
                  key={optionIndex}
                  type="string"
                  fullWidth
                  required
                  onChange={(e) => handleOptionChange(qIndex, optionIndex, e.target.value)}
                  label={`Option ${optionIndex + 1}`}
                  variant="outlined"
                  value={option}
                  sx={{ marginTop: '1%' }}
                />
              ))}
              <TextField
                type="string"
                fullWidth
                required
                onChange={(e) => handleQuestionChange(qIndex, 'correctAnswer', e.target.value)}
                label="Correct Answer"
                variant="outlined"
                value={question.correctAnswer}
                sx={{ marginTop: '1%' }}
              />
            </Box>
          ))}
          <Button
            sx={{ width: '50%', margin: '2% auto', backgroundColor: 'green' }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default CreateQuiz;
