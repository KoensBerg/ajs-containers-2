export default class ErrorRepository {
  constructor() {
    this.errList = new Map();
  }

  writeCode(code, description) {
    this.errList.set(code, description);
  }

  translate(code) {
    if (this.errList.has(code)) {
      return this.errList.get(code);
    }

    return 'Unknown error';
  }
}
