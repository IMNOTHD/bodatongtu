<template>
  <div style="overflow: hidden">
    <div style="width: 1200px; margin: 0 auto;">
      <div style="width: 100%; text-align: center">
        <div
            style="font-size: 22px; text-align: center; color: rgb(51, 51, 51); margin-top: 56px; height: 40px; width: 100%">
          找设计师
        </div>

        <div style="font-size: 14px; text-align: center; height: 30px; width: 100%; color: rgb(153, 153, 153)">
          千名优秀设计师等你挑
        </div>

        <div style="width: 1200px; margin: 20px auto 0;">
          <el-row type="flex" justify="space-around">
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <v-img :src="require('@/assets/daipengfei.jpg')" height="450px"></v-img>
                <div style="text-align: center; width: 100%">
                  <div style="padding: 14px">
                    <div style="color: rgb(51, 51, 51)">戴鹏飞
                      <!--
                        <div style="color: rgb(117, 117, 117); display: inline-block; margin-left: 10px; font-size: 13px;">
                              设计师
                        </div>
                      </div>
                      <div style="color: rgb(117, 117, 117); margin-top: 10px; font-size: 13px">预约人数：
                          <div style="color: #ff9000; display: inline-block">0</div>
                      -->
                    </div>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <v-img :src="require('@/assets/suyicheng.jpg')" height="450px"></v-img>
                <div style="text-align: center; width: 100%">
                  <div style="padding: 14px">
                    <div style="color: rgb(51, 51, 51)">苏义成</div>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <v-img :src="require('@/assets/yingshujian.jpg')" height="450px"></v-img>
                <div style="text-align: center; width: 100%">
                  <div style="padding: 14px">
                    <div style="color: rgb(51, 51, 51)">应书剑</div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "find",
  mounted() {
    document.title = "找设计师 - 博大同途";
  }
}
</script>

<style scoped>

</style>
