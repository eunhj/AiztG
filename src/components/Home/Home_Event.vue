<template>
    <div class="event_bg">
        <div class="event event1">
            <div>
                <strong>가맹점 소식</strong>
                <!-- 세로슬라이드 -->
                <span>대전 탄방역점 오픈!</span>
            </div>
            <button class="plus_btn" @click="startup()">
                <div class="plus"></div>
            </button>
        </div>
        <div class="event event2">
            <div>
                <strong>프로모션</strong>
                <!-- 세로슬라이드 -->
                <span>2+1 이벤트 안내</span>
            </div>
            <button class="plus_btn" @click="startup()">
                <div class="plus"></div>
            </button>
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
.event_bg {
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #fff 50%, #000 50%);
}
.event {
    text-align: left;
    width: 720px;
    height: 100%;
    padding: 15px 24px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & strong {
        font-weight: 600;
        font-size: 18px;
        margin-right: 12px;
    }

    & span {
        font-size: 16px;
    }

    & span:hover {
        text-decoration: underline;
    }
}

.event1 {
    background-color: #fff;
}

.event2 {
    background-color: #000;
    color: #fff;

    & .plus_btn {
        border: 2px solid #fff;
    }

    & .plus {

        &:before,
        &:after {
            background-color: #fff;
        }
    }
}
</style>