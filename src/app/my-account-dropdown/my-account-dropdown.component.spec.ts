import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountDropdownComponent } from './my-account-dropdown.component';

describe('MyAccountDropdownComponent', () => {
  let component: MyAccountDropdownComponent;
  let fixture: ComponentFixture<MyAccountDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAccountDropdownComponent]
    });
    fixture = TestBed.createComponent(MyAccountDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
