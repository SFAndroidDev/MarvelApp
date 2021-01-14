import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from 'src/app/services/characters-api/characters-api.service';

@Component({
  selector: 'app-superteam',
  templateUrl: './superteam.component.html',
  styleUrls: ['./superteam.component.css']
})
export class SuperteamComponent implements OnInit {

  constructor(private charactersApiService: CharactersApiService) { }

  ngOnInit(): void {
    console.log("here is the superteam component");

  }

}
