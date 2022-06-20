<template>
    <div class="brandstory_bg">
        <div id="w-1200">
            <h1><span style="color:#E71A11;">AzitG </span>브랜드스토리</h1>
            <div class="box">
                <div class="img_box"><img src="../../assets/Home_picture1.jpg" alt="AiztG 실물사진1"></div>
                <div class="txt_box">
                    무인편의점에 대한 많은 선입견이 있습니다.

                    상권 분석, 상품 소싱, 매장 레이아웃, 무인관제 시스템 구축 등
                    1년여의 수많은 시행착오 끝에
                    우리는 점차 질문에 대한 답을 얻을 수 있었습니다.

                    오픈 비용이 많이 들지 않는 매장, 도난에 대한 우려가 없는 매장,
                    정말 사람이 없어도 운영이 가능한 매장

                    <span style="color:#E71A11;">AzitG</span>가 추구하는 미래 지형형 무인편의점의 모습입니다.</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.brandstory_bg {
    background-color: #f6f6f6;
    height: 550px;
    padding: 48px 0;
    box-sizing: border-box;

    & h1 {
        font-weight: 700;
        font-size: 50px;
    }
}

.box {
    height: 340px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;

    & .img_box {
        width: 500px;
        height: 100%;
        border: 2px solid #afafaf;

        & img {
            width: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }

    & .txt_box {
        width: 640px;
        padding: 16px 0;
        text-align: left;
    }
}
</style>