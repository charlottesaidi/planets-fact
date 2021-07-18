<template>
    <div id="mercury" class="section">
        <DescriptionBody>
            <Image>
                <!-- JS decides either one image or the other -->
                <img class="" id="main_image" src="../assets/images/planet-mercury.svg" alt="Planet Mercury">
                <img class=" hidden_image" id="internal_image" src="../assets/images/planet-mercury-internal.svg" alt="Planet Mercury">
                <!-- and with or without this one -->
                <img id="geology_image" class="hidden_image absolute" src="../assets/images/geology-mercury.png" height="199" width="163" alt="Geology of Mercury">
            </Image>
            <Infos>
                <h1>{{ mercury.name }}</h1>
                <p id="text">{{overview.content}}</p>
                <p class="source"><span>Source :</span> 
                    <a id="source" :href="overview.source">Wikipédia</a>
                    <img src="../assets/images/icon-source.svg" alt="Source arrow icon">
                </p>
            </Infos>
        </DescriptionBody>
        <Numbers>
            <Rotation>
                {{mercury.rotation}}
            </Rotation>
            <Revolution>
                {{mercury.revolution}}
            </Revolution>
            <Radius>
                {{mercury.radius}}
            </Radius>
            <Temperature>
                {{mercury.temperature}}
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
            mercury: [],
            overview: [],
            geology: [],
            structure: [],
        }
    },
    created() {
        this.mercury = this.$json.mercury;
        this.overview = this.$json.mercury.overview;
        this.geology = this.$json.mercury.geology;
        this.structure = this.$json.mercury.structure;
    },
    mounted() {
        var app = this;
        app.$functions.switchTopic(app);
        app.$functions.activeBtn();
    },
}
</script>