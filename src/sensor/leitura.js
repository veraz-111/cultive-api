import { Router } from "express";
import conn from "../banco_dados/bd.js";

const routerLeitura = Router();

routerLeitura.post("/sensor/leitura", (req, res) => {
    const {
        id_fazenda,
        umidade_terra,
        umidade_ar,
        temperatura_ar,
        luminosidade,
        ph_agua,
        data_leitura
    } = req.body;

    if (
        id_fazenda === undefined ||
        umidade_terra === undefined ||
        umidade_ar === undefined ||
        temperatura_ar === undefined ||
        luminosidade === undefined ||
        ph_agua === undefined ||
        data_leitura === undefined
    ) {
        return res.status(400).json({
            message: "Faltam dados da leitura"
        });
    }

    const sql = `
        INSERT INTO leitura
        (id_fazenda, umidade_terra, umidade_ar, temperatura_ar, luminosidade, ph_agua, data_leitura)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const valores = [
        id_fazenda,
        umidade_terra,
        umidade_ar,
        temperatura_ar,
        luminosidade,
        ph_agua,
        data_leitura
    ];

    conn.query(sql, valores, (err, result) => {
        if (err) {
            console.log("Erro ao salvar leitura");
            return res.status(500).json({
                message: "Erro ao salvar leitura"
            });
        }

        res.status(201).json({
            message: "Leitura salva com sucesso",
            id_leitura: result.insertId
        });
    });
});

routerLeitura.get("/sensor/leitura/:id_fazenda", (req, res) => {
    const { id_fazenda } = req.params;

    conn.query(
        "SELECT * FROM leitura WHERE id_fazenda = ? ORDER BY data_leitura DESC LIMIT 20",
        [id_fazenda],
        (err, result) => {
            if (err) {
                console.log("Erro ao buscar leituras");
                return res.status(500).json({
                    message: "Erro ao buscar leituras"
                });
            }

            res.status(200).json(result);
        }
    );
});

export default routerLeitura;
