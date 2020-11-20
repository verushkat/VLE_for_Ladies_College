import { Injectable } from '@angular/core';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';

@Injectable()
export class NotificationService {
  private readonly destroy_by_click = true;
  private readonly duration = 2000;
  private readonly has_icon = true;
  private readonly position = NbGlobalPhysicalPosition.TOP_RIGHT;
  private readonly prevent_duplicates = true;

  private index = 1;

  constructor(private toastrService: NbToastrService
  ) {
  }

  public showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroy_by_click,
      duration: this.duration,
      hasIcon: this.has_icon,
      position: this.position,
      preventDuplicates: this.prevent_duplicates,
    };
    const titleContent = title ? `${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      titleContent,
      config);
  }
}
