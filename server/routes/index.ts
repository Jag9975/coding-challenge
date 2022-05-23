import { Application } from "express";
import { router as inventory } from "./inventory";

export default function(app: Application): void {
    app.use('/inventory', inventory);
}