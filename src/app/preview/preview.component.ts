import { Component, OnInit } from '@angular/core';
import { PreviewService } from '../preview.service';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  alpaca = this.previewService.getPreview();
  defaultAlpaca = {
  background: '../assets/alpaca/backgrounds/blue50.png',
    accessories: '../assets/alpaca/accessories/headphone.png',
    ears: '../assets/alpaca/ears/default.png',
    eyes: '../assets/alpaca/eyes/default.png',
    hair:'../assets/alpaca/hair/default.png',
    leg :'../assets/alpaca/leg/default.png',
    mouth:  '../assets/alpaca/mouth/default.png',
    neck: '../assets/alpaca/neck/default.png',
    nose:  '../assets/alpaca/nose.png'
  }
  constructor(private previewService: PreviewService) { }

  

  ngOnInit(): void {
    this.defaultAlpaca = this.previewService.defaultAlpaca;
  }

  setPreview() {
    this.alpaca = this.previewService.getPreview();
  }

  generateRandom() {
    this.defaultAlpaca = this.previewService.random();
  }

}
