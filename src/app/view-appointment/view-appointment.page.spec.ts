import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ViewAppointmentPage } from './view-appointment.page';
describe('ViewAppointmentPage', () => {
  let component: ViewAppointmentPage;
  let fixture: ComponentFixture<ViewAppointmentPage>;

  beforeEach(async () => {
    await  TestBed.configureTestingModule({
      declarations: [ViewAppointmentPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAppointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
