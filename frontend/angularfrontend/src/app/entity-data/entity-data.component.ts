import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-entity-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './entity-data.component.html',
  styleUrl: './entity-data.component.css'
})
export class EntityDataComponent implements OnInit{
  @Input() entityId!: string;
  entityData: any[] = [];
  newData: { key: string, value: string } = { key: '', value: '' };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getEntityData(this.entityId);
  }

  getEntityData(entityId:string): void {
    this.apiService.getEntityData(entityId).subscribe((data: any[]) => {
      this.entityData = data;
    });
  }

  addEntityData(): void {
    this.entityData.push(this.newData);
    this.newData = { key: '', value: '' }; // Reset the input fields
  }
}
