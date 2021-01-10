import { Observable } from 'rxjs';
import { CharactersApiService } from './../../services/characters-api/characters-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Observable<any>;

  constructor(private charactersApiService: CharactersApiService) {}

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters(){
    this.characters = this.charactersApiService.getAllCharacters();
  }

}
