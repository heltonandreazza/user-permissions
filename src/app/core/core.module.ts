import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionConfigService } from './permission-config.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PermissionConfigService]
})
export class CoreModule {
  constructor(private permissionConfigService: PermissionConfigService) {
  }
}
