<template>
  <div class="table-page">
    <div class="table-search-box">
      <el-form :inline="true" :model="searchData" @submit.native.prevent>
        <el-form-item label="银行中文名称：">
          <el-input
            v-model="searchData.chineseName"
            maxlength="100"
            placeholder="请输入"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="search('search')">查 询</el-button>
          <el-button @click="reset">重 置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-box">
      <div class="table-box-head">
        <div class="table-box-title">用户列表</div>
        <div class="table-box-operate">
          <el-button type="primary" @click="add">
            新增
          </el-button>
          <el-button @click="delBatch">
            批量删除
          </el-button>
        </div>

      </div>
      <el-table ref="table" :data="tableObj.list" stripe>
        <el-table-column
          fixed="left"
          type="selection"
          width="55"
        ></el-table-column>
        <el-table-column
        type="index"
        label="序号"
        align="center"
        >

        </el-table-column>
        <el-table-column
          prop="code"
          label="账号"
          align="center"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          align="center"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column label="操作" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            <i
              class="btn-icon btn-icon-edit"
              title="编辑"
              @click="edit(scope.row)"
            ></i>
            <i
              class="btn-icon btn-icon-delete"
              title="删除"
              @click="del([scope.row.id])"
            ></i>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
<!--      <table-page-->
<!--        :current-page.sync="searchData.pageNum"-->
<!--        :page-size.sync="searchData.pageSize"-->
<!--        :total="tableObj.total"-->
<!--        :change="search"-->
<!--      ></table-page>-->
    </div>
    <!-- 案例数据弹框 -->
    <el-dialog
      :title="uploadBox.title"
      :visible.sync="uploadBox.show"
      :close-on-click-modal="false"
      width="600px"
      @opened="opened"
    >
      <el-form
        ref="uploadBox"
        :model="uploadBox.data"
        :rules="uploadBox.rules"
        label-width="150px"
      >
        <el-form-item label="账号：" prop="code">
          <el-input
            v-model="uploadBox.data.code"
            placeholder="请输入"
            maxlength="100"
          ></el-input>
        </el-form-item>
        <el-form-item label="姓名：" prop="name">
          <el-input
            v-model="uploadBox.data.name"
            placeholder="请输入"
            maxlength="100"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            v-model="uploadBox.data.password"
            placeholder="请输入"
            maxlength="100"
          ></el-input>
        </el-form-item>

      </el-form>

      <div class="tx-center t-34">
        <el-button type="primary" @click="submitUpload">确定</el-button>
        <el-button @click="uploadBox.show = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchData:{},
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableObj:{
        list:[
          {name:'1',code:'YG001'},
          {name:'2',code:'YG002'},
          {name:'3',code:'YG003'},
          {name:'4',code:'YG004'},
          {name:'5',code:'YG005'},
        ]
      },
      uploadBox: {
        show: false,
        title: '修改用户',
        data: {},
        rules: {
          code: [
            {
              required: true,
              message: "账号不能为空",
              trigger: ["blur", "change"]
            }
          ],
          name: [
            {
              required: true,
              message: "账号不能为空",
              trigger: ["blur", "change"]
            }
          ],
          password: [
            {
              required: true,
              message: "密码不能为空",
              trigger: ["blur", "change"]
            }
          ]
        }
      },
    }
  },
  methods: {
    search() {
      this.$message('submit!')
    },
    opened() {},
    submitUpload(){
      this.$refs.uploadBox.validate((valid,field)=>{
        if (valid) {
          this.$axios
            .post(url, data, {
              loading: true
            })
            .then(() => {
              this[ref].show = false;
              if (!this[ref].data.id) {
                this.searchData.pageNum = 1;
              }
              this.$message.success(msg)
              this.search();
            });
        } else {
          let firstField;
          for (let key in field) {
            firstField = field[key];
            break;
          }
         this.$message.error(firstField[0].message)

          return false;
        }
      })

    },
    reset() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },

    add() {
      this.uploadBox.title = '新增用户'
      this.uploadBox.show =true
    },
    edit(){
      this.uploadBox.title = '修改用户'
      this.uploadBox.show =true
    },
    delBatch() {
      let select = this.$refs.table.selection;
      let selectIds = [];
      select.forEach(item => {
        selectIds.push(item.id);
      });
      this.del(selectIds);
    },
    del(ids) {
      if (ids.length) {
        this.$confirm('确定要删除吗？','删除',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios
            .post(
              "/admin/dp-notice/del",
              {
                ids: ids
              },
              {
                loading: true
              }
            )
            .then(() => {
              this.search();
              this.$message.success("删除成功！")

            });
        });
      } else {
        this.$message({
          type: "warning",
          message: "请选择一条或多条数据！"
        });

      }
    },
    submit(url, ref, data, msg) {
      //判断死否全为空格
      if (this.uploadBox.data.englishName.match(/^\s+$/)) {
        this.$tool.msg({ type: "warning", message: "银行英文名不能为空" });
        return;
      }
      this.$refs[ref].validate((valid, field) => {
        if (valid) {
          this.$axios
            .post(url, data, {
              loading: true,
            })
            .then(() => {
              this[ref].show = false;
              if (!this[ref].data.id) {
                this.searchData.pageNum = 1;
              }
              this.search();
              this.$tool.msg({
                type: "success",
                message: msg,
              });
            });
        } else {
          let firstField;
          for (let key in field) {
            firstField = field[key];
            break;
          }
          this.$tool.msg({
            type: "error",
            message: firstField[0].message,
          });
          return false;
        }
      });
    },

  }
}
</script>

<style scoped lang="scss">
.table-page{
  padding: 36px 16px;
}
.table-box{
  padding: 0 20px;
}
.table-search-box{
  border-bottom: 1px solid rgba(222, 230, 248, 0.5);
}
.table-box-head{
  margin-top: 10px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}
.table-box-title{
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  letter-spacing: 1.5px;
  line-height: 32px;
}

.line{
  text-align: center;
}
</style>

