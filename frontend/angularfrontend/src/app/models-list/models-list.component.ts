import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.css'
})
export class ModelsListComponent{
  models: any[] | undefined;


  constructor(private apiService: ApiService) {}


  getModels(): void {
    this.apiService.getModels().subscribe((data: any[]) => {
      this.models = data;
    });
  }
}
