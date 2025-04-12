<template>
  <div class="component-web">
    <div class="sidebar" :class="{ 'hide': isHidden }">
      <img class="TJY-cutout-logo" alt="Logo" :src="TjyCutoutLogo" />
      <div class="name-wrapper text-wrapper">TIM JUSTINA YEUNG</div>
      <div class="text-links-container">
        <div class="text-wrapper">About</div>
        <div class="text-wrapper">Contact</div>
        <a class="text-wrapper" href="https://www.linkedin.com/in/timjustina/" target="_blank"
          rel="noopener noreferrer">Linkedin</a>
        <div class="text-wrapper">Portfolio</div>
      </div>
    </div>
    <div class="main-content">
      <p>Multiplatform Design for Home Medication Solution</p>
      <div class="body-text">
        <p>
          The homing pigeon is a variety of domestic pigeon (Columba livia domestica), selectively bred for its ability
          to
          find its way home over extremely long distances. Because of this skill, homing pigeons were used to carry
          messages, a practice referred to as "pigeon post". Until the introduction of telephones, they were used
          commercially to deliver communication; when used during wars, they were called "war pigeons".
        </p>

        <p>
          The homing pigeon is also called a mail pigeon or messenger, and colloquially a homer. Perhaps most commonly,
          the homing pigeon is called a carrier pigeon; this nomenclature can be confusing, though,
          since it is distinct from the English carrier, an ancient breed of fancy pigeon.
        </p>

        <p>
          The domestic pigeon is derived from the wild rock dove (Columba livia sspp.); the rock dove has an innate
          homing
          ability, meaning that it will generally return to its nest using magnetoreception.
        </p>
      </div>
      <p>Miau miau</p>
      <div class="body-text">
        <p>
          The wildcat is a species complex comprising two small wild cat species: the European wildcat (Felis
          silvestris)
          and the African wildcat (F. lybica). The European wildcat inhabits forests in Europe, Anatolia and the
          Caucasus,
          while the African wildcat inhabits semi-arid landscapes and steppes in Africa, the Arabian Peninsula, Central
          Asia, into western India and western China. The wildcat species differ in fur pattern, tail, and size: the
          European wildcat has long fur and a bushy tail with a rounded tip; the smaller African wildcat is more faintly
          striped, has short sandy-gray fur and a tapering tail; the Asiatic wildcat (F. lybica ornata) is spotted.
        </p>
        <p>
          The wildcat and the other members of the cat family had a common ancestor about 10–15 million years ago.
          The
          European wildcat evolved during the Cromerian Stage about 866,000 to 478,000 years ago; its direct ancestor
          was
          Felis lunensis. The silvestris and lybica lineages probably diverged about 173,000 years ago.
        </p>
        <p>
          The wildcat is categorized as Least Concern on the IUCN Red List since 2002, since it is widely distributed in
          a
          stable global population exceeding 20,000 mature individuals. Some local populations are threatened by
          introgressive hybridisation with the domestic cat (F. catus), contagious disease, vehicle collisions and
          persecution.
        </p>
        <p>
          The association of African wildcats and humans appears to have developed along with the establishment of
          settlements during the Neolithic Revolution, when rodents in grain stores of early farmers attracted wildcats.
          This association ultimately led to it being tamed and domesticated: the domestic cat is the direct descendant
          of
          the African wildcat. It was one of the revered cats in ancient Egypt. The European wildcat has been the
          subject of mythology and literature.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TjyCutoutLogo from './assets/TjyCutoutLogo.svg';

export default {
  name: 'ComponentWeb',
  data() {
    return {
      TjyCutoutLogo,
      isHidden: false,
      lastScrollY: window.scrollY,
      currentScrollY: 0
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  },
  beforeUnmount() {  // Changed from unmounted to beforeUnmount
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.currentScrollY = window.scrollY;

      if (this.currentScrollY > this.lastScrollY) {
        // Scrolling down
        this.isHidden = true;
      } else if (this.currentScrollY < this.lastScrollY) {
        // Scrolling up
        this.isHidden = false;
      }

      // Update the scroll position after a small delay
      setTimeout(() => {
        this.lastScrollY = this.currentScrollY;
      }, 50);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow-y: scroll;
  background-color: #2f1d36;
  scroll-behavior: smooth;
  /* Add background color to body */
}

#app {
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  max-width: max-content;
  /* Prevent scroll on the app */
}

.component-web {
  display: flex;
  height: 100vh;
  width: 100%;
}

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background-color: #ece5e5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.main-content {
  margin-left: 300px;
  width: calc(100% - 300px);
  height: 100vh;
  overflow-y: visible;
  background-color: #2f1d36;
  color: #9b9db3;
  font-family: "Maven Pro", sans-serif;
  font-size: 20px;
  font-weight: 600;
}

.main-content p {
  margin-bottom: 1rem;
  /* Adds space after paragraphs */
}

.TJY-cutout-logo {
  height: 131px;
  width: auto;
  margin-bottom: 16px;
}

.text-wrapper {
  font-family: "Maven Pro", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #0914c5;
  white-space: nowrap;
}

.body-text {
  font-size: 16px;
  font-weight: 300;
  /* Adds space after body-text sections */
}

/* Mobile Styles */
@media (max-width: 768px) {
  #app {
    padding: 0;
    /* Allow scroll on the app */
  }

  .component-web {
    flex-direction: column;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    background-color: #ece5e5;
    display: flex;
    transform: translateY(0);
    transition: transform 0.3s ease-in-out;
  }

  .sidebar.hide {
    transform: translateY(-100%);
  }

  .TJY-cutout-logo {
    height: 60px;
    width: auto;
    margin-bottom: 0;
  }

  .text-wrapper {
    font-size: 18px;
  }

  .main-content {
    margin-left: 0;
    width: 100%;
    font-size: 16px;
    height: auto;
    padding: 16px;
    padding-top: 200px;
  }

  .text-links-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Style for the text links */
  .text-links-container .text-wrapper {
    margin: 0 5px;
    white-space: nowrap;
  }

  .name-wrapper {
    align-self: flex-start;
    text-align: left;
    width: 100%;
    order: -1;
    /* Move to top in mobile view */
  }

  .body-text {
    font-size: 14px;
  }
}
</style>