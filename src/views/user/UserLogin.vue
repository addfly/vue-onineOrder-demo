<template>
  <div>
    <img
      src="../../../public/首页.jpg"
      alt=""
      style="max-width:100%;height:auto"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />

      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Form, Field, Button, Toast } from "vant";
import axios from "axios";
export default {
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [Toast.name]: Toast
  },
  data() {
    return {
      phone: "",
      password: "",
      username: "",
      rate: 0
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      Toast.loading({
        message: "加载中......",
        forbidClick: true
      });
      axios
        .post("/api/users/login", {
          phone: this.phone,
          password: this.password
        })
        .then(res => {
          console.log(res);
          Toast.success(res.status == 200 ? "登陆成功，跳转中..." : "未知错误");
        })
        .catch(err => {
          console.log(err);
          Toast.fail();
        });
    }
  }
};
</script>

<style lang="scss"></style>
