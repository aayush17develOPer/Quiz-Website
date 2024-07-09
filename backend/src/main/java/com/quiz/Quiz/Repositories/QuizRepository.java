package com.quiz.Quiz.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.quiz.Quiz.Entities.Quiz;
import java.util.Optional;


public interface QuizRepository extends MongoRepository<Quiz,String>{
    public Optional<Quiz> findById(String title);
    public Quiz findByTitle(String title);
    public boolean existsByTitle(String title);
    public void deleteByTitle(String title);
}
