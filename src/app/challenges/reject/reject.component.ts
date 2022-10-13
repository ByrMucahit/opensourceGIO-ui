import { Component, OnInit } from '@angular/core';
import {first} from "rxjs";
import {ChallengeService} from "../../_services/challenge.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.css']
})
export class RejectComponent implements OnInit {


  loading = false;

  constructor(private challengeService: ChallengeService,
              private root: ActivatedRoute,
              private toastr: ToastrService,
              private rooter: Router) { }

  ngOnInit(): void {
    this.root.params.subscribe(params=>{
      this.reject(params["id"]);
    })
  }
  private reject(id: number) {
    this.loading = true;
    this.challengeService.reject(id).pipe(first()).subscribe(resp => {
        this.loading = false;
        this.toastr.success("Challenge rejected succesfully", "Success");
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
