<template>
    <div id="earth" class="section">
        <DescriptionBody>
            <Image>
                <!-- JS decides either one image or the other -->
                <img id="main_image" src="../assets/images/realist_images/planet-earth.webp" alt="Planet earth">
                <img class="hidden_image" id="internal_image" src="../assets/images/planet-earth-internal.svg" alt="Planet earth">
                <!-- and with or without this one -->
                <img id="geology_image" class="hidden_image absolute" src="../assets/images/geology-earth.png" height="199" width="163" alt="Geology of earth">
            </Image>
            <Infos>
                <h1>{{ earth.name }}</h1>
                <p id="text">{{overview.content}}</p>
                <p class="source">Source : 
                    <a id="source" :href="overview.source">Wikipédia</a>
                    <img src="../assets/images/icon-source.svg" alt="Source arrow icon">
                </p>
            </Infos>
        </DescriptionBody>
        <Numbers>
            <Rotation>
                {{earth.rotation}}
            </Rotation>
            <Revolution>
                {{earth.revolution}}
            </Revolution>
            <Radius>
                {{earth.radius}}
            </Radius>
            <Temperature>
                {{earth.temperature}}
            </Temperature>
        </Numbers>
    </div>
    
</template>

<script>
import DescriptionBody from '../components/DescriptionBody.vue'
import Infos from '../components/Infos.vue'
import Image from '../components/Image.vue'
import Numbers from '../components/Numbers.vue'
import Rotation from '../components/Rotation.vue'
import Revolution from '../components/Revolution.vue'
import Radius from '../components/Radius.vue'
import Temperature from '../components/Temperature.vue'
export default {
    components: {
        DescriptionBody,
        Infos,
        Image,
        Numbers,
        Rotation,
        Revolution,
        Radius,
        Temperature
    },
    data() {
        return {
            earth: [],
            overview: [],
            geology: [],
            structure: [],
        }
    },
    created() {
        this.earth = this.$json.earth;
        this.overview = this.$json.earth.overview;
        this.geology = this.$json.earth.geology;
        this.structure = this.$json.earth.structure;
    },
    mounted() {
        var app = this;
        app.$functions.switchTopic(app);
        app.$functions.activeBtn();
    },
}
</script>