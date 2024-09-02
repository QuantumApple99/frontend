import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class LoginService{
    authenticate(username: string, password: string){
        if(username==='admin@example.com' && password==='admins'){
            return true;
        }

        return false;
    }
}