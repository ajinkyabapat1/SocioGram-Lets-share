
import { CanActivate } from '@angular/router/src/utils/preactivation';

export class Routeguard implements CanActivate{
    path: import("@angular/router").ActivatedRouteSnapshot[];    
    route: import("@angular/router").ActivatedRouteSnapshot;
canActivate(){
    return false;
}

}