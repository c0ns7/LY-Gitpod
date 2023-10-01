<template>
  <!-- <router-view/> -->
  <header class="header" :class="{ 'scrolled': scrolled }">
    <div class="wrapper">
      <div class="header-inner">

        <a class="logo" href="/">
          <img src="./assets/img/header/Logo.svg" alt="">
        </a>

        <div class="menu">
          <a class="menu-burger" @click="toggleMenu">
            <i class="open" v-show="!isMenuActive"><font-awesome-icon :icon="['fas', 'bars']" /></i>
            <i class="close" v-show="isMenuActive"><font-awesome-icon :icon="['fas', 'xmark']" /></i>
          </a>

          <nav class="menu-nav" :class="{ active: isMenuActive }">
            <a href="#features">
              Features
            </a>

            <a href="#pricing">
              Pricing
            </a>

            <a href="#blog">
              Blog
            </a>

            <a href="#docs">
              Docs
            </a>

            <a href="#changelog">
              Changelog
            </a>

            <a href="#we-hiring">
              We're hiring
            </a>

            <a href="#login" class="menu-login">
              Login
            </a>
          </nav>
        </div>

        <div class="buttons">
          <nav class="buttons-nav">
            <a href="#login">
              Login
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <section class="top">
    <div class="wrapper">
      <div class="top-inner">
        <div class="block-text">
          <span>Always<br>ready-to-code.</span>

          <p>Spin up fresh, automated dev environments for each task, in the cloud, in seconds.</p>

          <div class="workspace">
            <div class="button">
              <a href="#try-now">Try Now</a>
            </div>

            <div class="text">
              <p>Open a workspace.<br>Start from a Git context.</p>
            </div>
          </div>

          <div class="links">
            <nav>
              <a href="#one">
                <img src="./assets/img/top/links/link_one.svg" alt="">
              </a>

              <a href="#two">
                <img src="./assets/img/top/links/link_two.svg" alt="">
              </a>

              <a href="#three">
                <img src="./assets/img/top/links/link_three.svg" alt="">
              </a>
            </nav>
          </div>
        </div>

        <img class="imageTop" src="./assets/img/top/imageTop.png" alt="">
      </div>
    </div>
  </section>

  <main class="main">
    <div class="wrapper">
      <div class="main-inner">
        <div class="up-info">
          <span>Select project,</span>
          <p>check dependencies, checkout branch, view readme.txt, install tools, run build, run test,</p>
          <span>start coding.</span>
        </div>

        <div class="installing-info">
          <div class="block">
            <h3>Think CI/CD for dev environments</h3>
            <p>We invented prebuilds so application code, configuration and infrastructure can all be stored as machine-executable code in your git repositories and applied to dev environments automatically and continuously.</p>
            
            <div class="installing-buttons">
              <nav>
                <a href="#more-on-prebiuilds" class="i-left">More on prebuilds</a>
                <a href="#documentation" class="i-right">Documentation</a>
              </nav>
            </div>
          </div>

          <img src="./assets/img/main/installing-info/i-screen.svg" alt="">
        </div>

        <div class="secure-info">
          <h3>Remote-first. Secure by design.</h3>
          <img src="./assets/img/main/secure-info/s-screen.svg" alt="">
          <p>You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser. Gitpod centralizes all source code and never stores it on insecure machines and networks.</p>

          <div class="secure-buttons">
            <nav>
              <a href="#chrome-extension">
                <img src="./assets/img/main/secure-info/buttons/b-chrome.svg" alt="">
                Chrome Extension
              </a>

              <a href="#firefox-extension">
                <img src="./assets/img/main/secure-info/buttons/b-firefox.svg" alt="">
                Firefox Extension
              </a>
            </nav>
          </div>
        </div>

        <div class="reviews-info">
          <h3>Used by 400,000+ developers.</h3>

          <div class="blocks">
            <nav class="scroller">
                <div class="block" style="height: 160px;">
                  <p class="review">
                    <span>GitPod is incredibly cool.</span>
                    <span>In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.</span>
                  </p>

                  <div class="author">
                    <img src="./assets/img/main/reviews-info/avatars/a-one.svg" alt="">

                    <div class="info">
                      <span class="name">
                        <b>Ben Halpern</b>
                      </span>

                      <p class="developer">
                        Creator and Co-founder <b>@forem</b> and <b>@ThePracticalDev</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="block">
                  <p class="review">
                    <span>Let's say we were overwhelmed how smooth @gitpod workspaces creation & own Docker image for workspaces worked.</span>
                    <span>Plus, installing @code extensions from the store and integrating @gitlab CI. That blew my mind entirely, and that is hard ;)</span>
                  </p>

                  <div class="author">
                    <img src="./assets/img/main/reviews-info/avatars/a-two.svg" alt="">

                    <div class="info">
                      <span class="name">
                        <b>Michael Friedrich</b>
                      </span>

                      <p class="developer">
                        Developer Evangelist <b>@GitLa</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="block" style="height: 160px;">
                  <p class="review">
                    Look at any PR (pull request) in a full coding environment where you can edit, build, and test the PR code, by just prepending "gitpod.io#" to the PR URL. Super useful for reviewing/testing stuff without having to check it out locally!
                  </p>

                  <div class="author">
                    <img src="./assets/img/main/reviews-info/avatars/a-three.svg" alt="">

                    <div class="info">
                      <span class="name">
                        <b>Julius Volz</b>
                      </span>

                      <p class="developer">
                        Creator <b>@PrometheusIO</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="block" style="height: 160px;">
                  <p class="review">
                    I think I’m in love with @gitpod. It’s such a powerful tool. I’ve learned so much in the past week just from stumbling across Github repos that interest me and appending “http://gitpod.io/#” to the URL. A+ tool all around.
                  </p>

                  <div class="author">
                    <img src="./assets/img/main/reviews-info/avatars/a-four.svg" alt="">

                    <div class="info">
                      <span class="name">
                        <b>David Ressler</b>
                      </span>

                      <p class="developer">
                        Engineering Manager <b>@instagram</b>
                      </p>
                    </div>
                  </div>
                </div>
              </nav>
          </div>
        </div>

        <div class="projects-info">
          <nav>
            <a href="#gitlab">
              <img src="./assets/img/main/projects-info/p-gitlab.svg" alt="">
            </a>

            <a href="#freecodecamp">
              <img src="./assets/img/main/projects-info/p-freecodecamp.svg" alt="">
            </a>

            <a href="#dwave">
              <img src="./assets/img/main/projects-info/p-dwave.svg" alt="">
            </a>

            <a href="#google">
              <img src="./assets/img/main/projects-info/p-google.svg" alt="">
            </a>

            <a href="#amazon">
              <img src="./assets/img/main/projects-info/p-amazon.svg" alt="">
            </a>

            <a href="#facebook">
              <img src="./assets/img/main/projects-info/p-facebook.svg" alt="">
            </a>

            <a href="#uber">
              <img src="./assets/img/main/projects-info/p-uber.svg" alt="">
            </a>
            
            <a href="#openai">
              <img src="./assets/img/main/projects-info/p-openai.svg" alt="">
            </a>

            <a href="#intel">
              <img src="./assets/img/main/projects-info/p-intel.svg" alt="">
            </a>

            <a href="#theia">
              <img src="./assets/img/main/projects-info/p-theia.svg" alt="">
            </a>

            <a href="#code">
              <img src="./assets/img/main/projects-info/p-code.svg" alt="">
            </a>

            <a href="#geeks">
              <img src="./assets/img/main/projects-info/p-geeks.svg" alt="">
            </a>
          </nav>
        </div>

        <div class="started-info">
          <h3>Get started now</h3>

          <div class="s-blocks">
            <div class="s-block">
              <h4>Connect Git repository</h4>

              <p>Select a Git provider to start with an existing project from any Git context.</p>

              <div class="s-buttons">
                <nav>
                  <a href="#gitlab" style="background: #FC6D26;">
                    <img src="./assets/img/main/started-info/buttons-left/s-gitlab.svg" alt="">
                    Continue with GitLab
                  </a>

                  <a href="#github" style="background: #000;">
                    <img src="./assets/img/main/started-info/buttons-left/s-github.svg" alt="">
                    Continue with GitHub
                  </a>

                  <a href="#bitbucket" style="background: #2684FF;">
                    <img src="./assets/img/main/started-info/buttons-left/s-bitbuk.svg" alt="">
                    Continue with Bitbucket
                  </a>
                </nav>
              </div>

              <p style="margin-top: 64px;">Or prefix any GitLab, GitHub or Bitbucket URL with</p>

              <span class="link">gitpod.io/#</span>
            </div>

            <div class="s-block">
              <h4>Launch an example workspace</h4>

              <p>Dive into one of our example workspaces</p>

              <div class="s-workspace">
                <nav>
                  <div class="w-block">
                    <img src="./assets/img/main/started-info/buttons-right/w-nodets.svg" alt="">
                    <span>TypeScript</span>
                    <a href="#lauch-workspace">
                      <font-awesome-icon class="w-lw" :icon="['fas', 'rocket']" />
                      <span class="w-lw-off">Launch workspace</span>
                    </a>
                  </div>

                  <div class="w-block">
                    <img src="./assets/img/main/started-info/buttons-right/w-python.svg" alt="">
                    <span>Python</span>
                    <a href="#lauch-workspace">
                      <font-awesome-icon class="w-lw" :icon="['fas', 'rocket']" />
                      <span class="w-lw-off">Launch workspace</span>
                    </a>
                  </div>

                  <div class="w-block">
                    <img src="./assets/img/main/started-info/buttons-right/w-go.svg" alt="">
                    <span>Go</span>
                    <a href="#lauch-workspace">
                      <font-awesome-icon class="w-lw" :icon="['fas', 'rocket']" />
                      <span class="w-lw-off">Launch workspace</span>
                    </a>
                  </div>

                  <div class="w-block">
                    <img src="./assets/img/main/started-info/buttons-right/w-rust.svg" alt="">
                    <span>Rust</span>
                    <a href="#lauch-workspace">
                      <font-awesome-icon class="w-lw" :icon="['fas', 'rocket']" />
                      <span class="w-lw-off">Launch workspace</span>
                    </a>
                  </div>

                  <div class="w-block">
                    <img src="./assets/img/main/started-info/buttons-right/w-java.svg" alt="">
                    <span>Java</span>
                    <a href="#lauch-workspace">
                      <font-awesome-icon class="w-lw" :icon="['fas', 'rocket']" />
                      <span class="w-lw-off">Launch workspace</span>
                    </a>
                  </div>

                  <div class="w-block">
                    <img src="./assets/img/main/started-info/buttons-right/w-svelte.svg" alt="">
                    <span>Svelte</span>
                    <a href="#lauch-workspace">
                      <font-awesome-icon class="w-lw" :icon="['fas', 'rocket']" />
                      <span class="w-lw-off">Launch workspace</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="footer">
    <div class="wrapper">
      <div class="footer-inner">
        <div class="footer-upper">
          <div class="footer-blocks">
            <div class="footer-block">
              <span>Gitpod</span>
              
              <nav>
                <a href="#">Home</a>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Changelog</a>
                <a href="#">Self-Hosted</a>
                <a href="#">Gitpod vs GitHub Codespaces</a>
                <a href="#">Status</a>
              </nav>
            </div>

            <div class="footer-block">
              <span>Developer</span>
              
              <nav>
                <a href="#">Gitting started</a>
                <a href="#">Screensasts</a>
                <a href="#">Blog</a>
                <a href="#">Documentation</a>
                <a href="#">Report a bug</a>
                <a href="#">Community</a>
              </nav>
            </div>

            <div class="footer-block">
              <span>Company</span>
              
              <nav>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
                <a href="#">Media Kit</a>
              </nav>
            </div>

            <div class="footer-block">
              <span>Legal</span>
              
              <nav>
                <a href="#">Imprint</a>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
              </nav>
            </div>
          </div>
        </div>

        <hr>

        <div class="footer-lower">
          <div class="f-left">
            <img src="./assets/img/footer/logo.svg" alt="">
            <span>Copyright © 2021 Gitpod</span>
          </div>

          <div class="f-right">
            <nav>
              <a href="#one">
                <img src="./assets/img/footer/socials/one.svg" alt="">
              </a>

              <a href="#two">
                <img src="./assets/img/footer/socials/two.svg" alt="">
              </a>

              <a href="#three">
                <img src="./assets/img/footer/socials/three.svg" alt="">
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'App',
  setup() {
    const scrolled = ref(false);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      scrolled.value = scrollTop > 0;
    };

    const isMenuActive = ref(false);

    const toggleMenu = () => {
      isMenuActive.value = !isMenuActive.value;
      if (isMenuActive.value) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    };

    const closeMenu = () => {
      isMenuActive.value = false;
      document.body.classList.remove('no-scroll');
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      scrolled,
      isMenuActive,
      toggleMenu,
      closeMenu,
    };
  },
};
</script>

<style>
.no-scroll {
  overflow: hidden;
}
</style>