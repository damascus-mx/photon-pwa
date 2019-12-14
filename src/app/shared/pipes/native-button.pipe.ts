import { Pipe, PipeTransform } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Pipe({
  name: 'nativeButton'
})
export class NativeButtonPipe implements PipeTransform {

  constructor(private platform: Platform) {}

  transform(value: string): string {
    if (this.platform.ANDROID) { return value.toUpperCase(); }
    return value;
  }

}
