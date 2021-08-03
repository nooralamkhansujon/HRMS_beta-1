<template>
  <!-- header components  -->
  <Header></Header>
  <!-- side bar components -->
 <Sidebar></Sidebar>
  <!-- content  -->

      <!-- BEGIN: Content-->
    <div class="app-content content ">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <router-view></router-view>
            </div>
        </div>
    </div>
    <!-- END: Content-- -->

    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

 <!-- footer  -->
 <Footer></Footer>
</template>


<script>
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer.vue';

export default {
    components: {
      Header,
      Sidebar,Footer
    }

}
</script>


///composer create-project laravel/laravel hrms
