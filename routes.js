import express from 'express'
import sql from 'mssql'
import { sqlConfig } from './config.js';

const pool = new sql.ConnectionPool(sqlConfig)
await pool.connect();
const routes = express.Router()

routes.get('/', async (req, res)=>{
    try{
         const { recordset } =  await pool.query`select * from produto`
         return res.status(200).json(recordset)
    }
    catch(error){
         return res.status(501).json('algo deu errado')
    }
 })

 routes.get('/chamado/id', async (req,res)=>{
    try{
        const {id} = req.params
        const { recordset } = await pool.query `select * from produto where id_produto = ${id}`
        return res.status(201).json(recordset)
    }
    catch(error){
        return res.status(501).json('erro')
    }
 })
 routes.post('/chamado/novo', async (req,res)=>{
    try{
        const {id_produto, data_produto, nome_cliente, descricao} = req.body;
        await pool.query`insert into produtos values(${id_produto},${data_produto},${nome_cliente}, ${descricao})`
        return res.status(201).json(`ok`)
    }
    catch(error){
        return res.status(501).json('erro ao inserir produto...')
    }
 })

 export default routes;