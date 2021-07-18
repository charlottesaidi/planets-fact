<template>
    <div class="home_body">
        <ul class="circle-container">
        <h3 id="title" class="absolute text-center">Explore your solar system and go to...</h3>
            <li class="planets_img">
                <router-link :to="'/planets-fact/venus'">
                    <img src="../assets/images/realist_images/planet-venus.webp" alt="Planet venus">
                </router-link>
            </li>
            <li class="planets_img">
                <router-link :to="'/planets-fact/earth'">
                    <img src="../assets/images/realist_images/planet-earth.webp" alt="Planet earth">
                </router-link>
            </li>
            <li class="planets_img">
                <router-link :to="'/planets-fact/saturne'">
                    <img src="../assets/images/realist_images/planet-saturn.webp" alt="Planet saturn">
                </router-link>
            </li>
            <li class="planets_img">
                <router-link :to="'/planets-fact/jupiter'">
                    <img src="../assets/images/realist_images/planet-jupiter.webp" alt="Planet jupiter">
                </router-link>
            </li>
            <li class="planets_img">
                <router-link :to="'/planets-fact/uranus'">
                    <img src="../assets/images/realist_images/planet-uranus.webp" alt="Planet uranus">
                </router-link>
            </li>
            <li class="planets_img">
                <router-link :to="'/planets-fact/mars'">
                    <img src="../assets/images/realist_images/planet-mars.webp" alt="Planet mars">
                </router-link>
            </li>
            <li class="planets_img">
                <router-link :to="'/planets-fact/mercury'">
                    <img src="../assets/images/realist_images/planet-mercury.webp" alt="Planet mercury">
                </router-link>
            </li>
            <li class="planets_img">
                <router-link :to="'/planets-fact/neptune'">
                    <img src="../assets/images/realist_images/planet-neptune.webp" alt="Planet neptune">
                </router-link>
            </li>
        </ul>
    </div>
</template>

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