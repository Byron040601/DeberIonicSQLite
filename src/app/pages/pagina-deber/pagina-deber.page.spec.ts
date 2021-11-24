import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaginaDeberPage } from './pagina-deber.page';

describe('PaginaDeberPage', () => {
  let component: PaginaDeberPage;
  let fixture: ComponentFixture<PaginaDeberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaDeberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaDeberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
