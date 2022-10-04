import { Component, OnInit } from '@angular/core';
import {Validators} from "@angular/forms";
import {FormBuilder} from "@angular/forms";
import {RepositoryService} from "../services/repository.service";
import {first} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  loading = false;

  constructor(private formBuilder: FormBuilder, private repositoryService: RepositoryService, private router: Router ) { }

  importRepositoryForm =  this.formBuilder.group({
    organization: ['', Validators.required],
    repository: ['', Validators.required]
  });

  ngOnInit(): void {

  }

  import() {
    this.loading = true;
    this.repositoryService.import(this.importRepositoryForm.get('organization')?.value || '',
      this.importRepositoryForm.get('repository')?.value ||'')
      .pipe(first())
      .subscribe(() => {
        this.loading = false;
        alert("Imported succesfully")
        setTimeout(() => {
          this.router.navigate(['home']);
        }, 2000);},

        error => {
        this.loading = false;
        console.error(error);
        alert(error);
        });
  }
}
