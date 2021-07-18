import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import datas from './static/data.json'
import DefaultLayout from './layouts/PagesLayout.vue'
import HomeLayout from './layouts/HomeLayout.vue'

const app = createApp(App)
app.use(router)
app.component('default',DefaultLayout)
app.component('home',HomeLayout)

app.config.globalProperties.$functions = {
    switchTopic(app) {
        var overviewBtn = document.getElementById('overview');
        var internalBtn = document.getElementById('internal');
        var geologyBtn = document.getElementById('geology');
        var description = document.getElementById('text');
        var mainImage = document.getElementById('main_image');
        var internImage = document.getElementById('internal_image');
        var geoImage = document.getElementById('geology_image');
        var source = document.getElementById('source');
        var anyLinks = document.getElementsByTagName('a');

        overviewBtn.addEventListener('click', function() {
            if(description.innerHTML != app.overview.content) {
                description.innerHTML = app.overview.content
            }
            if(source.href != app.overview.source) {
                source.href = app.overview.source
            }
            mainImage.classList.remove("hidden_image")
            internImage.classList.add("hidden_image")
            geoImage.classList.add("hidden_image")
        })
        internalBtn.addEventListener('click', function() {
            
            if(description.innerHTML !== app.structure.content) {
                description.innerHTML = app.structure.content
            }
            if(source.href != app.structure.source) {
                source.href = app.structure.source
            }
            mainImage.classList.add("hidden_image")
            internImage.classList.remove("hidden_image")
            geoImage.classList.add("hidden_image")
        })
        geologyBtn.addEventListener('click', function() {
            if(description.innerHTML !== app.geology.content) {
                description.innerHTML = app.geology.content
            }
            if(source.href != app.geology.source) {
                source.href = app.geology.source
            }
            mainImage.classList.remove("hidden_image")
            internImage.classList.add("hidden_image")
            geoImage.classList.remove("hidden_image") 
        })
        anyLinks.forEach(function(el) {
            el.addEventListener('click', function() {
                if(!geoImage.classList.contains("hidden_image")) {
                    geoImage.classList.add("hidden_image")
                }
            }) 
        })
    },
    activeBtn() {
        var btns = document.getElementsByClassName('btn');
    
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }
}
app.config.globalProperties.$json = {
    mercury: datas[0],
    venus: datas[1],
    earth: datas[2],
    mars: datas[3],
    jupiter: datas[4],
    saturn: datas[5],
    uranus: datas[6],
    neptune: datas[7],
}

app.mount('#app')
