import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from "./user/dummy-users";
import { TasksComponent } from "./tasks/tasks.component";
//decorator 
@Component({
  selector: 'app-root',
  standalone: true,  //selector
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    //adding the explanation mark makes sure we will always find the user
    //so no compilation issue in TS
    return this.users.find( (user) => user.id == this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

}
