import { AppPage } from './app.po';
import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from '../src/app/app.component';


describe('emp-dir-ang4-intro-master App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('app');
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Employee');
  });
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
