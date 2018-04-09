import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        VoterComponent
      ]
    });

    // fixture is the wrapper of component where we can access component and its template
    fixture = TestBed.createComponent(VoterComponent)
    // with fixture we can get instance of component, get DOM element, call detect change...
    component = fixture.componentInstance;

    // nativeElement: root DOM element for this template
    //fixture.nativeElement

    // wrapper around nativeElement, some useful method query the DOM
    //fixture.debugElement

  });

  // Test data binding
  it('sould render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('21');
  });

  // Test class binding
  it('should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes['highlighted']).toBeTruthy();
  })

  // Test event binding
  it('should increae total votes when I click the upvote', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    // click button
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
  })

  
});
