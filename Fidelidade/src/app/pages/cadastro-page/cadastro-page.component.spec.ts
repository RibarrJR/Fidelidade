import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore,MockStore } from '@ngrx/store/testing';
import { reducers } from 'src/app/state/initial';

import { CadastroPageComponent } from './cadastro-page.component';

describe('CadastroPageComponent', () => {
  let component: CadastroPageComponent;
  let fixture: ComponentFixture<CadastroPageComponent>;
  let initialState = { loading: 0 }
  let store:MockStore

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroPageComponent],
      imports: [StoreModule.forRoot(reducers, {})],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents();
  });

  beforeEach(() => {
    store= TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CadastroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
