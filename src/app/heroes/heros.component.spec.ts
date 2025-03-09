import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../services/hero service/hero.service";
import { HeroesComponent } from "./heroes.component";

describe('heroes component', () => {
  let component:HeroesComponent,serviceMock:jasmine.SpyObj<HeroService>,mockHeroes:Hero[]
  beforeEach(()=>{
    mockHeroes=[
      {id:1,name:"super man",strength:10},
      {id:2,name:"bat man",strength:20},
    ]
    serviceMock=jasmine.createSpyObj(["addHero","getHeroes","deleteHero"])
    serviceMock.getHeroes.and.returnValue(of(mockHeroes))
    component= new HeroesComponent(serviceMock)
  })
  it('after ngOnInit(): getHeroes should been called then set heroes', () => {
    component.ngOnInit()

    expect(serviceMock.getHeroes).toHaveBeenCalled()
    expect(component.heroes).toEqual(mockHeroes)
  });
});

