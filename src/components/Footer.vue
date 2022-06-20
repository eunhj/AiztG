<template>
    <div id="footer">
        <div id="footer_top">
            <div id="w-full">
                <div class="txt1">창업안내 및 무료 상담</div>
                <div class="txt_strong">0000-0000</div>
                <button class="red_btn" @click="startup()">창업 문의하기</button>
            </div>
        </div>
        <div id="footer_bottom">
            <div id="w-full">

                <img src="../assets/logo_white.png" alt="logo">
                <div class="txt2">GHB 대표 : 고호범 ㅣ 사업자등록번호 : 739.87.01603 ㅣTel : 1544-6887 | E-mail :
                    ghbwallet@gmail.com<br /> 주소 :
                    서울특별시
                    금천구 가산디지털1로 168 우림라이온스밸리 B동 904호</div>
                <div class="txt2"><span @click="startup()">이용약관</span> ㅣ <span @click="startup()">개인정보처리방침</span></div>
                <div class="txt2"> Copyright © 2022 GHB Corporation ALL RIGHTS RESERVED</div>
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
#footer {
    height: 198px;
    margin: 0 auto;
}

#footer_top {
    width: 100%;
    max-height: 60px;
    background-color: #363636;
    padding: 12px 0;
    text-align: center;
    color: #fff;

    & #w-full {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .txt1 {
        font-size: 24px;
        margin-right: 16px;
    }

    & .txt_strong {
        font-size: 40px;
        font-weight: 700;
        padding-top: 4px;
        margin-right: 32px;
    }
}

#footer_bottom {
    width: 100%;
    padding: 16px 0;
    background-color: #000;
    color: #dfdfdf;
    font-size: 12px;
    line-height: 1.2;

    & img {
        max-height: 20px;
    }

    & .txt2 {
        margin: 10px 0;

        & span:hover {
            font-weight: 600;
            color: #fff;
        }
    }

}

.red_btn {
    background-color: #E71A11;
    padding: 10px 16px;
    border-radius: 2px;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    transition: 0s background-color;

    &:hover,
    &:focus {
        background-color: #BE0800;
        transition-duration: 2s
    }
}
</style>