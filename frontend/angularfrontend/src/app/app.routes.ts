import { Routes } from '@angular/router';
import { ModelsComponent } from './models/models.component';
import { EntitiesComponent } from './entities/entities.component';
import { EntityDataComponent } from './entity-data/entity-data.component';
import { ModelsListComponent } from './models-list/models-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/models', pathMatch: 'full' },
  { path: 'models', component: ModelsComponent },
  {path: 'models/all', component: ModelsListComponent},
  { path: 'entities', component: EntitiesComponent },
  { path: 'entity-data', component: EntityDataComponent }
];
