import {
  Breadcrumb,
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Pagination,
  Popconfirm,
  Radio,
  Row,
  Space,
  Table,
  Tag,
  Typography,
  Upload,
} from "antd";

import {
  SyncOutlined,
  ClockCircleOutlined,
  UploadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export default function MovieManagement() {
  const { register, handleSubmit, control, watch, setValue, reset } = useForm({
    defaultValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      maNhom: "GP01",
      ngayKhoiChieu: "",
      trangThaiChieu: true,
      hot: true,
      danhGia: "",
      hinhAnh: undefined,
    },
  });

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataEdit, setDataEdit] = useState(undefined);

  const columns = [
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      render: (key: string) => (
        <Typography.Paragraph className="w-[200px]" ellipsis={{ rows: 1 }}>
          {key}
        </Typography.Paragraph>
      ),
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (key: string) => (
        <div>
          <img className="w-[80px] h-[80px] rounded object-cover" src={key} />
        </div>
      ),
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      render: (key: string) => (
        <Typography.Paragraph className="w-[180px]" ellipsis={{ rows: 2 }}>
          {key}
        </Typography.Paragraph>
      ),
    },
    {
      title: "Ngày khởi chiếu",
      dataIndex: "ngayKhoiChieu",
      width: 140,
    },
    {
      title: "Đánh giá",
      dataIndex: "danhGia",
      render: (textDanhGia: string) => (
        <Typography className="w-[120px]">{textDanhGia}</Typography>
      ),
    },
    {
      title: "Hot",
      dataIndex: "hot",
      render: (isHot: boolean) => {
        return isHot ? <span className="text-xl">🔥</span> : <Tag>N/A</Tag>;
      },
    },
    {
      title: "Đang chiếu",
      dataIndex: "dangChieu",
      width: 140,
      render: (isShowing: boolean) => {
        return isShowing ? (
          <Tag icon={<SyncOutlined spin />} color="processing">
            Đang chiếu
          </Tag>
        ) : (
          <Tag>N/A</Tag>
        );
      },
    },
    {
      title: "Sắp chiếu",
      dataIndex: "sapChieu",
      width: 140,
      render: (isComing: boolean) => {
        return isComing ? (
          <Tag icon={<ClockCircleOutlined />} color="success">
            Sắp chiếu
          </Tag>
        ) : (
          <Tag>N/A</Tag>
        );
      },
    },
    {
      title: "Thao tác",
      render: (_: any, record: any) => (
        <Space size="small">
          <Popconfirm
            title="Xoá phim"
            description="Bạn có chắc chắn sẽ xoá phim này?"
            onConfirm={() => handleDelete(record)}
            okText={<span>OK</span>}
            cancelText="Huỷ"
          >
            <Button danger>Xoá</Button>
          </Popconfirm>
          <Button
            type="default"
            onClick={() => {
              setIsOpenModal(true);
              setValue("tenPhim", record.tenPhim);
              setValue("trailer", record.trailer);
              setValue("moTa", record.moTa);
              setValue("trangThaiChieu", record.dangChieu);
              setValue("hinhAnh", record.hinhAnh);
              setValue("danhGia", record.danhGia);
              setDataEdit(record);
            }}
          >
            Cập nhật
          </Button>
        </Space>
      ),
    },
  ];

  const handleDelete = (record: any) => {};

  const mockData = [
    {
      maPhim: 13767,
      tenPhim: "cướp biển caribe2",
      biDanh: "cuop-bien-caribe2",
      trailer: "https://www.youtube.com/watch?v=9fS7hoBVPnI",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/cuop-bien-caribe_gp04.jpg",
      moTa: 'Johny Depp trở lại màn ảnh rộng với vai gã cướp biển lưu manh huyền thoại Jack Sparrow trong phần phim mới "Pirates of the Caribbean: Salazar Báo Thù". Trong hành trình phiêu lưu, vận xui tiếp tục đeo bám Thuyền Trưởng Jack khi đám hồn ma thuỷ thủ chỉ huy bởi Thuyền Trưởng Salazar trốn thoát từ Tam Giác Quỷ muốn tiêu diệt tất cả cướp biển, đặc biệt là Jack. Chỉ có hi vọng sống sót khi tìm ra cây đinh ba Trident of Poseidon, Jack buộc phải hợp tác với  Carina Smyth (Kaya Scodelario), một nữ chiêm tinh xinh đẹp thông minh và Henry (Brenton Thwaites), tay thuỷ thủ trẻ cứng đầu của Học Viện Hải Quân Hoàng Gia. Cầm lái con tàu rách nát Dying Gull, Thuyền Trưởng Jack phải tìm cách đảo ngược số phận và bảo vệ mạng sống trước kẻ thù tàn bạo nhất gã từng đối mặt.',
      maNhom: "GP01",
      ngayKhoiChieu: "2024-01-30T00:00:00",
      danhGia: 9,
      hot: false,
      dangChieu: true,
      sapChieu: false,
    },
    {
      maPhim: 13769,
      tenPhim: "Người Vợ Cuối Cùng - Victo Vũ",
      biDanh: "nguoi-vo-cuoi-cung-victo-vu",
      trailer: "https://www.youtube.com/watch?v=ygvNCEbMusE",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/co-vo-cuoi-cung_gp04.jpg",
      moTa: "Sau sự kiện họp báo công bố dự án Người Vợ Cuối Cùng, đạo diễn Victor Vũ cùng ekip đã chính thức công bố trailer mới nhất chứa đựng đủ mọi cung bậc cảm xúc: lắng đọng với mối tình thanh mai trúc mã tuyệt đẹp của Linh và Nhân, phẫn nộ với mâu thuẫn về chuyện sinh con nối dõi tông đường của ba người vợ quan, và rồi choáng ngợp với hồi kết ly kỳ nhuốm màu đen tốiâ. \r\n",
      maNhom: "GP01",
      ngayKhoiChieu: "2024-01-30T00:00:00",
      danhGia: 10,
      hot: true,
      dangChieu: true,
      sapChieu: true,
    },
    {
      maPhim: 13772,
      tenPhim: "Chiếm đoạt tình ái",
      biDanh: "chiem-doat-tinh-ai",
      trailer: "https://www.youtube.com/watch?v=EazIfsjK5_A",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/chiem-doat_gp04.jpg",
      moTa: "Xem thêm thông tin tại: \r\n- Website CGV: https://www.cgv.vn/\r\n- Fanpage Facebook:  \r\n\r\n / cgvcinemavietnam  \r\n- Instagram:  \r\n\r\n / cgvcinemasvietnam  \r\n- Zalo: https://zalo.me/1884424922722396289\r\n#phimchieurap #cgv #phimhay #phimmoi #trailer #movie #cinemas #cgvvietnam\r\nTag: phim moi, phim hay chieu rap, trailer, phim hay nhat 2023, trailer phim chieu rap",
      maNhom: "GP01",
      ngayKhoiChieu: "2023-03-06T00:00:00",
      danhGia: 1,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
    {
      maPhim: 13794,
      tenPhim: "Dune: Part Two",
      biDanh: "dune-part-two",
      trailer: "https://www.youtube.com/watch?v=U2Qp5pL3ovA",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/dune-part-two_gp01.jpg",
      moTa: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
      maNhom: "GP01",
      ngayKhoiChieu: "2024-03-29T00:00:00",
      danhGia: 9,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
    {
      maPhim: 13795,
      tenPhim: "Kung Fu Panda 4",
      biDanh: "kung-fu-panda-4",
      trailer: "https://www.youtube.com/watch?v=_inKs4eeHiI",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/kung-fu-panda-4-2024_gp01.jpg",
      moTa: "After Po is tapped to become the Spiritual Leader of the Valley of Peace, he needs to find and train a new Dragon Warrior, while a wicked sorceress plans to re-summon all the master villains whom Po has vanquished to the spirit realm.",
      maNhom: "GP01",
      ngayKhoiChieu: "2024-04-03T15:05:42.953",
      danhGia: 7,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
    {
      maPhim: 13802,
      tenPhim: "EXHUMA: QUẬT MỘ TRÙNG MA",
      biDanh: "exhuma-quat-mo-trung-ma",
      trailer: "https://www.youtube.com/watch?v=7LH-TIcPqks",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/exhuma-quat-mo-trung-ma_gp01.jpg",
      moTa: "Hai pháp sư, một thầy phong thuỷ và một chuyên gia khâm liệm cùng hợp lực khai quật ngôi mộ bị nguyền rủa của một gia đình giàu có, nhằm cứu lấy sinh mạng hậu duệ cuối cùng trong dòng tộc. Bí mật hắc ám của tổ tiên được đánh thức.",
      maNhom: "GP01",
      ngayKhoiChieu: "2024-04-04T00:00:00",
      danhGia: 7,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
    {
      maPhim: 13803,
      tenPhim: "MUÔN VỊ NHÂN GIAN",
      biDanh: "muon-vi-nhan-gian",
      trailer: "https://www.youtube.com/watch?v=kU4yf_9yr8Y",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/muon-vi-nhan-gian_gp01.jpg",
      moTa: "Phim điện ảnh Muôn Vị Nhân Gian lấy bối cảnh tại một vùng quê nước Pháp năm 1885, xoay quanh mối tình lãng mạn giữa nữ đầu bếp Eugénie (Juliette Binoche) và Dodin (Benoît Magimel) - một chuyên gia ẩm thực với đam mê sáng tạo nên những món ăn trọn vẹn từ hương vị đến hình thức. Khởi nguồn từ tình yêu ẩm thực để cùng nhau tạo ra nhiều món ăn tinh tế và lộng lẫy trong suốt 20 năm, thu hút các thực khách từ khắp nơi trên thế giới đến thưởng thức, tình yêu đôi lứa dần nảy nở giữa Eugénie và Dodin. Tuy nhiên, Eugénie lại là một người phụ nữ yêu tự do và chưa sẵn sàng kết hôn với Dodin. Để chinh phục được trái tim của nàng, Dodin đã quyết định vào bếp, lần đầu tiên nấu ăn cho người mình yêu.",
      maNhom: "GP01",
      ngayKhoiChieu: "2024-04-04T00:00:00",
      danhGia: 6,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
    {
      maPhim: 13804,
      tenPhim: "NGƯỜI CHẾT TRỞ VỀ",
      biDanh: "nguoi-chet-tro-ve",
      trailer: "https://www.youtube.com/watch?v=OcWPUd11mr0",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/nguoi-chet-tro-ve_gp01.jpg",
      moTa: 'Bị dồn vào đường cùng, Lee Man Jae (Jo Jin Woong) phải bán cả tên của mình để tồn tại. Khi đứa con đầu lòng chuẩn bị chào đời, Man Jae quyết định thực hiện một phi vụ lớn cuối cùng, nhưng lại bị vướng vào vụ tham ô trị giá 100 tỉ won. Anh sống như một kẻ đã chết, cho đến một ngày kia, một chính trị gia họ Shim bí ẩn (Kim Hee Ae) đề nghị sẽ giúp anh lấy lại danh tính và cuộc đời mình. Lee Man Jae bắt đầu hành trình "trở về từ cõi chết", đồng thời lật mở những bí mật nhơ nhuốc của xã hội.',
      maNhom: "GP01",
      ngayKhoiChieu: "2024-04-04T00:00:00",
      danhGia: 8,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
    {
      maPhim: 13805,
      tenPhim: "NHỮNG NGƯỜI BẠN TƯỞNG TƯỢNG",
      biDanh: "nhung-nguoi-ban-tuong-tuong",
      trailer: "https://www.youtube.com/watch?v=SSeT4AMckbo",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/nhung-nguoi-ban-tuong-tuong_gp01.jpg",
      moTa: "Bộ phim xoay quanh một cô bé bất ngờ phát hiện ra mình có thể nhìn thấy những người bạn tưởng tượng của mọi người. Và cuộc hành trình bắt đầu khi cô bé sử dụng siêu năng lực của mình để giúp đỡ những người bạn tưởng tượng này tránh khỏi việc bị bỏ rơi và lãng quên bằng cách tìm kiếm, kết nối chúng với những đứa trẻ.",
      maNhom: "GP01",
      ngayKhoiChieu: "2024-04-15T00:00:00",
      danhGia: 9,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
    {
      maPhim: 13806,
      tenPhim: "THANH XUÂN 18x2: LỮ TRÌNH HƯỚNG VỀ EM",
      biDanh: "thanh-xuan-18x2-lu-trinh-huong-ve-em",
      trailer: "https://www.youtube.com/watch?v=8Pq08VsVUFk",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/thanh-xuan-18x2-lu-trinh-huong-ve-em_gp01.jpg",
      moTa: "Ký ức tình đầu ùa về khi Jimmy nhận được tấm bưu thiếp từ Ami. Cậu quyết định một mình bước lên chuyến tàu đến Nhật Bản gặp lại người con gái cậu đã bỏ lỡ 18 năm trước. Mối tình day dứt thời thanh xuân, liệu sẽ có một kết cục nào tốt đẹp khi đoàn tụ?",
      maNhom: "GP01",
      ngayKhoiChieu: "2024-04-18T00:00:00",
      danhGia: 8,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
  ];

  const hinhAnhValue = watch("hinhAnh");

  const previewImage = (file: File) => {
    return URL.createObjectURL(file);
  };

  const onSubmit = (formValues: any) => {
    console.log(formValues);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Breadcrumb
          items={[
            {
              title: "Trang chủ",
              path: "/admin",
            },
            {
              title: "Quản lý phim",
            },
          ]}
        />
        <Button
          type="primary"
          size="large"
          onClick={() => {
            setIsOpenModal(true);
            reset();
          }}
        >
          Thêm
        </Button>
      </div>
      <div className="mt-4 text-2xl">
        <h4>Danh sách phim</h4>
        <Table
          className="mt-2"
          columns={columns}
          rowKey={"taiKhoan"}
          dataSource={mockData}
          pagination={false}
          scroll={{ x: 1280 }}
        />
        <div className="flex float-end mt-4 pb-4">
          <Pagination defaultCurrent={1} total={20} pageSize={10} />
        </div>
      </div>
      <Modal
        title="Thêm phim"
        centered
        open={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
        footer={false}
      >
        <Form className="mt-4" onFinish={handleSubmit(onSubmit)}>
          <Row gutter={[18, 18]}>
            <Col span={24}>
              <label className="text-sm" htmlFor="">
                Tên phim
              </label>
              <Controller
                name="tenPhim"
                control={control}
                render={({ field }) => (
                  <Input
                    size="large"
                    className="mt-1"
                    placeholder="Tên phim"
                    {...field}
                  />
                )}
              />
            </Col>
            <Col span={24}>
              <label className="text-sm" htmlFor="">
                Trailer
              </label>
              <Input
                size="large"
                className="mt-1"
                placeholder="https://www.youtube.com"
                {...register("trailer")}
              />
            </Col>
            <Col span={24}>
              <label className="text-sm" htmlFor="">
                Mô tả
              </label>
              <Input.TextArea
                size="large"
                rows={4}
                className="mt-1"
                placeholder="Nhập mô tả..."
                name="moTa"
              />
            </Col>
            <Col span={24}>
              <Controller
                name="trangThaiChieu"
                control={control}
                render={({ field }) => {
                  return (
                    <Radio.Group {...field}>
                      <Radio value={true}>Đang chiếu</Radio>
                      <Radio value={false}>Sắp chiếu</Radio>
                    </Radio.Group>
                  );
                }}
              />
            </Col>
            <Col span={24}>
              <Controller
                control={control}
                name="hot"
                render={({ field }) => (
                  <Checkbox {...field} checked={field.value}>
                    Phim hot
                  </Checkbox>
                )}
              />
            </Col>
            <Col span={12}>
              <label className="text-sm" htmlFor="">
                Đánh giá
              </label>
              <Input
                size="large"
                type="number"
                max={10}
                className="mt-1"
                placeholder="0 - 10"
                name="danhGia"
              />
            </Col>
            <Col span={12}>
              <label className="text-sm" htmlFor="">
                Ngày khởi chiếu
              </label>
              <DatePicker
                className="mt-1 w-full"
                size="large"
                placeholder="Chọn ngày"
                format={"DD/MM/YYYY"}
              />
            </Col>
            <Col span={24}>
              <Controller
                name="hinhAnh"
                control={control}
                render={({ field: { onChange, ...filed } }) => {
                  return (
                    <Upload
                      beforeUpload={() => {
                        return false;
                      }}
                      {...filed}
                      showUploadList={false}
                      multiple={false}
                      onChange={({ file }) => onChange(file)}
                    >
                      <Button icon={<UploadOutlined />}>Upload hình</Button>
                    </Upload>
                  );
                }}
              />
              {hinhAnhValue && (
                <div className="mt-2">
                  <img
                    src={
                      typeof hinhAnhValue === "string"
                        ? hinhAnhValue
                        : previewImage(hinhAnhValue)
                    }
                    className="w-[100px] h-[100px] object-cover rounded"
                  />
                  <span
                    className="inline-block ml-3 cursor-pointer"
                    onClick={() => setValue("hinhAnh", undefined)}
                  >
                    <DeleteOutlined />
                  </span>
                </div>
              )}
            </Col>
            <Col span={24} className="text-end">
              <Button htmlType="submit" size="large" type="primary">
                Thêm phim
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}
