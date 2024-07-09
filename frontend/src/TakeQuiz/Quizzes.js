import {
  Box,
  Card,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Quizzes = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialQuizzes = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/allQuizzes`);
        setPost(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchInitialQuizzes();
  }, []);

  const handleQuizClick = async (quizId) => {
    navigate(`/takeQuiz/showQuiz/${quizId}`);
  };

  return (
    <div>
      <Grid container spacing={1} sx={{ margin: "0 2%" }}>
        <Grid item xs={12} md={12} lg={12}>
          <Button
            sx={{
              padding: '8px 24px',
              marginBottom: '3px',
              fontSize: '1.25rem',
              width: 'auto',
              height: 'auto',
              border: '2px solid black',
              ':hover': {
                backgroundColor: 'lightgreen'
              }
            }}
            variant="outlined">
            <Link to="/">Home</Link>
          </Button>
        </Grid>
        {post && Array.isArray(post) && post.length > 0 ? (
          post.map((p) => (
            <Grid key={p.id} item xs={12} md={6} lg={4}>
              <Card sx={{ padding: "1%", overflow: "hidden", width: "84%" }} onClick={() => handleQuizClick(p.id)}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "2rem", fontWeight: "600" }}
                >
                  {p.title}
                </Typography>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ margin: "2%" }}>
            {loading ? "Loading quizzes..." : "No quizzes found."}
          </Typography>
        )}
        {error && (
          <Typography variant="body1" color="error" sx={{ margin: "2%" }}>
            {error}
          </Typography>
        )}
      </Grid>
    </div>
  );
};

export default Quizzes;




