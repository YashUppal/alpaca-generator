import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PreviewService } from '../preview.service';

@Component({
  selector: 'app-style-options',
  templateUrl: './style-options.component.html',
  styleUrls: ['./style-options.component.css']
})
export class StyleOptionsComponent implements OnInit {
  selectedOption = "";
  category: string | null | undefined = "";
  styleOptions: any;
  options: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private previewService: PreviewService
  ) { }

  ngOnInit(): void {
    this.getCategory();
    

  }

  getCategory() {
    
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.category = params.get('category')?.toString();
        console.log(this.category)
        this.category = this.category || "hair"
        this.styleOptions = this.previewService.getPreview();
        this.options = Object.keys(this.styleOptions[this.category]);
      }
    )
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.previewService.changePreview(this.category, option)
  }

}
