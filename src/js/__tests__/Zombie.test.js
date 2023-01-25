import Zombie from "../Zombie";
test("проверяем дочерний класс Zombie", () => {
  const person = new Zombie("Вася", "Zombie");
  const result = {
    name: "Вася",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(person).toMatchObject(result);
});
