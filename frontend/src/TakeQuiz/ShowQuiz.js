import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Typography,
  Button,
} from "@mui/material";

const ShowQuiz = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuizDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/getQuizById/${id}`);
        console.log(response.data);
        setQuiz(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchQuizDetails();
  }, [id]);

  const handleOptionClick = (questionIndex, optionIndex) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionIndex]: optionIndex,
    }));
  };

  const calculateScore = () => {
    let newScore = 0;
    quiz.qlist.forEach((question, index) => {
      if (selectedOptions[index] !== undefined && question.options[selectedOptions[index]] === question.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setShowScore(true);
  };

  if (loading) {
    return <Typography variant="h6" sx={{ margin: "2%" }}>Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" sx={{ margin: "2%", color: "red" }}>{error}</Typography>;
  }

  if (!quiz) {
    return <Typography variant="h6" sx={{ margin: "2%" }}>No quiz details found.</Typography>;
  }

  return (
    <Box sx={{ margin: "2%", padding: "2%", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <Typography variant="h4" sx={{ marginBottom: "16px", fontWeight: "bold", color: "#333" }}>{quiz.title}</Typography>
      <Typography variant="h6" sx={{ marginBottom: "8px", color: "#555" }}>Questions:</Typography>
      {quiz.qlist && quiz.qlist.map((question, questionIndex) => (
        <Box key={questionIndex} sx={{ margin: "16px 0", padding: "16px", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#fff" }}>
          <Typography variant="body1" sx={{ marginBottom: "8px", fontWeight: "bold", color: "#333" }}>{`${questionIndex + 1}. ${question.que}`}</Typography>
          <Typography variant="body2" sx={{ marginBottom: "8px", color: "#777" }}>Options:</Typography>
          {question.options && question.options.map((option, optionIndex) => (
            <Button
              key={optionIndex}
              variant="outlined"
              sx={{
                display: 'block',
                margin: '4px 0',
                backgroundColor: selectedOptions[questionIndex] === optionIndex ? 'lightgreen' : 'white',
                borderColor: selectedOptions[questionIndex] === optionIndex ? 'green' : '#ddd',
                color: selectedOptions[questionIndex] === optionIndex ? 'black' : '#333',
                ':hover': {
                  backgroundColor: 'lightgray',
                },
              }}
              onClick={() => handleOptionClick(questionIndex, optionIndex)}
            >
              {String.fromCharCode(65 + optionIndex)}. {option}
            </Button>
          ))}
          {showScore && (
            <Typography variant="body2" sx={{ marginTop: "8px", color: "#777" }}>
              Correct Answer: {question.correctAnswer}
            </Typography>
          )}
        </Box>
      ))}
      <Button
        variant="contained"
        sx={{ marginTop: "16px", backgroundColor: "green", color: "white" }}
        onClick={calculateScore}
      >
        Submit Quiz
      </Button>
      {showScore && (
        <Typography variant="h6" sx={{ marginTop: "16px", color: "blue" }}>
          Your Score: {score} / {quiz.qlist.length}
        </Typography>
      )}
    </Box>
  );
};

export default ShowQuiz;

