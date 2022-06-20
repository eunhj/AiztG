<template>
    <div id="nav">
        <div id="w-full">
            <div class="logo">
                <img src="../../assets/logo_red.png" alt="logo">
            </div>
            <div class="nav_menu" @mouseover="mouseover" @mouseleave="mouseleave">
                <div class="menu">회사소개 </div>
                <div class="menu">창업지원</div>
                <div class="menu">매장안내</div>
                <div class="menu">고객지원</div>
            </div>
            <button class="black_btn">창업 문의</button>
        </div>
        <div class="navdrop" ref="drop" @mouseleave="mouseleave">
            <div id=" w-full">
                <div class="navdrop_menu">
                    <ul class="menu2">
                        <li>AzitG 소개</li>
                        <li>AzitG Identity</li>
                    </ul>
                    <ul class="menu2">
                        <li>창업 절차</li>
                        <li>창업 문의</li>
                    </ul>
                    <ul class="menu2">
                        <li>매장찾기</li>
                        <li>매장 디자인</li>
                    </ul>
                    <ul class="menu2" style="border-right: 1px solid #dfdfdf;">
                        <li>공지사항</li>
                        <li>프로모션</li>
                        <li>협력업체 문의</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
#nav {
    background-color: #fff;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 6px 6px -6px rgba(0, 0, 0, 0.5);
}

#w-full {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.logo {
    width: 120px;

    & img {
        width: 100%;
        background-position: center;
        background-size: contain;
    }
}

//메뉴
.nav_menu {
    font-size: 20px;
    font-weight: 600;
    display: flex;
    height: 100%;
    width: 600px;
    color: #555;

    & .menu {
        width: 25%;
        height: 100%;
        box-sizing: border-box;
        padding: 20px 0;
    }
}

//사이드 메뉴
.navdrop {
    display: none;
    position: sticky;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    height: 180px;
    width: 100%;
    background-color: #fff;
}

.block {
    display: block;
}

.navdrop_menu {
    margin: 0 auto;
    display: flex;
    height: 100%;
    width: 600px;
    position: relative;

    & .menu2 {
        width: 25%;
        height: 180px;
        box-sizing: border-box;
        padding: 20px 0;
        border-left: 1px solid #dfdfdf;
        border-top: #363636 3px solid;


        & li {
            padding: 12px 0;
        }

        & li:hover {
            color: #E71A13;
            transition-duration: .5s;
        }
    }

    & .menu2:hover {
        border-top: #E71A13 3px solid;
    }


}

.black_btn {
    background-color: #000;
    padding: 10px 24px;
    border-radius: 4px;
    color: #fff;
    font-weight: bolder;
    font-size: 16px;
    transition: 0s background-color;

    &:hover,
    &:focus {
        background-color: #E71A13;
        transition-duration: 0.5s;
    }
}
</style>