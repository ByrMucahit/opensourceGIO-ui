import { Component, OnInit } from '@angular/core';
import {Validators} from "@angular/forms";
import {FormBuilder} from "@angular/forms";
import {RepositoryService} from "../services/repository.service";
import {first} from "rxjs";

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private repositoryService: RepositoryService ) { }

  importRepositoryForm =  this.formBuilder.group({
    organization: ['', Validators.required],
    repository: ['', Validators.required]
  });

  ngOnInit(): void {

  }

  import() {
    this.repositoryService.import(this.importRepositoryForm.get('organization')?.value, this.importRepositoryForm.get('repository')?.value).pipe(first)
  }
}
