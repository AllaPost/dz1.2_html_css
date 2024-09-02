/**
 * Вешаем событие просмотра загрузки документа,
 * когда документ загрузится, то выполняй мой javascript
 */
document.addEventListener("DOMContentLoaded", function () {
  /** Находим кнопки по id */
  const btnSkip = document.getElementById("button_skip");
  const btnNext = document.getElementById("button_next");

  /** Проверяем, что кнопка есть */
  if (btnSkip) {
    /**
     * Вешаем событие просмотра клика по кнопке,
     * когда по кнопке нажмут, то выполни мой javascript
     */
    btnSkip.addEventListener("click", function () {
      // Выводим алерт с текстом
      alert("Эта кнопка SKIP");
    });
  }

  /** Проверяем, что кнопка есть */
  if (btnNext) {
    /**
     * Вешаем событие просмотра клика по кнопке,
     * когда по кнопке нажмут, то выполни мой javascript
     */
    btnNext.addEventListener("click", function () {
      // Выводим алерт с текстом
      alert("Эта кнопка NEXT");
    });
  }
});
