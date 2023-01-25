import Daemon from "../Daemon";
test("проверяем дочерний класс Daemon", () => {
  const person = new Daemon("Вася", "Daemon");
  const result = {
    name: "Вася",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(person).toMatchObject(result);
});
