<template>
    <div class="main">
      
      <header>
        <div class="nav-wrapper row wrap">
            <p class="logo"><router-link :to="'/planets-fact'">the planets</router-link></p>
            <a class="mobile_nav_trigger" id="mobile_nav_trigger" href="#" data-target="mobile_nav">
              <img src="../assets/images/icon-hamburger.svg" alt="">
            </a>
          <nav>
            <ul id="mobile_nav" class="hide_on_mobile">
              <li>
                <span id="mercury_dot" class="hide_on_med_and_up planet_dot"></span>
                <router-link :to="'/mercury'" class="nav_links">mercury<img class="hide_on_med_and_up icon_chevron" src="../assets/images/icon-chevron.svg" alt=""></router-link>
              </li>
              <li>
                <span id="venus_dot" class="hide_on_med_and_up planet_dot"></span>
                <router-link :to="'/venus'" class="nav_links">venus<img class="hide_on_med_and_up icon_chevron" src="../assets/images/icon-chevron.svg" alt=""></router-link>
              </li>
              <li>
                <span id="earth_dot" class="hide_on_med_and_up planet_dot"></span>
                <router-link :to="'/earth'" class="nav_links">earth<img class="hide_on_med_and_up icon_chevron" src="../assets/images/icon-chevron.svg" alt=""></router-link>
              </li>
              <li>
                <span id="mars_dot" class="hide_on_med_and_up planet_dot"></span>
                <router-link :to="'/mars'" class="nav_links">mars<img class="hide_on_med_and_up icon_chevron" src="../assets/images/icon-chevron.svg" alt=""></router-link>
              </li>
              <li>
                <span id="jupiter_dot" class="hide_on_med_and_up planet_dot"></span>
                <router-link :to="'/jupiter'" class="nav_links">jupiter<img class="hide_on_med_and_up icon_chevron" src="../assets/images/icon-chevron.svg" alt=""></router-link>
              </li>
              <li>
                <span id="saturn_dot" class="hide_on_med_and_up planet_dot"></span>
                <router-link :to="'/saturne'" class="nav_links">saturne<img class="hide_on_med_and_up icon_chevron" src="../assets/images/icon-chevron.svg" alt=""></router-link>
              </li>
              <li>
                <span id="uranus_dot" class="hide_on_med_and_up planet_dot"></span>
                <router-link :to="'/uranus'" class="nav_links">uranus<img class="hide_on_med_and_up icon_chevron" src="../assets/images/icon-chevron.svg" alt=""></router-link>
              </li>
              <li>
                <span id="neptune_dot" class="hide_on_med_and_up planet_dot"></span>
                <router-link :to="'/neptune'" class="nav_links">neptune<img class="hide_on_med_and_up icon_chevron" src="../assets/images/icon-chevron.svg" alt=""></router-link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <div class="content">

        <slot />

      </div>

    </div>
</template>

<script>
export default {
  mounted() {
    var nav_trigger = document.getElementById('mobile_nav_trigger')
    var nav_mobile = document.getElementById(nav_trigger.dataset.target)
    var links = document.getElementsByClassName('nav_links');
    nav_trigger.addEventListener('click', function(e) {
      e.preventDefault()
      this.classList.toggle('opacity')
      nav_mobile.classList.toggle('responsive')
    })
    links.forEach(function(el) {
      el.addEventListener('click', function() {
        if(nav_mobile.classList.contains('responsive')) {
          nav_mobile.classList.remove('responsive')
        }
        if(nav_trigger.classList.contains('opacity')) {
          nav_trigger.classList.remove('opacity')
        }
      })
    })
  }
}
</script>
