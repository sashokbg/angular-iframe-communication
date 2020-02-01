import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'child';

  private matricule: string;

  public ngOnInit(): void {
    this.matricule = localStorage.getItem('matricule');
  }
}
