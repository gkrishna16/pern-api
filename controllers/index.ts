import { Request, Response } from "express";
import pool from "../db";

interface Data {
  name: string;
  age: number;
}

const getData = async (req: Request, res: Response) => {
  const newData = await pool.query("SELECT * FROM datacontact");
  res.status(200).json(newData);
};

const getDataById = async (req: Request, res: Response) => {
  let { id } = req.params;
  const newData = await pool.query("SELECT * FROM datacontact WHERE id = $1", [
    id,
  ]);
  res.status(200).json(newData);
};

const postData = async (req: Request, res: Response) => {
  try {
    let { name, email } = req.body;
    console.log(req.body);
    const newData = await pool.query(
      "INSERT INTO datacontact (name,email) VALUES($1,$2)",
      [name, email]
    );
    res.status(200).json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

export { getData, postData, getDataById };
