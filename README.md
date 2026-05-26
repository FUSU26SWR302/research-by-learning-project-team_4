# AI-Integrated Multi-Specialty Clinic Management System
## Hệ Thống Quản Lý Bệnh Viện Thông Minh Tích Hợp AI

---

# 1. Thành viên nhóm

| STT | Họ và Tên | Vai trò chính trong dự án | Phân công công việc |
| :---: | :--- | :--- | :--- |
| 1 | **Nguyễn Mạnh Cường** | Project Lead | Thiết kế kiến trúc hệ thống, phát triển Core API, tích hợp AI Diagnosis Support và Prescription Safety, quản lý tiến độ dự án. |
| 2 | **Lê Thị My Sương** | Frontend Developer | Phát triển giao diện Web/Mobile, tối ưu UI/UX, tích hợp QR Scanner cho Check-in bệnh nhân. |
| 3 | **Hồ Hữu Tín** | Business Analyst / QA | Phân tích yêu cầu hệ thống, viết tài liệu SRS, xây dựng Use Case, viết Test Case và kiểm thử hệ thống. |
| 4 | **Nguyễn Huy Hoàng** | Backend Developer | Thiết kế cơ sở dữ liệu, xây dựng hệ thống phân quyền RBAC, quản lý hàng đợi khám bệnh. |
| 5 | **Phan Đình Bản** | Backend Developer | Xây dựng hệ thống hồ sơ bệnh án điện tử (EMR), quản lý dữ liệu bệnh nhân và thanh toán. |

---

# 2. Tổng quan dự án

## 2.1. Giới thiệu hệ thống

Trong bối cảnh chuyển đổi số ngành y tế đang phát triển mạnh mẽ, nhiều bệnh viện và phòng khám tại Việt Nam vẫn còn sử dụng các quy trình thủ công như:

- Hồ sơ giấy tờ rời rạc
- Đặt lịch khám trực tiếp
- Quản lý dữ liệu phân tán
- Thời gian chờ khám kéo dài
- Thiếu kết nối giữa bệnh nhân và bác sĩ

Để giải quyết các vấn đề trên, nhóm phát triển đề tài:

# **AI-Integrated Multi-Specialty Clinic Management System**  
## *(Smart Hospital Management System)*

Hệ thống được xây dựng nhằm số hóa toàn bộ quy trình khám chữa bệnh từ:

- Tiếp nhận bệnh nhân
- Đặt lịch khám
- QR Check-in
- Quản lý hàng chờ
- Hồ sơ bệnh án điện tử (EMR)
- Kê đơn thuốc
- Thanh toán viện phí
- Dashboard & báo cáo thống kê

Mục tiêu chính của hệ thống:

- Tối ưu hóa quy trình khám chữa bệnh
- Giảm tải công việc thủ công
- Nâng cao trải nghiệm bệnh nhân
- Tăng hiệu quả vận hành bệnh viện
- Ứng dụng AI vào y tế thông minh

---

## 2.2. Lý do chọn đề tài

### Nhu cầu thực tế cao

Người dùng hiện nay có nhu cầu:

- Đặt lịch khám trực tuyến
- Theo dõi hồ sơ sức khỏe online
- Nhận kết quả xét nghiệm từ xa
- Thanh toán online không dùng tiền mặt

Hệ thống giúp giảm thời gian chờ và tăng tính tiện lợi cho bệnh nhân.

### Tính ứng dụng rộng

Hệ thống có thể triển khai cho:

- Phòng khám tư nhân
- Bệnh viện đa khoa
- Trung tâm y tế
- Chuỗi phòng khám chuyên khoa

### Giá trị học thuật

Đề tài bao gồm nhiều kỹ thuật phần mềm hiện đại:

- RBAC (Role-Based Access Control)
- EMR (Electronic Medical Record)
- RESTful API
- Queue Management System
- QR Check-in
- AI Clinical Decision Support
- Sentiment Analysis

### Khả năng tích hợp AI

AI được tích hợp nhằm:

- Gợi ý chuyên khoa phù hợp
- Hỗ trợ chẩn đoán sơ bộ
- Hỗ trợ kê đơn an toàn
- Cảnh báo tương tác thuốc
- Phân tích phản hồi bệnh nhân

---

# 3. Phạm vi hệ thống

Hệ thống phục vụ 5 nhóm người dùng chính:

| Tác nhân | Vai trò |
|---|---|
| Patient | Bệnh nhân sử dụng dịch vụ khám chữa bệnh |
| Doctor | Bác sĩ khám và điều trị |
| Receptionist | Nhân viên tiếp nhận và điều phối |
| Admin | Quản trị hệ thống |
| AI Service | Dịch vụ AI hỗ trợ phân tích |

---

# 4. Chức năng hệ thống

# 4.1. Chức năng dành cho Bệnh nhân (Patient)

## Xác thực tài khoản

- Đăng ký tài khoản
- Đăng nhập bằng Email / Google
- Xác thực Email, SĐT hoặc VNeID
- Quên mật khẩu và đặt lại mật khẩu

## Hồ sơ cá nhân

- Xem và chỉnh sửa thông tin cá nhân
- Quản lý bảo hiểm y tế
- QR cá nhân để Check-in nhanh

## Đặt lịch khám

- Xem danh sách bác sĩ và khoa khám
- Đặt lịch khám online
- Xem và hủy lịch hẹn
- Theo dõi trạng thái lịch khám theo thời gian thực

## Hồ sơ bệnh án

- Xem lịch sử khám bệnh
- Xem đơn thuốc
- Xem kết quả xét nghiệm
- Tải hồ sơ bệnh án PDF

## Thanh toán

- Thanh toán viện phí online
- Xem lịch sử giao dịch

## Thông báo

- Nhắc lịch khám
- Nhắc uống thuốc
- Thông báo kết quả xét nghiệm
- Hỗ trợ Email & In-app Notification

## Đánh giá dịch vụ

- Đánh giá bác sĩ
- Gửi phản hồi chất lượng dịch vụ

---

# 4.2. Chức năng dành cho Bác sĩ (Doctor)

## Quản lý lịch khám

- Xem lịch làm việc theo ngày/tuần
- Xác nhận hoặc hủy lịch khám
- Tạo lịch khám cá nhân
- Quản lý trạng thái lịch hẹn

## Quản lý bệnh án

- Xem hồ sơ bệnh nhân
- Cập nhật kết quả khám
- Upload kết quả xét nghiệm
- Kê đơn thuốc

## Hỗ trợ AI

- AI gợi ý chẩn đoán
- AI phân tích triệu chứng
- AI hỗ trợ kê đơn an toàn
- AI cảnh báo tương tác thuốc

## Dashboard

- Thống kê bệnh nhân
- Biểu đồ kết quả khám
- Theo dõi lịch khám hôm nay

---

# 4.3. Chức năng dành cho Lễ tân (Receptionist)

## Tiếp nhận bệnh nhân

- Tạo hồ sơ bệnh nhân
- Xác nhận lịch khám
- QR Check-in

## Quản lý thanh toán

- Tạo hóa đơn viện phí
- In hóa đơn
- Xác nhận thanh toán

## Quản lý vận hành

- Điều phối phòng khám
- Quản lý hàng chờ khám bệnh

---

# 4.4. Chức năng dành cho Quản trị viên (Admin)

## Quản lý người dùng

- Quản lý tài khoản
- Reset mật khẩu
- Khóa/Mở tài khoản
- Quản lý nhân sự hệ thống

## Phân quyền RBAC

- Tạo Role
- Gán Permission
- Phân quyền tài khoản

## Quản lý bệnh viện

- Quản lý bác sĩ
- Quản lý khoa khám
- Quản lý phòng khám

## Dashboard & Báo cáo

- Thống kê số lượng bệnh nhân
- Báo cáo doanh thu
- Theo dõi hoạt động hệ thống

## Audit Logs

- Theo dõi lịch sử thao tác
- Kiểm tra hoạt động người dùng

---

# 4.5. Chức năng AI

## AI Chatbot

- Trả lời FAQ
- Hướng dẫn đặt lịch khám
- Hỗ trợ tra cứu thông tin

## Smart Recommendation

- Gợi ý khoa khám theo triệu chứng
- Gợi ý bác sĩ phù hợp

## AI Health Analysis

- Phân tích triệu chứng
- Cảnh báo nguy cơ sức khỏe
- Hỗ trợ bác sĩ chẩn đoán

## AI Automation

- Gợi ý khung giờ khám
- Nhắc lịch tái khám
- Nhắc uống thuốc
- Phân loại mức độ ưu tiên bệnh nhân
- Phân tích phản hồi bệnh nhân

---

# 5. Quản lý tiến độ công việc (Jira)

Toàn bộ task của dự án được quản lý theo mô hình Agile/Scrum.

## Jira Board

🔗 [Nhấn vào đây để truy cập Jira Board](https://ngmanhcuong300906.atlassian.net/jira/software/projects/SCRUM/boards/1?jql=assignee%20%3D%20empty)

---

## Quy trình Sprint

```text
Backlog
   ↓
To Do
   ↓
In Progress
   ↓
Code Review
   ↓
Testing
   ↓
Done
```

Mỗi task đều được:

- Gán cho từng thành viên
- Theo dõi deadline
- Kiểm thử trước khi hoàn thành
- Review code theo Sprint

---

# 6. Thiết kế giao diện & Front-end

## Figma Design

🔗 [Nhấn vào đây để xem thiết kế Figma](https://www.figma.com/design/6V9DorJbuMl9s1RsRChfE9/Untitled?node-id=0-1&p=f&t=UC3FtmaVzKCceyE1-0)

---

# 6.1. Cấu trúc thư mục Front-end

```text
frontend/
├── public/
│   ├── images/
│   ├── icons/
│   └── qr/
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── tables/
│   │   ├── modals/
│   │   └── qr-scanner/
│   │
│   ├── views/
│   │   ├── patient/
│   │   ├── doctor/
│   │   ├── receptionist/
│   │   └── admin/
│   │
│   ├── services/
│   │   ├── api/
│   │   ├── auth/
│   │   ├── ai-services/
│   │   └── notifications/
│   │
│   ├── store/
│   │   ├── auth/
│   │   ├── patient/
│   │   ├── appointment/
│   │   └── queue/
│   │
│   ├── hooks/
│   ├── routes/
│   ├── layouts/
│   ├── utils/
│   ├── constants/
│   └── assets/
│
├── package.json
└── README.md
```

---

# 7. Công nghệ sử dụng

| Thành phần | Công nghệ |
|---|---|
| Frontend | ReactJS / NextJS |
| Backend | NodeJS / ExpressJS |
| Database | MySQL / PostgreSQL |
| Authentication | JWT / OAuth2 |
| AI Integration | OpenAI API / Machine Learning |
| State Management | Redux Toolkit |
| UI Framework | TailwindCSS / Material UI |
| Realtime | Socket.IO |
| Cloud Storage | Firebase / AWS S3 |
| Version Control | GitHub |

---

# 8. So sánh với các hệ thống tương tự

| Tính năng | Practo | Hello Bacsi | Hệ thống nhóm |
|---|---|---|---|
| Đặt lịch khám | ✅ | ✅ | ✅ |
| Hồ sơ bệnh án | ✅ | Hạn chế | ✅ |
| AI Chatbot | Hạn chế | ✅ | ✅ |
| AI hỗ trợ chẩn đoán | ❌ | Hạn chế | ✅ |
| RBAC | ❌ | ❌ | ✅ |
| Quản lý hàng chờ | ❌ | ❌ | ✅ |
| QR Check-in | ❌ | ❌ | ✅ |
| Dashboard Admin | Hạn chế | ❌ | ✅ |
| Tối ưu cho bệnh viện Việt Nam | Chưa | Có | Có |

---

# 9. Kết luận

**AI-Integrated Multi-Specialty Clinic Management System** là nền tảng quản lý bệnh viện hiện đại giúp số hóa toàn bộ quy trình khám chữa bệnh và tích hợp AI nhằm tối ưu hóa vận hành bệnh viện.

Hệ thống mang lại:

- Quy trình khám chữa bệnh thông minh
- Hồ sơ bệnh án điện tử tập trung
- AI hỗ trợ bác sĩ
- Nâng cao trải nghiệm bệnh nhân
- Tăng hiệu suất vận hành bệnh viện

Trong tương lai, hệ thống có thể mở rộng với:

- Telemedicine
- AI Deep Diagnosis
- IoT Medical Devices
- National Healthcare Integration
- Smart Healthcare Analytics
