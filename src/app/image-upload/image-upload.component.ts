import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./styles/image-upload.component.scss', './styles/animation.css']
})
export class ImageUploadComponent {
  @Output() clickSender = new EventEmitter();

  currentRoute: string = this.router.url;
  selectedFile: ImageSnippet;

  constructor(private router: Router){}

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      console.log(this.selectedFile.src);
    });
    reader.readAsDataURL(file);
  }

  uploadButtonClicked(selectedFileSource){
    this.clickSender.emit(selectedFileSource);

  }
}