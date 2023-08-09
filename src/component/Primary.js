import grapesjs, { Editor } from "grapesjs";
import GjsEditor from "@grapesjs/react";
import { bootstrap } from "../constStyle/styles";

const data = [
  {
    id: "top1",
    content: {
      label: "Top Bar 1",
      category: "TopBar",
      content: `<div class="topbar-section section bg-primary2">
      <div class="container">
          <div class="row justify-content-between align-items-center">
              <div class="col-md-auto col-12">
                  <p class="text-white text-center text-md-left my-2">Free shipping for orders over $59 !</p>
              </div>
              <div class="col-auto d-none d-md-block">
                  <div class="topbar-menu">
                      <ul>
                          <li><a href="#" class="text-white"><i class="fa fa-map-marker-alt"></i>Store Location</a></li>
                          <li><a href="#" class="text-white"><i class="fa fa-truck"></i>Order Status</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>`,
    },
  },
  {
    id: "Header1",
    content: {
      label: "Header 1",
      category: "Header",
      content: `    <div class="header-section section bg-white d-none d-xl-block">
      <div class="container">
          <div class="row row-cols-lg-3 align-items-center">

              <!-- Header Language & Currency Start -->
              <div class="col">
                  <ul class="header-lan-curr">
                      <li><a href="#">English</a>
                          <ul class="curr-lan-sub-menu">
                              <li><a href="#">Français</a></li>
                              <li><a href="#">Deutsch</a></li>
                          </ul>
                      </li>
                      <li><a href="#">USD</a>
                          <ul class="curr-lan-sub-menu">
                              <li><a href="#">EUR</a></li>
                              <li><a href="#">GBP</a></li>
                          </ul>
                      </li>
                  </ul>
              </div>
              <!-- Header Language & Currency End -->

              <!-- Header Logo Start -->
              <div class="col">
                  <div class="header-logo justify-content-center">
                      <a href="index.html"><img src="assets/images/logo/logo.webp" alt="Learts Logo"></a>
                  </div>
              </div>
              <!-- Header Logo End -->

              <!-- Header Tools Start -->
              <div class="col">
                  <div class="header-tools justify-content-end">
                      <div class="header-login">
                          <a href="my-account.html"><i class="far fa-user"></i></a>
                      </div>
                      <div class="header-search">
                          <a href="#offcanvas-search" class="offcanvas-toggle"><i class="fas fa-search"></i></a>
                      </div>
                      <div class="header-wishlist">
                          <a href="#offcanvas-wishlist" class="offcanvas-toggle"><span class="wishlist-count">3</span><i class="far fa-heart"></i></a>
                      </div>
                      <div class="header-cart">
                          <a href="#offcanvas-cart" class="offcanvas-toggle"><span class="cart-count">3</span><i class="fas fa-shopping-cart"></i></a>
                      </div>
                  </div>
              </div>
              <!-- Header Tools End -->

          </div>
      </div>

      <!-- Site Menu Section Start -->
      <div class="site-menu-section section">
          <div class="container">
              <nav class="site-main-menu justify-content-center">
                  <ul>
                      <li class="has-children"><a href="#"><span class="menu-text">Home</span></a>
                          <ul class="sub-menu mega-menu">
                              <li>
                                  <a href="#" class="mega-menu-title"><span class="menu-text">HOME GROUP</span></a>
                                  <ul>
                                      <li> <img class="mmh_img " src="assets/images/demo/menu/home-01.webp" alt="home-01"> <a href="index.html"><span class="menu-text">Arts Propelled</span></a></li>
                                      <li> <img class="mmh_img " src="assets/images/demo/menu/home-02.webp" alt="home-02"> <a href="index-2.html"><span class="menu-text">Decor Thriving</span></a></li>
                                      <li> <img class="mmh_img " src="assets/images/demo/menu/home-03.webp" alt="home-03"> <a href="index-3.html"><span class="menu-text">Savvy Delight</span></a></li>
                                      <li> <img class="mmh_img " src="assets/images/demo/menu/home-04.webp" alt="home-04"> <a href="index-4.html"><span class="menu-text">Perfect Escapes</span></a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="index-2.html" class="mega-menu-title"><span class="menu-text">HOME GROUP</span></a>
                                  <ul>
                                      <li> <img class="mmh_img " src="assets/images/demo/menu/home-05.webp" alt="home-05"> <a href="index-5.html"><span class="menu-text">Kitchen Cozy</span></a></li>
                                      <li> <img class="mmh_img " src="assets/images/demo/menu/home-06.webp" alt="home-06"> <a href="index-6.html"><span class="menu-text">Dreamy Designs</span></a></li>
                                      <li> <img class="mmh_img " src="assets/images/demo/menu/home-07.webp" alt="home-07"> <a href="index-7.html"><span class="menu-text">Crispy Recipes</span></a></li>
                                      <li> <img class="mmh_img " src="assets/images/demo/menu/home-08.webp" alt="home-08"> <a href="index-8.html"><span class="menu-text">Decoholic Chic</span></a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="index-2.html" class="mega-menu-title"><span class="menu-text">HOME GROUP</span></a>
                                  <ul>
                                      <li> <img class="mmh_img " src="assets/images/demo/menu/home-9.webp" alt="home-9"> <a href="index-9.html"><span class="menu-text">Reblended Dish</span></a></li>
                                      <li> <img class="mmh_img " src="assets/images/demo/menu/home-10.webp" alt="home-10"> <a href="index-10.html"><span class="menu-text">Craftin House</span></a></li>
                                      <li> <img class="mmh_img " src="assets/images/demo/menu/home-11.webp" alt="home-11"> <a href="index-11.html"><span class="menu-text">Craftswork Biz</span></a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="#" class="menu-banner"><img src="assets/images/banner/menu-banner-1.webp" alt="Home Menu Banner"></a>
                              </li>
                          </ul>
                      </li>
                      <li class="has-children"><a href="#"><span class="menu-text">Shop</span></a>
                          <ul class="sub-menu mega-menu">
                              <li>
                                  <a href="#" class="mega-menu-title"><span class="menu-text">SHOP PAGES</span></a>
                                  <ul>
                                      <li><a href="shop.html"><span class="menu-text">Shop No Sidebar</span></a></li>
                                      <li><a href="shop-left-sidebar.html"><span class="menu-text">Shop Left Sidebar</span></a></li>
                                      <li><a href="shop-right-sidebar.html"><span class="menu-text">Shop Right Sidebar</span></a></li>
                                      <li><a href="shop-fullwidth-no-gutters.html"><span class="menu-text">Shop Fullwidth No Space</span></a></li>
                                      <li><a href="shop-fullwidth.html"><span class="menu-text">Shop Fullwidth No Sidebar</span></a></li>
                                      <li><a href="shop-fullwidth-left-sidebar.html"><span class="menu-text">Shop Fullwidth Left Sidebar</span></a></li>
                                      <li><a href="shop-fullwidth-right-sidebar.html"><span class="menu-text">Shop Fullwidth Right Sidebar</span></a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="#" class="mega-menu-title"><span class="menu-text">PRODUCT PAGES</span></a>
                                  <ul>
                                      <li><a href="product-details.html"><span class="menu-text">Basic</span></a></li>
                                      <li><a href="product-details-fullwidth.html"><span class="menu-text">Fullwidth</span></a></li>
                                      <li><a href="product-details-sticky.html"><span class="menu-text">Sticky Details</span></a></li>
                                      <li><a href="product-details-sidebar.html"><span class="menu-text">Width Sidebar</span></a></li>
                                      <li><a href="product-details-extra-content.html"><span class="menu-text">Extra Content</span></a></li>
                                      <li><a href="product-details-image-variation.html"><span class="menu-text">Variations Images</span></a></li>
                                      <li><a href="product-details-group.html"><span class="menu-text">Bought Together</span></a></li>
                                      <li><a href="product-details-360.html"><span class="menu-text">Product 360</span></a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="#" class="mega-menu-title"><span class="menu-text">PRODUCT & Other PAGES</span></a>
                                  <ul>
                                      <li><a href="product-details-background.html"><span class="menu-text">Product with Background</span></a></li>
                                      <li><a href="shopping-cart.html"><span class="menu-text">Shopping Cart</span></a></li>
                                      <li><a href="checkout.html"><span class="menu-text">Checkout</span></a></li>
                                      <li><a href="order-tracking.html"><span class="menu-text">Order Tracking</span></a></li>
                                      <li><a href="wishlist.html"><span class="menu-text">Wishlist</span></a></li>
                                      <li><a href="login-register.html"><span class="menu-text">Customer Login</span></a></li>
                                      <li><a href="my-account.html"><span class="menu-text">My Account</span></a></li>
                                      <li><a href="lost-password.html"><span class="menu-text">Lost Password</span></a></li>
                                  </ul>
                              </li>
                              <li class="align-self-center">
                                  <a href="#" class="menu-banner"><img src="assets/images/banner/menu-banner-2.webp" alt="Shop Menu Banner"></a>
                              </li>
                          </ul>
                      </li>
                      <li class="has-children"><a href="#"><span class="menu-text">Project</span></a>
                          <ul class="sub-menu">
                              <li><a href="portfolio-3-columns.html"><span class="menu-text">Portfolio 3 Columns</span></a></li>
                              <li><a href="portfolio-4-columns.html"><span class="menu-text">Portfolio 4 Columns</span></a></li>
                              <li><a href="portfolio-5-columns.html"><span class="menu-text">Portfolio 5 Columns</span></a></li>
                              <li><a href="portfolio-details.html"><span class="menu-text">Portfolio Details</span></a></li>
                          </ul>
                      </li>
                      <li class="has-children"><a href="#"><span class="menu-text">Elements</span></a>
                          <ul class="sub-menu mega-menu">
                              <li>
                                  <a href="#" class="mega-menu-title"><span class="menu-text">Column One</span></a>
                                  <ul>
                                      <li><a href="elements-products.html"><span class="menu-text">Product Styles</span></a></li>
                                      <li><a href="elements-products-tabs.html"><span class="menu-text">Product Tabs</span></a></li>
                                      <li><a href="elements-product-sale-banner.html"><span class="menu-text">Product & Sale Banner</span></a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="#" class="mega-menu-title"><span class="menu-text">Column Two</span></a>
                                  <ul>
                                      <li><a href="elements-category-banner.html"><span class="menu-text">Category Banner</span></a></li>
                                      <li><a href="elements-team.html"><span class="menu-text">Team Member</span></a></li>
                                      <li><a href="elements-testimonials.html"><span class="menu-text">Testimonials</span></a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="#" class="mega-menu-title"><span class="menu-text">Column Three</span></a>
                                  <ul>
                                      <li><a href="elements-instagram.html"><span class="menu-text">Instagram</span></a></li>
                                      <li><a href="elements-map.html"><span class="menu-text">Google Map</span></a></li>
                                      <li><a href="elements-icon-box.html"><span class="menu-text">Icon Box</span></a></li>
                                  </ul>
                              </li>
                              <li>
                                  <a href="#" class="mega-menu-title"><span class="menu-text">Column Four</span></a>
                                  <ul>
                                      <li><a href="elements-buttons.html"><span class="menu-text">Buttons</span></a></li>
                                      <li><a href="elements-faq.html"><span class="menu-text">FAQs / Toggles</span></a></li>
                                      <li><a href="elements-brands.html"><span class="menu-text">Brands</span></a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                      <li class="has-children"><a href="#"><span class="menu-text">Blog</span></a>
                          <ul class="sub-menu">
                              <li class="has-children"><a href="blog-right-sidebar.html"><span class="menu-text">Standard Layout</span></a>
                                  <ul class="sub-menu">
                                      <li><a href="blog-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                                      <li><a href="blog-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                                      <li><a href="blog-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                                  </ul>
                              </li>
                              <li class="has-children"><a href="blog-grid-right-sidebar.html"><span class="menu-text">Grid Layout</span></a>
                                  <ul class="sub-menu">
                                      <li><a href="blog-grid-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                                      <li><a href="blog-grid-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                                      <li><a href="blog-grid-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                                  </ul>
                              </li>
                              <li class="has-children"><a href="blog-list-right-sidebar.html"><span class="menu-text">List Layout</span></a>
                                  <ul class="sub-menu">
                                      <li><a href="blog-list-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                                      <li><a href="blog-list-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                                      <li><a href="blog-list-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                                  </ul>
                              </li>
                              <li class="has-children"><a href="blog-masonry-right-sidebar.html"><span class="menu-text">Masonry Layout</span></a>
                                  <ul class="sub-menu">
                                      <li><a href="blog-masonry-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                                      <li><a href="blog-masonry-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                                      <li><a href="blog-masonry-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                                  </ul>
                              </li>
                              <li class="has-children"><a href="blog-details-right-sidebar.html"><span class="menu-text">Single Post Layout</span></a>
                                  <ul class="sub-menu">
                                      <li><a href="blog-details-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                                      <li><a href="blog-details-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                                      <li><a href="blog-details-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                      <li class="has-children"><a href="#"><span class="menu-text">Pages</span></a>
                          <ul class="sub-menu">
                              <li><a href="about-us.html"><span class="menu-text">About us</span></a></li>
                              <li><a href="about-us-2.html"><span class="menu-text">About us 02</span></a></li>
                              <li><a href="contact-us.html"><span class="menu-text">Contact us</span></a></li>
                              <li><a href="coming-soon.html"><span class="menu-text">Coming Soon</span></a></li>
                              <li><a href="404.html"><span class="menu-text">Page 404</span></a></li>
                          </ul>
                      </li>
                  </ul>
              </nav>
          </div>
      </div>
      <!-- Site Menu Section End -->
  </div>`,
    },
  },
  {
    id: "slider1",
    content: {
      label: "Slider 1",
      category: "Slider",
      content: `<div class="home1-slider swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper" style="transition-duration: 0ms;"><div class="home1-slide-item swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-autoplay="5000" data-bg-image="assets/images/slider/home1/slide-3.webp" style="background-image: url(&quot;assets/images/slider/home1/slide-3.webp&quot;); width: 1250px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;" data-swiper-slide-index="2">
                <div class="home1-slide3-content">
                    <h2 class="title">Affectious gifts</h2>
                    <h3 class="sub-title">
                        <img class="left-icon " src="assets/images/slider/home1/slide-2-2.webp" alt="Slide Icon">
                        For friends &amp; family
                        <img class="right-icon " src="assets/images/slider/home1/slide-2-3.webp" alt="Slide Icon">
                    </h3>
                    <div class="link"><a href="shop.html">shop now</a></div>
                </div>
            </div>
            <div class="home1-slide-item swiper-slide swiper-slide-active" data-swiper-autoplay="5000" data-bg-image="assets/images/slider/home1/slide-1.webp" style="background-image: url(&quot;assets/images/slider/home1/slide-1.webp&quot;); width: 1250px; opacity: 1; transform: translate3d(-1250px, 0px, 0px); transition-duration: 0ms;" data-swiper-slide-index="0">
                <div class="home1-slide1-content">
                    <span class="bg"></span>
                    <span class="slide-border"></span>
                    <span class="icon"><img src="assets/images/slider/home1/slide-1-1.webp" alt="Slide Icon"></span>
                    <h2 class="title">Handicraft Shop</h2>
                    <h3 class="sub-title">Just for you</h3>
                    <div class="link"><a href="shop.html">shop now</a></div>
                </div>
            </div>
            <div class="home1-slide-item swiper-slide swiper-slide-next" data-swiper-autoplay="5000" data-bg-image="assets/images/slider/home1/slide-2.webp" style="background-image: url(&quot;assets/images/slider/home1/slide-2.webp&quot;); width: 1250px; opacity: 0; transform: translate3d(-2500px, 0px, 0px); transition-duration: 0ms;" data-swiper-slide-index="1">
                <div class="home1-slide2-content">
                    <span class="bg" data-bg-image="assets/images/slider/home1/slide-2-1.webp" style="background-image: url(&quot;assets/images/slider/home1/slide-2-1.webp&quot;);"></span>
                    <span class="slide-border"></span>
                    <span class="icon">
                        <img src="assets/images/slider/home1/slide-2-2.webp" alt="Slide Icon">
                        <img src="assets/images/slider/home1/slide-2-3.webp" alt="Slide Icon">
                    </span>
                    <h2 class="title">Newly arrived</h2>
                    <h3 class="sub-title">Sale up to <br>10%</h3>
                    <div class="link"><a href="shop.html">shop now</a></div>
                </div>
            </div>
            <div class="home1-slide-item swiper-slide swiper-slide-duplicate-prev" data-swiper-autoplay="5000" data-bg-image="assets/images/slider/home1/slide-3.webp" style="background-image: url(&quot;assets/images/slider/home1/slide-3.webp&quot;); width: 1250px; opacity: 0; transform: translate3d(-3750px, 0px, 0px); transition-duration: 0ms;" data-swiper-slide-index="2">
                <div class="home1-slide3-content">
                    <h2 class="title">Affectious gifts</h2>
                    <h3 class="sub-title">
                        <img class="left-icon " src="assets/images/slider/home1/slide-2-2.webp" alt="Slide Icon">
                        For friends &amp; family
                        <img class="right-icon " src="assets/images/slider/home1/slide-2-3.webp" alt="Slide Icon">
                    </h3>
                    <div class="link"><a href="shop.html">shop now</a></div>
                </div>
            </div>
        <div class="home1-slide-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-autoplay="5000" data-bg-image="assets/images/slider/home1/slide-1.webp" style="background-image: url(&quot;assets/images/slider/home1/slide-1.webp&quot;); width: 1250px; opacity: 0; transform: translate3d(-5000px, 0px, 0px); transition-duration: 0ms;" data-swiper-slide-index="0">
                <div class="home1-slide1-content">
                    <span class="bg"></span>
                    <span class="slide-border"></span>
                    <span class="icon"><img src="assets/images/slider/home1/slide-1-1.webp" alt="Slide Icon"></span>
                    <h2 class="title">Handicraft Shop</h2>
                    <h3 class="sub-title">Just for you</h3>
                    <div class="link"><a href="shop.html">shop now</a></div>
                </div>
            </div></div>
        <div class="home1-slider-prev swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide"><i class="ti-angle-left"></i></div>
        <div class="home1-slider-next swiper-button-next" tabindex="0" role="button" aria-label="Next slide"><i class="ti-angle-right"></i></div>
    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>`,
    },
  },
  {
    id: "Banner1",
    content: {
      label: "Banner 1",
      category: "Banner",
      content: `<div class="section section-fluid section-padding pt-0">
        <div class="container">
            <div class="category-banner1-carousel slick-initialized slick-slider"><button class="slick-prev slick-arrow" style=""><i class="fas fa-long-arrow-alt-left"></i></button><div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 5122px; transform: translate3d(-1970px, 0px, 0px);"><div class="slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style="width: 394px;" tabindex="-1"><div><div class="col" style="width: 100%; display: inline-block;">
                    <div class="category-banner1">
                        <div class="inner">
                            <a href="shop.html" class="image" tabindex="-1"><img src="assets/images/banner/category/banner-s1-3.webp" alt=""></a>
                            <div class="content">
                                <h3 class="title">
                                    <a href="shop.html" tabindex="-1">Kids &amp; Babies</a>
                                    <span class="number">6</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div></div></div><div class="slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style="width: 394px;" tabindex="-1"><div><div class="col" style="width: 100%; display: inline-block;">
                    <div class="category-banner1">
                        <div class="inner">
                            <a href="shop.html" class="image" tabindex="-1"><img src="assets/images/banner/category/banner-s1-4.webp" alt=""></a>
                            <div class="content">
                                <h3 class="title">
                                    <a href="shop.html" tabindex="-1">Kitchen</a>
                                    <span class="number">15</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div></div></div><div class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style="width: 394px;" tabindex="-1"><div><div class="col" style="width: 100%; display: inline-block;">
                    <div class="category-banner1">
                        <div class="inner">
                            <a href="shop.html" class="image" tabindex="-1"><img src="assets/images/banner/category/banner-s1-5.webp" alt=""></a>
                            <div class="content">
                                <h3 class="title">
                                    <a href="shop.html" tabindex="-1">Kniting &amp; Sewing</a>
                                    <span class="number">4</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div></div></div><div class="slick-slide" data-slick-index="0" aria-hidden="true" style="width: 394px;" tabindex="-1"><div><div class="col" style="width: 100%; display: inline-block;">
                    <div class="category-banner1">
                        <div class="inner">
                            <a href="shop.html" class="image" tabindex="-1"><img src="assets/images/banner/category/banner-s1-1.webp" alt=""></a>
                            <div class="content">
                                <h3 class="title">
                                    <a href="shop.html" tabindex="-1">Gift ideas</a>
                                    <span class="number">16</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div></div></div><div class="slick-slide" data-slick-index="1" aria-hidden="true" style="width: 394px;" tabindex="-1"><div><div class="col" style="width: 100%; display: inline-block;">
                    <div class="category-banner1">
                        <div class="inner">
                            <a href="shop.html" class="image" tabindex="-1"><img src="assets/images/banner/category/banner-s1-2.webp" alt=""></a>
                            <div class="content">
                                <h3 class="title">
                                    <a href="shop.html" tabindex="-1">Home Decor</a>
                                    <span class="number">16</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div></div></div><div class="slick-slide slick-current slick-active" data-slick-index="2" aria-hidden="false" style="width: 394px;"><div><div class="col" style="width: 100%; display: inline-block;">
                    <div class="category-banner1">
                        <div class="inner">
                            <a href="shop.html" class="image" tabindex="0"><img src="assets/images/banner/category/banner-s1-3.webp" alt=""></a>
                            <div class="content">
                                <h3 class="title">
                                    <a href="shop.html" tabindex="0">Kids &amp; Babies</a>
                                    <span class="number">6</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div></div></div><div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 394px;"><div><div class="col" style="width: 100%; display: inline-block;">
                    <div class="category-banner1">
                        <div class="inner">
                            <a href="shop.html" class="image" tabindex="0"><img src="assets/images/banner/category/banner-s1-4.webp" alt=""></a>
                            <div class="content">
                                <h3 class="title">
                                    <a href="shop.html" tabindex="0">Kitchen</a>
                                    <span class="number">15</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div></div></div><div class="slick-slide slick-active" data-slick-index="4" aria-hidden="false" style="width: 394px;"><div><div class="col" style="width: 100%; display: inline-block;">
                    <div class="category-banner1">
                        <div class="inner">
                            <a href="shop.html" class="image" tabindex="0"><img src="assets/images/banner/category/banner-s1-5.webp" alt=""></a>
                            <div class="content">
                                <h3 class="title">
                                    <a href="shop.html" tabindex="0">Kniting &amp; Sewing</a>
                                    <span class="number">4</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div></div></div><div class="slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" style="width: 394px;" tabindex="-1"><div><div class="col" style="width: 100%; display: inline-block;">
                    <div class="category-banner1">
                        <div class="inner">
                            <a href="shop.html" class="image" tabindex="-1"><img src="assets/images/banner/category/banner-s1-1.webp" alt=""></a>
                            <div class="content">
                                <h3 class="title">
                                    <a href="shop.html" tabindex="-1">Gift ideas</a>
                                    <span class="number">16</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div></div></div><div class="slick-slide slick-cloned" data-slick-index="6" aria-hidden="true" style="width: 394px;" tabindex="-1"><div><div class="col" style="width: 100%; display: inline-block;">
                    <div class="category-banner1">
                        <div class="inner">
                            <a href="shop.html" class="image" tabindex="-1"><img src="assets/images/banner/category/banner-s1-2.webp" alt=""></a>
                            <div class="content">
                                <h3 class="title">
                                    <a href="shop.html" tabindex="-1">Home Decor</a>
                                    <span class="number">16</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div></div></div><div class="slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" style="width: 394px;" tabindex="-1"><div><div class="col" style="width: 100%; display: inline-block;">
                    <div class="category-banner1">
                        <div class="inner">
                            <a href="shop.html" class="image" tabindex="-1"><img src="assets/images/banner/category/banner-s1-3.webp" alt=""></a>
                            <div class="content">
                                <h3 class="title">
                                    <a href="shop.html" tabindex="-1">Kids &amp; Babies</a>
                                    <span class="number">6</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div></div></div><div class="slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" style="width: 394px;" tabindex="-1"><div><div class="col" style="width: 100%; display: inline-block;">
                    <div class="category-banner1">
                        <div class="inner">
                            <a href="shop.html" class="image" tabindex="-1"><img src="assets/images/banner/category/banner-s1-4.webp" alt=""></a>
                            <div class="content">
                                <h3 class="title">
                                    <a href="shop.html" tabindex="-1">Kitchen</a>
                                    <span class="number">15</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div></div></div><div class="slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" style="width: 394px;" tabindex="-1"><div><div class="col" style="width: 100%; display: inline-block;">
                    <div class="category-banner1">
                        <div class="inner">
                            <a href="shop.html" class="image" tabindex="-1"><img src="assets/images/banner/category/banner-s1-5.webp" alt=""></a>
                            <div class="content">
                                <h3 class="title">
                                    <a href="shop.html" tabindex="-1">Kniting &amp; Sewing</a>
                                    <span class="number">4</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div></div></div></div></div><button class="slick-next slick-arrow" style=""><i class="fas fa-long-arrow-alt-right"></i></button></div>
        </div>
    </div>`,
    },
  },
  {
    id: "grid5",
    content: {
      label: "grid 5",
      category: "List",
      content: `<div class="section section-fluid section-padding pt-0">
        <div class="container">

            <!-- Section Title Start -->
            <div class="section-title text-center">
                <h3 class="sub-title">Shop now</h3>
                <h2 class="title title-icon-both">Shop our best-sellers</h2>
            </div>
            <!-- Section Title End -->

            <!-- Products Start -->
            <div class="products row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">

                <div class="col">
                    <div class="product">
                        <div class="product-thumb">
                            <a href="product-details.html" class="image">
                                <span class="product-badges">
                                    <span class="onsale">-13%</span>
                                </span>
                                <img src="assets/images/product/s328/product-1.webp" alt="Product Image">
                                <img class="image-hover " src="assets/images/product/s328/product-1-hover.webp" alt="Product Image">
                            </a>
                            <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                        </div>
                        <div class="product-info">
                            <h6 class="title"><a href="product-details.html">Boho Beard Mug</a></h6>
                            <span class="price">
                                <span class="old">$45.00</span>
                            <span class="new">$39.00</span>
                            </span>
                            <div class="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" class="product-button hintT-top" data-hint="Quick View"><i class="fas fa-search"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Add to Cart"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Compare"><i class="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="product">
                        <div class="product-thumb">
                            <a href="product-details.html" class="image">
                                <img src="assets/images/product/s328/product-2.webp" alt="Product Image">
                                <img class="image-hover " src="assets/images/product/s328/product-2-hover.webp" alt="Product Image">
                            </a>
                            <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                        </div>
                        <div class="product-info">
                            <h6 class="title"><a href="product-details.html">Motorized Tricycle</a></h6>
                            <span class="price">
                                $35.00
                            </span>
                            <div class="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" class="product-button hintT-top" data-hint="Quick View"><i class="fas fa-search"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Add to Cart"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Compare"><i class="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="product">
                        <div class="product-thumb">
                            <span class="product-badges">
                                <span class="hot">hot</span>
                            </span>
                            <a href="product-details.html" class="image">
                                <img src="assets/images/product/s328/product-3.webp" alt="Product Image">
                                <img class="image-hover " src="assets/images/product/s328/product-3-hover.webp" alt="Product Image">
                            </a>
                            <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                        </div>
                        <div class="product-info">
                            <h6 class="title"><a href="product-details.html">Walnut Cutting Board</a></h6>
                            <span class="price">
                                $100.00
                            </span>
                            <div class="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" class="product-button hintT-top" data-hint="Quick View"><i class="fas fa-search"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Add to Cart"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Compare"><i class="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="product">
                        <div class="product-thumb">
                            <a href="product-details.html" class="image">
                                <span class="product-badges">
                                    <span class="onsale">-27%</span>
                                </span>
                                <img src="assets/images/product/s328/product-4.webp" alt="Product Image">
                                <img class="image-hover " src="assets/images/product/s328/product-4-hover.webp" alt="Product Image">
                            </a>
                            <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                        </div>
                        <div class="product-info">
                            <h6 class="title"><a href="product-details.html">Pizza Plate Tray</a></h6>
                            <span class="price">
                                <span class="old">$30.00</span>
                            <span class="new">$22.00</span>
                            </span>
                            <div class="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" class="product-button hintT-top" data-hint="Quick View"><i class="fas fa-search"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Add to Cart"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Compare"><i class="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="product">
                        <div class="product-thumb">
                            <a href="product-details.html" class="image">
                                <img src="assets/images/product/s328/product-5.webp" alt="Product Image">
                                <img class="image-hover " src="assets/images/product/s328/product-5-hover.webp" alt="Product Image">
                            </a>
                            <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                            <div class="product-options">
                                <ul class="colors">
                                    <li style="background-color: #c2c2c2;">color one</li>
                                    <li style="background-color: #374140;">color two</li>
                                    <li style="background-color: #8ea1b2;">color three</li>
                                </ul>
                                <ul class="sizes">
                                    <li>Large</li>
                                    <li>Medium</li>
                                    <li>Small</li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-info">
                            <h6 class="title"><a href="product-details.html">Minimalist Ceramic Pot</a></h6>
                            <span class="price">
                                $120.00
                            </span>
                            <div class="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" class="product-button hintT-top" data-hint="Quick View"><i class="fas fa-search"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Add to Cart"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Compare"><i class="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="product">
                        <div class="product-thumb">
                            <a href="product-details.html" class="image">
                                <img src="assets/images/product/s328/product-6.webp" alt="Product Image">
                                <img class="image-hover " src="assets/images/product/s328/product-6-hover.webp" alt="Product Image">
                            </a>
                            <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                        </div>
                        <div class="product-info">
                            <h6 class="title"><a href="product-details.html">Clear Silicate Teapot</a></h6>
                            <span class="price">
                                $140.00
                            </span>
                            <div class="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" class="product-button hintT-top" data-hint="Quick View"><i class="fas fa-search"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Add to Cart"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Compare"><i class="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="product">
                        <div class="product-thumb">
                            <a href="product-details.html" class="image">
                                <span class="product-badges">
                                    <span class="hot">hot</span>
                                </span>
                                <img src="assets/images/product/s328/product-7.webp" alt="Product Image">
                                <img class="image-hover " src="assets/images/product/s328/product-7-hover.webp" alt="Product Image">
                            </a>
                            <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                        </div>
                        <div class="product-info">
                            <h6 class="title"><a href="product-details.html">Lucky Wooden Elephant</a></h6>
                            <span class="price">
                                $35.00
                            </span>
                            <div class="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" class="product-button hintT-top" data-hint="Quick View"><i class="fas fa-search"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Add to Cart"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Compare"><i class="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="product">
                        <div class="product-thumb">
                            <a href="product-details.html" class="image">
                                <span class="product-badges">
                                    <span class="outofstock"><i class="far fa-frown"></i></span>
                                <span class="hot">hot</span>
                                </span>
                                <img src="assets/images/product/s328/product-8.webp" alt="Product Image">
                                <img class="image-hover " src="assets/images/product/s328/product-8-hover.webp" alt="Product Image">
                            </a>
                            <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                            <div class="product-options">
                                <ul class="colors">
                                    <li style="background-color: #000000;">color one</li>
                                    <li style="background-color: #b2483c;">color two</li>
                                </ul>
                                <ul class="sizes">
                                    <li>Large</li>
                                    <li>Medium</li>
                                    <li>Small</li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-info">
                            <h6 class="title"><a href="product-details.html">Decorative Christmas Fox</a></h6>
                            <span class="price">
                                $50.00
                            </span>
                            <div class="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" class="product-button hintT-top" data-hint="Quick View"><i class="fas fa-search"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Add to Cart"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Compare"><i class="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="product">
                        <div class="product-thumb">
                            <a href="product-details.html" class="image">
                                <img src="assets/images/product/s328/product-9.webp" alt="Product Image">
                                <img class="image-hover " src="assets/images/product/s328/product-9-hover.webp" alt="Product Image">
                            </a>
                            <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                        </div>
                        <div class="product-info">
                            <h6 class="title"><a href="product-details.html">Aluminum Equestrian</a></h6>
                            <span class="price">
                                $100.00
                            </span>
                            <div class="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" class="product-button hintT-top" data-hint="Quick View"><i class="fas fa-search"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Add to Cart"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Compare"><i class="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="product">
                        <div class="product-thumb">
                            <a href="product-details.html" class="image">
                                <img src="assets/images/product/s328/product-10.webp" alt="Product Image">
                                <img class="image-hover " src="assets/images/product/s328/product-10-hover.webp" alt="Product Image">
                            </a>
                            <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                        </div>
                        <div class="product-info">
                            <h6 class="title"><a href="product-details.html">Fish Cut Out Set</a></h6>
                            <span class="price">
                                $9.00
                            </span>
                            <div class="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" class="product-button hintT-top" data-hint="Quick View"><i class="fas fa-search"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Add to Cart"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Compare"><i class="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="product">
                        <div class="product-thumb">
                            <a href="product-details.html" class="image">
                                <img src="assets/images/product/s328/product-11.webp" alt="Product Image">
                                <img class="image-hover " src="assets/images/product/s328/product-11-hover.webp" alt="Product Image">
                            </a>
                            <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                        </div>
                        <div class="product-info">
                            <h6 class="title"><a href="product-details.html">Electric Egg Blender</a></h6>
                            <span class="price">
                                $200.00
                            </span>
                            <div class="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" class="product-button hintT-top" data-hint="Quick View"><i class="fas fa-search"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Add to Cart"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Compare"><i class="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="product">
                        <div class="product-thumb">
                            <a href="product-details.html" class="image">
                                <img src="assets/images/product/s328/product-12.webp" alt="Product Image">
                                <img class="image-hover " src="assets/images/product/s328/product-12-hover.webp" alt="Product Image">
                            </a>
                            <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                        </div>
                        <div class="product-info">
                            <h6 class="title"><a href="product-details.html">Cape Cottage Playhouse</a></h6>
                            <span class="price">
                                $35.00
                            </span>
                            <div class="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" class="product-button hintT-top" data-hint="Quick View"><i class="fas fa-search"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Add to Cart"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Compare"><i class="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="product">
                        <div class="product-thumb">
                            <a href="product-details.html" class="image">
                                <img src="assets/images/product/s328/product-13.webp" alt="Product Image">
                                <img class="image-hover " src="assets/images/product/s328/product-13-hover.webp" alt="Product Image">
                            </a>
                            <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                            <div class="product-options">
                                <ul class="colors">
                                    <li style="background-color: #ffffff;">color one</li>
                                    <li style="background-color: #01796f;">color two</li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-info">
                            <h6 class="title"><a href="product-details.html">Kernel Popcorn Bowl</a></h6>
                            <span class="price">
                                $25.00
                            </span>
                            <div class="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" class="product-button hintT-top" data-hint="Quick View"><i class="fas fa-search"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Add to Cart"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Compare"><i class="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="product">
                        <div class="product-thumb">
                            <a href="product-details.html" class="image">
                                <span class="product-badges">
                                    <span class="outofstock"><i class="far fa-frown"></i></span>
                                </span>
                                <img src="assets/images/product/s328/product-14.webp" alt="Product Image">
                                <img class="image-hover " src="assets/images/product/s328/product-14-hover.webp" alt="Product Image">
                            </a>
                            <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                            <div class="product-options">
                                <ul class="colors">
                                    <li style="background-color: #000000;">color one</li>
                                    <li style="background-color: #ffffff;">color two</li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-info">
                            <h6 class="title"><a href="product-details.html">Abstract Folded Pots</a></h6>
                            <span class="price">
                                $50.00 - $55.00
                            </span>
                            <div class="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" class="product-button hintT-top" data-hint="Quick View"><i class="fas fa-search"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Add to Cart"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Compare"><i class="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="product">
                        <div class="product-thumb">
                            <a href="product-details.html" class="image">
                                <img src="assets/images/product/s328/product-15.webp" alt="Product Image">
                                <img class="image-hover " src="assets/images/product/s328/product-15-hover.webp" alt="Product Image">
                            </a>
                            <a href="wishlist.html" class="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i class="far fa-heart"></i></a>
                        </div>
                        <div class="product-info">
                            <h6 class="title"><a href="product-details.html">Brush &amp; Dustpan Set</a></h6>
                            <span class="price">
                                $9.00
                            </span>
                            <div class="product-buttons">
                                <a href="#quickViewModal" data-bs-toggle="modal" class="product-button hintT-top" data-hint="Quick View"><i class="fas fa-search"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Add to Cart"><i class="fas fa-shopping-cart"></i></a>
                                <a href="#" class="product-button hintT-top" data-hint="Compare"><i class="fas fa-random"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- Products End -->

        </div>
    </div>`,
    },
  },
  {
    id: "footer1",
    content: {
      label: "Footer 1",
      category: "Footer",
      content: `<div class="footer1-section section section-padding">
        <div class="container">
            <div class="row text-center row-cols-1">

                <div class="footer1-logo col text-center">
                    <img src="assets/images/logo/logo.webp" alt="">
                </div>

                <div class="footer1-menu col">
                    <ul class="widget-menu justify-content-center">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Store location</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Policy</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div class="footer1-subscribe d-flex flex-column col">
                    <form id="mc-form" class="mc-form widget-subscibe" novalidate="true">
                        <input id="mc-email" autocomplete="off" type="email" placeholder="Enter your e-mail address" name="EMAIL">
                        <button id="mc-submit" class="btn btn-dark">subscibe</button>
                    </form>
                    <!-- mailchimp-alerts Start -->
                    <div class="mailchimp-alerts text-centre">
                        <div class="mailchimp-submitting"></div><!-- mailchimp-submitting end -->
                        <div class="mailchimp-success text-success"></div><!-- mailchimp-success end -->
                        <div class="mailchimp-error text-danger"></div><!-- mailchimp-error end -->
                    </div><!-- mailchimp-alerts end -->
                </div>
                <div class="footer1-social col">
                    <ul class="widget-social justify-content-center">
                        <li class="hintT-top" data-hint="Twitter"> <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a></li>
                        <li class="hintT-top" data-hint="Facebook"> <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                        <li class="hintT-top" data-hint="Instagram"> <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                        <li class="hintT-top" data-hint="Youtube"> <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
                <div class="footer1-copyright col">
                    <p class="copyright">© 2023 learts. All Rights Reserved | <strong>(+00) 123 567990</strong> | <a href="mailto:contact@learts.com">contact@learts.com</a></p>
                </div>

            </div>
        </div>
    </div>`,
    },
  },
  {
    id: "loginregister1",
    content: {
      label: "Login and Register",
      category: "Login & Register",
      content: `<div class="section section-padding xcustom-mobil-menu-padding">
    <div class="container">
        
        <div class="row g-0 customLoginRegisterWeb">
            <div class="col-lg-6">
                <div class="user-login-register bg-light">
                    <div class="login-register-title">
                        <h2 class="title">Giriş Yap</h2>
                        <p class="desc">Seni tekrar aramızda görmek çok güzel!</p>
                    </div>
                    <div class="login-register-form">
<form action="/giris-yap" id="signInForm" method="post" data-validate="1" novalidate="novalidate"><input name="__RequestVerificationToken" type="hidden" value="KvTy3E1j16Zf1jbjPrM41lwUT3koJdrN03Ss6pRgTfk98ev6VyUvi50eArBtV57FClvoSsDeOLCXmw08jKVN0lKBNQwyA8tTvxAgawjuH241">                            <div class="row learts-mb-n50">
                                <div class="col-12 learts-mb-50 loginTypePhone">
                                    <input type="tel" placeholder="Telefon Numaranız">
                                </div>
                                <div class="col-12 learts-mb-50 loginTypeNorm">
                                    <input class="form-control " data-validation-message="Kullanıcı Adı boş geçilemez." data-validation-required="1" id="signInUserMail" max-length="100" name="signInUserMail" placeholder="Kullanıcı Adı ya da E-Posta" type="email" value="">
                                </div>
                                <div class="col-12 learts-mb-20 loginTypeNorm">
                                    <input class="form-control " data-validation-message="Şifre boş geçilemez." data-validation-required="1" id="signInUserPassword" name="signInUserPassword" placeholder="Şifre" type="password">
                                </div>
                                <div class="col-12 text-center learts-mb-10">
                                    <button class="btn btn-dark btn-outline-hover-dark btnSignInTrigger" type="submit">Giriş Yap</button>
                                </div>
                                <div class="col-12 learts-mb-40">
                                    <div class="row learts-mb-n20">
                                        <div class="col-12 learts-mb-0 loginRememberMe" style="">
                                            <div class="form-check">
                                                
                                                <input class="form-check-input" data-val="true" data-val-required="The RememberMe field is required." id="RememberMe" name="RememberMe" type="checkbox" value="true"><input name="RememberMe" type="hidden" value="false">
                                                <label class="form-check-label" for="RememberMe">Beni hatırla</label>
                                            </div>
                                        </div>
                                        <div class="col-12 learts-mb-20 loginForgotPass">
                                            <a href="/sifremi-unuttum" class="fw-400" style="">Şifremi unuttum</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 learts-mb-20 loginWSocialMedia">
                                        <span class="col-12 col-lg-6"><a href="/google-giris-yap"> <i class="fab fa-google"></i> Google ile giriş yapın </a></span>
                                                                            <span class="col-12 col-lg-6"><a href="/facebook-giris-yap"> <i class="fab fa-facebook-f"></i> Facebook ile giriş yapın </a></span>
                                    <span class="col-12 col-lg-6 norm"><a href="" onclick="return false;"> <i class="fas fa-user-circle"></i> Kullanıcı adınızla giriş yapın </a></span>
                                </div>
                            </div>
</form>                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="user-login-register">
                    <div class="login-register-title">
                        <h2 class="title">Üye Ol</h2>
                        <p class="desc">Hesabın yoksa, hemen üye ol!</p>
                    </div>
                    <div class="login-register-form">
<form action="/kayit-ol" id="RegisterForm" method="post" data-validate="1" novalidate="novalidate"><input name="__RequestVerificationToken" type="hidden" value="UCL3ioqJvVJtpaBAmkenzO9VSnfSQUI-gFywEFGXQ57tlx9DN12VC5YI_lGn0YfkeqR28QeWPypthDomM7GGDZwU5ew7pCoDn4_FEHiIgEU1">                            <div class="row learts-mb-n50">
                                <div class="col-12 learts-mb-20">
                                    <label for="KayitOlKullaniciAdSoyad">Ad Soyad<abbr class="required">*</abbr></label>
                                    <input class="form-control " data-validation-message="Ad soyad boş geçilemez." data-validation-required="1" id="KayitOlKullaniciAdSoyad" max-length="100" name="KayitOlKullaniciAdSoyad" type="text" value="">
                                </div>
                                <div class="col-12 learts-mb-20">
                                    <label for="KayitOlEPosta">E-Posta Adresi<abbr class="required">*</abbr></label>
                                    <input class="form-control " data-validation-message="E-posta boş geçilemez." data-validation-messages="{ &quot;email&quot; : &quot;E-posta uygun formatlı değil.&quot;}" data-validation-regex-type="email" data-validation-required="1" id="KayitOlEPosta" max-length="100" name="KayitOlEPosta" type="text" value="">
                                </div>
                                <div class="col-12 learts-mb-20">
                                    <label for="KayitOlSifre">Şifre<abbr class="required">*</abbr></label>
                                    <input autocomplete="current-password" class="form-control " data-validation-message="Şifre boş geçilemez." data-validation-required="1" id="KayitOlSifre" name="KayitOlSifre" placeholder="Şifre" type="password">
                                </div>
                                <div class="col-12 learts-mb-20">
                                    <label for="KayitOlSifreTekrar">Tekrar Şifre<abbr class="required">*</abbr></label>
                                    <input autocomplete="current-password" class="form-control " data-validation-message="Şifre Tekrarı boş geçilemez" data-validation-messages="{&quot;equalTo&quot; : &quot;Şifrelerin aynı olması gerekmektedir.&quot; }" data-validation-required="1" data-validation-rules="{ &quot;equalTo&quot; : &quot;#KayitOlSifre&quot; }" id="KayitOlSifreTekrar" name="KayitOlSifreTekrar" placeholder="Şifre (Tekrarı)" type="password">
                                </div>
                                <div class="col-12 learts-mb-0 registerCheckbox" style="">
                                    <div class="form-check">
                                        <input class="form-check-input UyelikSozlesmesiWeb" data-val="true" data-val-required="The UyelikSozlesmesi field is required." id="UyelikSozlesmesi" name="UyelikSozlesmesi" type="checkbox" value="true"><input name="UyelikSozlesmesi" type="hidden" value="false">
                                        <label class="form-check-label" for="UyelikSozlesmesi">Paylaştığım verilerimin <a href="/sozlesmeler-ve-kvkk" target="_blank">Aydınlatma Metni</a> kapsamında işleneceğini anladım ve kabul ediyorum. Üyelik sözleşmesini okudum ve onaylıyorum.<abbr class="required">*</abbr></label>

                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" data-val="true" data-val-required="The KampanyaveDuyuruBildirimOnay field is required." id="KampanyaveDuyuruBildirimOnay" name="KampanyaveDuyuruBildirimOnay" type="checkbox" value="true"><input name="KampanyaveDuyuruBildirimOnay" type="hidden" value="false">
                                        <label class="form-check-label" for="KampanyaveDuyuruBildirimOnay">
                                            İndirim ve duyurulardan eposta ve diğer yollarla haberdar olmak istiyorum.
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12 text-center learts-mb-50">
                                    <button class="btn btn-dark btn-outline-hover-dark btnSignUpTrigger btnCustomSignUp" disabled="">Üye Ol</button>
                                </div>
                            </div>
</form>                    </div>
                </div>
            </div>
        </div>
        

</div>`,
    },
  },
  {
    id: "footer2",
    content: {
      label: "Footer 2",
      category: "Footer",
      content: `<div class="footer2-section section section-padding">
        <div class="container">
            <div class="row learts-mb-n40">

                <div class="col-lg-6 learts-mb-40">
                    <div class="widget-about">
                        <img src="assets/images/logo/logo-2.webp" alt="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque recusandae commodi mollitia facere iure nisi, laudantium quis quas perferendis a minus dolores.</p>
                    </div>
                </div>

                <div class="col-lg-4 learts-mb-40">
                    <div class="row">
                        <div class="col">
                            <ul class="widget-list">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Store location</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Orders</a></li>
                            </ul>
                        </div>
                        <div class="col">
                            <ul class="widget-list">
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Support Policy</a></li>
                                <li><a href="#">Size Guide</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-2 learts-mb-40">
                    <ul class="widget-list">
                        <li> <i class="fab fa-twitter"></i> <a href="https://www.twitter.com/">Twitter</a></li>
                        <li> <i class="fab fa-facebook-f"></i> <a href="https://www.facebook.com/">Facebook</a></li>
                        <li> <i class="fab fa-instagram"></i> <a href="https://www.instagram.com/">Instagram</a></li>
                        <li> <i class="fab fa-youtube"></i> <a href="https://www.youtube.com/">Youtube</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
    <div class="footer2-copyright section">
        <div class="container">
            <p class="copyright text-center">© 2023 learts. All Rights Reserved</p>
        </div>
    </div>`,
    },
  },
  {
    id: "header2",
    content: {
      label: "Header 2",
      category: "Header",
      content: `<div class="header-section section section-fluid bg-white d-none d-xl-block">
        <div class="container">
            <div class="row align-items-center">

                <!-- Header Logo Start -->
                <div class="col-auto">
                    <div class="header-logo">
                        <a href="index.html"><img src="assets/images/logo/logo-2.webp" alt="Learts Logo"></a>
                    </div>
                </div>
                <!-- Header Logo End -->

                <!-- Search Start -->
                <div class="col-auto me-auto">
                    <nav class="site-main-menu site-main-menu-left menu-height-100 justify-content-center" style="position: relative;">
                        <ul>
                            <li class="has-children" style="position: relative;"><a href="#"><span class="menu-text">Home</span></a>
                                <ul class="sub-menu mega-menu" style="left:-225px !important">
                                    <li>
                                        <a href="#" class="mega-menu-title"><span class="menu-text">HOME GROUP</span></a>
                                        <ul>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-01.webp" alt="home-01"> <a href="index.html"><span class="menu-text">Arts Propelled</span></a></li>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-02.webp" alt="home-02"> <a href="index-2.html"><span class="menu-text">Decor Thriving</span></a></li>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-03.webp" alt="home-03"> <a href="index-3.html"><span class="menu-text">Savvy Delight</span></a></li>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-04.webp" alt="home-04"> <a href="index-4.html"><span class="menu-text">Perfect Escapes</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="index-2.html" class="mega-menu-title"><span class="menu-text">HOME GROUP</span></a>
                                        <ul>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-05.webp" alt="home-05"> <a href="index-5.html"><span class="menu-text">Kitchen Cozy</span></a></li>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-06.webp" alt="home-06"> <a href="index-6.html"><span class="menu-text">Dreamy Designs</span></a></li>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-07.webp" alt="home-07"> <a href="index-7.html"><span class="menu-text">Crispy Recipes</span></a></li>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-08.webp" alt="home-08"> <a href="index-8.html"><span class="menu-text">Decoholic Chic</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="index-2.html" class="mega-menu-title"><span class="menu-text">HOME GROUP</span></a>
                                        <ul>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-9.webp" alt="home-9"> <a href="index-9.html"><span class="menu-text">Reblended Dish</span></a></li>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-10.webp" alt="home-10"> <a href="index-10.html"><span class="menu-text">Craftin House</span></a></li>
                                            <li> <img class="mmh_img " src="assets/images/demo/menu/home-11.webp" alt="home-11"> <a href="index-11.html"><span class="menu-text">Craftswork Biz</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="menu-banner"><img src="assets/images/banner/menu-banner-1.webp" alt="Home Menu Banner"></a>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-children" style="position: relative;"><a href="#"><span class="menu-text">Shop</span></a>
                                <ul class="sub-menu mega-menu" style="left:-325.6171875px !important">
                                    <li>
                                        <a href="#" class="mega-menu-title"><span class="menu-text">SHOP PAGES</span></a>
                                        <ul>
                                            <li><a href="shop.html"><span class="menu-text">Shop No Sidebar</span></a></li>
                                            <li><a href="shop-left-sidebar.html"><span class="menu-text">Shop Left Sidebar</span></a></li>
                                            <li><a href="shop-right-sidebar.html"><span class="menu-text">Shop Right Sidebar</span></a></li>
                                            <li><a href="shop-fullwidth-no-gutters.html"><span class="menu-text">Shop Fullwidth No Space</span></a></li>
                                            <li><a href="shop-fullwidth.html"><span class="menu-text">Shop Fullwidth No Sidebar</span></a></li>
                                            <li><a href="shop-fullwidth-left-sidebar.html"><span class="menu-text">Shop Fullwidth Left Sidebar</span></a></li>
                                            <li><a href="shop-fullwidth-right-sidebar.html"><span class="menu-text">Shop Fullwidth Right Sidebar</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="mega-menu-title"><span class="menu-text">PRODUCT PAGES</span></a>
                                        <ul>
                                            <li><a href="product-details.html"><span class="menu-text">Basic</span></a></li>
                                            <li><a href="product-details-fullwidth.html"><span class="menu-text">Fullwidth</span></a></li>
                                            <li><a href="product-details-sticky.html"><span class="menu-text">Sticky Details</span></a></li>
                                            <li><a href="product-details-sidebar.html"><span class="menu-text">Width Sidebar</span></a></li>
                                            <li><a href="product-details-extra-content.html"><span class="menu-text">Extra Content</span></a></li>
                                            <li><a href="product-details-image-variation.html"><span class="menu-text">Variations Images</span></a></li>
                                            <li><a href="product-details-group.html"><span class="menu-text">Bought Together</span></a></li>
                                            <li><a href="product-details-360.html"><span class="menu-text">Product 360</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="mega-menu-title"><span class="menu-text">PRODUCT &amp; Other PAGES</span></a>
                                        <ul>
                                            <li><a href="product-details-background.html"><span class="menu-text">Product with Background</span></a></li>
                                            <li><a href="shopping-cart.html"><span class="menu-text">Shopping Cart</span></a></li>
                                            <li><a href="checkout.html"><span class="menu-text">Checkout</span></a></li>
                                            <li><a href="order-tracking.html"><span class="menu-text">Order Tracking</span></a></li>
                                            <li><a href="wishlist.html"><span class="menu-text">Wishlist</span></a></li>
                                            <li><a href="login-register.html"><span class="menu-text">Customer Login</span></a></li>
                                            <li><a href="my-account.html"><span class="menu-text">My Account</span></a></li>
                                            <li><a href="lost-password.html"><span class="menu-text">Lost Password</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="align-self-center">
                                        <a href="#" class="menu-banner"><img src="assets/images/banner/menu-banner-2.webp" alt="Shop Menu Banner"></a>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-children"><a href="#"><span class="menu-text">Project</span></a>
                                <ul class="sub-menu">
                                    <li><a href="portfolio-3-columns.html"><span class="menu-text">Portfolio 3 Columns</span></a></li>
                                    <li><a href="portfolio-4-columns.html"><span class="menu-text">Portfolio 4 Columns</span></a></li>
                                    <li><a href="portfolio-5-columns.html"><span class="menu-text">Portfolio 5 Columns</span></a></li>
                                    <li><a href="portfolio-details.html"><span class="menu-text">Portfolio Details</span></a></li>
                                </ul>
                            </li>
                            <li class="has-children" style="position: relative;"><a href="#"><span class="menu-text">Elements</span></a>
                                <ul class="sub-menu mega-menu" style="left:-539.8984375px !important">
                                    <li>
                                        <a href="#" class="mega-menu-title"><span class="menu-text">Column One</span></a>
                                        <ul>
                                            <li><a href="elements-products.html"><span class="menu-text">Product Styles</span></a></li>
                                            <li><a href="elements-products-tabs.html"><span class="menu-text">Product Tabs</span></a></li>
                                            <li><a href="elements-product-sale-banner.html"><span class="menu-text">Product &amp; Sale Banner</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="mega-menu-title"><span class="menu-text">Column Two</span></a>
                                        <ul>
                                            <li><a href="elements-category-banner.html"><span class="menu-text">Category Banner</span></a></li>
                                            <li><a href="elements-team.html"><span class="menu-text">Team Member</span></a></li>
                                            <li><a href="elements-testimonials.html"><span class="menu-text">Testimonials</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="mega-menu-title"><span class="menu-text">Column Three</span></a>
                                        <ul>
                                            <li><a href="elements-instagram.html"><span class="menu-text">Instagram</span></a></li>
                                            <li><a href="elements-map.html"><span class="menu-text">Google Map</span></a></li>
                                            <li><a href="elements-icon-box.html"><span class="menu-text">Icon Box</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" class="mega-menu-title"><span class="menu-text">Column Four</span></a>
                                        <ul>
                                            <li><a href="elements-buttons.html"><span class="menu-text">Buttons</span></a></li>
                                            <li><a href="elements-faq.html"><span class="menu-text">FAQs / Toggles</span></a></li>
                                            <li><a href="elements-brands.html"><span class="menu-text">Brands</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-children"><a href="#"><span class="menu-text">Blog</span></a>
                                <ul class="sub-menu">
                                    <li class="has-children align-left"><a href="blog-right-sidebar.html"><span class="menu-text">Standard Layout</span></a>
                                        <ul class="sub-menu">
                                            <li><a href="blog-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                                            <li><a href="blog-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                                            <li><a href="blog-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="has-children align-left"><a href="blog-grid-right-sidebar.html"><span class="menu-text">Grid Layout</span></a>
                                        <ul class="sub-menu">
                                            <li><a href="blog-grid-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                                            <li><a href="blog-grid-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                                            <li><a href="blog-grid-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="has-children align-left"><a href="blog-list-right-sidebar.html"><span class="menu-text">List Layout</span></a>
                                        <ul class="sub-menu">
                                            <li><a href="blog-list-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                                            <li><a href="blog-list-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                                            <li><a href="blog-list-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="has-children align-left"><a href="blog-masonry-right-sidebar.html"><span class="menu-text">Masonry Layout</span></a>
                                        <ul class="sub-menu">
                                            <li><a href="blog-masonry-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                                            <li><a href="blog-masonry-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                                            <li><a href="blog-masonry-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="has-children align-left"><a href="blog-details-right-sidebar.html"><span class="menu-text">Single Post Layout</span></a>
                                        <ul class="sub-menu">
                                            <li><a href="blog-details-right-sidebar.html"><span class="menu-text">Right Sidebar</span></a></li>
                                            <li><a href="blog-details-left-sidebar.html"><span class="menu-text">Left Sidebar</span></a></li>
                                            <li><a href="blog-details-fullwidth.html"><span class="menu-text">Full Width</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-children"><a href="#"><span class="menu-text">Pages</span></a>
                                <ul class="sub-menu">
                                    <li><a href="about-us.html"><span class="menu-text">About us</span></a></li>
                                    <li><a href="about-us-2.html"><span class="menu-text">About us 02</span></a></li>
                                    <li><a href="contact-us.html"><span class="menu-text">Contact us</span></a></li>
                                    <li><a href="coming-soon.html"><span class="menu-text">Coming Soon</span></a></li>
                                    <li><a href="404.html"><span class="menu-text">Page 404</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <!-- Search End -->

                <!-- Search Start -->
                <div class="col-auto d-none d-xl-block">
                    <div class="header2-search">
                        <form action="#">
                            <input type="text" placeholder="Search...">
                            <button class="btn"><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
                <!-- Search End -->

                <!-- Header Tools Start -->
                <div class="col-auto">
                    <div class="header-tools justify-content-end">
                        <div class="header-login">
                            <a href="my-account.html"><i class="far fa-user"></i></a>
                        </div>
                        <div class="header-wishlist">
                            <a href="#offcanvas-wishlist" class="offcanvas-toggle"><span class="wishlist-count">3</span><i class="far fa-heart"></i></a>
                        </div>
                        <div class="header-cart">
                            <a href="#offcanvas-cart" class="offcanvas-toggle"><span class="cart-count">3</span><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
                <!-- Header Tools End -->

            </div>
        </div>

    </div>`,
    },
  },
  {
    id: "profil1",
    content: {
      label: "Profile 1",
      category: "Profile 1",
      content: `<div class="topbar-section section bg-primary2">
      <div class="container">
          <div class="row justify-content-between align-items-center">
              <div class="col-md-auto col-12">
                  <p class="text-white text-center text-md-left my-2">Free shipping for orders over $59 !</p>
              </div>
              <div class="col-auto d-none d-md-block">
                  <div class="topbar-menu">
                      <ul>
                          <li><a href="#" class="text-white"><i class="fa fa-map-marker-alt"></i>Store Location</a></li>
                          <li><a href="#" class="text-white"><i class="fa fa-truck"></i>Order Status</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>`,
    },
  },
  {
    id: "top1",
    content: {
      label: "Top Bar 1",
      category: "TopBar",
      content: `<div class="section section-padding">
        <div class="container">
            <div class="row learts-mb-n30">

                <!-- My Account Tab List Start -->
                <div class="col-lg-4 col-12 learts-mb-30">
                    <div class="myaccount-tab-list nav" role="tablist">
                        <a href="#dashboad" class="active" data-bs-toggle="tab" aria-selected="true" role="tab">Dashboard <i class="far fa-home"></i></a>
                        <a href="#orders" data-bs-toggle="tab" aria-selected="false" tabindex="-1" role="tab">Orders <i class="far fa-file-alt"></i></a>
                        <a href="#download" data-bs-toggle="tab" aria-selected="false" tabindex="-1" role="tab">Download <i class="far fa-arrow-to-bottom"></i></a>
                        <a href="#address" data-bs-toggle="tab" aria-selected="false" tabindex="-1" role="tab">address <i class="far fa-map-marker-alt"></i></a>
                        <a href="#account-info" data-bs-toggle="tab" aria-selected="false" tabindex="-1" role="tab">Account Details <i class="far fa-user"></i></a>
                        <a href="login-register.html">Logout <i class="far fa-sign-out-alt"></i></a>
                    </div>
                </div>
                <!-- My Account Tab List End -->

                <!-- My Account Tab Content Start -->
                <div class="col-lg-8 col-12 learts-mb-30">
                    <div class="tab-content">

                        <!-- Single Tab Content Start -->
                        <div class="tab-pane fade show active" id="dashboad" role="tabpanel">
                            <div class="myaccount-content dashboad">
                                <p>Hello <strong>didiv91396</strong> (not <strong>didiv91396</strong>? <a href="login-register.html">Log out</a>)</p>
                                <p>From your account dashboard you can view your <span>recent orders</span>, manage your <span>shipping and billing addresses</span>, and <span>edit your password and account details</span>.</p>
                            </div>
                        </div>
                        <!-- Single Tab Content End -->

                        <!-- Single Tab Content Start -->
                        <div class="tab-pane fade" id="orders" role="tabpanel">
                            <div class="myaccount-content order">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Order</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Total</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Aug 22, 2018</td>
                                                <td>Pending</td>
                                                <td>$3000</td>
                                                <td><a href="shopping-cart.html">View</a></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>July 22, 2018</td>
                                                <td>Approved</td>
                                                <td>$200</td>
                                                <td><a href="shopping-cart.html">View</a></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>June 12, 2017</td>
                                                <td>On Hold</td>
                                                <td>$990</td>
                                                <td><a href="shopping-cart.html">View</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- Single Tab Content End -->

                        <!-- Single Tab Content Start -->
                        <div class="tab-pane fade" id="download" role="tabpanel">
                            <div class="myaccount-content download">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Date</th>
                                                <th>Expire</th>
                                                <th>Download</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Haven - Free Real Estate PSD Template</td>
                                                <td>Aug 22, 2018</td>
                                                <td>Yes</td>
                                                <td><a href="#"><i class="far fa-arrow-to-bottom mr-1"></i> Download File</a></td>
                                            </tr>
                                            <tr>
                                                <td>HasTech - Profolio Business Template</td>
                                                <td>Sep 12, 2018</td>
                                                <td>Never</td>
                                                <td><a href="#"><i class="far fa-arrow-to-bottom mr-1"></i> Download File</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- Single Tab Content End -->

                        <!-- Single Tab Content Start -->
                        <div class="tab-pane fade" id="address" role="tabpanel">
                            <div class="myaccount-content address">
                                <p>The following addresses will be used on the checkout page by default.</p>
                                <div class="row learts-mb-n30">
                                    <div class="col-md-6 col-12 learts-mb-30">
                                        <h4 class="title">Billing Address <a href="#" class="edit-link">edit</a></h4>
                                        <address>
                                            <p><strong>Alex Tuntuni</strong></p>
                                            <p>1355 Market St, Suite 900 <br>
                                                San Francisco, CA 94103</p>
                                            <p>Mobile: (123) 456-7890</p>
                                        </address>
                                    </div>
                                    <div class="col-md-6 col-12 learts-mb-30">
                                        <h4 class="title">Shipping Address <a href="#" class="edit-link">edit</a></h4>
                                        <address>
                                            <p><strong>Alex Tuntuni</strong></p>
                                            <p>1355 Market St, Suite 900 <br>
                                                San Francisco, CA 94103</p>
                                            <p>Mobile: (123) 456-7890</p>
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Single Tab Content End -->

                        <!-- Single Tab Content Start -->
                        <div class="tab-pane fade" id="account-info" role="tabpanel">
                            <div class="myaccount-content account-details">
                                <div class="account-details-form">
                                    <form action="#">
                                        <div class="row learts-mb-n30">
                                            <div class="col-md-6 col-12 learts-mb-30">
                                                <div class="single-input-item">
                                                    <label for="first-name">First Name <abbr class="required">*</abbr></label>
                                                    <input type="text" id="first-name">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-12 learts-mb-30">
                                                <div class="single-input-item">
                                                    <label for="last-name">Last Name <abbr class="required">*</abbr></label>
                                                    <input type="text" id="last-name">
                                                </div>
                                            </div>
                                            <div class="col-12 learts-mb-30">
                                                <label for="display-name">Display Name <abbr class="required">*</abbr></label>
                                                <input type="text" id="display-name" value="didiv91396">
                                                <p>This will be how your name will be displayed in the account section and in reviews</p>
                                            </div>
                                            <div class="col-12 learts-mb-30">
                                                <label for="email">Email Addres <abbr class="required">*</abbr></label>
                                                <input type="email" id="email" value="didiv91396@ismailgul.net">
                                            </div>
                                            <div class="col-12 learts-mb-30 learts-mt-30">
                                                <fieldset>
                                                    <legend>Password change</legend>
                                                    <div class="row learts-mb-n30">
                                                        <div class="col-12 learts-mb-30">
                                                            <label for="current-pwd">Current password (leave blank to leave unchanged)</label>
                                                            <input type="password" id="current-pwd">
                                                        </div>
                                                        <div class="col-12 learts-mb-30">
                                                            <label for="new-pwd">New password (leave blank to leave unchanged)</label>
                                                            <input type="password" id="new-pwd">
                                                        </div>
                                                        <div class="col-12 learts-mb-30">
                                                            <label for="confirm-pwd">Confirm new password</label>
                                                            <input type="password" id="confirm-pwd">
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div class="col-12 learts-mb-30">
                                                <button class="btn btn-dark btn-outline-hover-dark">Save Changes</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> <!-- Single Tab Content End -->

                    </div>
                </div> <!-- My Account Tab Content End -->
            </div>
        </div>
    </div>`,
    },
  },
  {
    id: "productDetail1",
    content: {
      label: "Product Detail 1",
      category: "Product Detail",
      content: `<div class="section section-padding border-bottom">
        <div class="container">
            <div class="row learts-mb-n40">

                <!-- Product Images Start -->
                <div class="col-lg-6 col-12 learts-mb-40">
                    <div class="product-images">
                        <button class="product-gallery-popup hintT-left" data-hint="Click to enlarge" data-images="[
                            {&quot;src&quot;: &quot;assets/images/product/single/1/product-zoom-1.webp&quot;, &quot;w&quot;: 700, &quot;h&quot;: 1100},
                            {&quot;src&quot;: &quot;assets/images/product/single/1/product-zoom-2.webp&quot;, &quot;w&quot;: 700, &quot;h&quot;: 1100},
                            {&quot;src&quot;: &quot;assets/images/product/single/1/product-zoom-3.webp&quot;, &quot;w&quot;: 700, &quot;h&quot;: 1100},
                            {&quot;src&quot;: &quot;assets/images/product/single/1/product-zoom-4.webp&quot;, &quot;w&quot;: 700, &quot;h&quot;: 1100}
                        ]"><i class="fas fa-expand"></i></button>
                        <a href="https://www.youtube.com/watch?v=1jSsy7DtYgc" class="product-video-popup video-popup hintT-left" data-hint="Click to see video"><i class="fas fa-play"></i></a>
                        <div class="product-gallery-slider slick-initialized slick-slider slick-dotted"><button class="slick-prev slick-arrow" style=""><i class="ti-angle-left"></i></button><div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 5400px; transform: translate3d(-600px, 0px, 0px);"><div class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style="width: 600px;" tabindex="-1"><div><div class="product-zoom" data-image="assets/images/product/single/1/product-zoom-4.webp" style="width: 100%; display: inline-block; position: relative; overflow: hidden;">
                                <img src="assets/images/product/single/1/product-4.webp" alt="">
                            <img role="presentation" alt="" src="assets/images/product/single/1/product-zoom-4.webp" class="zoomImg" style="position: absolute; top: 0px; left: 0px; opacity: 0; width: 810px; height: 1080px; border: none; max-width: none; max-height: none;"></div></div></div><div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 600px;" role="tabpanel" id="slick-slide10"><div><div class="product-zoom" data-image="assets/images/product/single/1/product-zoom-1.webp" style="width: 100%; display: inline-block; position: relative; overflow: hidden;">
                                <img src="assets/images/product/single/1/product-1.webp" alt="">
                            <img role="presentation" alt="" src="assets/images/product/single/1/product-zoom-1.webp" class="zoomImg" style="position: absolute; top: -34.3216px; left: -196.611px; opacity: 0; width: 768px; height: 1024px; border: none; max-width: none; max-height: none;"></div></div></div><div class="slick-slide" data-slick-index="1" aria-hidden="true" style="width: 600px;" tabindex="-1" role="tabpanel" id="slick-slide11"><div><div class="product-zoom" data-image="assets/images/product/single/1/product-zoom-2.webp" style="width: 100%; display: inline-block; position: relative; overflow: hidden;">
                                <img src="assets/images/product/single/1/product-2.webp" alt="">
                            <img role="presentation" alt="" src="assets/images/product/single/1/product-zoom-2.webp" class="zoomImg" style="position: absolute; top: 0px; left: 0px; opacity: 0; width: 810px; height: 1080px; border: none; max-width: none; max-height: none;"></div></div></div><div class="slick-slide" data-slick-index="2" aria-hidden="true" style="width: 600px;" tabindex="-1" role="tabpanel" id="slick-slide12"><div><div class="product-zoom" data-image="assets/images/product/single/1/product-zoom-3.webp" style="width: 100%; display: inline-block; position: relative; overflow: hidden;">
                                <img src="assets/images/product/single/1/product-3.webp" alt="">
                            <img role="presentation" alt="" src="assets/images/product/single/1/product-zoom-3.webp" class="zoomImg" style="position: absolute; top: 0px; left: 0px; opacity: 0; width: 810px; height: 1080px; border: none; max-width: none; max-height: none;"></div></div></div><div class="slick-slide" data-slick-index="3" aria-hidden="true" style="width: 600px;" tabindex="-1" role="tabpanel" id="slick-slide13"><div><div class="product-zoom" data-image="assets/images/product/single/1/product-zoom-4.webp" style="width: 100%; display: inline-block; position: relative; overflow: hidden;">
                                <img src="assets/images/product/single/1/product-4.webp" alt="">
                            <img role="presentation" alt="" src="assets/images/product/single/1/product-zoom-4.webp" class="zoomImg" style="position: absolute; top: 0px; left: 0px; opacity: 0; width: 810px; height: 1080px; border: none; max-width: none; max-height: none;"></div></div></div><div class="slick-slide slick-cloned" data-slick-index="4" aria-hidden="true" style="width: 600px;" tabindex="-1"><div><div class="product-zoom" data-image="assets/images/product/single/1/product-zoom-1.webp" style="width: 100%; display: inline-block; position: relative; overflow: hidden;">
                                <img src="assets/images/product/single/1/product-1.webp" alt="">
                            <img role="presentation" alt="" src="assets/images/product/single/1/product-zoom-1.webp" class="zoomImg" style="position: absolute; top: 0px; left: 0px; opacity: 0; width: 768px; height: 1024px; border: none; max-width: none; max-height: none;"></div></div></div><div class="slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" style="width: 600px;" tabindex="-1"><div><div class="product-zoom" data-image="assets/images/product/single/1/product-zoom-2.webp" style="width: 100%; display: inline-block; position: relative; overflow: hidden;">
                                <img src="assets/images/product/single/1/product-2.webp" alt="">
                            <img role="presentation" alt="" src="assets/images/product/single/1/product-zoom-2.webp" class="zoomImg" style="position: absolute; top: 0px; left: 0px; opacity: 0; width: 810px; height: 1080px; border: none; max-width: none; max-height: none;"></div></div></div><div class="slick-slide slick-cloned" data-slick-index="6" aria-hidden="true" style="width: 600px;" tabindex="-1"><div><div class="product-zoom" data-image="assets/images/product/single/1/product-zoom-3.webp" style="width: 100%; display: inline-block; position: relative; overflow: hidden;">
                                <img src="assets/images/product/single/1/product-3.webp" alt="">
                            <img role="presentation" alt="" src="assets/images/product/single/1/product-zoom-3.webp" class="zoomImg" style="position: absolute; top: 0px; left: 0px; opacity: 0; width: 810px; height: 1080px; border: none; max-width: none; max-height: none;"></div></div></div><div class="slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" style="width: 600px;" tabindex="-1"><div><div class="product-zoom" data-image="assets/images/product/single/1/product-zoom-4.webp" style="width: 100%; display: inline-block; position: relative; overflow: hidden;">
                                <img src="assets/images/product/single/1/product-4.webp" alt="">
                            <img role="presentation" alt="" src="assets/images/product/single/1/product-zoom-4.webp" class="zoomImg" style="position: absolute; top: 0px; left: 0px; opacity: 0; width: 810px; height: 1080px; border: none; max-width: none; max-height: none;"></div></div></div></div></div><button class="slick-next slick-arrow" style=""><i class="ti-angle-right"></i></button><ul class="slick-dots" style="" role="tablist"><li class="slick-active" role="presentation"><button type="button" role="tab" id="slick-slide-control10" aria-controls="slick-slide10" aria-label="1 of 4" tabindex="0" aria-selected="true">1</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control11" aria-controls="slick-slide11" aria-label="2 of 4" tabindex="-1">2</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control12" aria-controls="slick-slide12" aria-label="3 of 4" tabindex="-1">3</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control13" aria-controls="slick-slide13" aria-label="4 of 4" tabindex="-1">4</button></li></ul></div>
                        <div class="product-thumb-slider slick-initialized slick-slider"><div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 600px; transform: translate3d(0px, 0px, 0px);"><div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 150px;"><div><div class="item" style="width: 100%; display: inline-block;">
                                <img src="assets/images/product/single/1/product-thumb-1.webp" alt="">
                            </div></div></div><div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 150px;"><div><div class="item" style="width: 100%; display: inline-block;">
                                <img src="assets/images/product/single/1/product-thumb-2.webp" alt="">
                            </div></div></div><div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 150px;"><div><div class="item" style="width: 100%; display: inline-block;">
                                <img src="assets/images/product/single/1/product-thumb-3.webp" alt="">
                            </div></div></div><div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 150px;"><div><div class="item" style="width: 100%; display: inline-block;">
                                <img src="assets/images/product/single/1/product-thumb-4.webp" alt="">
                            </div></div></div></div></div></div>
                    </div>
                </div>
                <!-- Product Images End -->

                <!-- Product Summery Start -->
                <div class="col-lg-6 col-12 learts-mb-40">
                    <div class="product-summery">
                        <div class="product-nav">
                            <a href="#"><i class="fas fa-long-arrow-alt-left"></i></a>
                            <a href="#"><i class="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                        <div class="product-ratings">
                            <span class="star-rating">
                                <span class="rating-active" style="width: 100%;">ratings</span>
                            </span>
                            <a href="#reviews" class="review-link">(<span class="count">3</span> customer reviews)</a>
                        </div>
                        <h3 class="product-title">Cleaning Dustpan &amp; Brush</h3>
                        <div class="product-price">£38.00 – £50.00</div>
                        <div class="product-description">
                            <p>Easy clip-on handle – Hold the brush and dustpan together for storage; the dustpan edge is serrated to allow easy scraping off the hair without entanglement. High-quality bristles – no burr damage, no scratches, thick and durable, comfortable to remove dust and smaller particles.</p>
                        </div>
                        <div class="product-variations">
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="label"><span>Size</span></td>
                                        <td class="value">
                                            <div class="product-sizes">
                                                <a href="#">Large</a>
                                                <a href="#">Medium</a>
                                                <a href="#">Small</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="label"><span>Color</span></td>
                                        <td class="value">
                                            <div class="product-colors">
                                                <a href="#" data-bg-color="#000000" style="background-color: rgb(0, 0, 0);"></a>
                                                <a href="#" data-bg-color="#ffffff" style="background-color: rgb(255, 255, 255);"></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="label"><span>Quantity</span></td>
                                        <td class="value">
                                            <div class="product-quantity">
                                                <span class="qty-btn minus"><i class="ti-minus"></i></span>
                                                <input type="text" class="input-qty" value="1">
                                                <span class="qty-btn plus"><i class="ti-plus"></i></span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="product-buttons">
                            <a href="#" class="btn btn-icon btn-outline-body btn-hover-dark hintT-top" data-hint="Add to Wishlist"><i class="far fa-heart"></i></a>
                            <a href="#" class="btn btn-dark btn-outline-hover-dark"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                            <a href="#" class="btn btn-icon btn-outline-body btn-hover-dark hintT-top" data-hint="Compare"><i class="fas fa-random"></i></a>
                        </div>
                        <div class="product-brands">
                            <span class="title">Brands</span>
                            <div class="brands">
                                <a href="#"><img src="assets/images/brands/brand-3.webp" alt=""></a>
                                <a href="#"><img src="assets/images/brands/brand-8.webp" alt=""></a>
                            </div>
                        </div>
                        <div class="product-meta">
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="label"><span>SKU</span></td>
                                        <td class="value">0404019</td>
                                    </tr>
                                    <tr>
                                        <td class="label"><span>Category</span></td>
                                        <td class="value">
                                            <ul class="product-category">
                                                <li><a href="#">Kitchen</a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="label"><span>Tags</span></td>
                                        <td class="value">
                                            <ul class="product-tags">
                                                <li><a href="#">handmade</a></li>
                                                <li><a href="#">learts</a></li>
                                                <li><a href="#">mug</a></li>
                                                <li><a href="#">product</a></li>
                                                <li><a href="#">learts</a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="label"><span>Share on</span></td>
                                        <td class="va">
                                            <div class="product-share">
                                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                                <a href="#"><i class="fab fa-twitter"></i></a>
                                                <a href="#"><i class="fab fa-google-plus-g"></i></a>
                                                <a href="#"><i class="fab fa-pinterest"></i></a>
                                                <a href="#"><i class="far fa-envelope"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- Product Summery End -->

            </div>
        </div>

    </div>`,
    },
  },
  {
    id: "menu1",
    content: {
      label: "Left Menu 1",
      category: "Menu",
      content: `<div class="col-lg-3 col-12 learts-mb-10 order-lg-1 dvProductStickyLeftBar">
                    <span class="filtersStart"></span>
                    <div class="filterInside">
                        <!-- Search Start -->
                        <div class="single-widget learts-mb-40 mobilNone">
                            <div class="widget-search">
                                <div class="search-form">
                                    <input type="text" id="txtUrunArama" placeholder="Sonuçlarda Ara..." value="">
                                    <button class="btnUrunAra"><i class="fal fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                        <!-- Search End -->
                            <!-- Categories Start -->
                            <div class="single-widget learts-mb-40 mobilNone">
                                <h3 class="widget-title product-filter-widget-title">Kategoriler</h3>
                                <ul class="widget-list productFilterList kategori">


                                        <li>

                                            
                                            <input type="checkbox" id="Çiçek Buketleri" name="Çiçek Buketleri" value="B93B38A3-0FC4-4D32-98B8-C073BE482323" class="form-check-input">
                                            <label for="Çiçek Buketleri">Çiçek Buketleri</label>
                                            
                                        </li>
                                        <li>

                                            
                                            <input type="checkbox" id="Vazoda Çiçekler" name="Vazoda Çiçekler" value="52B39CBB-7DFA-4DDD-983D-3A6538B322F7" class="form-check-input">
                                            <label for="Vazoda Çiçekler">Vazoda Çiçekler</label>
                                            
                                        </li>
                                        <li>

                                            
                                            <input type="checkbox" id="Orkide" name="Orkide" value="DFEDCC1D-A737-4452-832A-6BB3731C74F1" class="form-check-input">
                                            <label for="Orkide">Orkide</label>
                                            
                                        </li>
                                        <li>

                                            
                                            <input type="checkbox" id="Kuru Çiçekler" name="Kuru Çiçekler" value="DD58DEEF-E2EF-4C3C-81D5-A87BAA77190F" class="form-check-input">
                                            <label for="Kuru Çiçekler">Kuru Çiçekler</label>
                                            
                                        </li>
                                        <li>

                                            
                                            <input type="checkbox" id="Yeşil Bitkiler" name="Yeşil Bitkiler" value="9DB90F90-23D6-491E-81D5-E27F0DFA7029" class="form-check-input">
                                            <label for="Yeşil Bitkiler">Yeşil Bitkiler</label>
                                            
                                        </li>
                                        <li>

                                            
                                            <input type="checkbox" id="Sukulent &amp; Kaktüs" name="Sukulent &amp; Kaktüs" value="4E01660D-129B-4CEF-870C-50E77C81CCAF" class="form-check-input">
                                            <label for="Sukulent &amp; Kaktüs">Sukulent &amp; Kaktüs</label>
                                            
                                        </li>
                                        <li>

                                            
                                            <input type="checkbox" id="Çikolata" name="Çikolata" value="530EAA70-6307-4888-8ADC-8D43B12ABED2" class="form-check-input">
                                            <label for="Çikolata">Çikolata</label>
                                            
                                        </li>
                                        <li>

                                            
                                            <input type="checkbox" id="Makaron" name="Makaron" value="F77B0A15-A2B6-435C-B5E3-6BC4460962D8" class="form-check-input">
                                            <label for="Makaron">Makaron</label>
                                            
                                        </li>
                                        <li>

                                            
                                            <input type="checkbox" id="Hediye Kutuları" name="Hediye Kutuları" value="EECD3250-9691-4037-9E75-295637F3DC3D" class="form-check-input">
                                            <label for="Hediye Kutuları">Hediye Kutuları</label>
                                            
                                        </li>
                                </ul>
                            </div>
                            <!-- Categories End -->

                            <!-- Brand Range Start -->
                            <div class="single-widget learts-mb-40 mobilNone">
                                <h3 class="widget-title product-filter-widget-title">Marka</h3>
                                <ul class="widget-list productFilterList marka">
                                        <li>
                                            
                                            <input type="checkbox" id="Bloom and Fresh" name="Bloom and Fresh" value="53B804DD-88D5-4CA6-8D7D-EEDACF51B395" class="form-check-input">
                                            <label for="Bloom and Fresh">Bloom and Fresh</label>
                                        </li>
                                        <li>
                                            
                                            <input type="checkbox" id="Godiva" name="Godiva" value="AEC62CB3-828A-4831-BBAC-9FA330D699F2" class="form-check-input">
                                            <label for="Godiva">Godiva</label>
                                        </li>
                                        <li>
                                            
                                            <input type="checkbox" id="Divan" name="Divan" value="BE30BCCD-30AF-4B36-AD4F-C830EE2ECF01" class="form-check-input">
                                            <label for="Divan">Divan</label>
                                        </li>
                                        <li>
                                            
                                            <input type="checkbox" id="Cos Chocolate" name="Cos Chocolate" value="fc256ed7-27f1-4451-8f80-c73c10de9cac" class="form-check-input">
                                            <label for="Cos Chocolate">Cos Chocolate</label>
                                        </li>
                                        <li>
                                            
                                            <input type="checkbox" id="Brownies by Limburgia" name="Brownies by Limburgia" value="416c2b71-94ba-4fea-bca8-db4128d26a38" class="form-check-input">
                                            <label for="Brownies by Limburgia">Brownies by Limburgia</label>
                                        </li>
                                        <li>
                                            
                                            <input type="checkbox" id="Lure by Swissotel The Bosphorus" name="Lure by Swissotel The Bosphorus" value="106c912a-5cc6-43e1-8175-4740c29d1d71" class="form-check-input">
                                            <label for="Lure by Swissotel The Bosphorus">Lure by Swissotel The Bosphorus</label>
                                        </li>
                                </ul>
                            </div>
                            <!-- Brand Range End -->

                        <!-- dynamicfieldboolcodes Filter -->
                        <div class="single-widget learts-mb-40 mobilNone">
                            <h3 class="widget-title product-filter-widget-title"></h3>
                            <ul class="widget-list productFilterList dynamicfieldboolcodes">
                                        <li>
                                            <input type="checkbox" id="dynamicfieldboolcode-YeniGelen" name="leftDynamicfieldboolcode" value="YeniGelen" class="form-check-input">
                                            <label for="dynamicfieldboolcode-YeniGelen">Yeni Gelenler</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="dynamicfieldboolcode-Indirimde" name="leftDynamicfieldboolcode" value="Indirimde" class="form-check-input">
                                            <label for="dynamicfieldboolcode-Indirimde">İndirimdekiler</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="dynamicfieldboolcode-CokSatan" name="leftDynamicfieldboolcode" value="CokSatan" class="form-check-input">
                                            <label for="dynamicfieldboolcode-CokSatan">Çok Sevilenler</label>
                                        </li>


                            </ul>
                        </div>
                        <!-- Color Range Start -->
                        <!--<div class="single-widget learts-mb-40 mobilNone">
                            <h3 class="widget-title product-filter-widget-title">Renk</h3>
                            <ul class="widget-colors product-filter-widget customScroll">
                                <li><a href="#" class="hintT-top" data-hint="Siyah"><span data-bg-color="#000000">Siyah</span></a></li>
                                <li><a href="#" class="hintT-top" data-hint="Beyaz"><span data-bg-color="#FFFFFF">Beyaz</span></a></li>
                                <li><a href="#" class="hintT-top" data-hint="Koyu Kırmızı"><span data-bg-color="#b2483c">Koyu Kırmızı</span></a></li>
                                <li><a href="#" class="hintT-top" data-hint="Keten"><span data-bg-color="#d5b85a">Keten</span></a></li>
                                <li><a href="#" class="hintT-top" data-hint="Çam"><span data-bg-color="#01796f">Çam</span></a></li>
                                <li><a href="#" class="hintT-top" data-hint="Tortilla"><span data-bg-color="#997950">Tortilla</span></a></li>
                            </ul>
                        </div>-->
                        <!-- Color Range End -->
                        <!-- Price Range Start -->
                        <div class="single-widget learts-mb-40 mobilNone">
                            <h3 class="widget-title product-filter-widget-title">Fiyata Göre</h3>
                            <div class="widget-price-range">
                                <span class="irs irs--learts js-irs-0"><span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min" style="display: none; visibility: visible;">0</span><span class="irs-max" style="display: none; visibility: visible;">1</span><span class="irs-from" style="visibility: visible; left: 3.42205%;">289TL</span><span class="irs-to" style="visibility: visible; left: 96.5779%;">2 500TL</span><span class="irs-single" style="visibility: hidden; left: 21.1279%;">289TL — 2 500TL</span></span><span class="irs-grid"></span><span class="irs-bar" style="left: 3.42205%; width: 93.1559%;"></span><span class="irs-shadow shadow-from" style="display: none;"></span><span class="irs-shadow shadow-to" style="display: none;"></span><span class="irs-handle from" style="left: 0%;"><i></i><i></i><i></i></span><span class="irs-handle to" style="left: 93.1559%;"><i></i><i></i><i></i></span></span><input class="range-slider irs-hidden-input" type="text" data-min="289" data-max="2500" tabindex="-1" readonly="">
                                
                            </div>
                        </div>
                        <!-- Price Range End -->
                        <!-- Reset Filter Start -->
                        <div class="single-widget learts-mb-40 mobilNone">
                            <div class="widget-price-range text-center">
                                
                                <a class="btn btn-dark btn-outline-hover-dark btnUrunFilterUygula">Filtrele</a>
                                <span class="filtersEnd"></span>
                            </div>
                        </div>
                        <!-- Reset Filter  End -->
                    </div>
                </div>`,
    },
  },
];

export default function DefaultEditor() {
  const onEditor = (editor) => {
    console.log("Editor loaded", { editor });
    data.forEach((value) => {
      editor.BlockManager.add(value.id, value.content);
    });
    editor.setStyle(bootstrap);
  };

  return (
    <GjsEditor
      style={{ width: "100%" }}
      // Pass the core GrapesJS library to the wrapper (required).
      // You can also pass the CDN url (eg. "https://unpkg.com/grapesjs")
      grapesjs={grapesjs}
      // Load the GrapesJS CSS file asynchronously from URL.
      // This is an optional prop, you can always import the CSS directly in your JS if you wish.
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      // GrapesJS init options
      options={{
        height: "100vh",
        storageManager: false,
      }}
      plugins={["gjs-preset-newsletter"]}
      onEditor={onEditor}
      onUpdate={(projectData, editor) => {
        console.log(projectData);
        console.log(editor.getCss());
      }}
    />
  );
}
