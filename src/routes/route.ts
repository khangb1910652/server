
import { serverInit } from 'config';
import { DangKy } from 'controllers/TaiKhoan/DangKy';
import { KiemTraTonTai } from 'controllers/TaiKhoan/KiemTraTonTai';
import { LayDanhSach } from 'controllers/TaiKhoan/LayDanhSach';


import express from 'express';

const app = express();

export const routes = () => {
    serverInit(app);
    app.use('/dangKyTaiKhoan', DangKy());
    app.use('/layDanhSachNguoiDung', LayDanhSach());
    app.use('/kiemTraTonTaiTenDangNhap', KiemTraTonTai());
}