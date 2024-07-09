package com.quiz.Quiz.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.Quiz.Entities.Quiz;
import com.quiz.Quiz.Repositories.QuizRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Controllers {

    @Autowired
    QuizRepository quizRepository;

    @PostMapping("/post")
    @CrossOrigin
    public Quiz postMethod(@RequestBody Quiz quiz) {
    //    Question question1 = new Question("What is Java?", new String[]{"Programming Language", "Coffee", "Island","Best language"}, "Programming Language");
    //    Question question2 = new Question("What is Spring Boot?", new String[]{"Framework", "Library", "Tool", "Language"}, "Framework");
    //    Question[] questions = {question1,question2};
    //    Quiz quiz1 = new Quiz("KBC",2, questions);
        System.out.println("Quiz created successfully!");
       return quizRepository.save(quiz);
    }

    @GetMapping("/allQuizzes")
    public List<Quiz> getQuizTitles() {
        // List<Quiz> quizzes = quizRepository.findAll();
        // List<String> titles = new ArrayList<>();
        // for(Quiz quiz : quizzes) {
        //     titles.add(quiz.getTitle());
        // }
        // return titles;
        return quizRepository.findAll();
    }

    @GetMapping("/getQuizById/{id}")
    @CrossOrigin
    public Quiz getQuizById(@PathVariable("id") String id) {
        return quizRepository.findById(id).get();
    }

    @GetMapping("/getQuizByTitle/{title}")
    public Quiz getQuizByTitle(@PathVariable("title") String title) {
        return quizRepository.findByTitle(title);
    }
    

    @GetMapping("/hello")
    public String heString() {
        return "helloji";
    }

    @DeleteMapping("/deleteQuiz/{title}")
    public String deleteQuiz(@PathVariable("title") String title) {
        if(quizRepository.existsByTitle(title)) {
            quizRepository.deleteByTitle(title);
            return "Deleted successfully!";
        }
        return "Not found!";
    }
}
