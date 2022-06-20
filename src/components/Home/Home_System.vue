<template>
    <div class="system_bg">
        <div id="w-full">
            <h1><span style="color:#E71A11;">AzitG</span>만의 안정적 운영시스템</h1>
            <p>한줄정도 설명이 있었으면 좋겠어요 뭐라구 해야댈지 모르겟어요 이정도 길이의 내용
                <br />점주님들의 든든한 파트너가 되어드리겠습니다.
            </p>
            <div class="box">
                <div class="box_4">
                    <div class="cir">
                        <img src="../../assets/Home_icon1.png" alt="icon">
                    </div>

                    <div class="num">1</div>
                    <div class="_title">전국 물류 구축망</div>
                    <div class="_txt">편의점 전문물류, 냉동식품 등의<br />
                        안정성 있는 상품공급</div>
                </div>
                <div class="box_4" style="margin: 0 40px;">
                    <div class="cir">
                        <img src="../../assets/Home_icon2.png" alt="icon">
                    </div>

                    <div class="num">2</div>
                    <div class="_title">차별성 있는 인테리어</div>
                    <div class="_txt">정확한 슬로건 컨셉을 가지고<br />
                        호불호 없는 인테리어로 다양한<br />
                        연령층의 감성 저격</div>
                </div>
                <div class="box_4" style="margin-right:40px;">
                    <div class="cir">
                        <img src="../../assets/Home_icon3.png" alt="icon">
                    </div>

                    <div class="num">3</div>
                    <div class="_title">실시간 실거래 상권분석</div>
                    <div class="_txt">개점 후 데이터를 기준으로 주력<br />
                        구매상품들을 분석하여 매출증대를<br />
                        위한 추가 메뉴 상품 컨설팅</div>
                </div>
                <div class="box_4">
                    <div class="cir">
                        <img src="../../assets/Home_icon4.png" alt="icon">
                    </div>

                    <div class="num">4</div>
                    <div class="_title">아지트지 커뮤니티</div>
                    <div class="_txt">가맹점 간의 다양한 정보 제공 및<br />
                        지속적인 커뮤니케이션을 위한<br />
                        다양한 SNS 채널운영</div>
                </div>
            </div>
            <h2><span>AzitG만의 특별함</span> <span class="plus_red">+</span></h2>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.system_bg {
    background-color: #fff;
    height: 550px;
    padding: 48px 0;
    box-sizing: border-box;

    & h1 {
        font-weight: 700;
        font-size: 50px;
    }

    & p {
        margin: 20px 0 40px 0;
        line-height: 1.25;
    }

    & h2 {
        width: 100%;
        font-weight: 500;
        font-size: 24px;
        margin-top: 40px;

        & .plus_red {
            color: #DC2525;
            font-weight: 700;
        }
    }
}

.box {
    display: flex;
    justify-content: center;
}

.box_4 {
    width: 330px;
    height: 240px;
    padding: 8px 16px;
    box-sizing: border-box;
    background: #fff;
    border: #efefef 2px solid;
    position: relative;
    text-align: left;
    color: #999;
    cursor: pointer;


    & .num {
        font-size: 64px;
        font-weight: bolder;

    }

    & ._title {
        padding: 8px 0;
        font-size: 24px;
        font-weight: 600;
        color: #666;
    }

    & ._txt {
        position: relative;
        z-index: 1;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.25;
        color: #777;
    }
}

.cir {
    position: absolute;
    bottom: 6px;
    right: 6px;
    background-color: #efefef;
    border-radius: 999px;
    width: 130px;
    height: 130px;
    opacity: 0.8;

    & img {
        width: 100%;
        height: 100%;
        background-position: center;
    }
}

.box_4:hover {
    border: red 2px solid;
    color: red;
    transition-duration: 1s;

    & ._title {
        color: #333;
    }

    & ._txt {
        color: #333;
    }
}
</style>