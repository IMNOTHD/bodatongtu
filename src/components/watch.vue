<template>
  <div style="overflow: hidden">
    <div style="width: 1200px; margin: 0 auto;">
      <div style="width: 100%; text-align: center">
        <div
            style="font-size: 22px; text-align: center; color: rgb(51, 51, 51); margin-top: 56px; height: 40px; width: 100%">
          参观工地
        </div>

        <div style="font-size: 14px; text-align: center; height: 30px; width: 100%; color: rgb(153, 153, 153)">
          大量工地待你参观
        </div>

        <div style="width: 1200px; margin: 20px auto 0;">
          <el-row type="flex" justify="space-around">
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <v-img :src="require('@/assets/gongdi-1.jpg')" height="450px"></v-img>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <v-img :src="require('@/assets/gongdi-2.jpg')" height="450px"></v-img>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <v-img :src="require('@/assets/gongdi-3.jpg')" height="450px"></v-img>
              </el-card>
            </el-col>
          </el-row>

          <el-row type="flex" justify="space-around" style="margin-top: 50px">
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <v-img :src="require('@/assets/gongdi-4.jpg')" height="450px"></v-img>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <v-img :src="require('@/assets/gongdi-5.jpg')" height="450px"></v-img>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <v-img :src="require('@/assets/gongdi-6.jpg')" height="450px"></v-img>
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
  name: "watch",
  mounted() {
    document.title = "参观工地 - 博大同途";
  }
}
</script>

<style scoped>

</style>
