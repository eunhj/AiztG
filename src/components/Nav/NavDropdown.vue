<template>
    <div class="navdrop_window">
        <div id="w-full">
            <div class="a">
                <ul class="menu">
                    <li>AzitG 소개</li>
                    <li>AzitG Identity</li>
                </ul>
                <ul class="menu">
                    <li>창업 절차</li>
                    <li>창업 문의</li>
                </ul>
                <ul class="menu">
                    <li>매장찾기</li>
                    <li>매장 디자인</li>
                </ul>
                <ul class="menu" style="border-right: 1px solid #dfdfdf;">
                    <li>공지사항</li>
                    <li>프로모션</li>
                    <li>협력업체 문의</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "NavDropdown",
};
</script>
<style scoped lang="scss">
.navdrop_window {
    position: sticky;
    height: 180px;
    width: 100%;
    background-color: #fff;
}

.a {
    margin: 0 auto;
    display: flex;
    height: 100%;
    width: 600px;

    & .menu {
        width: 25%;
        height: 180px;
        box-sizing: border-box;
        padding: 20px 0;
        border-left: 1px solid #dfdfdf;

        & li {
            padding: 12px 0;
        }

        & li:hover {
            color: #E71A13;
            transition-duration: .5s;
        }
    }

}
</style>
