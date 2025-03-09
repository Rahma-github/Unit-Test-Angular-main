import { StrengthPipe } from "./strength.pipe";

describe("strength pipe:", () => { 
  let pipe:StrengthPipe;
  beforeEach(()=>{
     pipe= new StrengthPipe()
  })
  it('transform should return "weak" when passing 4', () => {
    expect(pipe.transform(4)).toContain("weak")
  });
  it('transform should return "strong" when passing 12', () => {
    
    
    expect(pipe.transform(12)).toContain("strong")
  });
})