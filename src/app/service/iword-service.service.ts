import { Injectable } from '@angular/core';
import {IWord} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class IwordServiceService {
  private words: IWord[] = [
    {word: 'one', mean: 'một'},
    {word: 'two', mean: 'hai'},
    {word: 'three', mean: 'ba'},
    {word: 'four', mean: 'bốn'},
    {word: 'five', mean: 'năm'}
  ];

  constructor() { }
  searchByWord(word: string): string {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i].word === word) {
        return this.words[i].mean;
      }
    }
    return 'not found';
  }
  getAll() {
    return this.words;
  }
}
