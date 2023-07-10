<script lang="ts" setup>
import { ref } from "vue";

// Danh sách các mục
const items = ref([
  {
    name: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    phone: "123456789",
    number: "11",
  },
  {
    name: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    phone: "123456789",
    number: "11",
  },
]);

// Hàm trả về kiểu dữ liệu CSS cho mỗi dòng <tr>
function getRowStyle(index: any) {
  return index % 2 === 0
    ? { backgroundColor: "#fff" }
    : { backgroundColor: "#f2f2f2" };
}
</script>
<template>
  <div class="home-content">
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link text-dark ps-0" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark"
          ><i class="fa-solid fa-chevron-right"></i
        ></a>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-dark" to="#"
          >Giám sát học tập</router-link
        >
      </li>
    </ul>
    <h2 class="home-content-title">Giám sát học tập</h2>

    <div class="home-content-search">
      <form class="form p-4">
        <div class="d-flex justify-content-between">
          <h4 class="home-content-title">Tìm kiếm phật tử</h4>
          <button class="home-search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div class="form-top d-flex">
          <div class="mb-3 col-3">
            <label for="exampleFormControlInput1" class="form-label">Tên</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div class="mb-3 col-3">
            <label for="exampleFormControlInput2" class="form-label"
              >Pháp danh</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput2"
            />
          </div>

          <div class="mb-3 col-3">
            <label for="exampleFormControlInput3" class="form-label"
              >Email</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput3"
            />
          </div>

          <div class="mb-3 col-3">
            <label for="exampleFormControlInput4" class="form-label"
              >Giới tính</label
            >
            <select class="form-select" id="exampleFormControlInput4">
              <option selected>Giới tính</option>
              <option value="1">Nam</option>
              <option value="2">Nữ</option>
              <option value="3">Khác</option>
            </select>
          </div>
        </div>
        <div class="d-flex">
          <div class="mb-3 col-3">
            <label for="exampleFormControlInput5" class="form-label"
              >Trạng thái phật tử</label
            >
            <select class="form-select" id="exampleFormControlInput5">
              <option selected>Trạng thái phật tử</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </form>
    </div>

    <div class="home-show mt-5 p-4">
      <div class="d-flex justify-content-between mb-5">
        <select class="form-select col-2">
          <option selected>Hiện thị 1 - 5 of 6</option>
          <option selected>Hiện thị 7 - 11 of 6</option>
        </select>
        <select class="form-select col-1 form-border">
          <option selected>Sắp xếp</option>
          <option selected>Tăng dần</option>
          <option selected>Giảm dần</option>
        </select>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th class="text-center">Phật tử</th>
            <th class="text-center">Ngày xuất gia</th>
            <th class="text-center">Số điện thoại</th>
            <th class="text-center">Số tuổi đạo trang đã tham gia</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in items"
            :key="index"
            :style="getRowStyle(index)"
          >
            <td class="text-center align-middle">
              <button class="home-table">
                <i class="bx bx-user"></i>
              </button>
            </td>
            <td class="text-left d-flex align-items-center home-border-info">
              <img
                src="@/assets/logo/user-profile-icon-free-vector.jpg"
                class="home-avatar"
                alt=""
              />
              <div class="home-info ps-3">
                <h5 class="home-info-name mb-0">{{ item.name }}</h5>
                <div class="home-info-email">{{ item.email }}</div>
              </div>
            </td>
            <td class="text-center align-middle"></td>
            <td class="text-center align-middle">{{ item.phone }}</td>
            <td class="text-center align-middle">{{ item.number }}</td>
            <td class="text-center align-middle">
              <button
                class="home-table"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i class="bx bx-edit-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header pb-0">
          <h3 class="modal-title model" id="exampleModalLabel">
            Cập nhập người dùng
          </h3>
        </div>
        <div class="modal-body pt-0">
          <div class="model-info mb-2">
            <img
              src="../../assets/logo//user-profile-icon-free-vector.jpg"
              class="model-avatar"
              alt=""
            />
            <p class="model-text">Ảnh đại diện người dùng</p>
            <label for="file" class="model-btn">Chọn ảnh</label>
            <input type="file" id="file" class="model-file" />
          </div>

          <div class="d-flex model-form">
            <div class="mb-3 model-group-form">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Học viên"
              />
            </div>
            <div class="mb-3 model-group-form">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Khoá học"
              />
            </div>
            <div class="mb-3 model-group-form">
              <input
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>

          <div class="d-flex model-form">
            <div class="mb-3 model-group-form">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Lớp học"
              />
            </div>
            <div class="mb-3 model-group-form">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Đã làm"
              />
            </div>
            <div class="mb-3 model-group-form">
              <input
                type="texy"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="LinkedIn"
              />
            </div>
          </div>
          <div class="d-flex model-form">
            <div class="mb-3 model-group-form">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Tên tài khoản"
              />
            </div>
            <div class="mb-3 model-group-form">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div class="mb-3 model-group-form">
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Mật khẩu"
              />
            </div>
          </div>

          <div class="d-flex model-form">
            <div class="mb-3 model-group-form">
              <textarea
                placeholder="Địa chỉ hiện tại"
                class="form-textarea"
                rows="4"
                cols="98"
              >
              </textarea>
            </div>
          </div>

          <div class="d-flex model-form">
            <div class="mb-3 model-group-form">
              <select class="form-select">
                <option selected>TỈnh/thành phố</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div class="mb-3 model-group-form">
              <select class="form-select">
                <option selected>Quận/huyện</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div class="mb-3 model-group-form">
              <select class="form-select">
                <option selected>Xã/phường</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>

          <div class="d-flex model-form">
            <div class="mb-3 model-group-form">
              <select class="form-select">
                <option selected>Giới tính</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div class="mb-3 model-group-form">
              <select class="form-select">
                <option selected>Công việc hiện tại</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div class="mb-3 model-group-form">
              <select class="form-select">
                <option selected>Thành viên</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Thoát
          </button>
          <button type="button" class="btn btn-primary">Lưu</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "bootstrap";
.home-content-title {
  font-weight: 400;
}
.home-content-search {
  background-color: #fff;
  border-radius: 10px;
}
.home-show {
  border-radius: 10px;
  background-color: #fff;
}
.form-top {
  gap: 15px;
}
.home-search {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  outline: none;
  background: #4cc41c;
  color: #fff;
}
.home-table {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  outline: none;
  border: none;
  background: #62c23c;
  color: #fff;
}
.home-avatar {
  width: 70px;
  height: 70px;
}
.home-border-info {
  border: none;
}
.modal-content {
  width: 876px !important;
  height: 655px;
  transform: translateY(-4px);
  overflow-y: scroll;
  margin: 0 auto;
}
.model-form {
  gap: 23px;
}
.model-group-form {
  width: 30%;
}
.model-avatar {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.model-file {
  visibility: hidden;
}
.model-btn {
  background: #02fdff;
  width: 100px;
  height: 33px;
  text-align: center;
  line-height: 33px;
}
.form-control,
.form-textarea,
.form-select {
  border: 1px solid #ccc;
  border-radius: 7px;
}
.col-1 {
  width: 10%;
}
.col-2 {
  width: 15%;
}
.col-3 {
  width: 24%;
}
.form-control:focus,
.form-select:focus {
  color: var(--bs-body-color);
  background-color: transparent;
  border-color: unset;
  outline: none;
  box-shadow: none;
}
tr,
td,
th,
.table {
  border: 1px solid #ccc;
}
.table > :not(caption) > * > * {
  border-bottom-width: inherit;
}
.table thead {
  background-color: #f2f2f2;
}

.table tbody tr:nth-child(odd) {
  background-color: #fff;
}
.form-border{
  border: none;
  color: red;
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: unset;
  }
}
</style>
