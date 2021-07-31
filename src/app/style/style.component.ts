import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PreviewService } from '../preview.service';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  category: string|null|undefined = "";
  styleOptions: any;
  options: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private previewService: PreviewService
  ) { }

  ngOnInit(): void {
    // this.category:(keyof this.previewService.alpacaPreview) = 'hair'
    // console.log(Object.keys(this.styleOptions[this.category]))
    // this.getCategory();
  }


  // getCategory() {
    
  //   this.route.paramMap.subscribe(
  //     (params: ParamMap) => {
  //       this.category = params.get('category')?.toString();
  //       console.log(this.category)
  //     }
  //   )
  //   this.category = this.category || "hair"
  //   this.styleOptions = this.previewService.getPreview();
  //   this.options = Object.keys(this.styleOptions[this.category]);
  // }




}
