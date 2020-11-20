import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Upload} from "../../../../feature/teacher-portal/models/upload";
import * as uuid from 'uuid';
import * as firebase from 'firebase';

@Component({
  selector: 'ngx-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  selectedFiles: FileList;
  currentUpload: Upload;

  public spinnerClass = 'deactive';

  public uploadIconClass = 'uploader-img-container active';

  public previewClass = 'upload-img-preview deactive';

  @Output()
  public fileUploadSuccessCallback = new EventEmitter<string>();

  @ViewChild('fileSelector', {static: false}) fileSelector: ElementRef;

  @Input()
  public dirPath: string;

  constructor() {
  }

  ngOnInit() {
  }


  detectFiles(event) {
    console.log('opening file selector..');
    this.selectedFiles = event.target.files;
    this.handleUpload();
  }

  handleUploadPlusClick() {
    this.fileSelector.nativeElement.click();
  }


  handleUpload(): void {
    const file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.pushUpload(this.currentUpload);
  }

  pushUpload(upload: Upload) {
    this.spinnerClass = 'active';
    this.uploadIconClass = 'uploader-img-container deactive';
    const storageRef = firebase.storage().ref();
    const resourseId = uuid.v4();
    const uploadTask = storageRef.child(`/${this.dirPath}/${resourseId}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // upload in progress
          upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          // upload failed
          console.log(error);
        },
        () => {
          // upload success
          storageRef.child(`/${this.dirPath}/${resourseId }`).getDownloadURL().then(ref => {
            this.fileUploadSuccessCallback.emit(ref);
            this.spinnerClass = 'deactive';
            this.uploadIconClass = 'uploader-img-container deactive';
            this.previewClass = 'upload-img-preview active';
          });
          upload.name = upload.file.name;
          // this.saveFileData(upload);

        }
    );
  }
}
