import { Request, Response } from 'express';
import appService from '../services/app/app';

const appController = {
  index(req: Request, res: Response) {
    const greeting = appService.sayHello();
    res.send(greeting);
  },
};

export default appController;
