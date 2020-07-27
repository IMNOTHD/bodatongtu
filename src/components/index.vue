<template>
    <div style="overflow: hidden">
        <el-carousel indicator-position="none">
            <el-carousel-item v-for="item in carouselPic" :key="item">
                <el-image
                        fit="none"
                        style="height: 450px;"
                        :src="item"
                        class="swipe-image">
                </el-image>
            </el-carousel-item>
        </el-carousel>

        <div style="display: flex; width: 100%; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column;
                    -webkit-box-align: center; -ms-flex-align: center; align-items: center; background-color: #f5f5f5; min-width: 1250px;">
            <div style="margin: 0 auto;">
                <el-card v-for="(item, index) in navObject" :key="index" style="display: inline-flex; margin: 40px 5px 50px; background-color: white; padding: 20px; border-radius: 10px;
                                                        text-align: center; align-items: center; justify-content: center; cursor: pointer; width: 190px; height: 100px;
                                                        font-family: PingFang SC,Microsoft YaHei,Hiragino Sans GB,sans-serif;"
                         shadow="hover">
                    <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                        <div style="display: block;">
                            <i class="iconfont" :class="item.icon"
                               style="font-size: 36px; display: block; color: #a1a1a1;"></i>
                            <span style="display: block; font-size: 16px; color: #646464; margin-top: 2px">{{item.name}}</span>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>

        <div style="width: 100%; min-width: 1200px">
            <div style="font-size: 22px; text-align: center; color: rgb(51, 51, 51); margin-top: 56px; height: 80px; width: 100%">
                个性化定制精装
            </div>

            <div style="align-items: center; text-align: center">
                <el-radio-group v-model="activeName" fill="#ff9000">
                    <el-radio-button label="0" style="margin: 0 80px">A4套餐</el-radio-button>
                    <el-radio-button label="1" style="margin: 0 80px">A6套餐</el-radio-button>
                </el-radio-group>
            </div>

            <div style="margin-top: 30px; text-align: center; width: 100%">
                <div style="width: 1200px; height: 344px; display: flex; margin: 0 auto; border: 1px #e9e9e9 solid;">
                    <el-image style="height: 344px; width: 614px" fit="cover"
                              :src="activeContent[parseInt(activeName)].imgSrc"/>
                    <div style="height: 344px; width: 614px;">
                        <div style="margin-left: 50px; margin-right: 30px; margin-top: 80px; text-align: left">
                            <div style="font-size: 23px; color: rgb(51, 51, 51)">
                                {{activeContent[parseInt(activeName)].title}}
                            </div>
                            <div style="margin-top: 20px; color: #ff9000">
                                {{activeContent[parseInt(activeName)].miniTitle}}
                            </div>
                            <div style="margin-top: 20px; font-size: 16px; color: rgb(51, 51, 51)">
                                {{activeContent[parseInt(activeName)].comment}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="width: 1200px; height: 56px;"/>
        </div>

        <div style="width: 100%; min-width: 1200px">
            <div style="font-size: 22px; text-align: center; color: rgb(51, 51, 51); margin-top: 56px; height: 50px; width: 100%">
                品质工装
            </div>

            <div style="font-size: 14px; text-align: center; height: 30px; width: 100%; color: rgb(153, 153, 153)">
                18年匠心 8大施工专利 轻松1站托管
            </div>

            <div style="text-align: center;">
                <el-image src="https://cdn-prod.z11.ren/zaojia-ui/2.2.0h/static/img/tooling.d26fb1f.png" alt="品质工装"
                          style="position: relative; width: 1200px"/>
            </div>

            <div style="width: 1200px; height: 56px;"/>
        </div>

        <div style="width: 100%; background-color: #f5f5f5; min-width: 1200px">
            <div style="width: 1200px; margin: 0 auto;">
                <div style="width: 100%; align-items: flex-end; display: flex;">
                    <div style="font-size: 22px; color: rgb(51, 51, 51); margin-top: 56px; margin-right: 15px;">
                        精装案例
                    </div>
                    <div style="font-size: 14px; text-align: center; color: rgb(153, 153, 153);">
                        发现我要的装修风格
                    </div>
                </div>
            </div>

            <div style="width: 1200px; margin: 20px auto 0;">
                <el-row type="flex" justify="space-around" style="margin-top: 50px;">
                    <el-col :span="8">
                        <el-card :body-style="{ padding: '0px' }" ref="card">
                            <div style="width: 100%; height: 0; padding-bottom: 73%; overflow: hidden; position: relative; z-index: 1;">
                                <img src="https://i.loli.net/2020/07/26/3iOowHnBIhlKdZN.png"
                                     style="height: 100%; position: absolute; top: 0; left: 50%; transform: translateX(-50%);">
                            </div>
                            <div style="text-align: center">
                                <div style="height: 75px; position: absolute" :style="{ width: cardWidth }"></div>
                                <div style="padding: 14px;">
                                    <div style="color: rgb(51, 51, 51)">绍兴高丽花园</div>
                                    <div style="margin-top: 5px; color: #ff9000">94m²/普通户型/欧式风格</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card :body-style="{ padding: '0px' }">
                            <div style="width: 100%; height: 0; padding-bottom: 73%; overflow: hidden; position: relative; z-index: 1;">
                                <img src="https://i.loli.net/2020/07/26/m2C9g6bFY7VJIt8.png"
                                     style="height: 100%; position: absolute; top: 0; left: 50%; transform: translateX(-50%);">
                            </div>
                            <div style="text-align: center; width: 100%">
                                <div style="padding: 14px">
                                    <div style="color: rgb(51, 51, 51)">绍兴盛世名苑</div>
                                    <div style="margin-top: 5px; color: #ff9000">132m²/普通户型/美式风格</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="space-around" style="margin-top: 50px;">
                    <el-col :span="8">
                        <el-card :body-style="{ padding: '0px' }">
                            <div style="width: 100%; height: 0; padding-bottom: 73%; overflow: hidden; position: relative; z-index: 1;">
                                <img src="https://i.loli.net/2020/07/26/6ms9wzIHDuOp1KV.png"
                                     style="height: 100%; position: absolute; top: 0; left: 50%; transform: translateX(-50%);">
                            </div>
                            <div style="text-align: center">
                                <div style="padding: 14px;">
                                    <div style="color: rgb(51, 51, 51)">绍兴清水嘉苑</div>
                                    <div style="margin-top: 5px; color: #ff9000">97m²/普通户型/欧式风格</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card :body-style="{ padding: '0px' }">
                            <div style="width: 100%; height: 0; padding-bottom: 73%; overflow: hidden; position: relative; z-index: 1;">
                                <img src="https://i.loli.net/2020/07/26/ueJCLH8Ur1vml34.png"
                                     style="height: 100%; position: absolute; top: 0; left: 50%; transform: translateX(-50%);">
                            </div>
                            <div style="text-align: center; width: 100%">
                                <div style="padding: 14px">
                                    <div style="color: rgb(51, 51, 51)">绍兴温馨花园</div>
                                    <div style="margin-top: 5px; color: #ff9000">118m²/普通户型/欧式风格</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>

            <div style="width: 1200px; height: 56px;"/>
        </div>

        <div style="width: 100%; min-width: 1200px">
            <div style="font-size: 22px; text-align: center; color: rgb(51, 51, 51); margin-top: 56px; height: 40px; width: 100%">
                找设计师
            </div>

            <div style="font-size: 14px; text-align: center; height: 30px; width: 100%; color: rgb(153, 153, 153)">
                千名优秀设计师等你挑
            </div>

            <div style="width: 1200px; margin: 20px auto 0;">
                <el-row type="flex" justify="space-around">
                    <el-col :span="5">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <img src="https://cdn-data-prod.z11.ren/data/employee/photo/1014419_2224.jpeg?x-oss-process=image/resize,m_mfit,w_564/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA="
                                 style="width: 100%;">
                            <div style="text-align: center; width: 100%">
                                <div style="padding: 14px">
                                    <div style="color: rgb(51, 51, 51)">设计一号
                                        <div style="color: rgb(117, 117, 117); display: inline-block; margin-left: 10px; font-size: 13px;">
                                            设计师
                                        </div>
                                    </div>
                                    <div style="color: rgb(117, 117, 117); margin-top: 10px; font-size: 13px">预约人数：
                                        <div style="color: #ff9000; display: inline-block">0</div>
                                    </div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="5">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <img src="https://cdn-data-prod.z11.ren/data/employee/photo/1001704_8043.jpeg?x-oss-process=image/resize,m_mfit,w_564/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA="
                                 style="width: 100%;">
                            <div style="text-align: center; width: 100%">
                                <div style="padding: 14px">
                                    <div style="color: rgb(51, 51, 51)">总监一号
                                        <div style="color: rgb(117, 117, 117); display: inline-block; margin-left: 10px; font-size: 13px;">
                                            设计总监
                                        </div>
                                    </div>
                                    <div style="color: rgb(117, 117, 117); margin-top: 10px; font-size: 13px">预约人数：
                                        <div style="color: #ff9000; display: inline-block">0</div>
                                    </div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="5">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <img src="https://cdn-data-prod.z11.ren/data/employee/photo/1000743_7388.jpeg?x-oss-process=image/resize,m_mfit,w_564/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA="
                                 style="width: 100%;">
                            <div style="text-align: center; width: 100%">
                                <div style="padding: 14px">
                                    <div style="color: rgb(51, 51, 51)">总监二号
                                        <div style="color: rgb(117, 117, 117); display: inline-block; margin-left: 10px; font-size: 13px;">
                                            精品总监
                                        </div>
                                    </div>
                                    <div style="color: rgb(117, 117, 117); margin-top: 10px; font-size: 13px">预约人数：
                                        <div style="color: #ff9000; display: inline-block">0</div>
                                    </div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="5">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <img src="https://cdn-data-prod.z11.ren/data/employee/photo/1002955_4331.jpeg?x-oss-process=image/resize,m_mfit,w_564/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA="
                                 style="width: 100%;">
                            <div style="text-align: center; width: 100%">
                                <div style="padding: 14px">
                                    <div style="color: rgb(51, 51, 51)">设计二号
                                        <div style="color: rgb(117, 117, 117); display: inline-block; margin-left: 10px; font-size: 13px;">
                                            设计师
                                        </div>
                                    </div>
                                    <div style="color: rgb(117, 117, 117); margin-top: 10px; font-size: 13px">预约人数：
                                        <div style="color: #ff9000; display: inline-block">0</div>
                                    </div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>

            <div style="width: 1200px; height: 56px;"/>
        </div>

        <div style="width: 100%; min-width: 1200px; background-color: #f5f5f5;">
            <div style="width: 1200px; margin: 0 auto;">
                <div style="width: 100%; align-items: flex-end; display: flex;">
                    <div style="font-size: 22px; color: rgb(51, 51, 51); margin-top: 56px; margin-right: 15px;">
                        全屋软装
                    </div>
                    <div style="font-size: 14px; text-align: center; color: rgb(153, 153, 153);">
                        温暖家精选
                    </div>
                </div>
            </div>

            <div style="width: 1200px; margin: 0 auto;">
                <el-row v-for="(rowIndex) in (fullHouse.length / 3)" v-bind:key="rowIndex" type="flex"
                        justify="space-between" :gutter="20" style="margin-top: 30px; margin-bottom: 30px">
                    <el-col :span="8"
                            v-for="(index) in (fullHouse.length - (rowIndex - 1) * 3 >= 3 ? 3 : fullHouse.length - (rowIndex - 1) * 3)"
                            v-bind:key="index">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <div style="width: 100%; height: 0; padding-bottom: 80%; overflow: hidden; position: relative; z-index: 1;">
                                <img :src="fullHouse[(rowIndex - 1) * 3 + index - 1].pic"
                                     style="height: 100%; position: absolute; top: 0; left: 50%; transform: translateX(-50%);">
                            </div>
                            <div style="width: 100%; border-bottom: 1px solid #e1e1e1">
                                <div style="padding: 14px">
                                    <div style="color: rgb(51, 51, 51)">{{fullHouse[(rowIndex - 1) * 3 + index -
                                        1].title}}
                                        <div style="color: rgb(117, 117, 117); display: inline-block; margin-left: 2px; font-size: 13px;">
                                            {{`(${fullHouse[(rowIndex - 1) * 3 + index - 1].num}件)`}}
                                        </div>
                                        <div style="display: inline-block; float: right; color: #ff9000">
                                            {{`￥${fullHouse[(rowIndex - 1) * 3 + index - 1].price}`}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <el-carousel :interval="5000" type="card" height="100px" indicator-position="none">
                                <el-carousel-item
                                        v-for="(item, index) in fullHouse[(rowIndex - 1) * 3 + index - 1].innerPic"
                                        :key="index">
                                    <div style="width: 200px; height: 100px; line-height: 100px; text-align: center">
                                        <el-image :src="item" fit="contain"
                                                  style="line-height: 100px; height: 100px; width: 100px;"/>
                                    </div>
                                </el-carousel-item>
                            </el-carousel>
                        </el-card>
                    </el-col>
                </el-row>
            </div>

            <div style="width: 1200px; height: 36px;"/>
        </div>

        <div style="width: 100%; min-width: 1200px">
            <div style="font-size: 22px; text-align: center; color: rgb(51, 51, 51); margin-top: 56px; height: 45px; width: 100%">
                逛展厅
            </div>

            <div style="font-size: 14px; text-align: center; height: 30px; width: 100%; color: rgb(153, 153, 153)">
                看实景样板间，挑主材看软装
            </div>

            <div style="margin-top: 30px; text-align: center; width: 100%">
                <div style="width: 1200px; height: 500px; display: flex; margin: 0 auto;">
                    <div style="height: 500px; width: 400px; box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)">
                        <div style="margin-left: 50px; margin-right: 30px; margin-top: 80px; text-align: center">
                            <div style="font-size: 44px; color: rgb(51, 51, 51); font-weight: 700">
                                1000m²材料厅
                            </div>
                            <div style="margin-top: 20px; color: rgb(153, 153, 153)">
                                大型精装体验城，产品应有尽有
                            </div>
                            <div style="margin-top: 35px; font-size: 14px; color: rgb(51, 51, 51)">
                                近2000名设计师咨询服务 200个样板间沉浸式体验
                            </div>
                            <div style="margin-top: 5px; font-size: 14px; color: rgb(51, 51, 51)">
                                上万款产品严格筛选 100个工艺节点透明陈列
                            </div>
                        </div>

                        <el-button type="success" plain style="margin-top: 50px">立即预约</el-button>
                    </div>
                    <el-carousel trigger="click" height="500px" style="width: 800px">
                        <el-carousel-item v-for="(item, index) in showPic" :key="index">
                            <el-image :src="item" style="width: 800px"/>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>

            <div style="width: 1200px; height: 56px;"/>
        </div>

        <div style="width: 100%; min-width: 1200px">
            <div style="font-size: 22px; text-align: center; color: rgb(51, 51, 51); margin-top: 56px; height: 40px; width: 100%">
                参观工地
            </div>

            <div style="font-size: 14px; text-align: center; height: 30px; width: 100%; color: rgb(153, 153, 153)">
                3000多在建工地，看看我家附近的
            </div>

            <div style="width: 1200px; margin: 20px auto 0;">
                <v-row v-for="n in 2" :key="n" style="margin-bottom: 30px">
                    <v-card class="mx-auto"
                            max-width="386" v-for="m in 3" :key="m"
                            v-on:mouseover="$set(watchConstructionOverlay, (n - 1) * 3 + (m - 1), true)"
                            v-on:mouseleave="$set(watchConstructionOverlay, (n - 1) * 3 + (m - 1), false)">
                        <v-img
                                class="white--text align-end"
                                height="292px"
                                :src="watchConstructionPic[(n - 1) * 3 + (m - 1)]">
                            <v-card-title>
                                <div style="width: 100%">{{watchConstructionTitle[(n - 1) * 3 + (m - 1)].name}}</div>
                                <div style="font-size: 14px">{{watchConstructionTitle[(n - 1) * 3 + (m - 1)].address}}
                                </div>
                            </v-card-title>
                        </v-img>
                        <v-overlay
                                :absolute="watchConstructionAbsolute[(n - 1) * 3 + (m - 1)]"
                                :value="watchConstructionOverlay[(n - 1) * 3 + (m - 1)]">
                            <div style="width: 100%; text-align: center; font-size: 20px">
                                {{watchConstructionTitle[(n - 1) * 3 + (m - 1)].name}}
                            </div>
                            <div style="margin-top: 25px">
                                <v-btn color="success" style="margin-right: 10px">
                                    预约参观
                                </v-btn>
                                <v-btn color="primary" style="margin-left: 10px">
                                    查看详情
                                </v-btn>
                            </div>
                        </v-overlay>
                    </v-card>

                </v-row>
            </div>

            <div style="width: 1200px; height: 26px;"/>
        </div>

        <div style="width: 100%; min-width: 1200px">
            <div style="font-size: 22px; text-align: center; color: rgb(51, 51, 51); margin-top: 26px; height: 40px; width: 100%">
                服务流程
            </div>

            <div style="font-size: 14px; text-align: center; height: 30px; width: 100%; color: rgb(153, 153, 153)">
                标准化服务流程，省心安心放心
            </div>

            <div style="width: 1200px; margin: 40px auto 20px;">
                <el-steps align-center>
                    <el-step v-for="(item, index) in serviceStep" v-bind:key="index" :title="item.title"
                             :icon="item.icon"></el-step>
                </el-steps>
            </div>
        </div>

    </div>
</template>

<script>
    import "@/assets/icon.css"

    export default {
        name: "index",
        data() {
            return {
                watchConstructionAbsolute: [true, true, true, true, true, true],
                watchConstructionOverlay: [false, false, false, false, false, false],
                watchConstructionPic: ["https://cdn-data-prod.z11.ren/data/housing_estate/view_path/2764_48852.jpeg?x-oss-process=image/resize,m_mfit,h_584,w_736/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                    "https://cdn-data-prod.z11.ren/data/housing_estate/view_path/2765_49153.jpeg?x-oss-process=image/resize,m_mfit,h_584,w_736/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                    "https://cdn-data-prod.z11.ren/data/housing_estate/view_path/2767_9104f.jpeg?x-oss-process=image/resize,m_mfit,h_584,w_736/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                    "https://cdn-data-prod.z11.ren/data/housing_estate/view_path/2768_670b.jpeg?x-oss-process=image/resize,m_mfit,h_584,w_736/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                    "https://cdn-data-prod.z11.ren/data/housing_estate/view_path/2775_23090.jpeg?x-oss-process=image/resize,m_mfit,h_584,w_736/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                    "https://cdn-data-prod.z11.ren/data/housing_estate/view_path/2781_75426.jpeg?x-oss-process=image/resize,m_mfit,h_584,w_736/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA="],
                watchConstructionTitle: [{name: "鹅境雅园", address: "浙江省绍兴市越城区王家庄路100号"},
                    {name: "鉴湖景园", address: "浙江省绍兴市柯桥区兴越路1367"},
                    {name: "嘉华馥园", address: "浙江省绍兴市柯桥区柯岩大道699"},
                    {name: "星尚·悦湖", address: "浙江省绍兴市越城区西施山路与阳明北路交叉口西50米"},
                    {name: "万锋滨海花园", address: "浙江省绍兴市上虞区海滨大道432"},
                    {name: "国际景园", address: "浙江省绍兴市柯桥区国际景园(金柯桥大道西200米)"}],
                activeName: '0',
                activeContent: [{
                    title: '全屋硬装+品牌主材+个性化定制',
                    miniTitle: '90㎡仅98090起',
                    comment: '国际主材集采中心\n集设计、选材、施工、售后为一体的性价比之王\n品质与价格的双管齐下',
                    imgSrc: 'https://cdn-data-prod.z11.ren/data/combo/main_img/1000025_47254.jpeg?x-oss-process=image/resize,m_mfit,h_688,w_1228'
                }, {
                    title: '环保主材+导师设计+标准工艺',
                    miniTitle: '90㎡128090起',
                    comment: '80%进口主材比例全面升级\n金牌顾问、资深设计师、五星项目经理多对一服务\n更私人、更个性化的一站式尊享服务',
                    imgSrc: 'https://cdn-data-prod.z11.ren/data/combo/main_img/1000022_3482e.jpeg?x-oss-process=image/resize,m_mfit,h_688,w_1228'
                }],
                showPic: ["https://cdn-prod.z11.ren/zaojia-ui/2.2.0h/static/img/guangzhanting2.507512b.jpg",
                    "https://cdn-prod.z11.ren/zaojia-ui/2.2.0h/static/img/guangzhanting3.5a33e53.jpg",
                    "https://cdn-prod.z11.ren/zaojia-ui/2.2.0h/static/img/guangzhanting4.db4d7e8.jpg",
                    "https://cdn-prod.z11.ren/zaojia-ui/2.2.0h/static/img/guangzhanting5.badca4d.jpg",
                    "https://cdn-prod.z11.ren/zaojia-ui/2.2.0h/static/img/guangzhanting6.0d8ca03.jpg"],
                carouselPic: ["https://cdn-data-prod.z11.ren/data/region_site/banner/10_6636.jpeg",
                    "https://cdn-data-prod.z11.ren/data/region_site/banner/10_9411.jpeg",
                    "https://cdn-data-prod.z11.ren/data/region_site/banner/10_2083.jpeg",
                    "https://cdn-data-prod.z11.ren/data/region_site/banner/10_3908.png"],
                navObject: [{name: "装修报价", icon: "icon-fanlibaojia"},
                    {name: "装修大礼包", icon: "icon-libao"},
                    {name: "预约设计", icon: "icon-shejishijianzhushi"},
                    {name: "上门量房", icon: "icon-celiang"},
                    {name: "参观工地", icon: "icon-icon1"}],
                navStyle: '',
                cardWidth: '0px',
                fullHouse: [{
                    pic: "https://cdn-data-prod.z11.ren/data/quota/main_img/1000418_6475f.jpeg?x-oss-process=image/resize,m_mfit,w_766/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                    title: "北欧静谧",
                    num: 15,
                    price: "55,000.00",
                    innerPic: ["https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003248_31081.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                        "https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003249_43849.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                        "https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003252_4437b.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA="]
                }, {
                    pic: "https://cdn-data-prod.z11.ren/data/quota/main_img/1000507_350d.jpeg?x-oss-process=image/resize,m_mfit,w_766/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                    title: "爱丁堡",
                    num: 15,
                    price: "120,000.00",
                    innerPic: ["https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003435_5762f.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                        "https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003436_8154f.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                        "https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003437_1067f.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                        "https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003438_51462.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA="]
                }, {
                    pic: "https://cdn-data-prod.z11.ren/data/quota/main_img/1000508_86982.jpeg?x-oss-process=image/resize,m_mfit,w_766/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                    title: "皇家玫瑰",
                    num: 15,
                    price: "60,0000.00",
                    innerPic: ["https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003463_11228.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                        "https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003466_4831.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                        "https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003468_63950.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                        "https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003470_584d.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA="]
                }, {
                    pic: "https://cdn-data-prod.z11.ren/data/quota/main_img/1000510_36286.jpeg?x-oss-process=image/resize,m_mfit,w_766/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                    title: "京都世家",
                    num: 15,
                    price: "420,000.00",
                    innerPic: ["https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003486_3870c.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                        "https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003489_31540.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                        "https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003491_8418d.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA="]
                }, {
                    pic: "https://cdn-data-prod.z11.ren/data/quota/main_img/1000541_94701.jpeg?x-oss-process=image/resize,m_mfit,w_766/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                    title: "挪亚家北约风",
                    num: 15,
                    price: "56,000.00",
                    innerPic: ["https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003691_6252b.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                        "https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003694_74293.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                        "https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003697_5945f.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA="]
                }, {
                    pic: "https://cdn-data-prod.z11.ren/data/quota/main_img/1000539_1957a.jpeg?x-oss-process=image/resize,m_mfit,w_766/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                    title: "新绿野",
                    num: 15,
                    price: "60,000.00",
                    innerPic: ["https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003681_76411.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                        "https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003680_5661e.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA=",
                        "https://cdn-data-prod.z11.ren/data/product/sku/img_path/1003679_63945.jpeg?x-oss-process=image/resize,m_mfit,h_198,w_198/quality,q_100/watermark,image_c3kucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMjA="]
                }],
                serviceStep: [{title: "在线预约", icon: "iconfont icon-yuyue"},
                    {title: "沟通需求", icon: "iconfont icon-goutongjilu"},
                    {title: "匹配设计师", icon: "iconfont icon-shejishi1"},
                    {title: "确定预算", icon: "iconfont icon-yusuanmingxi"},
                    {title: "签订合同", icon: "iconfont icon-hetong"},
                    {title: "1对1设计", icon: "iconfont icon-sheji1"},
                    {title: "开工", icon: "iconfont icon-kaigong"},
                    {title: "节点验收", icon: "iconfont icon-cloud-node"},
                    {title: "竣工验收", icon: "iconfont icon-iconfontshouye1"},],
            }
        },
        mounted() {
            document.title = "首页";

            this.cardWidth = this.$refs.card.clientWidth;
        },
        methods: {
            handleTabClick() {

            }
        }
    }
</script>

<style scoped>
    .swipe-image {
        position: relative;
        max-height: 100%;
        max-width: 100%;
        width: auto;
        height: auto;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
    }

    >>> .el-carousel__container {
        height: 450px;
    }

    /deep/ .el-radio-button__inner {
        border-radius: 5px !important;
        border: none !important;
        background-color: rgb(240, 240, 240);
        width: 150px !important;
    }

    /deep/ .is-wait {
        color: rgb(51, 51, 51) !important;
        border-color: rgb(51, 51, 51) !important;
    }

    /deep/ .el-step__line {
        background-color: rgb(51, 51, 51) !important;
    }

    /deep/ .el-step__icon-inner {
        font-size: 36px !important;
        font-weight: 500 !important;
    }

    /deep/ .el-step__title {
        margin-top: 5px !important;
    }
</style>
