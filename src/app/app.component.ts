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
  warning:string = "100% is the maximum value";
  scrollOfDiv: number = 0;
  textInput!: string;
  textImputNgModule!: string;
  emojis: string[] = [ "😂" , "🐦", "🐳","🌮", "💚"];
  emoji: string = '';
  onClick(): void {
    this.count = this.count + 1;
  }

  clearCounter(): void {
    this.count = 0;
  }

  incrementProgress(): void {
    if (this.progress < 100)
      this.progress = this.progress + 2;
  }

  onScroll(event: Event): void {
    const element = event.target as HTMLElement; // Target to element div and the behavior is as HTMLElement
    this.scrollOfDiv = element.scrollTop;
  }

  changeText(event: Event): void {
    const element = event.target as HTMLInputElement;
    this.textInput = element.value;
  }

  addEmoji():void {
    if (this.emoji !== "")
      this.emojis.push(this.emoji);
      this.emoji = ""
  }

  deleteEmoji(index: number):void {
    this.emojis.splice(index, 1);
  }
}
