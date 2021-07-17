<template>
    <div class="home_body">
        <ul class="circle-container">
        <h3 id="title" class="absolute text-center">Explore your solar system and go to...</h3>
            <li id="saturn" class="planets_img">
                <router-link :to="'/saturne'">
                    <img src="../assets/images/planet-saturn-internal.svg" alt="Planet saturn">
                </router-link>
            </li>
            <li id="earth" class="planets_img">
                <router-link :to="'/earth'">
                    <img src="../assets/images/planet-earth-internal.svg" alt="Planet earth">
                </router-link>
            </li>
            <li id="venus" class="planets_img">
                <router-link :to="'/venus'">
                    <img src="../assets/images/planet-venus-internal.svg" alt="Planet venus">
                </router-link>
            </li>
            <li id="jupiter" class="planets_img">
                <router-link :to="'/jupiter'">
                    <img src="../assets/images/planet-jupiter-internal.svg" alt="Planet jupiter">
                </router-link>
            </li>
            <li id="uranus" class="planets_img">
                <router-link :to="'/uranus'">
                    <img src="../assets/images/planet-uranus-internal.svg" alt="Planet uranus">
                </router-link>
            </li>
            <li id="mars" class="planets_img">
                <router-link :to="'/mars'">
                    <img src="../assets/images/planet-mars-internal.svg" alt="Planet mars">
                </router-link>
            </li>
            <li id="mercury" class="planets_img">
                <router-link :to="'/mercury'">
                    <img src="../assets/images/planet-mercury-internal.svg" alt="Planet mercury">
                </router-link>
            </li>
            <li class="planets_img">
                <router-link :to="'/neptune'">
                    <img src="../assets/images/planet-neptune-internal.svg" alt="Planet neptune">
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style>
    .home_body h3 {
        width: 210px;
        left: -20px;
        top: 233px; 
        transform: translateY(-50%);
    }
</style>

<script>
export default {
    mounted() {
        var links = document.getElementsByTagName('a')
        var title = document.getElementById('title')
        links.forEach(el => {
            el.addEventListener('mouseenter', function(e) {
                var url_segments = e.target.href.split('/')
                title.innerHTML = url_segments.pop()
            })
            el.addEventListener('mouseleave', function() {
                title.innerHTML = 'Explore your solar system and go to...'
            })
        })
    },
}
</script>