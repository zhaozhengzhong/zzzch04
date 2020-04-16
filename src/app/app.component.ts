import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ch0401';
  shouldShow = true;
  score = 60;
  color: string;
  fontsize: string;
  isBordered = true;
  classObj = {
    bordered: this.isBordered,
    blue: false,
    round: true,
  }
  cities = ['杭州', '南京', '上海', '无锡'];
  onT() {
    this.shouldShow = !this.shouldShow;
  }
  isB() {
    this.isBordered = !this.isBordered;
  }
  grade() {
    return Math.floor(this.score / 10);
  }
  onI(evt: Event) {
    const Ipt = <HTMLInputElement>evt.target;
    this.score = Number(Ipt.value);
  }
  apply(color: string, fontsize: string) {
    this.color = color;
    this.fontsize = fontsize;
  }
}
