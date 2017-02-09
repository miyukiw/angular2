import { Component, OnInit } from '@angular/core';
import { IssuesService } from './issues.service';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-issues-detail',
  templateUrl: './issues-detail.component.html',
  styleUrls: ['./issues-detail.component.css']
})
export class IssuesDetailComponent implements OnInit {

  issue: Object

  constructor(
    private issuesService: IssuesService,
    private route: ActivatedRoute
  ) {

  }

  getIssue(number:Number): void {
    this.issuesService
      .getIssue(number)
      .then(issue => {
        console.log(issue)
        this.issue = issue
      });
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.issuesService.getIssue(+params['id']))
      .subscribe(issue => this.issue = issue);
  }

}
