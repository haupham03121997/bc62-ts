import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex h-[92px] items-center justify-between px-4">
      <p className="font-semibold">Logo</p>
      <div className="flex items-center gap-4">
        <span className="font-medium cursor-pointer">Menu 1</span>
        <span className="font-medium cursor-pointer">Menu 2</span>
        <span className="font-medium cursor-pointer"> Menu 3</span>
      </div>
      <div className="flex items-center gap-3">
        <Button size="large">Đăng ký</Button>
        <Button
          size="large"
          type="primary"
          onClick={() => navigate("/auth/login")}
        >
          Đăng nhập
        </Button>
      </div>
    </div>
  );
}
