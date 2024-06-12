import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-entities',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './entities.component.html',
  styleUrl: './entities.component.css'
})
export class EntitiesComponent implements OnInit{
  entities: any[] = [];
  entityName: string = '';
  modelId: number;

  constructor(private apiService: ApiService) {
    // Assume modelId is set via route or other means
    this.modelId = 1; // Set this dynamically as needed
  }

  ngOnInit(): void {
    this.getEntities();
  }

  getEntities(): void {
    this.apiService.getEntities(this.modelId).subscribe((data: any[]) => {
      this.entities = data;
    });
  }

  addEntity(): void {
    const newEntity = { entity_name: this.entityName, model_id: this.modelId };
    this.apiService.createEntity(newEntity).subscribe(() => {
      this.getEntities();
      this.entityName = '';
    });
  }
}
