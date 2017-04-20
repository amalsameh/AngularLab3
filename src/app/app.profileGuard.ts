import {Injectable} from '@angular/core'
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router'
import {db} from './app.dbService'
@Injectable()
export class profileGuard implements CanActivate
{
    constructor(private router:Router,private _dbService:db)
    {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : boolean {
      let id=+route.url[1].path;
      if(isNaN(id)||id<1||!(this._dbService.checkUserExist(+route.url[1].path)))
      {
       this.router.navigate(['error']);
      console.log(id);
      return false;
    }
     return true;
  }
}