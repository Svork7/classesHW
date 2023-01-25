import Swordsman from "../Swordsman";
test("проверяем дочерний класс Swordsman", () => {
  const person = new Swordsman("Вася", "Swordsman");
  const result = {
    name: "Вася",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(person).toMatchObject(result);
});
