import { Component, OnInit, Output } from '@angular/core';
import mergeImages from 'merge-images'
import { EventEmitter } from '@angular/core';
import { PreviewService } from '../preview.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  @Output() randomAlpaca = new EventEmitter;

  defaultAlpaca = this.previewService.defaultAlpaca;

  constructor(private previewService: PreviewService) { }

  ngOnInit(): void {
    
  }

  merge() {
    mergeImages(
      [
        this.previewService.defaultAlpaca.background,
        this.previewService.defaultAlpaca.neck,
        this.previewService.defaultAlpaca.nose,
        this.previewService.defaultAlpaca.mouth,
        this.previewService.defaultAlpaca.ears,
        this.previewService.defaultAlpaca.hair,
        this.previewService.defaultAlpaca.accessories,
        this.previewService.defaultAlpaca.eyes,
        this.previewService.defaultAlpaca.leg,

      ]
    )
      .then((b64) => {
        var a = document.createElement("a");
        a.href = b64;
        a.download = "Alpaca.png";
        a.click();
      });
  }

  random() {
    this.randomAlpaca.emit("generate");
    // console.log("clicked")
  }
}
