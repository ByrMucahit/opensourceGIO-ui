import { Component, OnInit } from '@angular/core';
import {RepositoryService} from "../services/repository.service";
import {first, Observable} from "rxjs";
import {Repository} from "../_models/repository";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repositories: Repository[] =  [];
  loading = false;

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.repositoryService.list().pipe(first())
      .subscribe((resp) => {
        this.loading = false;
        this.repositories = resp;
      },
        error => {
          this.loading = false;
          console.error(error);
          alert(error);
        });
  }

}
