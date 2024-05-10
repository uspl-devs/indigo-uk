$(document)
  .on('shopify:block:select', e => {
    const { blockId } = e.detail;
    const $parentSection = $(`#shopify-section-${e.detail.sectionId}`);

    if ($parentSection.hasClass('shopify-section--slideshow') || $parentSection.hasClass('shopify-section--testimonials') || $parentSection.hasClass('shopify-section--shoppable-image--slider-enabled')) {
      window.sliderBlock.select(blockId, $parentSection);
    }
  });

$(document)
  .on('shopify:block:deselect', e => {
    const $parentSection = $(`#shopify-section-${e.detail.sectionId}`);

    if ($parentSection.hasClass('shopify-section--slideshow') || $parentSection.hasClass('shopify-section--testimonials')) {
      window.sliderBlock.deselect($parentSection);
    }
  });

$(document)
  .on('shopify:section:reorder', () => {
    window.utils.initializeSectionWrapper();
  });

$(document)
  .on('shopify:section:load', e => {
    const $parentSection = $(`#shopify-section-${e.detail.sectionId}`);

    window.utils.initializeSectionWrapper();
    window.utils.enableDisclosure();

    if (window.PXUTheme.theme_settings.enable_autocomplete) {
      window.predictiveSearch.init();
    }

    if (window.PXUTheme.theme_settings.newsletter_popup) {
      window.newsletter_popup.init();
    }

    if ($parentSection.hasClass('shopify-section--article-template')) {
      window.sidebarAccordions.init();
    }

    if ($parentSection.hasClass('shopify-section--blog-template')) {
      window.sidebarAccordions.init();
    }

    if ($parentSection.hasClass('shopify-section--product-sidebar')) {
      window.sidebarAccordions.init();
    }

    if ($parentSection.hasClass('shopify-section--page-gallery-template')) {
      window.gallery.init($parentSection);
    }

    if ($parentSection.hasClass('shopify-section--gallery')) {
      window.gallery.init();
    }

    if ($parentSection.hasClass('shopify-section--page-faq-template') || $parentSection.hasClass('shopify-section--faq')) {
      window.accordion.init();
    }

    if ($parentSection.hasClass('shopify-section--cart-template')) {
      window.cart.init();
    }

    if ($parentSection.hasClass('shopify-section--featured-promotions')) {
      window.featuredPromotions.init();
    }

    if ($parentSection.hasClass('shopify-section--slideshow')) {
      window.slideshow.init();
    }

    if ($parentSection.hasClass('shopify-section--testimonials')) {
      window.testimonials.init();
    }

    if ($parentSection.hasClass('shopify-section--featured-product')) {
      window.productPage.init();
      window.productPage.runOptionSelector($parentSection);
      window.videoFeature.init();
      window.productPage.productSwatches();
    }

    if ($parentSection.hasClass('shopify-section--map')) {
      window.map.init();
    }

    if ($parentSection.hasClass('shopify-section--logo-list')) {
      window.logoList.init();
    }

    if ($parentSection.hasClass('shopify-section--shoppable-image')) {
      window.shoppableImage.init();
    }

    if ($parentSection.hasClass('shopify-section--featured-collection')) {
      window.featuredCollection.init();
      window.productPage.init();
      window.productPage.runOptionSelector($parentSection);
      window.videoFeature.init();
    }

    if ($parentSection.hasClass('shopify-section--video')) {
      window.video.init();
    }

    if ($parentSection.hasClass('shopify-section--product-template') || $parentSection.hasClass('shopify-section--quick-shop')) {
      window.productPage.init();
      window.productPage.runOptionSelector($parentSection);
      window.videoFeature.init();
      window.productPage.productSwatches();
      window.recentlyViewed.init();
    }

    if ($parentSection.hasClass('shopify-section--recommended-products')) {
      window.productPage.init();
    }

    if ($parentSection.hasClass('shopify-section--recently-viewed-products')) {
      window.recentlyViewed.init();
    }

    if ($parentSection.hasClass('shopify-section--article-template')) {
      if (window.location.pathname.indexOf('/comments') !== -1) {
        $('html,body').animate({ scrollTop: $('#new-comment').offset().top - 140 }, 'slow');
      }
    }

    if ($parentSection.hasClass('shopify-section--collection-template')) {
      window.collectionSidebarFilter.init();
      window.productPage.init();
      window.productPage.runOptionSelector($parentSection);
      window.sidebarAccordions.init();
      window.recentlyViewed.init();
    }

    if ($parentSection.hasClass('shopify-section--contact-section')) {
      window.map.init();
    }

    if ($parentSection.hasClass('shopify-section--search-template')) {
      if (window.PXUTheme.theme_settings.enable_autocomplete) {
        window.predictiveSearch.init();
      }
      window.collectionSidebarFilter.init();
      window.sidebarAccordions.init();
    }

    if ($parentSection.hasClass('shopify-section--header')) {
      window.meganavManager.injectAll();
      window.header.init();
    }

    if ($parentSection.hasClass('shopify-section--mega-menu')) {
      window.meganavManager.add($parentSection[0]);
    }
  });

$(document)
  .on('shopify:section:unload', e => {
    const $target = $(e.target);
    const $parentSection = $(`#shopify-section-${e.detail.sectionId}`);

    if ($parentSection.hasClass('shopify-section--header')) {
      window.header.unload($target);
    }

    if ($parentSection.hasClass('shopify-section--slideshow')) {
      window.slideshow.unload($target);
    }

    if ($parentSection.hasClass('shopify-section--logo-list')) {
      window.logoList.unload($parentSection.find('[data-logo-wrapper]'));
    }

    if ($parentSection.hasClass('shopify-section--testimonials')) {
      window.testimonials.unload($target);
    }

    if ($parentSection.hasClass('shopify-section--shoppable-image')) {
      window.shoppableImage.unload($target);
    }

    if ($parentSection.hasClass('shopify-section--search')) {
      window.predictiveSearch.unload($target);
    }

    if ($parentSection.hasClass('shopify-section--product-template')) {
      window.productPage.unload($parentSection);
    }

    if ($parentSection.hasClass('shopify-section--featured-product')) {
      window.productPage.unload($parentSection);
    }

    if ($parentSection.hasClass('shopify-section--mega-menu')) {
      window.meganavManager.remove($parentSection[0]);
    }

    // When sections are removed from the DOM, reinitialize the section wrapper
    window.requestAnimationFrame(() => {
      window.utils.initializeSectionWrapper();
    });
  });

$(document)
  .on('shopify:section:select', e => {
    const $parentSection = $(`#shopify-section-${e.detail.sectionId}`);

    if ($parentSection.hasClass('shopify-section--mega-menu')) {
      window.meganavManager.select($parentSection[0]);
    }

    if ($parentSection.hasClass('shopify-section--logo-list')) {
      window.logoList.init();
    }

    if ($parentSection.hasClass('shopify-section--featured-collection')) {
      window.featuredCollection.unload($parentSection);
      window.featuredCollection.init();
    }

    const evt = document.createEvent('UIEvents');
    evt.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(evt);
  });

$(document)
  .on('shopify:section:deselect', e => {
    const $parentSection = $(`#shopify-section-${e.detail.sectionId}`);

    if ($parentSection.hasClass('shopify-section--mega-menu')) {
      window.meganavManager.deselect();
    }
  });
