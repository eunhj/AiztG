<template>
    <div class="sidenav">
        <div v-for="item in items">
            <div v-if="item.link_to !== ''">
                <router-link :to="item.link_to">{{ item.title }}</router-link>
            </div>
            <div v-else> <button @click="clickMenuBtn($event)" class="dropdown-btn">{{ item.title }}</button>
                <div class="dropdown-container">
                    <div v-for="subItem in item.sub_menu">
                        <router-link :to="subItem.link_to">{{ subItem.title }}</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!--    <router-link to="/">Home</router-link>    <router-link to="/about">About</router-link>    -->
    </div>
</template>
<script>
const menuList = [{ title: 'Home', link_to: '/' }, { title: 'About', link_to: '/about' }, { title: 'Test', link_to: '', sub_menu: [{ title: 'Test1', link_to: '/test1' }, { title: 'Test2', link_to: '/test2' }, { title: 'Test3', link_to: '/test3' }] }]  export default { props: { items: { type: Array, default: menuList } }, methods: { clickMenuBtn: function (event) { console.log(event.target.nextElementSibling.childElementCount)        console.log(event.target.nextElementSibling.children)        if (event.target.nextElementSibling.style.display === 'none') { event.target.nextElementSibling.style.display = 'block'; } else { event.target.nextElementSibling.style.display = 'none'; } } } }
</script>
<style>
.sidenav {
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 20px;
}

.sidenav a,
.dropdown-btn {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
    color: #f1f1f1;
}

/* Style page content */
.main {
    margin-left: 160px;
    /* Same as the width of the sidebar */
    padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }

    .sidenav a {
        font-size: 18px;
    }
}

/* On mouse-over */
.sidenav a:hover,
.dropdown-btn:hover {
    color: #f1f1f1;
}

/* Main content */
.main {
    margin-left: 200px;
    /* Same as the width of the sidenav */
    font-size: 20px;
    /* Increased text to enable scrolling */
    padding: 0px 10px;
}

/* Add an active class to the active dropdown button */
.active {
    background-color: green;
    color: white;
}

/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
.dropdown-container {
    display: none;
    background-color: #5eaf13;
    padding-left: 8px;
}

/* Optional: Style the caret down icon */
.fa-caret-down {
    float: right;
    padding-right: 8px;
}
</style>
