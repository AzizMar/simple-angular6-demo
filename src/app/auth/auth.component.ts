import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  currentUser: User = new User();
  warn = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  userLogin(): void {
    if (this.currentUser.username === 'examen' && this.currentUser.password === 'esprit') {
      this.router.navigate(['/adminArea']);
    } else {
      this.warn = 'Authentification impossible';
      console.log('Authentification impossible');
    }
  }

}
