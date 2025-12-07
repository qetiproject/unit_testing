import { TestBed } from '@angular/core/testing';
import { UserInteface } from '../types/user.interface';
import { RxjsService } from './rxjs.service';

describe('RxjsService', () => {
  let usersService: RxjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ RxjsService ],
    });

    usersService = TestBed.inject(RxjsService);
  });

  it('creates a service', () => {
    expect(usersService).toBeTruthy();
  });

  describe('addUser', () => {
    it('should add a user', () => {
      const user: UserInteface = {
        id: '3',
        name: 'foo',
      };
      usersService.addUser(user);
      expect(usersService.users$.getValue()).toEqual([{ id: '3', name: 'foo' }]);
    });
  });

  describe('removeUser', () => {
    it('should remove a user', () => {
      usersService.users$.next([{ id: '3', name: 'foo' }]);
      usersService.removeUser('3');
      expect(usersService.users$.getValue()).toEqual([]);
    });
  });

});
