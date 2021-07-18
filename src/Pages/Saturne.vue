<template>
    <div id="saturn" class="section">
        <DescriptionBody>
            <Image>
                <!-- JS decides either one image or the other -->
                <img class="" id="main_image" src="../assets/images/planet-saturn.svg" alt="Planet saturn">
                <img class=" hidden_image" id="internal_image" src="../assets/images/planet-saturn-internal.svg" alt="Planet saturn">
                <!-- and with or without this one -->
                <img id="geology_image" class="hidden_image absolute" src="../assets/images/geology-saturn.png" height="199" width="163" alt="Geology of saturn">
            </Image>
            <Infos>
                <h1>{{ saturn.name }}</h1>
                <p id="text">{{overview.content}}</p>
                <p class="source"><span>Source :</span> 
                    <a id="source" :href="overview.source">Wikipédia</a>
                    <img src="../assets/images/icon-source.svg" alt="Source arrow icon">
                </p>
            </Infos>
        </DescriptionBody>
        <Numbers>
            <Rotation>
                {{saturn.rotation}}
            </Rotation>
            <Revolution>
                {{saturn.revolution}}
            </Revolution>
            <Radius>
                {{saturn.radius}}
            </Radius>
            <Temperature>
                {{saturn.temperature}}
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
            saturn: [],
            overview: [],
            geology: [],
            structure: [],
        }
    },
    created() {
        this.saturn = this.$json.saturn;
        this.overview = this.$json.saturn.overview;
        this.geology = this.$json.saturn.geology;
        this.structure = this.$json.saturn.structure;
    },
    mounted() {
        var app = this;
        app.$functions.switchTopic(app);
        app.$functions.activeBtn();
    },
}
</script>