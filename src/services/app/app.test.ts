import appService from './app';

describe('App Service', () => {
  describe('.sayHello', () => {
    it('should say "Hello World"', () => {
      const resp = appService.sayHello();
      expect(resp).toBe('Hello World');
    });
  });
});
