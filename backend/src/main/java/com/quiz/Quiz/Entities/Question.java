package com.quiz.Quiz.Entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Question {
    private String que;
    private String[] options;
    private String correctAnswer;
}
