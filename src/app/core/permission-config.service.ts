import { Injectable } from '@angular/core';

import { PermissionService } from '../permission/permission.service';

@Injectable()
export class PermissionConfigService {

  constructor(private permissionService: PermissionService) {
    permissionService.setDomain('hcm');
    permissionService.setService('pulse');
    permissionService.setLevel('actions');
  }

}
