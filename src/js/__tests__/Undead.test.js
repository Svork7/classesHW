import Undead from "../Undead";
test("проверяем дочерний класс Undead", () => {
  const person = new Undead("Вася", "Undead");
  const result = {
    name: "Вася",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(person).toMatchObject(result);
});
