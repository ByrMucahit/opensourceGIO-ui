import { Component, OnInit } from '@angular/core';
import {Issue} from "../../_models/issue";
import {IssueService} from "../../_services/issue.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];

  loading = false;


  constructor(private issueService: IssueService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.list(params["id"]);
    })
  }

  list(repositoryId: number) {
    this.loading = true;
    this.issueService.list(repositoryId).subscribe(resp => {
      this.loading = true
      this.issues = resp;
    }, error => {
      this.loading = false;

    })
  }
}
