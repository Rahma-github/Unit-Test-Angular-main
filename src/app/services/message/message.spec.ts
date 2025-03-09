import { MessageService } from "./message.service";

describe("message service:",()=>{ 
  let service:MessageService
  beforeEach(()=>{
    service= new MessageService()
  })
    it('add() should add 1 msg', () => {
      service.add("msg 1")

      expect(service.messages).toHaveSize(1)
    });
    it('add() should add 2 msg', () => {
      service.add("msg 1")
      service.add("msg 2")

      expect(service.messages).toHaveSize(2)
    });
    it('clear() should delete all mgs', () => {
      service.add("msg 1")
      service.add("msg 2")

      service.clear()
      expect(service.messages).toHaveSize(0)
    });
})