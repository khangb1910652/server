import express from "express";
import { knex } from "database/knex";

const ApiError = require('../api-error');
const router = express.Router();

export const layDanhSachNguoiDung = () => {
    return router.get(
        "/",

        async (req: express.Request, res: express.Response, next: express.NextFunction) => {
            try {
                const results = await knex('NGUOIDUNG')
                    .join('PHANQUYEN', 'NGUOIDUNG.MaPhanQuyen', '=', 'PHANQUYEN.MaPhanQuyen')
                    .select('*');
                let account = {
                    id: "",
                    user: "",
                    name: "",
                    password: "",
                    permission: ""
                } as any
                let accounts = [] as any
                if (results.length > 0) {
                    let currentAccount = results[0].MaNguoiDung;
                    results.forEach((item: any) => {
                        if (item.MaNguoiDung === currentAccount) {
                            account.id = item.MaNguoiDung,
                                account.user = item.TenDangNhap,
                                account.name = item.TenHienThi,
                                account.password = item.MatKhau,
                                account.permission = item.TenPhanQuyen
                        } else {
                            accounts.push(account)
                            currentAccount = item.MaNguoiDung
                            const newAccount = {
                                id: item.MaNguoiDung,
                                user: item.TenDangNhap,
                                name: item.TenHienThi,
                                password: item.MatKhau,
                                permission: item.TenPhanQuyen
                            };
                            account = { ...newAccount }
                        }
                    });
                    accounts.push(account)
                    res.send(accounts);
                }
            } catch (error) {
                console.log(error);
                return next(
                    new ApiError(500, 'Không có dữ liệu'));
            }
        }
    )
};