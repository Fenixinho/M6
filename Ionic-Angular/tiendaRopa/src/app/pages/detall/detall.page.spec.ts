import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallPage } from './detall.page';

describe('DetallPage', () => {
  let component: DetallPage;
  let fixture: ComponentFixture<DetallPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
