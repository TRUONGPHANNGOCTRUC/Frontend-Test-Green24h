import Link from "next/link";

export const NavBar = () => (
  <div className="bg-orange-600 py-4 px-6 flex justify-between items-center">
    <Link href="/" className="text-lg font-semibold text-white">
      Trang chủ
    </Link>
    <Link href="/login" className="text-lg font-semibold text-white">
      Đăng nhập/Đăng ký
    </Link>
  </div>
);
