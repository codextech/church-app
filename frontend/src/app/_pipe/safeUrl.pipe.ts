import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'SafeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(url: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustStyle(url);
    // return this.sanitizer.bypassSecurityTrustStyle(style);
    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
  }

}
