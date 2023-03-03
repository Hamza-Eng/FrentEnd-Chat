import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateParentComponent } from './private-parent.component';

describe('PrivateParentComponent', () => {
  let component: PrivateParentComponent;
  let fixture: ComponentFixture<PrivateParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
