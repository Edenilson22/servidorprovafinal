import { pool } from "../shared/database";
import { Request, Response, Router } from "express";


export async function listCourse(req: Request, res: Response) {
  //conecta com o banco
  const client = await pool.connect();
  //realiza consulta sql
  const courses = await client.query(`select * from courses`)
  //retorna consulta em formato json
  return res.status(200).json(courses.rows);
}

export async function saveCourse(req: Request, res: Response) {
  const client = await pool.connect();
  const course = req.body;
  console.log(course);
  try {
    const response = await client.query(
      `insert INTO courses (name) VALUES ('${course.name}') RETURNING *`,
    );
    console.log(response.rows[0]);
    res.status(201).json(response.rows[0]);
  } catch (error) {
    res.status(400).json({ message: 'Dados inválidos:', error});
  } finally {
    client.release();
  }
}

