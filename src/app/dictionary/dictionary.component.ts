import {Component, OnInit} from '@angular/core';
import {IWord} from '../model/iword';
import {IwordServiceService} from '../service/iword-service.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  iwords: IWord[];
  word = '';
  mean = '';

  constructor(private iwordService: IwordServiceService) {
  }

  ngOnInit() {
  }

  search(value: string) {
    this.word = value;
    this.mean = this.iwordService.searchByWord(this.word);
  }
  list(): IWord[] {
    this.iwords = this.iwordService.getAll();
    return this.iwords;
  }

}
