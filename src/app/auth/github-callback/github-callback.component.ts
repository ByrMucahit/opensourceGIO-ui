import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../_services/auth.service";
import {first} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-github-callback',
  templateUrl: './github-callback.component.html',
  styleUrls: ['./github-callback.component.css']
})
export class GithubCallbackComponent implements OnInit {
  loading = false;

  constructor(private route: ActivatedRoute
    , private authService: AuthService
    , private router: Router
    , private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getAccessToken(params["code"]);

    })
  }

  getAccessToken(code: string) {
    this.loading = true;
    this.authService.getGithubAccessToken(code).pipe(first()).subscribe((resp) => {
      this.loading = false;
      localStorage.setItem("token", resp.accessToken)
      this.toastr.error("Sucessfully logged in, redirecting to home page", "Success");
      setTimeout(() => {
        this.router.navigate(["home"],)
      }, 2000);
    }, error => {
      this.loading = false;
      this.toastr.error("error message",  error);
    })
  }
}
