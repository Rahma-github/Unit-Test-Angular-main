import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MessagesComponentForLab } from "./messages.lab.component";
import { MessageService } from "../../services/message/message.service";
import { By } from "@angular/platform-browser";


describe("2-message component integration testing:", () => {
   let component: MessagesComponentForLab, fixture: ComponentFixture<MessagesComponentForLab>, messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });

      fixture = TestBed.createComponent(MessagesComponentForLab);
      component = fixture.componentInstance;
      messageService = TestBed.inject(MessageService);
    });


    it("expect component template to be empty", () => {
      let container = fixture.nativeElement.querySelector('#container');
      expect(container).toBeNull();
    })


  it("then expect div.msg to have the messages after setting it", () => {
     messageService.add('welcome testing');
     messageService.add('MEARN ');
     fixture.detectChanges();

      const messages = fixture.debugElement.queryAll(By.css('.msg'));
      expect(messages).toHaveSize(2);
      expect(messages[0].nativeElement.textContent).toContain('welcome testing');
      expect(messages[1].nativeElement.textContent).toContain( 'MEARN ');
    })
})
