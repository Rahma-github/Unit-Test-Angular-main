import { TestBed } from "@angular/core/testing";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";
import { HeroServiceForLab } from "./hero.lab.service";
import { Hero } from "../../hero";

describe("3-hero service (http) integration testing:", () => {
     let service: HeroServiceForLab, httpTesting: HttpTestingController;
      let heroesUrl = 'http://localhost:3000/heroes'
      beforeEach(()=>{
        TestBed.configureTestingModule({
          providers: [
            provideHttpClient(),
            provideHttpClientTesting(),
          ],
        });
         httpTesting = TestBed.inject(HttpTestingController);
         service = TestBed.inject(HeroServiceForLab);
      })

  it("getHeroes function: send request and receive response successfully", () => {
     let heroArr: Hero[] = [
       { id: 1, name: 'hero1', strength: 1 },
       { id: 2, name: 'hero2', strength: 2 },
       { id: 3, name: 'hero3', strength: 3 },
       { id: 4, name: 'hero4', strength: 4 },
     ];
     service.getHeroes().subscribe((data) => {
      expect(data).toHaveSize(4)
     })

    let reqTest = httpTesting.expectOne(heroesUrl);
    expect(reqTest.request.method).toBe("GET");
    reqTest.flush(heroArr);
  });


  it('updateHero function: send PUT request and receive response successfully', () => {
    let updatedHero: Hero = { id: 1, name: 'hero 100', strength: 1 };

    service.updateHero(updatedHero).subscribe((data) => {
      expect(data).toEqual(updatedHero);
    });

    let reqTest = httpTesting.expectOne(heroesUrl);
    expect(reqTest.request.method).toBe('PUT');

    reqTest.flush(updatedHero);
  });
})
