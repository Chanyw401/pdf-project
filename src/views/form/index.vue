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
        <div class="table-box-operate">
          <el-button type="primary" @click="add">
            新增
            <i class="btn-icon btn-icon-new-white el-icon--right"></i>
          </el-button>
          <el-button @click="delBatch">
            批量删除
            <i class="btn-icon btn-icon-delete el-icon--right"></i>
          </el-button>
        </div>
        <div class="table-box-title">银行管理列表</div>
      </div>
      <el-table ref="table" :data="tableObj.list" stripe>
        <el-table-column
          fixed="left"
          type="selection"
          width="55"
        ></el-table-column>
        <el-table-column
          prop="chineseName"
          label="银行中文名称"
          align="center"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="englishName"
          label="银行英文名称"
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
<!--    <el-dialog-->
<!--      :title="uploadBox.title"-->
<!--      :visible.sync="uploadBox.show"-->
<!--      :close-on-click-modal="false"-->
<!--      width="600px"-->
<!--      @opened="opened"-->
<!--    >-->
<!--      <div class="tx-center t-34">-->
<!--        <el-button type="primary" @click="submitUpload">确定</el-button>-->
<!--        <el-button @click="uploadBox.show = false">取消</el-button>-->
<!--      </div>-->
<!--    </el-dialog>-->
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
      tableObj:{}
    }
  },
  methods: {
    search() {
      this.$message('submit!')
    },
    reset() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    delBatch() {
      this.$message('submit!')
    },
    add() {
      this.$message('submit!')
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

.line{
  text-align: center;
}
</style>

