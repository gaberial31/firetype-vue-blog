<template>
  <footer class="footer">
    <div class="footer__wrapper container">
      <div class="footer__left">
        <div class="footer__col-1">
          <FooterLogo class="footer__logo" />
          <FooterSocialList class="footer__social-icons" />
        </div>
        <div class="footer__col-2">
          <nav class="footer__nav">
            <FooterNavList />
          </nav>
        </div>
      </div>
      <div class="footer__right">
        <p>Copyright © 2022 All right not reserved</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// * Shared components
import FooterLogo from "@/components/ui/Logo/Logo.vue";
import FooterNavList from "@/components/ui/NavList/NavList.vue";

// * Social icons list
import FooterSocialList from "./Socials/Socials.vue";
</script>

<styles lang="sass">
@import "./Footer"
</styles>
