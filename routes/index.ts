import { Router, Request, Response } from "express";
import { validateRequestShcema } from "../middleware/validate-request-schema";
import { registerSchema } from "../schema/register-schema";
const rootRouter = Router();

rootRouter.post(
  "/register",
  registerSchema,
  validateRequestShcema,

  (req: Request, res: Response) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    res.sendStatus(201);
  }
);
export { rootRouter as router };
