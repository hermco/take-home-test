import { Pharmacy } from "./pharmacy";
import { Doliprane, Fervex, HerbalTea, MagicPill } from "./drugs";

describe("Pharmacy", () => {
  it("should match snapshot", () => {
    const drugs = [
      new Doliprane(20, 30),
      new HerbalTea(10, 5),
      new Fervex(5, 40),
      new MagicPill(15, 40)
    ];
    const pharmacy = new Pharmacy(drugs);

    let result;
    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      result = pharmacy.updateBenefitValue();
    }

    expect(result).toMatchSnapshot();
  });
});
