import { Request, Response } from "express";
import { Success, Error } from "../models/return_status";
import * as inventoryDB from '../db';

export async function viewItem(req: Request, res: Response): Promise<Response> {
    try {
        const data = await inventoryDB.viewItems();
        return res.status(200).json(new Success(data));
    } catch (err) {
        return res.status(500).json(new Error("Database error"));
    }
}

export async function addItem(req: Request, res: Response): Promise<Response> {
    try {
        await inventoryDB.newItem({ id: req.body.id, name: req.body.name, description: req.body.description, location: req.body.location, available: req.body.available });
        return res.status(200).json(new Success("Item added"));
    } catch (err) {
        return res.status(500).json(new Error("Database error"));
    }
}

export async function deleteItem(req: Request, res: Response): Promise<Response> {
    try {
        await inventoryDB.deleteItem(req.body.id);
        return res.status(200).json(new Success("Item deleted"));
    } catch (err) {
        return res.status(500).json(new Error("Database error"));
    }
}

export async function updateItem(req: Request, res: Response): Promise<Response> {
    try {
        await inventoryDB.updateItem({ id: req.body.id, name: req.body.name, description: req.body.description, location: req.body.location, available: req.body.available });
        return res.status(200).json(new Success("Item updated"));
    } catch (err) {
        return res.status(500).json(new Error("Database error"));
    }
}
