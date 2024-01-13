import ErrorRepository from '../ErrorRepository';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Должны получить человекочитаемое описание ошибки по коду
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
test('should receive human-readable description of the error', () => {
  const errorRepository = new ErrorRepository();

  errorRepository.writeCode(403, 'У пользователя нет прав на просмотр страницы или ресурса');
  errorRepository.writeCode(404, 'Страница не найдена (неправильный адрес, удалена, не существует)');
  errorRepository.writeCode(503, 'Сервер недоступен');

  const received = errorRepository.translate(404);
  const expected = 'Страница не найдена (неправильный адрес, удалена, не существует)';

  expect(received).toBe(expected);
});

// - - - - - - - - - - - - - - - - - - - - - -
// Должны получить сообщение "Unknown error"
// - - - - - - - - - - - - - - - - - - - - - -
test('should receive message -Unknown error-', () => {
  const errorRepository = new ErrorRepository();

  errorRepository.writeCode(403, 'У пользователя нет прав на просмотр страницы или ресурса');
  errorRepository.writeCode(404, 'Страница не найдена (неправильный адрес, удалена, не существует)');
  errorRepository.writeCode(503, 'Сервер недоступен');

  const received = errorRepository.translate(606);
  const expected = 'Unknown error';

  expect(received).toBe(expected);
});
