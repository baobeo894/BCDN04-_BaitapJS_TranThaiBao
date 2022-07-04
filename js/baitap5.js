/**
 * Khối 1:nhap vao 1 so co 2 chu so
 * vd 12 
 * 
 * Khối 2:
 * B1: tạo biến 
 * so2chuso (tao so chua 2 chữ số)
 * 
 * B2: Lập công thức tính toán
 soHangChuc = Math.floor(so2chuso % 100/10);=> 1
 soDonVi = so2chuso % 100 % 10;=>2
 * 
 * B3: Thông báo kết quả
 *
 * Khối 3:Output
 * tong 2 ky so cua so vua nhap
 */

// b1
 var so2chuso =12

// b2
soHangChuc = Math.floor(so2chuso % 100/10);
soDonVi = so2chuso % 100 % 10;

kq = soHangChuc + soDonVi;

// b3
console.log("tong cua 2 ky so",kq);