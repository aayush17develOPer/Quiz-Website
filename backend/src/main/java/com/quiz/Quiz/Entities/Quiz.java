package com.quiz.Quiz.Entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document("QuizInfo")

public class Quiz {
    @Id
    private String id;
    
    private String title;
    private int numberOfQues;
    private Question[] qList;

    public Quiz(String title, int numberOfQues, Question[] qList) {
        this.title = title;
        this.numberOfQues = numberOfQues;
        this.qList = qList;
    }
}
