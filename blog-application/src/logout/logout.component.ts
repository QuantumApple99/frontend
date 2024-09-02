import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  @Output() onLogout = new EventEmitter()

  onClick(){
    this.onLogout.emit()
  }
}
