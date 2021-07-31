import { Component, OnInit } from '@angular/core';
import { PreviewService } from '../preview.service';

@Component({
  selector: 'app-accessorize',
  templateUrl: './accessorize.component.html',
  styleUrls: ['./accessorize.component.css']
})
export class AccessorizeComponent implements OnInit {

  constructor(private previewService: PreviewService) { }

  alpaca = this.previewService.getPreview();
  styles :string[] = [];
  ngOnInit(): void {
    console.log(Object.keys(this.alpaca))
    this.styles = Object.keys(this.alpaca);
  }

}
