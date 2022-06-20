<template>
    <Nav />
    <div id="main_banner">
        <div id="w-full" class="middle">
            <div class="main_title">AzitG<br />Market</div>
            <div class="main_txt">ddddd<br />dddd<br />dddddd</div>
            <button class="more_btn">Learn More</button>
        </div>
    </div>
    <Event />
    <Brandstory />
    <System />
    <Notice />
    <Footer />
</template>
<script setup>
import Nav from "../components/Nav/Nav.vue"
import Event from "../components/Home/Home_Event.vue"
import Brandstory from "../components/Home/Home_Brandstory.vue"
import System from "../components/Home/Home_System.vue"
import Notice from "../components/Home/Home_Notice.vue"
import Footer from "../components/Footer.vue"
</script>
<style lang="scss" scoped>
#main_banner {
    width: 100%;
    height: 670px;
    overflow: hidden;
    background-image: url("../assets/main1.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: left;
    color: #fff;
}

.middle {
    box-sizing: border-box;
    padding: 100px 0 0 24px;
}

.main_title {
    font-weight: bolder;
    font-size: 120px;
}

.main_txt {
    margin-top: 12px;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.25;
}

.more_btn {
    color: #fff;
    margin-top: 60px;
    font-weight: 600;
    font-size: 32px;
    text-align: left;
    padding-left: 8px;
    width: 224px;
    height: 48px;
    background-image: url("../assets/arrow_white.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: .9;
}

.more_btn:hover {
    padding-left: 0;
    transition-duration: 1s;
    opacity: 1;
}
</style>