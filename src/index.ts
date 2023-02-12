import express from "express";
import budgetMiddleware from "./middleware/budgetMiddleware";
import { budgetRoute } from "./routes/budget.routes";
import { productsRoute } from "./routes/products.routes";
import { usersRoute } from "./routes/users.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRoute )
app.use("/products", productsRoute )
app.use("/budget/:userId/:productIds", budgetMiddleware, budgetRoute)

app.listen(3333, () => {
  console.log('🐎 Server is running!')
})