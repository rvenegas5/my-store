import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  btnDisabled: boolean = false;
  textExample: string = "Example..."
  count: number = 0;
  progress: number = 0;
  warning!: string;

  onClick(): void {
    this.count = this.count + 1;
  }

  clearCounter(): void {
    this.count = 0;
  }

  incrementProgress(): void {
    if (this.progress === 100)
      this.warning = "The max increment is 100%";
    else
      this.progress = this.progress + 2;
  }
}
