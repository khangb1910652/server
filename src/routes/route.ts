import { serverInit } from 'config';
import { kiemTraTonTaiTenDangNhap } from 'controllers/kiemTraTonTaiTenDangNhap';
import { layDanhSachNguoiDung } from 'controllers/layDanhSachNguoiDung';
import { themNguoiDung } from 'controllers/themNguoiDung';

import express from 'express';

const app = express();

export const routes = () => {
    serverInit(app);
    app.use('/themNguoiDung', themNguoiDung());
    app.use('/layDanhSachNguoiDung', layDanhSachNguoiDung());
    app.use('/kiemTraTonTaiTenDangNhap', kiemTraTonTaiTenDangNhap());
}