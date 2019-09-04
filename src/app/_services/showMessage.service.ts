import { Injectable } from '@angular/core';
//import { ToastModule } from 'ng-mdb-pro/pro/alerts';
//import { MessageService } from 'primeng/primeng';

@Injectable({
  providedIn: 'root'
})
export class ShowMessageService {

  constructor() { }

  showSuccess(summary: string, detail: string): void {
   // this.messageService.add({ severity: 'success', summary: summary, detail: detail, life: 10000 });
  }

  showInfo(summary: string, detail: string): void {
    //this.messageService.add({ severity: 'info', summary: summary, detail: detail, life: 10000 });
  }

  showWarn(summary: string, detail: string): void {
    //this.messageService.add({ severity: 'warn', summary: summary, detail: detail, life: 10000 });
  }

  showError(summary: string, detail: string): void {
    //this.messageService.add({ severity: 'error', summary: summary, detail: detail, life: 10000 });
  }

  showConfirm() {
    //this.messageService.clear();
    //this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
  }

  onConfirm() {
    //this.messageService.clear('c');
  }

}