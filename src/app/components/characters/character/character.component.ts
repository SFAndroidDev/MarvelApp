
import { Component, OnInit, Input } from '@angular/core';
import { CharactersApiService } from 'src/app/services/characters-api/characters-api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() character: any;

  superteam = [];

  constructor(private charactersApiService: CharactersApiService) { }

  ngOnInit(): void {
  }
  addToSuperteam(hero: any) {
    console.log(hero);
    //this.superteam.push(hero);
    //console.log(this.superteam);
    this.charactersApiService.addToSuperteam(hero);
  }

}
