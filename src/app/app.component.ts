import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponent/todos/todos.component";
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo List';
}
