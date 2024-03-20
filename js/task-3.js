function getElementWidth(content, padding, border) {
  // Видаляємо "px" та перетворюємо рядки у числа
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  // Розрахунок загальної ширини елемента з урахуванням box-sizing: border-box
  const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

  // Повертаємо загальну ширину елемента
  return totalWidth;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200

/* parseFloat() - це вбудована функція в JavaScript,
    яка призначена для перетворення рядка на число з плаваючою комою.
    Вона приймає рядок в якості аргументу і повертає відповідне число, якщо це можливо. */
// Це останне завдання, без чата джпт не обійшлось)) Головешка сказала хелов бро а як???
