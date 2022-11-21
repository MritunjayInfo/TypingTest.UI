import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, timer } from 'rxjs';
import { Word } from '../models';

@Component({
  selector: 'app-test-box',
  templateUrl: './test-box.component.html',
  styleUrls: ['./test-box.component.css']
})
export class TestBoxComponent implements OnInit {
  @Input() duration: number = 0;
  @Input() testType: 'simple' | 'advanced' = 'simple';
  @ViewChildren('wordRef') wordsRef?: QueryList<ElementRef>;
  @ViewChild('visibleArea') visibleArea?: ElementRef;

  words: Word[] = [];
  inputField: FormControl;
  currentWord: Word;
  previousInput: string = '';
  wordsBoxPosition: string = '0px';
  isFirstInput: boolean = true;
  counter?: Subscription;
  counterTime: number = 0;
  msgBoxDisplay: string = 'none';
  wordsBoxDisplay: string = 'block';
  loginErrorBoxDisplay: string = 'none';

  constructor() { 
    this.inputField = new FormControl('');
    this.currentWord = new Word(-1, '');
  }

  ngOnInit(): void {
    this.startTest();
    this.inputField.valueChanges.subscribe((newValue)=> {
      this.runTypingTestAlgorithm(newValue);
    })
  }

  startTest(){
    this.setWords();
    //this.counterTime = this.duration * 60;
    this.counterTime = 10;
  }

  setWords(){
    this.words = [];
    for (let i = 0; i < 20; i++) {
      this.words.push(new Word(i, 'word' + (i + 1)));
    }
    this.currentWord = this.words[0];
    this.currentWord.isCurrent = true;
  }

  runTypingTestAlgorithm(newInput: string){
    if (this.isFirstInput){
      // perform all the initial operations, and make it false
      this.counter = timer(1000, 1000).subscribe((res)=>{
        --this.counterTime;
        // console.log(this.counterTime);

        if (this.counterTime === 0) {
          this.counter?.unsubscribe();
          this.inputField.setValue('');
          this.inputField.disable();
          this.wordsBoxDisplay = 'none';
          this.msgBoxDisplay = 'flex';
        }
      });

      this.isFirstInput = false;
    }
    let isBackSpace: boolean =
    newInput.length === this.previousInput.length - 1;

    if (newInput.length != 0){
    if (this.endsWithSpace(newInput)) {
      // Remove the last space
      let trimmedInput = newInput.trimRight();
      ++this.currentWord.characters;
      ++this.currentWord.correctCharacters;

      // check whether entire word is correct or not
      if (this.currentWord.value === trimmedInput){
        this.currentWord.isCorrect = true;
        this.currentWord.isWrong = false;
      }else{
        this.currentWord.isCorrect = false;
        this.currentWord.isWrong = true;
      }

      // Go to next word
      this.currentWord.isCurrent = false;
      this.currentWord.isCurrentWrong = false;
      this.currentWord = this.words[this.currentWord.index + 1];
      this.currentWord.isCurrent = true;

      //check whether the next word is on next line or not
      //If it is, then move the wordsBox element up.
      let currentWordPosition = this.wordsRef
      ?.get(this.currentWord.index)
      ?.nativeElement.getBoundingClientRect();

      let visibleAreaPosition =
      this.visibleArea?.nativeElement.getBoundingClientRect();

      if (currentWordPosition.top - visibleAreaPosition.top > 20){
        this.wordsBoxPosition = 
        parseInt(this.wordsBoxPosition) - 50 + 'px'.toString();
      }

      // console.log(currentWordPosition);
      // console.log(visibleAreaPosition);

      // set the Input value to blank
      this.inputField.setValue('');
    }

    if (!this.endsWithSpace(newInput)) {
      // check whether current word is same till the input word
      let isCurrentWordTillInputSame: boolean =
      this.currentWord.value.length >= newInput.length
      ? this.currentWord.value.slice(0, newInput.length) === newInput
      : false;

      if (isCurrentWordTillInputSame) {
        // Highlight CW correct
        this.currentWord.isCurrent = true;
        this.currentWord.isCurrentWrong = false;
      }else{
        // Highlight CW wrong
        this.currentWord.isCurrent = false;
        this.currentWord.isCurrentWrong = true;
      }

       // check whether current character entered is corret or not
       let isCurrentCharacterCorrect =
       this.currentWord.value.length >= newInput.length
       ? newInput.charAt(newInput.length - 1) ===
        this.currentWord.value.charAt(newInput.length - 1)
       : false;

       if (!isBackSpace) {
        // Increment only if it is not a Backspace
       if (isCurrentCharacterCorrect) {
        ++this.currentWord.characters;
        ++this.currentWord.correctCharacters;
       }else{
        ++this.currentWord.characters;
        ++this.currentWord.wrongCharacters;
       }
      }
       console.log(this.currentWord);
    }
  }else{
    this.currentWord.isCurrent = true;
    this.currentWord.isCurrentWrong = false;
  }

    this.previousInput = newInput;
  }

  endsWithSpace(str: string): boolean {
    return str.charAt(str.length - 1) == '' ? true : false;
  }
}
