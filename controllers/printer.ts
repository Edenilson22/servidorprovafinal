import { pool } from "../shared/database";
import { Request, Response, Router } from "express";


export async function listPrinter(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  const printers = await client.query(`select * from printers`)
  //retorna consulta em formato json
  return res.status(200).json(printers.rows);
}

export async function savePrinter(req: Request, res: Response) {
  const client = await pool.connect();
  const printer = req.body;
  console.log(printer);
  try {
    const response = await client.query(
      `insert INTO printers (name) VALUES ('${printer.name}') RETURNING *`,
    );
    console.log(response.rows[0]);
    res.status(201).json(response.rows[0]);
  } catch (error) {
    res.status(400).json({ message: 'Dados inválidos:', error});
  } finally {
    client.release();
  }
}

