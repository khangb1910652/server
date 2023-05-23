import express from "express";
import { knex } from "database/knex";

const ApiError = require("../../api-error");
const router = express.Router();

export const LayDanhSach = () => {
  return router.get(
    "/",

    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const results = await knex("NGUOIDUNG").select("*");
        let account = {
          MaNguoiDung: "",
          TenDangNhap: "",
          TenHienThi: "",
          MatKhau: "",
          Email: "",
          SoDienThoai: "",
          Quyen: "",
        } as any;
        let accounts = [] as any;
        if (results.length > 0) {
          let currentAccount = results[0].MaNguoiDung;
          results.forEach((item: any) => {
            if (item.MaNguoiDung === currentAccount) {
              (account.MaNguoiDung = item.MaNguoiDung),
                (account.TenDangNhap = item.TenDangNhap),
                (account.TenHienThi = item.TenHienThi),
                (account.MatKhau = item.MatKhau),
                (account.Email = item.Email),
                (account.SoDienThoai = item.SoDienThoai),
                (account.Quyen = item.Quyen);
            } else {
              accounts.push(account);
              currentAccount = item.MaNguoiDung;
              const newAccount = {
                MaNguoiDung: item.MaNguoiDung,
                TenDangNhap: item.TenDangNhap,
                TenHienThi: item.TenHienThi,
                MatKhau: item.MatKhau,
                Email: item.Email,
                SoDienThoai: item.SoDienThoai,
                Quyen: item.Quyen,
              };
              account = { ...newAccount };
            }
          });
          accounts.push(account);
          res.send(accounts);
        }
      } catch (error) {
        console.log(error);
        return next(new ApiError(500, "Không có dữ liệu"));
      }
    }
  );
};
