import express from "express";
import { knex } from "database/knex";

const ApiError = require("../../api-error");
const router = express.Router();
import crypto from "crypto";

export const DangKy = () => {
  return router.post(
    "/",

    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const { TenDangNhap, TenHienThi, MatKhau, SoDienThoai, Email } =
          req.body;
        const hashedPassword = crypto
          .createHash("sha256")
          .update(MatKhau)
          .digest("hex");
        const results = await knex("NGUOIDUNG").insert([
          {
            TenDangNhap: TenDangNhap,
            TenHienThi: TenHienThi,
            MatKhau: hashedPassword,
            Email: Email,
            SoDienThoai: SoDienThoai,
            Quyen: "EndUser",
          },
        ]);
        res.send({
          statusCode: 200,
          massage: "Success",
        });
      } catch (error) {
        console.log(error);
        return next(new ApiError(500, "False"));
      }
    }
  );
};
