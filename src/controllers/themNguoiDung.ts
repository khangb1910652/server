import express from "express";
import { knex } from "database/knex";

const ApiError = require('../api-error');
const router = express.Router();

export const themNguoiDung = () => {
    return router.post(
        "/",

        async (req: express.Request, res: express.Response, next: express.NextFunction) => {
            try {
                const { user, name, password, permission } = req.body;
                let MaQuyen = 0;
                if (permission === "admin") {
                    MaQuyen = 1;
                } else {
                    MaQuyen = 2;
                }
                const results = await knex('NGUOIDUNG')
                    .insert([{ TenDangNhap: user, TenHienThi: name, MatKhau: password, MaPhanQuyen: MaQuyen }])
                res.send({
                    statusCode: 200,
                    massage: "Success",
                });
            } catch (error) {
                console.log(error);
                return next(
                    new ApiError(500, 'False'));
            }
        }
    )
};