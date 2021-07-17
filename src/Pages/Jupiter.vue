<template>
    <div id="jupiter" class="section">
        <DescriptionBody>
            <Image>
                <!-- JS decides either one image or the other -->
                <img class="" id="main_image" src="../assets/images/realist_images/planet-jupiter.webp" alt="Planet jupiter">
                <img class=" hidden_image" id="internal_image" src="../assets/images/planet-jupiter-internal.svg" alt="Planet jupiter">
                <!-- and with or without this one -->
                <img id="geology_image" class="hidden_image absolute" src="../assets/images/geology-jupiter.png" height="199" width="163" alt="Geology of jupiter">
            </Image>
            <Infos>
                <h1>{{ jupiter.name }}</h1>
                <p id="text">{{overview.content}}</p>
                <p class="source">Source : 
                    <a id="source" :href="overview.source">Wikipédia</a>
                    <img src="../assets/images/icon-source.svg" alt="Source arrow icon">
                </p>
            </Infos>
        </DescriptionBody>
        <Numbers>
            <Rotation>
                {{jupiter.rotation}}
            </Rotation>
            <Revolution>
                {{jupiter.revolution}}
            </Revolution>
            <Radius>
                {{jupiter.radius}}
            </Radius>
            <Temperature>
                {{jupiter.temperature}}
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
            jupiter: [],
            overview: [],
            geology: [],
            structure: [],
        }
    },
    created() {
        this.jupiter = this.$json.jupiter;
        this.overview = this.$json.jupiter.overview;
        this.geology = this.$json.jupiter.geology;
        this.structure = this.$json.jupiter.structure;
    },
    mounted() {
        var app = this;
        app.$functions.switchTopic(app);
        app.$functions.activeBtn();
    },
}
</script>