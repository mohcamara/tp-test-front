import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonList } from './pokemon-list';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('PokemonList', () => {
  let component: PokemonList;
  let fixture: ComponentFixture<PokemonList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonList],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PokemonList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
