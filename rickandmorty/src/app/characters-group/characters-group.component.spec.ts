import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersGroupComponent } from './characters-group.component';

describe('CharactersGroupComponent', () => {
  let component: CharactersGroupComponent;
  let fixture: ComponentFixture<CharactersGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersGroupComponent]
    });
    fixture = TestBed.createComponent(CharactersGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
