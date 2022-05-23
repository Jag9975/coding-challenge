import Database from 'better-sqlite3';
import { Item } from '../models/item';

const path = "database.db";

export async function initializeDB() {
    const db = new Database(path);
    db.exec("CREATE TABLE IF NOT EXISTS inventory ('id' INTEGER PRIMARY KEY AUTOINCREMENT, 'name' VARCHAR, 'description' VARCHAR, location 'VARCHAR', 'available' INTEGER);");
    return db;
}

export async function newItem(item: Item) {
    const db = new Database(path);
    const query = db.prepare("INSERT INTO inventory (name, description, location, available) VALUES (?, ?, ?, ?);");
    query.run(item.name, item.description, item.location, item.available);
}

export async function viewItems() {
    const db = new Database(path);
    const items = db.prepare("SELECT * FROM inventory;").all();
    return items;
}

export async function updateItem(item: Item) { 
    const db = new Database(path);
    const query = db.prepare("UPDATE inventory SET name = ?, description = ?, location = ?, available = ? WHERE id = ?;");
    query.run(item.name, item.description, item.location, item.available, item.id);
}

export async function deleteItem(id: number) {
    const db = new Database(path);
    const query = db.prepare("DELETE FROM inventory WHERE id = ?;");
    query.run(id);
}
