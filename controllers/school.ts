import { pool } from "../shared/database";
import { Request, Response, Router } from "express";


export async function listSchool(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  const schools = await client.query(`select * from schools`)
  //retorna consulta em formato json
  return res.status(200).json(schools.rows);
}

export async function saveSchool(req: Request, res: Response) {
  const client = await pool.connect();
  const school = req.body;
  console.log(school);
  try {
    const response = await client.query(
      `insert INTO schools (name) VALUES ('${school.name}') RETURNING *`,
    );
    console.log(response.rows[0]);
    res.status(201).json(response.rows[0]);
  } catch (error) {
    res.status(400).json({ message: 'Dados inválidos:', error});
  } finally {
    client.release();
  }
}

