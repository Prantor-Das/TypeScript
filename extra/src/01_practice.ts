import express from "express";

const app = express();

const ResponseStatus = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
} as const;

type ResponseStatusType = (typeof ResponseStatus)[keyof typeof ResponseStatus];

app.get("/", (req, res) => {
  res.status(ResponseStatus.SUCCESS).send("Hello, World!");
});

app.use((req, res) => {
  res.status(ResponseStatus.NOT_FOUND).send("Page not found");
});

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(ResponseStatus.SERVER_ERROR).send("Internal Server Error");
  }
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
