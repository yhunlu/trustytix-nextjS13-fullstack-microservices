import express from 'express';
import { json } from 'body-parser';
import {
  currentUserRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from './routes';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
