import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  constructor() { }

  // alpacaPreview = {
  //   background:  '../assets/alpaca/backgrounds/blue50.png',
  //   accessories: '../assets/alpaca/accessories/headphone.png',
  //   ears: '../assets/alpaca/ears/default.png',
  //   eyes: '../assets/alpaca/eyes/default.png',
  //   hair: '../assets/alpaca/hair/default.png',
  //   leg: '../assets/alpaca/left/default.png',
  //   mouth: '../assets/alpaca/mouth/default.png',
  //   neck: '../assets/alpaca/neck/default.png',
  //   nose: '../assets/alpaca/nose.png',
  // }
  defaultAlpaca:any = {
    background: '../assets/alpaca/backgrounds/blue50.png',
    accessories: '../assets/alpaca/accessories/headphone.png',
    ears: '../assets/alpaca/ears/default.png',
    eyes: '../assets/alpaca/eyes/default.png',
    hair: '../assets/alpaca/hair/default.png',
    leg: '../assets/alpaca/leg/default.png',
    mouth: '../assets/alpaca/mouth/default.png',
    neck: '../assets/alpaca/neck/default.png',
    nose: '../assets/alpaca/nose.png'
  }

  alpacaPreview:any = {
    background: {
      blue50: '../assets/alpaca/backgrounds/blue50.png',
      blue60: '../assets/alpaca/backgrounds/blue60.png',
      blue70: '../assets/alpaca/backgrounds/blue70.png',
      green50: '../assets/alpaca/backgrounds/green50.png',
      green60: '../assets/alpaca/backgrounds/green60.png',
      green70: '../assets/alpaca/backgrounds/green70.png',
      darkblue30: '../assets/alpaca/backgrounds/darkblue30.png',
      darkblue50: '../assets/alpaca/backgrounds/darkblue50.png',
      darkblue70: '../assets/alpaca/backgrounds/darkblue70.png',
      grey40: '../assets/alpaca/backgrounds/grey40.png',
      grey70: '../assets/alpaca/backgrounds/grey70.png',
      grey80: '../assets/alpaca/backgrounds/grey80.png',
      red50: '../assets/alpaca/backgrounds/red50.png',
      red60: '../assets/alpaca/backgrounds/red60.png',
      red70: '../assets/alpaca/backgrounds/red70.png',
      yellow50: '../assets/alpaca/backgrounds/yellow50.png',
      yellow60: '../assets/alpaca/backgrounds/yellow60.png',
      yellow70: '../assets/alpaca/backgrounds/yellow70.png',
    },
    accessories: {
      earings: '../assets/alpaca/accessories/earings.png',
      flower: '../assets/alpaca/accessories/flower.png',
      headphone: '../assets/alpaca/accessories/headphone.png',
      glasses: '../assets/alpaca/accessories/glasses.png',
    },
    ears: {
      default: '../assets/alpaca/ears/default.png',
      tiltBackward: '../assets/alpaca/ears/tilt-backward.png',
      tiltForward: '../assets/alpaca/ears/tilt-forward.png',
    },
    eyes: {
      default: '../assets/alpaca/eyes/default.png',
      angry: '../assets/alpaca/eyes/angry.png',
      naughty: '../assets/alpaca/eyes/naughty.png',
      panda: '../assets/alpaca/eyes/panda.png',
      smart: '../assets/alpaca/eyes/smart.png',
      star: '../assets/alpaca/eyes/star.png',

    },
    hair: {
      default: '../assets/alpaca/hair/default.png',
      bang: '../assets/alpaca/hair/bang.png',
      curls: '../assets/alpaca/hair/curls.png',
      elegant: '../assets/alpaca/hair/elegant.png',
      fancy: '../assets/alpaca/hair/fancy.png',
      quiff: '../assets/alpaca/hair/quiff.png',
      short: '../assets/alpaca/hair/short.png',
    },
    leg: {
      default: '../assets/alpaca/leg/default.png',
      cookie: '../assets/alpaca/leg/cookie.png',
      gameConsole: '../assets/alpaca/leg/game-console.png',
      tiltBackward: '../assets/alpaca/leg/tilt-backward.png',
      tiltForward: '../assets/alpaca/leg/tilt-forward.png',
      bubbleTea: '../assets/alpaca/leg/bubble-tea.png',

    },
    mouth: {
      default: '../assets/alpaca/mouth/default.png',
      eating: '../assets/alpaca/mouth/eating.png',
      laugh: '../assets/alpaca/mouth/laugh.png',
      tongue: '../assets/alpaca/mouth/tongue.png',
      astonished: '../assets/alpaca/mouth/astonished.png',
    },
    neck: {
      default: '../assets/alpaca/neck/default.png',
      thick: '../assets/alpaca/neck/thick.png',
      bendForward: '../assets/alpaca/neck/bend-forward.png',
      bendBackward: '../assets/alpaca/neck/bend-backward.png',
    },
    nose: {
      default: '../assets/alpaca/nose.png'
    }
  }

  getPreview() {
    return this.alpacaPreview;
  }

  changePreview(category:string|null|undefined, option: string) {
    console.log(category);
    console.log(option);
    console.log(this.defaultAlpaca[`${category}`][`${option}`])
    this.defaultAlpaca[`${category}`] = this.alpacaPreview[`${category}`][option]
  }

  random() {
    let chooseOption = {
      background: ["blue50", "blue60", "blue70", "darkblue30", "darkblue50", "darkblue70", "green50", "green60", "green70", "grey40", "grey70", "grey80", "red50", "red60", "red70", "yellow50", "yellow60", "yellow70",],
      accessories: ["earings", "flower", "glasses", "headphone"],
      ears: ["default", "tiltBackward", "tiltForward"],
      eyes: ["angry", "default", "naughty", "panda", "smart", "star"],
      hair: ["bang", "curls", "default", "elegant", "fancy", "quiff", "short"],
      leg: ["bubbleTea", "cookie", "default", "gameConsole", "tiltBackward", "tiltForward"],
      mouth: ["astonished", "default", "eating", "laugh", "tongue"],
      neck:["bendForward","bendBackward","default","thick"],
      nose: ["default"]
    }

    this.defaultAlpaca = {
      background: this.alpacaPreview.background[chooseOption.background[Math.floor(Math.random() * chooseOption.background.length)]],
      accessories: this.alpacaPreview.accessories[chooseOption.accessories[Math.floor(Math.random() * chooseOption.accessories.length)]],
      ears: this.alpacaPreview.ears[chooseOption.ears[Math.floor(Math.random() * chooseOption.ears.length)]],
      eyes: this.alpacaPreview.eyes[chooseOption.eyes[Math.floor(Math.random() * chooseOption.eyes.length)]],
      hair: this.alpacaPreview.hair[chooseOption.hair[Math.floor(Math.random() * chooseOption.hair.length)]],
      leg: this.alpacaPreview.leg[chooseOption.leg[Math.floor(Math.random() * chooseOption.leg.length)]],
      mouth: this.alpacaPreview.mouth[chooseOption.mouth[Math.floor(Math.random() * chooseOption.mouth.length)]],
      neck: this.alpacaPreview.neck[chooseOption.neck[Math.floor(Math.random() * chooseOption.neck.length)]],
      nose: '../assets/alpaca/nose.png'
    }

    return this.defaultAlpaca;
    console.log(this.defaultAlpaca)
    // console.log(this.alpacaPreview.background[chooseOption.background[Math.floor(Math.random() * chooseOption.background.length)]])
  }
}
