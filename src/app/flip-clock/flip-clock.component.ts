import { Component, Input, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { PiService } from '../pi.service';

@Component({
  selector: 'app-flip-clock',
  templateUrl: './flip-clock.component.html',
  styleUrls: ['./flip-clock.component.css']
})
export class FlipClockComponent implements OnInit {
  index?: string
  time: string = ''
  timer?: Subscription
  indexTimer?: Subscription
  currentCharIndex = 0

  get currentChar() {
    return this.piService.characters[this.currentCharIndex][0]
  }

  get currentSymbol() {
    return this.piService.characters[this.currentCharIndex][1]
  }

  constructor(public piService: PiService) {
    this.currentCharIndex = +(localStorage.getItem('currentCharIndex') ?? '0')
  }

  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = `https://unpkg.com/@pqina/flip/dist/flip.min.js`;
    document.getElementsByTagName('head')[0].appendChild(script);
    this.piService.getIndices(() => {
      this.tick()
      this.timer = interval(1000)
        .subscribe((val) => {
          this.tick()
        })
    }, this.currentChar)
  }

  tick() {
    const d = new Date()
    this.time = this.pad(d.getHours()) + this.pad(d.getMinutes()) + this.pad(d.getSeconds())
    this.setIndex(d)
  }

  setIndex(d: Date = new Date()) {
    var index: number = d.getHours() * 60 * 60 + d.getMinutes() * 60 + d.getSeconds();
    var pos = this.piService.indices[this.currentChar][index]
    var paddedPos = this.currentSymbol
    for(var i = 0; i < 8 - pos.length; i++) {
      paddedPos += 0
    }
    paddedPos += pos
    this.index = paddedPos
  }

  pad(val: number) {
    if (val < 10) {
      return `0${val}`
    }
    return `${val}`
  }

  switchChar() {
    this.currentCharIndex = (this.currentCharIndex + 1) % this.piService.characters.length
    localStorage.setItem('currentCharIndex', `${this.currentCharIndex}`)
    this.setIndex()
  }
}