import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'link-uploader',
  templateUrl: './link-uploader.component.html',
  styleUrls: ['./link-uploader.component.scss']
})
export class LinkUploaderComponent implements OnInit{
  public linkUploadForm: FormGroup;
  public isPreviewEnabled = false;

  constructor(
    private fb: FormBuilder
  ){
  }

  public ngOnInit(): void {
    this.linkUploadForm = this.fb.group({
      url: [null, Validators.required],
    })
  }


}
