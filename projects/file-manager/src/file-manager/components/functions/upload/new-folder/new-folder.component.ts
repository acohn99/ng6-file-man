import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-new-folder',
  templateUrl: './new-folder.component.html',
  styleUrls: ['./new-folder.component.scss']
})
export class NewFolderComponent implements OnInit {
  @ViewChild('uploadFolder') uploadFolder: ElementRef;
  @Output() buttonClicked = new EventEmitter();

  buttonText = _('Close');
  inputValue = '';

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    const el: HTMLElement = (this.uploadFolder.nativeElement as HTMLElement);
    // @ts-ignore
    this.buttonClicked.emit(el.value);
  }

  onInputChange(event: any) {
    this.inputValue = event.target.value;
    if (this.inputValue.length > 0) {
      this.buttonText = _('Confirm');
    } else {
      this.buttonText = _('Close');
    }
  }
}
