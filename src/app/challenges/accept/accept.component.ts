import { Component, OnInit } from '@angular/core';
import {ChallengeService} from "../../_services/challenge.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first, Observable} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  loading = false;

  constructor(private challengeService: ChallengeService,
              private root: ActivatedRoute,
              private toastr: ToastrService,
              private rooter: Router) { }

  ngOnInit(): void {
    this.root.params.subscribe(params=>{
      this.accept(params["id"]);
    })
  }

  private accept(id: number) {
    this.loading = true;
  this.challengeService.accept(id).pipe(first()).subscribe(resp => {
    this.loading = false;
    this.toastr.success("Challenge accepted succesfully", "Success");
    setTimeout(() => {
      this.rooter.navigate(['challenges'])
    })
  },
    error => {
    this.toastr.error(error.error.message, "Error");
    this.loading = false;

    });
  }
}
