import express from 'express';
import type { Express, Request, Response } from 'express';
import 'dotenv/config';

// configure database
import { drizzle } from 'drizzle-orm/node-postgres'

const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL!,
    ssl: true,
  }
})

const app: Express = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routers

// error handling
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Express + TypeScript Server' });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server running at http://localhost:${port}`);
});

export default app;
