import express from "express";
import { knex } from "database/knex";

const ApiError = require("../../api-error");
const router = express.Router();

export const DoiQuyen = () => {
  return router.get(
    "/",

    async (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      try {
        const { MaNguoiDung, Quyen } = req.query;
        const results = await knex("NGUOIDUNG")
          .update({ Quyen: Quyen })
          .where({ MaNguoiDung: MaNguoiDung });
        res.send({
          statusCode: 200,
          massage: "Success",
        });
      } catch (error) {
        console.log(error);
        return next(new ApiError(500, "Không có dữ liệu"));
      }
    }
  );
};
