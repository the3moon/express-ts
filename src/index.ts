import express from 'express';
import appRouter from './routers';

const app = express();
const port = process.env.PORT || 3000;

app.use('/', appRouter);

function handleAppListening(): void {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`);
}

app.listen(port, handleAppListening);
