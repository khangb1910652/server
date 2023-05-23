import express from "express";
import { knex } from "database/knex";

const ApiError = require("../../api-error");
const router = express.Router();

export const KiemTraTonTai = () => {
  return router.get(
    "/",

    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const { TenDangNhap } = req.query;
        const results = await knex("NGUOIDUNG")
          .select("*")
          .where({ TenDangNhap: TenDangNhap })
          .first();
        if (results) {
          res.send(true);
        } else {
          res.send(false);
        }
      } catch (error) {
        console.log(error);
        return next(new ApiError(500, "Không có dữ liệu"));
      }
    }
  );
};
