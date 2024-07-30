import Koa from "koa";
import { PORT } from "./utils/env.js";

const app = new Koa();

app.use((ctx) => {
    ctx.body = "The magic of koa 🐨 !";
});

app.listen(PORT, () => {
    console.info(`Server started on http://localhost:${PORT} 🧙🔮🐨`);
});
