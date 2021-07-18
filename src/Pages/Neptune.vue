<template>
    <div id="neptune" class="section">
        <DescriptionBody>
            <Image>
                <!-- JS decides either one image or the other -->
                <img class="" id="main_image" src="../assets/images/realist_images/planet-neptune.webp" alt="Planet neptune">
                <img class=" hidden_image" id="internal_image" src="../assets/images/planet-neptune-internal.svg" alt="Planet neptune">
                <!-- and with or without this one -->
                <img id="geology_image" class="hidden_image absolute" src="../assets/images/geology-neptune.png" alt="Geology of neptune">
            </Image>
            <Infos>
                <h1>{{ neptune.name }}</h1>
                <p id="text">{{overview.content}}</p>
                <p class="source"><span>Source :</span> 
                    <a id="source" :href="overview.source" target="_blank">Wikipédia</a>
                    <img src="../assets/images/icon-source.svg" alt="Source arrow icon">
                </p>
            </Infos>
        </DescriptionBody>
        <Numbers>
            <Rotation>
                {{neptune.rotation}}
            </Rotation>
            <Revolution>
                {{neptune.revolution}}
            </Revolution>
            <Radius>
                {{neptune.radius}}
            </Radius>
            <Temperature>
                {{neptune.temperature}}
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
            neptune: [],
            overview: [],
            geology: [],
            structure: [],
        }
    },
    created() {
        this.neptune = this.$json.neptune;
        this.overview = this.$json.neptune.overview;
        this.geology = this.$json.neptune.geology;
        this.structure = this.$json.neptune.structure;
    },
    mounted() {
        var app = this;
        app.$functions.switchTopic(app);
        app.$functions.activeBtn();
    },
}
</script>