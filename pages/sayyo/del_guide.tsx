import React from "react";

import SayyoMeta from "@/components/SayyoMeta";

import { Footer, Header } from "../../components";

const del_guide = () => {
  return (
    <>
      <SayyoMeta />
      <div className="relative pb-[264px] md720:pb-[173px] tall:pb-0">
        <Header.Green />

        {/** content */}
        <div className="mx-auto pl-[18px] pr-[18px] pt-[113px] pb-[40px] max-w-[1030px] box-content">
          <h4 className="mb-[34px] font-Roboto text-[28px] font-bold">
            Hướng dẫn Xóa Tài khoản​
          </h4>
          <p className="text-right">Cập nhật lần cuối: 01/09/2024​</p>
          <p className="text-[18px] font-light">
            Những Điều Quan Trọng Cần Biết Trước Khi Xóa Tài Khoản
            <br />
            Trước khi tiến hành xóa tài khoản, vui lòng xem xét các thông tin
            sau:
            <br />
            <br />
            1,Xóa Dữ Liệu:
            <br />
            <br />
            Việc xóa tài khoản sẽ xóa vĩnh viễn tất cả dữ liệu liên quan (ví dụ:
            thông tin hồ sơ, bài đăng, tin nhắn, lịch sử mua hàng trong ứng
            dụng).​
            <br />
            Dữ liệu đã xóa không thể khôi phục. Vui lòng sao lưu bất kỳ dữ liệu
            quan trọng nào trước khi tiếp tục.​
            <br />
            <br />
            2.Thông Tin Đăng Nhập:
            <br />
            <br />
            Sau khi xóa tài khoản, bạn sẽ không thể truy cập ứng dụng bằng bất
            kỳ phương thức đăng nhập nào, bao gồm Đăng nhập Apple, Đăng nhập
            Facebook hoặc Đăng nhập Google.​
            <br />
            Ngay cả khi bạn đăng ký lại, dữ liệu tài khoản trước đó của bạn sẽ
            không được khôi phục.​
            <br />
            <br />
            <strong className="text-[20px] font-bold">
              Cách Xóa Tài Khoản Của Bạn
            </strong>
            <br />
            <br />
            1.Đi tới Cài đặt Tài khoản:
            <br />
            <br />
            Mở ứng dụng, nhấn vào nút menu ở góc trên bên phải và điều hướng đến
            [Cài đặt].​
            <br />
            <br />
            2.Yêu cầu Xóa Tài khoản:
            <br />
            <br />
            Trong màn hình Cài đặt, nhấn vào nút [Rút].​
            <br />
            <br />
            3.Xác nhận Phương thức Đăng nhập:
            <br />
            <br />
            Chọn phương thức đăng nhập bạn đã sử dụng (Đăng nhập Apple, Đăng
            nhập Facebook hoặc Đăng nhập Google) và đăng nhập lại.​
            <br />
            <br />
            4.Nhập Mật khẩu và Xác nhận:
            <br />
            <br />
            Để xác nhận việc xóa, nhập mật khẩu của bạn và nhấn [Xác nhận Xóa
            Tài khoản].​
            <br />
            <br />
            5.Hoàn tất:
            <br />
            <br />
            Sau khi xác nhận, tài khoản của bạn sẽ bị xóa và bạn sẽ tự động đăng
            xuất. Việc xóa có thể mất đến 24 giờ để xử lý hoàn toàn.​
            <br />
            <br />
            <strong className="text-[20px] font-bold">Cần Hỗ trợ Thêm?</strong>
            <br />
            <br />
            Nếu bạn cần trợ giúp về việc xóa tài khoản, vui lòng liên hệ với đội
            ngũ hỗ trợ của chúng tôi:
            <br />
            <br />
            Email:{" "}
            <a
              href="mailto:cs.sayyo.viet@gmail.com"
              className="text-[#254DDD] underline"
            >
              cs.sayyo.viet@gmail.com
            </a>
            <br />
            Giờ làm việc: Thứ Hai - Thứ Sáu, 9:00 AM - 6:00 PM
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default del_guide;
