<template>
    <v-app id="app" v-if="render">
        <el-container>
            <el-header style="display: flex">
                <div style="height: 100%; display: flex; align-items: center">
                    <v-alert color="deep-purple accent-4" dark style="margin: 0">博大同途</v-alert>
                </div>
                <el-menu :default-active="activeIndex"
                         class="zj-nav-menu"
                         mode="horizontal"
                         style="border-bottom: none; height: 100%; font-family: PingFang SC,Microsoft YaHei,Hiragino Sans GB,sans-serif;
                                font-size: 16px; font-weight: 700; width: 500px;"
                         text-color="#333333"
                         active-text-color="#009b74"
                         router>
                    <el-menu-item index="/">首页</el-menu-item>
                    <el-menu-item index="/person">个性精装</el-menu-item>
                    <el-menu-item index="/full">全屋软装</el-menu-item>
                    <el-menu-item index="/find">找设计师</el-menu-item>
                    <el-menu-item index="/watch">参观工地</el-menu-item>
                </el-menu>
                <div style="height: 100%; display: flex; align-items: center">
                    <v-btn depressed color="success">咨询电话：18106886608</v-btn>
                </div>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer style="font-family: PingFang SC,Microsoft YaHei,Hiragino Sans GB,sans-serif; padding-top: 30px; border-top: 1px solid #e1e1e1">
                <div style="width: 100%; margin-bottom: 10px">
                    <div style="width: 1200px; display: flex; align-items: center; justify-content: center">
                        <div style="display: block; padding-right: 90px; border-right: 1px solid #e1e1e1">
                            <div style="text-align: left;margin-bottom: 10px; color: rgb(153, 153, 153)">
                                公司地址
                            </div>
                            <img src="https://i.loli.net/2020/07/26/IlGMd5U7pWzfxTX.png" style="height: 250px;"/>
                        </div>
                        <div style="display: block; padding-left: 70px">
                            <div style="text-align: left; margin-left: 15px; color: rgb(153, 153, 153)">
                                官方微信
                            </div>
                            <img src="https://i.loli.net/2020/07/26/xpYesRy5DTkCgE2.jpg" style="height: 258px;"/>
                        </div>
                    </div>
                </div>
                <div style="color: #999999; font-size: 13px">
                    绍兴博大同途装饰工程有限公司 版权所有
                </div>
                <div style="color: #999999; font-size: 13px">
                    练习用网站，如有侵权立即删除
                </div>
            </el-footer>
        </el-container>
    </v-app>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                render: true,
                activeIndex: '/',
            }
        },
        mounted() {
            switch (this.$route.path) {
                case '/':
                    this.activeIndex = '/';
                    break;
                case '/person':
                    this.activeIndex = '/person';
                    break;
                case '/full':
                    this.activeIndex = '/full';
                    break;
                case '/find':
                    this.activeIndex = '/find';
                    break;
                case '/watch':
                    this.activeIndex = '/watch';
                    break;
                default:
                    this.$router.push('/');
            }

            window.addEventListener('resize', this.reload);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.reload);
        },
        methods: {
            reload() {
                // 重新渲染;
                this.render = false
                this.$nextTick(() => {
                    this.render = true;
                })
            }
        }
    }
</script>

<style>
    html, body, #app {
        width: 100%;
        height: 100%;
        margin: 0px;
        font-family: PingFang SC,Microsoft YaHei,Hiragino Sans GB,sans-serif;
    }

    .el-header, .el-footer {
        margin: 0 auto;
        text-align: center;
    }

    .el-main {
        padding: 0 !important;
    }
</style>

<style scoped>
    .zj-nav-menu {
        border: none;
        display: flex;
        display: -ms-flex;
        justify-content: space-between;
        -ms-flex-pack: justify;
        align-items: center;
        -ms-flex-align: center;
    }

    .el-menu-item:hover {
        color: #009b74 !important;
    }
</style>
