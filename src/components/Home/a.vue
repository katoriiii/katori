import axios from 'axios';
<template>
    <div>
      <h2>Phật Tử</h2>
      <ul>
        <li v-for="phatTu in phatTuList" :key="phatTu.id">
          {{ phatTu.name }}
        </li>
      </ul>
  
      <h2>Chùa</h2>
      <ul>
        <li v-for="chua in chuaList" :key="chua.id">
          {{ chua.name }}
        </li>
      </ul>
  
      <h2>Đạo Tràng</h2>
      <ul>
        <li v-for="daoTrang in daoTrangList" :key="daoTrang.id">
          {{ daoTrang.name }}
        </li>
      </ul>
  
      <h2>Đơn Đăng Ký</h2>
      <ul>
        <li v-for="donDangKy in donDangKyList" :key="donDangKy.id">
          {{ donDangKy.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        phatTuList: [],
        chuaList: [],
        daoTrangList: [],
        donDangKyList: [],
      };
    },
    mounted() {
      this.getPhatTuList();
      this.getChuaList();
      this.getDaoTrangList();
      this.getDonDangKyList();
    },
    methods: {
      getPhatTuList() {
        axios.get('/api/phattu')
          .then(response => {
            this.phatTuList = response.data;
          })
          .catch(error => {
            console.error('Lỗi khi lấy danh sách Phật Tử:', error);
          });
      },
      getChuaList() {
        axios.get('/api/chua')
          .then(response => {
            this.chuaList = response.data;
          })
          .catch(error => {
            console.error('Lỗi khi lấy danh sách Chùa:', error);
          });
      },
      getDaoTrangList() {
        axios.get('/api/daotrang')
          .then(response => {
            this.daoTrangList = response.data;
          })
          .catch(error => {
            console.error('Lỗi khi lấy danh sách Đạo Tràng:', error);
          });
      },
      getDonDangKyList() {
        axios.get('/api/dondangky')
          .then(response => {
            this.donDangKyList = response.data;
          })
          .catch(error => {
            console.error('Lỗi khi lấy danh sách Đơn Đăng Ký:', error);
          });
      },
    },
  };
  </script>
  