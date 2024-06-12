import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-models',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent {
  models: any[] = [];
  modelName: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getModels();
  }

  getModels(): void {
    this.apiService.getModels().subscribe((data: any[]) => {
      this.models = data;
    });
  }

  addModel(): void {
    const newModel = { model_name: this.modelName };
    this.apiService.createModel(newModel).subscribe(() => {
      this.getModels();
      this.modelName = '';
    });
  }
}
