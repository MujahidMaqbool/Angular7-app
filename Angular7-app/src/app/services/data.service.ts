import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable(
    {
        providedIn: 'root'
    }
)
export class DataService {

    constructor() { }

    ///////for home page child components to send message to their parent(Home)
    private messageSource = new BehaviorSubject('default message');
    pageHeading = this.messageSource.asObservable();

    //for nav component
    private isloggedIn = new BehaviorSubject(<boolean>(false));
    userloggedIn = this.isloggedIn.asObservable();

    //Send user data to any other page
    private userInfo = new BehaviorSubject<any[]>([]);
    createdUserData = this.userInfo.asObservable();



    changePageHeading(message: string) {
        this.messageSource.next(message);
    }

    setLoggedInStatus(loggedInUser: boolean) {
        this.isloggedIn.next(loggedInUser);
    }

    sendUserData(userData: any[]) {
        this.userInfo.next(userData);
    }

}