import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CounterComponent } from "./counter.component";
import { By } from "@angular/platform-browser";

describe('counter component: ', () => {
  let component:CounterComponent,fixture:ComponentFixture<CounterComponent>
  beforeEach(/* async */()=>{
   /* await  */TestBed.configureTestingModule({imports:[CounterComponent]})//.compileComponents()

   fixture=TestBed.createComponent(CounterComponent)
    component=fixture.componentInstance
    
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("templete should have 0 in p",()=>{
    expect(component.counter).toBe(0)

    fixture.detectChanges()
    // access tag 1 
    // let p=fixture.debugElement.query( By.css("p") )
    // expect(p.nativeElement.textContent).toContain("0")
    // access tag 2
   let p= fixture.nativeElement.querySelector("p")
   expect(p.textContent).toContain("0")
  })
  it("after clicking btn + counter should be inc then tamplate should detect",()=>{
    let btn= fixture.debugElement.query( By.css("#inc") )
    btn.triggerEventHandler("click")

    expect(component.counter).toBe(1)
    fixture.detectChanges()
    let p= fixture.nativeElement.querySelector("p")
    expect(p.textContent).toContain("1")
  })
});
