<template>
  <el-row>
    <el-upload
      ref="upload"
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :file-list="fileList"
      :on-success="handleAvatarSuccess">
      <img v-for="(item,index) in imageUrl" slot="trigger" :key="index" :src="item" class="avatar">
      <el-button slot="trigger" @click="buttonTrigger">上传主图</el-button>
  </el-upload>
  

  </el-row>
  
</template>

<script>
  export default {
    data() {
      return {
        fileList:[],
        // imageUrl: 'https://xcfs-test.xystatic.com/10099/shared_cgi/de01d029b56f48b78378a05952e29463_1568268597524.jpeg'
        imageUrl:[]
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        // console.log(res.data.download_url)
        this.imageUrl.push(URL.createObjectURL(file.raw));
      },
      buttonTrigger(){
        this.$refs['upload'].submit()
      }
    }
  }
</script>


<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>