import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render toolbar with welcome', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const title = fixture.componentInstance.title;
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.toolbar span')?.textContent).toContain(
      title
    );
  });
});
