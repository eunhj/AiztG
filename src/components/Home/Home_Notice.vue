<template>
    <div class="notice_bg">
        <div id="w-full">
            <div class="box_bg box_1">
                <div class="title"><span>공지사항</span>
                    <button class="plus_btn" @click="startup()">
                        <div class="plus"></div>
                    </button>
                </div>
                <!-- 최대6개, 최신순으로 바꾸기 -->
                <table class="notice_list pointer">
                    <tr class="_list">
                        <th class="_title">제목</th>
                        <th class="_date">22.02.02</th>
                    </tr>
                    <tr class="_list">
                        <th class="_title">제목</th>
                        <th class="_date">날짜</th>
                    </tr>
                    <tr class="_list">
                        <th class="_title">제목</th>
                        <th class="_date">날짜</th>
                    </tr>
                    <tr class="_list">
                        <th class="_title">제목</th>
                        <th class="_date">날짜</th>
                    </tr>
                    <tr class="_list">
                        <th class="_title">제목</th>
                        <th class="_date">날짜</th>
                    </tr>
                    <tr class="_list">
                        <th class="_title">제목</th>
                        <th class="_date">날짜</th>
                    </tr>
                </table>
            </div>
            <div class="box_bg box_2" style="margin-right: 45px;">
                <div class="cir">
                    <img src="../../assets/Home_icon5.png" alt="icon">
                </div>
                <p>아지트지와 함께 나아갈<br />
                    파트너를 모십니다.</p>
                <button class="grey_btn" @click="startup()">협력 업체 문의</button>
            </div>
            <div class="box_bg box_2">
                <div class="cir">
                    <img src="../../assets/Home_icon6.png" alt="icon">
                </div>
                <p>전국 AzitG 매장을 한눈에<br />
                    쉽게 찾아보세요!</p>
                <button class="grey_btn" @click="startup()">매장 안내</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        startup() {
            this.$router.push('/test');
        }
    },
}
</script>
<style lang="scss" scoped>
.notice_bg {
    background-color: #efefef;
    width: 100%;
    height: 384px;
    padding: 48px 0;
    box-sizing: border-box;

    & #w-full {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
}

.box_bg {
    background-color: #fff;
    padding: 16px;
    box-sizing: border-box;
}

.box_1 {
    width: 1020px;
    height: 100%;
    margin-right: 45px;

    & .title {
        font-size: 24px;
        font-weight: 700;
        text-align: left;
        display: flex;
        justify-content: space-between;
        padding-bottom: 8px;
        border-bottom: 1px solid #dfdfdf;
    }

    & .notice_list {
        width: 100%;
        height: calc(100% - 33px);
        margin-top: 8px;


        & ._list {
            width: 100%;

            & ._title {
                width: 80%;
                text-align: left;
                font-size: 16px;
                font-weight: 500;
                vertical-align: middle;

            }

            & ._title:hover {
                text-decoration: underline;
            }

            & ._date {
                width: 20%;
                text-align: right;
                font-size: 12px;
                font-weight: 400;
                color: #999;
                vertical-align: middle;
            }
        }
    }
}

.box_2 {
    width: 510px;
    height: 100%;
    padding: 20px;

    & .cir {
        background-color: #efefef;
        border-radius: 999px;
        width: 130px;
        height: 130px;
        margin: 0 auto;
    }

    & p {
        margin: 20px 0;
    }

    & img {
        width: 100%;
        height: 100%;
        background-position: center;
    }
}

.grey_btn {
    width: 160px;
    background-color: #999;
    padding: 10px 24px;
    border-radius: 999px;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    transition: 0s background-color;

    &:hover,
    &:focus {
        background-color: #363636;
        transition-duration: 2s
    }
}
</style>