import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDataComponent } from './entity-data.component';

describe('EntityDataComponent', () => {
  let component: EntityDataComponent;
  let fixture: ComponentFixture<EntityDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntityDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
