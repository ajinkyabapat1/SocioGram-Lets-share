
import { CanActivate } from '@angular/router/src/utils/preactivation';
import * as firebase from 'Firebase';

export class Routeguard implements CanActivate{
    path: import("@angular/router").ActivatedRouteSnapshot[];    
    route: import("@angular/router").ActivatedRouteSnapshot;
canActivate(){
    if (firebase.auth().currentUser){
        return  true
    }
    else
    return false
}

}