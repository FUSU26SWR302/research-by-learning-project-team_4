

# AI-Integrated Multi-Specialty Clinic Management System (Smart Hospital Management System)

Dự án phần mềm quản lý bệnh viện thông minh tích hợp Trí tuệ nhân tạo, giúp số hóa toàn bộ quy trình từ khâu tiếp đón bệnh nhân, lâm sàng đến quản trị vận hành thực tế.

## 1. Thành viên nhóm

| STT | Họ và Tên | Vai trò chính trong dự án | Phân công công việc |
| :---: | :--- | :--- | :--- |
| 1 | **Nguyễn Mạnh Cường** | Project Lead | Thiết kế kiến trúc hệ thống, phát triển Core API, tích hợp dịch vụ AI (Diagnosis Support, Prescription Safety). |
| 2 | **Lê Thị My Sương** | Frontend Developer | Phát triển giao diện Web/Mobile, tối ưu hóa UI/UX, tích hợp QR Scanner (Check-in). |
| 3 | **Hồ Hữu Tín** | Business Analyst / QA | Đặc tả yêu cầu hệ thống (SRS), phân tích Use Case (Actors), viết kịch bản kiểm thử (Test cases). |
| 4 | **Nguyễn Huy Hoàng** | BackEnd Developer | Thiết lập cơ sở dữ liệu, quản lý phân quyền hệ thống (RBAC), quản lý hàng đợi phòng khám. |
| 5 | **Phan Đình Bản** | BackEnd Developer | Thiết lập cơ sở dữ liệu, quản lý phân quyền hệ thống (RBAC), quản lý bệnh án điện tử. |

## 2. Tổng quan Dự án

### 2.1. Phân hệ Nghiệp vụ cốt lõi (Business Scope)

* **Số hóa quy trình lâm sàng:** Tự động hóa toàn bộ luồng vận hành từ Tiếp đón (Receptionist), Khám bệnh & Kê đơn (Doctor) cho đến xuất hóa đơn viện phí.
* **Vận hành & Hàng đợi:** Bệnh nhân đặt lịch trực tuyến, check-in nhanh tại chỗ bằng mã QR cá nhân và được điều phối tự động vào hàng đợi (Waiting Queue) của các phòng chức năng.
* **Quản trị & Hồ sơ (EMR):** Quản lý hồ sơ bệnh án điện tử tập trung, phân quyền truy cập chặt chẽ giữa các vai trò, quản lý danh mục phòng ban và xuất báo cáo doanh thu đa chiều.

### 2.2. Hàm lượng Nghiên cứu Khoa học & Công nghệ (Research Depth)

* **Hệ thống Gợi ý chuyên khoa (Smart Triage):** Ứng dụng AI phân tích triệu chứng ban đầu do người dùng nhập vào để tự động đề xuất chuyên khoa lâm sàng và bác sĩ phù hợp nhất.
* **Trợ lý quyết định lâm sàng (Clinical Decision Support):** Tích hợp mô hình AI hỗ trợ bác sĩ đối chiếu lịch sử bệnh lý, đưa ra gợi ý chẩn đoán sơ bộ và cảnh báo tương tác thuốc an toàn trước khi kê đơn.
* **Kiểm soát Truy cập Đa vai trò (Role-Based Access Control - RBAC):** Thiết lập hệ thống phân quyền chuyên sâu trong môi trường y tế, bảo mật dữ liệu bệnh án nhạy cảm và ghi lại nhật ký vận hành (Audit Logs).
* **Phân tích dữ liệu & Phản hồi:** Tự động hóa việc phân tích dữ liệu phản hồi của bệnh nhân (Sentiment Analysis) để đánh giá hiệu suất của bác sĩ và chất lượng dịch vụ bệnh viện.

## 3. Quản lý Tiến độ Công việc (Jira)

Toàn bộ các task của dự án được quản lý theo mô hình Agile/Scrum và phân chia theo từng tuần (Sprint).

* **Đường dẫn Jira Board:** [Nhấn vào đây để truy cập Jira Board] https://ngmanhcuong300906.atlassian.net/jira/software/projects/SCRUM/boards/1?jql=assignee%20%3D%20empty
* **Quy trình hoạt động:** Mỗi task đều được gắn (assign) cho từng thành viên với các trạng thái rõ ràng (To Do -> In Progress -> Review -> Done).

## 4. Thiết kế Giao diện & Kiến trúc Front-end

* **Không gian thiết kế UI/UX (Figma):** [Nhấn vào đây để xem thiết kế Figma]https://www.figma.com/design/6V9DorJbuMl9s1RsRChfE9/Untitled?node-id=0-1&p=f&t=UC3FtmaVzKCceyE1-0
* **Cấu trúc thư mục Front-end:**

```text
frontend/
├── public/          # Tài nguyên tĩnh, logo y tế, icon phòng khám
└── src/
    ├── components/  # UI component dùng chung (Button, Modal, Table, QR-Scanner...)
    ├── views/       # Các màn hình chính chia theo Role (Patient, Doctor, Receptionist, Admin...)
    ├── services/    # Cấu hình gọi API, kết nối dịch vụ AI (Diagnosis, Symptoms Analysis)
    ├── store/       # Quản lý State của ứng dụng (Hồ sơ bệnh nhân, Hàng đợi khám bệnh)
    └── utils/       # Các hàm hỗ trợ định dạng (Đơn thuốc, Hóa đơn viện phí, Ngày tháng)
├── package.json
