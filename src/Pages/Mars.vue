<template>
    <div id="mars" class="section">
        <DescriptionBody>
            <Image>
                <!-- JS decides either one image or the other -->
                <img class="" id="main_image" src="../assets/images/planet-mars.svg" alt="Planet mars">
                <img class=" hidden_image" id="internal_image" src="../assets/images/planet-mars-internal.svg" alt="Planet mars">
                <!-- and with or without this one -->
                <img id="geology_image" class="hidden_image absolute" src="../assets/images/geology-mars.png" height="199" width="163" alt="Geology of mars">
            </Image>
            <Infos>
                <h1>{{ mars.name }}</h1>
                <p id="text">{{overview.content}}</p>
                <p class="source">Source : 
                    <a id="source" :href="overview.source">Wikipédia</a>
                    <img src="../assets/images/icon-source.svg" alt="Source arrow icon">
                </p>
            </Infos>
        </DescriptionBody>
        <Numbers>
            <Rotation>
                {{mars.rotation}}
            </Rotation>
            <Revolution>
                {{mars.revolution}}
            </Revolution>
            <Radius>
                {{mars.radius}}
            </Radius>
            <Temperature>
                {{mars.temperature}}
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
            mars: [],
            overview: [],
            geology: [],
            structure: [],
        }
    },
    created() {
        this.mars = this.$json.mars;
        this.overview = this.$json.mars.overview;
        this.geology = this.$json.mars.geology;
        this.structure = this.$json.mars.structure;
    },
    mounted() {
        var app = this;
        app.$functions.switchTopic(app);
        app.$functions.activeBtn();
    },
}
</script>