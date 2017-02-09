import { Component, OnInit } from '@angular/core';
import { IssuesService } from './issues.service';


@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  issues: Object[]
  
  constructor(private issuesService: IssuesService) {
    
  }

  getIssues(): void {
    this.issuesService
      .getIssues()
      .then(issues => {
        console.log(issues)
        this.issues = issues
      });
  }

  ngOnInit() {
    this.getIssues();
  }

}
