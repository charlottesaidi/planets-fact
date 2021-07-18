
<template>
    <div id="uranus" class="section">
        <DescriptionBody>
            <Image>
                <!-- JS decides either one image or the other -->
                <img class="" id="main_image" src="../assets/images/realist_images/planet-uranus.webp" alt="Planet uranus">
                <img class=" hidden_image" id="internal_image" src="../assets/images/planet-uranus-internal.svg" alt="Planet uranus">
                <!-- and with or without this one -->
                <img id="geology_image" class="hidden_image absolute" src="../assets/images/geology-uranus.png" height="199" width="163" alt="Geology of uranus">
            </Image>
            <Infos>
                <h1>{{ uranus.name }}</h1>
                <p id="text">{{overview.content}}</p>
                <p class="source"><span>Source :</span> 
                    <a id="source" :href="overview.source" target="_blank">Wikipédia</a>
                    <img src="../assets/images/icon-source.svg" alt="Source arrow icon">
                </p>
            </Infos>
        </DescriptionBody>
        <Numbers>
            <Rotation>
                {{uranus.rotation}}
            </Rotation>
            <Revolution>
                {{uranus.revolution}}
            </Revolution>
            <Radius>
                {{uranus.radius}}
            </Radius>
            <Temperature>
                {{uranus.temperature}}
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
            uranus: [],
            overview: [],
            geology: [],
            structure: [],
        }
    },
    created() {
        this.uranus = this.$json.uranus;
        this.overview = this.$json.uranus.overview;
        this.geology = this.$json.uranus.geology;
        this.structure = this.$json.uranus.structure;
    },
    mounted() {
        var app = this;
        app.$functions.switchTopic(app);
        app.$functions.activeBtn();
    },
}
</script>