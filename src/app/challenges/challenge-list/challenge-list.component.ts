import { Component, OnInit } from '@angular/core';
import {Issue} from "../../_models/issue";
import {IssueService} from "../../_services/issue.service";
import {ActivatedRoute} from "@angular/router";
import {Challenge} from "../../_models/challenge";
import {ChallengeService} from "../../_services/challenge.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {

  challenges: Challenge[] = [];

  loading = false;


  constructor(private challengeService: ChallengeService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.loading = true;
    this.challengeService.list().subscribe(resp => {
      this.loading = true
      this.challenges = resp;
    }, error => {
      this.loading = false;

    })
  }
}
