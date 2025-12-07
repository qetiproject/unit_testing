import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserInteface } from '../types/user.interface';

@Injectable()
export class RxjsService {
    users$ = new BehaviorSubject<UserInteface[]>([]);

  addUser(user: UserInteface): void {
    this.users$.next([...this.users$.getValue(), user]);
  }

  removeUser(userId: string): void {
    const updatedUsers = this.users$
        .getValue()
        .filter((user) => userId !== user.id);
    this.users$.next(updatedUsers);
  }

}
