import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class QuizManageComponent implements OnInit {

  public quizForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.quizForm = new FormGroup({
      quizes: new FormArray([
        this.initQuiz(),
      ]),
    });
  }

  // Initialise Quiz form with default value.
  initQuiz() {
    return new FormGroup({
      quizTitle: new FormControl(''),
      questions: new FormArray([
        // this.initQuestion()
      ])
    });
  }

  // Initialise question with default value.
  initQuestion() {
    return new FormGroup({
      questionTitle: new FormControl(''),
      questionType: new FormControl('0', Validators.required),
      options: new FormArray([
        // this.initOptions()
      ]),
      correctAnswer: new FormControl(''),
      answer: new FormControl('')
    });
  }

  // Initialise options for MCQs default value.
  initOptions() {
    return new FormGroup({
      optionTitle: new FormControl('')
    });
  }

  // Add a new quiz.
  addQuiz() {
    const control = <FormArray>this.quizForm.get('quizes');
    control.push(this.initQuiz());
  }

  // Add a new question.
  addQuestion(i) {
    const control = <FormArray>this.quizForm.get(['quizes', i, 'questions']);
    control.push(this.initQuestion());
  }

  // Add a new question.
  addOptions(i, j) {
    const control = <FormArray>this.quizForm.get(['quizes', i, 'questions', j, 'options']);
    control.push(this.initOptions());
  }

  // Get all Quizes
  getQuizes(form) {
    return form.controls.quizes.controls;
  }

  // Get all Questions for a Quiz
  getQuestions(form) {
    return form.controls.questions.controls;
  }

  // Get all Options for a Question
  getOptions(form) {
    return form.controls.options.controls;
  }

  // Remove a Quiz
  removeQuiz(i) {
    const control = <FormArray>this.quizForm.get('quizes');
    control.removeAt(i);
  }

  // Remove a Question
  removeQuestion(i) {
    const control = <FormArray>this.quizForm.get(['quizes', i, 'questions']);
    control.removeAt(i);
  }

  // Remove an Option
  removeOption(i, j, k) {
    const control = <FormArray>this.quizForm.get(['quizes', i, 'questions', j, 'options']);
    control.removeAt(k);
  }

  remove(i, j) {
    const control = <FormArray>this.quizForm.get(['quizes', i, 'questions', j, 'options']);
    control.controls = [];
  }

  onSubmit(form) {
    localStorage.setItem('data', JSON.stringify(form.value));
  }

}
