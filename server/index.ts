import express from 'express';
import cors from 'cors';
import router from "./routes";
import { initializeDB } from "./db";

(async () => {
	await initializeDB();
})();


const app = express()
app.use(cors({ credentials: true, origin: ["http://127.0.0.1:3000", "http://localhost:3000"] }));
app.use(express.json());
router(app);
app.get('*', (req: express.Request, res: express.Response) => {
	res.status(404).json({ message: 'Wrong Endpoint' });
});

console.log(`App listening on port ${process.env.PORT || 9000}.`);

module.exports = app;