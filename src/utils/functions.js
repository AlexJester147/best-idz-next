export function setCategoryName(name) {
  let resultName = "";
  let nameArray = name.split(" ");
  switch (true) {
    case name == "Индивидуальные ДЗ":
      resultName = `ИДЗ`;
      break;
    case name == "Аудиторные задания":
      resultName = `АЗ`;
      break;
    case name == "Контрольные работы":
      resultName = `КР`;
      break;
    case name == "Оптовая продажа":
      resultName = `ОПТ`;
      break;
    case name.includes("АЗ"):
      resultName = `${nameArray[nameArray.length - 1]}`;
      break;
    case name.includes("Часть") && name.includes("Вариант"):
      resultName = `${nameArray[3]}`;
      break;
    case name.includes("Рябушко") && name.includes("Вариант"):
      resultName = `${nameArray[4]}`;
      break;
    case name.includes("ИДЗ") && nameArray.length == 1:
      resultName = `${nameArray[0]}`;
      break;
    case name.includes("ИДЗ"):
      resultName = `${nameArray[1]}`;
      break;
    case name.includes("Часть"):
      resultName = `${nameArray[1]}`;
      break;
    case name.includes("Вариант"):
      resultName = `${nameArray[nameArray.length - 1]}`;
      break;
    default:
      resultName = name;
      break;
  }
  return resultName;
}
