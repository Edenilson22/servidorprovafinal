import { pool } from "../shared/database";
import { Request, Response, Router } from "express";


export async function listComputer(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  const computers = await client.query(`select * from computers`)
  //retorna consulta em formato json
  return res.status(200).json(computers.rows);
}


export async function saveComputer(req: Request, res: Response) {
    const client = await pool.connect();
    const computer = req.body;
    console.log(computer);
    try {
      const response = await client.query(
        `insert INTO computers (model, description) VALUES ('${computer.model}','${computer.description}' ) RETURNING *`,
      );
      console.log(response.rows[0]);
      res.status(201).json(response.rows[0]);
    } catch (error) {
      res.status(400).json({ message: 'Dados inválidos:', error});
    } finally {
      client.release();
    }
  }


