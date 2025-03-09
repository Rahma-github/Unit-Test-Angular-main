import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HeroService } from "./hero.service";

describe("hero service:", () => {
  let service:HeroService,httpTesting:HttpTestingController
  let heroesUrl = 'http://localhost:3000/heroes'
  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [
        // ... other test providers
        provideHttpClient(),
        provideHttpClientTesting(),

      ],
    });
     httpTesting = TestBed.inject(HttpTestingController);
     service= TestBed.inject(HeroService)
  })
  it('getHero() : should send req get(/id)', () => {

    service.getHero(2).subscribe((data)=>{
      expect(data.name).toBe("super man")
    })

    let reqTest=httpTesting.expectOne(heroesUrl+"/2")
    expect(reqTest.request.method).toBe("GET")

    reqTest.flush({id:2,name:"super man",strength:20})

  });
})


