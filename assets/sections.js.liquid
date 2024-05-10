/******/ (() => { // webpackBootstrap
(() => {
(function (n, v) {
    // eslint-disable-next-line max-len
    if (window.Shopify && window.Shopify.theme && navigator && navigator.sendBeacon && window.Shopify.designMode) {
      if (sessionStorage.getItem('oots_beacon')) return;

      navigator.sendBeacon('https://app.outofthesandbox.com/beacon', new URLSearchParams({
        shop_domain: window.Shopify.shop,
        shop_id: window.Store.id,
        theme_name: n,
        theme_version: v,
        theme_store_id: window.Shopify.theme.theme_store_id,
        theme_id: window.Shopify.theme.id,
        theme_role: window.Shopify.theme.role,
      }));

      sessionStorage.setItem('oots_beacon', '');
    }
  }('turbo','9.3.0'))
})();

(() => {
/* eslint-disable */
/* ==================================================
#Logo list
#Featured collection
#Featured promotions
#Slideshow
#Testimonials
#Gallery
#Video
#Cart
#Product
#Header
#Map
#Shoppable Image
#Global accordions
#Global shortcodes

/*============================================================================
  Logo list
==============================================================================*/

window.logoList = {
  init() {
    $('[data-logo-slider]').flickity({
      cellAlign: 'center',
      pageDots: false,
      prevNextButtons: true,
      contain: true,
      groupCells: true,
      initialIndex: 0
    });
  },
  unload(target) {
    if ($(target).hasClass('flickity-enabled')) {
      $(target).flickity('destroy');
    }
  }
};

/*============================================================================
  Featured collection
==============================================================================*/

window.featuredCollection = {
  init() {
    $('.js-product-slider .products-slider').each((index, value) => {
      const productsPerSlide = $(value).data('products-per-slide');
      const productsLimit = $(value).data('products-limit');
      const productsAvailable = $(value).data('products-available');
      let cellAlign = '';
      let draggable = false;
      let prevNext = false;
      let wrapAround = false;
      let initialIndex = 0;

      // Ensure product media libraries are present
      window.Shopify.loadFeatures([{
        name: 'shopify-xr',
        version: '1.0'
      }, {
        name: 'model-viewer-ui',
        version: '1.0'
      }], window.productMedia.setupMedia);
      if (productsPerSlide === '2' && productsAvailable > productsPerSlide && productsLimit > productsPerSlide || productsPerSlide === '4' && productsAvailable > productsPerSlide && productsLimit > productsPerSlide || productsPerSlide === '6' && productsAvailable > productsPerSlide && productsLimit > productsPerSlide) {
        cellAlign = 'left';
      } else {
        cellAlign = 'center';
      }
      if (productsAvailable > productsPerSlide && productsLimit > productsPerSlide) {
        draggable = true;
        prevNext = true;
        wrapAround = true;
      } else {
        draggable = false;
        prevNext = false;
        wrapAround = false;
      }
      if (productsPerSlide === '2' && productsAvailable > productsPerSlide || productsPerSlide === '4' && productsAvailable > productsPerSlide || productsPerSlide === '6' && productsAvailable > productsPerSlide) {
        initialIndex = 0;
      } else if (productsPerSlide === '3' && productsAvailable) {
        initialIndex = 1;
      } else if (productsPerSlide === '5' && productsAvailable) {
        initialIndex = 2;
      } else if (productsPerSlide === '7' && productsAvailable) {
        initialIndex = 3;
      }
      if (window.PXUTheme.media_queries.medium.matches) {
        cellAlign = 'center';
        draggable = true;
        prevNext = true;
        wrapAround = true;
        initialIndex = 1;
        $(value).parents('.even-num-slides').removeClass('even-num-slides');
      }
      $(value).flickity({
        lazyLoad: 2,
        imagesLoaded: true,
        draggable,
        prevNextButtons: prevNext,
        wrapAround,
        cellAlign,
        pageDots: window.usePageDots,
        contain: true,
        freeScroll: true,
        arrowShape: window.arrowSize,
        initialIndex
      });
      $(value).addClass('slider-initialized');
    });
  },
  unload($target) {
    const $slider = $target.find('.js-product-slider');
    if ($slider.hasClass('flickity-enabled')) {
      $slider.flickity('destroy');
    }
  }
};

/*============================================================================
  Featured promotions
==============================================================================*/
window.featuredPromotions = {
  init() {
    $('.feature-overlay').hover(function () {
      $(this).find('.feature-details').slideDown('100', function () {
        $(this).addClass('reveal-details');
      });
    }, function () {
      $(this).find('.feature-details').removeClass('reveal-details');
      $(this).find('.feature-details').slideUp('100');
    });
    $('.js-featured-promotions').each(function () {
      const $promos = $(this);
      const animationStyle = $(this).data('promo-animation');
      $promos.waypoint(function () {
        $(this.element).find('.feature-section').addClass(`animated ${animationStyle}`);
      }, {
        offset: '80%'
      });
    });
  }
};

/*============================================================================
  Slideshow
==============================================================================*/

window.slideshow = {
  init() {
    $('.js-homepage-slideshow').each(function () {
      const $homepageSlider = $(this);
      const settings = {
        slideshowSpeed: $homepageSlider.data('slideshow-speed') * 1000,
        slideshowTextAnimation: $homepageSlider.data('slideshow-text-animation'),
        adaptiveHeight: $homepageSlider.data('adaptive-height')
      };

      // Initiate the slideshow
      if (!$homepageSlider.hasClass('flickity-enabled')) {
        const arrowShow = $homepageSlider.find('.gallery-cell').length === 1 ? false : true;
        $homepageSlider.flickity({
          adaptiveHeight: settings.adaptiveHeight,
          wrapAround: true,
          cellAlign: 'left',
          imagesLoaded: true,
          prevNextButtons: arrowShow,
          draggable: arrowShow,
          autoPlay: settings.slideshowSpeed
        });
        if (settings.slideshowTextAnimation !== '') {
          const flkty = $homepageSlider.data('flickity');
          setTimeout(() => {
            $homepageSlider.find('.gallery-cell:nth-child(1) .caption-content').addClass(`animated ${settings.slideshowTextAnimation}`);
          }, 400);
          $homepageSlider.on('select.flickity', () => {
            if ($homepageSlider.is(':visible')) {
              const currentSlide = flkty.selectedIndex + 1;
              setTimeout(() => {
                $homepageSlider.find('.caption-content').removeClass(`animated ${settings.slideshowTextAnimation}`);
                $homepageSlider.find(`.gallery-cell:nth-child(${currentSlide}) .caption-content`).addClass(`animated ${settings.slideshowTextAnimation}`);
              }, 400);
            }
          });
        }
      }
      if ($homepageSlider.find('.gallery-cell').length > 1) {
        $homepageSlider.addClass('multi-image');
      } else {
        $homepageSlider.addClass('single-image');
      }
    });
  },
  unload($target) {
    const $slider = $target.find('.js-homepage-slideshow');
    $slider.flickity('destroy');
  }
};

/*============================================================================
  Testimonials
==============================================================================*/

window.testimonials = {
  init() {
    $('.js-testimonial').each(function () {
      const $testimonialSlider = $(this);
      const settings = {
        slideshowSpeed: $testimonialSlider.data('slideshow-speed') * 1000,
        slideshowTextAnimation: $testimonialSlider.data('slideshow-text-animation'),
        adaptiveHeight: $testimonialSlider.data('adaptive-height')
      };
      if ($('.testimonial-image').length > 0) {
        $('.testimonial-block').each(function () {
          if ($(this).find('.testimonial-image').length === 0) {
            const theBlock = $(this).closest('.testimonial-block');
            $(theBlock).addClass('set-testimonial-height');
          }
        });
      }

      // Initiate the slideshow
      if (!$testimonialSlider.hasClass('flickity-enabled')) {
        const arrowShow = $testimonialSlider.find('.gallery-cell').length === 1 ? false : true;
        $testimonialSlider.flickity({
          adaptiveHeight: settings.adaptiveHeight,
          wrapAround: true,
          cellAlign: 'left',
          imagesLoaded: true,
          prevNextButtons: arrowShow,
          draggable: arrowShow,
          autoPlay: settings.slideshowSpeed
        });
        if (settings.slideshowTextAnimation !== '') {
          const flkty = $testimonialSlider.data('flickity');
          setTimeout(() => {
            $testimonialSlider.find('.gallery-cell:nth-child(1) .caption-content').addClass(`animated ${settings.slideshowTextAnimation}`);
          }, 400);
          $testimonialSlider.on('select.flickity', () => {
            if ($testimonialSlider.is(':visible')) {
              const currentSlide = flkty.selectedIndex + 1;
              setTimeout(() => {
                $testimonialSlider.find('.caption-content').removeClass(`animated ${settings.slideshowTextAnimation}`);
                $testimonialSlider.find(`.gallery-cell:nth-child(${currentSlide}) .caption-content`).addClass(`animated ${settings.slideshowTextAnimation}`);
              }, 400);
            }
          });
        }
      }
      if ($testimonialSlider.find('.gallery-cell').length > 1) {
        $testimonialSlider.addClass('multi-image');
      } else {
        $testimonialSlider.addClass('single-image');
      }
    });
  },
  unload($target) {
    const $slider = $target.find('.js-testimonial');
    $slider.flickity('destroy');
  }
};

/*============================================================================
  Gallery
==============================================================================*/

window.gallery = {
  init() {
    $('.gallery-horizontal').find('.gallery-image-wrapper').each(function () {
      const wrapper = $(this);
      const images = $(this).find('img');
      let imgWidth;
      let imgHeight;
      $('<img />').attr('src', $(images).attr('src')).on('load', function () {
        imgWidth = this.width;
        imgHeight = this.height;
        $(wrapper).css('flex-basis', imgWidth * 200 / imgHeight);
        $(wrapper).css('flex-grow', imgWidth * 200 / imgHeight);
        $(wrapper).find('i').css('padding-bottom', `${imgHeight / imgWidth * 100}%`);
      });
    });
    if ($('[rel=gallery]').length) {
      $('[rel=gallery]').fancybox({
        baseClass: 'gallery-section__lightbox',
        clickContent: 'nextOrClose',
        afterShow() {
          // Loop through fancybox images, add alt attributes
          const fancyImages = $('.fancybox-image');
          $('.gallery__image').each((index, image) => {
            const $image = $(image);
            const alt = $image.attr('alt');
            fancyImages.eq(index).attr('alt', alt);
          });
        }
      });
    }
  }
};

/*============================================================================
  Video
==============================================================================*/
window.video = {
  init() {
    // Set up plyr for newly embedded video
    var featuredVideos = $('[data-video-element]').get();
    var featuredVideoPlayers = Plyr.setup(featuredVideos, {
      controls: window.videoControls,
      fullscreen: {
        enabled: true,
        fallback: true,
        iosNative: true
      },
      storage: {
        enabled: false
      }
    });

    // Adds plyr video id to video wrapper
    $.each(featuredVideoPlayers, function (index, player) {
      var id = player.id;
      var $video;
      if (player.isHTML5) {
        $video = $(player.elements.wrapper).find('video');
        $video.attr('data-plyr-video-id', id);
      }

      // When a video is playing, pause any other instances
      player.on('play', function (event) {
        var instance = event.detail.plyr;
        $.each(featuredVideoPlayers, function (index, player) {
          if (instance.id != player.id) {
            player.pause();
          }
        });
      });

      // Moves players from video section into global array
      if (window.globalVideoPlayers) {
        window.globalVideoPlayers.push(player);
      }
    });
    $('[data-video-element]').each(function (index, video) {
      // Variables
      var $video = $(video);
      var $section = $video.parents('.shopify-section').attr('id', id);
      var $videoElement = $section.find($video);
      var $videoWrapper = $videoElement.parents('.video-wrapper');
      var $playButton = $videoWrapper.find('[data-play-button]');
      var $secondaryButton = $videoWrapper.find('[data-secondary-button]');
      var $videoText = $videoWrapper.find('[data-video-text]');
      var $videoTextContainer = $videoWrapper.find('[data-video-text-container]');
      var $image = $videoWrapper.find('.video-wrapper__image');
      var $posterImage = $videoWrapper.data('poster-image-uploaded');
      var aspectRatio = $videoWrapper.data('aspect-ratio');
      var id = $videoWrapper.data('video-src');
      var isAutoplay = $videoWrapper.data('autoplay');
      var isLoopingEnabled = $videoWrapper.data('autoloop');
      var isMuted = $videoWrapper.data('mute-video');
      $.each(featuredVideoPlayers, function (index, player) {
        var videoID;
        var playerID;
        if (player.isYouTube || player.isVimeo) {
          var videoID = $videoWrapper.attr('id');
          var playerID = $(player.elements.original).attr('id');
        } else if (player.isHTML5) {
          var videoID = $videoWrapper.find('[data-plyr-video-id]').data('plyr-video-id');
          var playerID = player.id;
          $videoElement = $section.find('.plyr--video');
        }
        if (playerID == videoID) {
          // Reset play button icon
          $videoWrapper.removeClass('play-button-icon--visible');

          // Autoplay
          if (isAutoplay) {
            // If on desktop or player is YouTube/Vimeo
            if (window.PXUTheme.media_queries.large.matches || player.isYouTube || player.isVimeo) {
              player.autoplay = true;

              // Hide image
              $image.hide();

              // Show video
              $videoElement.show();
              if ($videoTextContainer.hasClass('display-text-over-video--false') && $videoWrapper.hasClass('caption--below-false') && !window.PXUTheme.media_queries.large.matches) {
                $videoText.hide();
              } else {
                $videoText.show();
              }

              // Keep play button hidden
              $playButton.hide();

              // HTML5 Mobile Video
            } else if (window.PXUTheme.media_queries.medium.matches && player.isHTML5) {
              // Hide image
              $image.hide();

              // Show video
              $videoElement.show();

              // Display button so that video can be played
              $playButton.show();
              player.on('play', function () {
                // Show video
                $videoElement.show();

                // Hide play button
                $playButton.hide();
              });
            }
          } else {
            // If Autoplay disabled
            // If poster image, show image wrapper otherwise hide it
            if ($posterImage) {
              $image.show();
              $videoElement.hide();
            } else {
              $videoElement.show();
            }
          }

          // Clicking image will play video
          $image.on('click', function () {
            // Hide image
            $(this).hide();

            // Show video
            $videoElement.show();
            player.play();
          });

          // Muted
          if (isMuted) {
            player.muted = true;
          }

          // Aspect Ratio
          if (aspectRatio) {
            player.ratio = aspectRatio;
          }

          // Looping
          if (isLoopingEnabled) {
            player.loop = true;
          }

          // Show Video Controls
          // - video controls get hidden using a css class: '.video-controls-enabled--false'

          // If button exists, hide text and poster
          if ($playButton) {
            $playButton.on('click', function () {
              // Play video
              player.play();
            });
          }
          player.on('statechange', event => {
            //Check if unstarted when state changed and play if so
            if (event.detail.code == '-1') {
              player.play();
            }
          });
          player.on('play', function () {
            // Hide image
            $image.hide();

            // Reset play button icon
            $videoWrapper.removeClass('play-button-icon--visible');

            // Show video
            $videoElement.show();
            if ($videoTextContainer.hasClass('display-text-over-video--false') && $videoWrapper.hasClass('caption--below-false') && !window.PXUTheme.media_queries.large.matches) {
              $videoTextContainer.hide();
            } else {
              $videoTextContainer.show();
            }

            // Hide play button
            if ($playButton) {
              $playButton.hide();
            }

            // Hide secondary button
            if ($secondaryButton) {
              $secondaryButton.hide();
            }
          });

          // If video is paused, show play button icon
          player.on('pause', function () {
            if ($playButton.is(':hidden') || $playButton.length == 0) {
              $videoWrapper.addClass('play-button-icon--visible');
            }
            $videoTextContainer.show();
          });

          // If page loads with video paused and no button showing, show icon
          if (!player.playing && $playButton.is(':hidden') || $playButton.length == 0) {
            $videoWrapper.addClass('play-button-icon--visible');
          }
          return false;
        }
      });
    });
  }
};

/*============================================================================
  Cart
==============================================================================*/
window.cart = {
  init() {
    if (document.querySelector('#cart_form .tos_agree')) {
      this.handleTos();
    }
    const cartNoteEl = document.querySelector('#cart_form [data-cart-note]');
    if (cartNoteEl) this.handleNotes(cartNoteEl);
  },
  handleTos() {
    // Terms of service on cart page
    $('body').on('click', "#cart_form input[type='submit']", function () {
      if ($(this).parents('form').find('.tos_agree').is(':checked')) {
        $(this).submit();
      } else {
        const warning = `<p class="warning animated bounceIn">${window.PXUTheme.translation.agree_to_terms_warning}</p>`;
        if ($('p.warning').length === 0) {
          $(this).before(warning);
        }
        return false;
      }
    });
  },
  handleNotes(el) {
    el.addEventListener('change', event => {
      const body = JSON.stringify({
        note: event.target.value
      });
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      };
      fetch(`${window.PXUTheme.routes.cart_update_url}`, {
        ...options,
        ...{
          body
        }
      });
    });
  }
};

/*============================================================================
  Product
==============================================================================*/
window.selectCallback = function (variant, selector, $element) {
  const evt = document.createEvent('HTMLEvents');
  let $product;
  if ($element) {
    $product = $element.find(`.product-${selector.product.id}`);
  } else {
    $product = $(`.product-${selector.product.id}`);
  }
  const $productForm = $('.product_form, .shopify-product-form', $product);
  const variantInventory = $productForm.data('variant-inventory');

  // Manually trigger change event so
  // pure JS listeners can receive it
  evt.initEvent('change', false, true);
  selector.variantIdField.dispatchEvent(evt);

  // Notify form

  const $notifyForm = $(`.notify-form-${selector.product.id}`);
  const productTitle = $notifyForm.data('product-title');
  const $notifyFormInputs = $('.notify_form__inputs', $product);
  const notifySend = window.PXUTheme.translation.notify_email_send;
  const notifyUrl = $notifyFormInputs.data('url');

  // Construct the notify message
  if (variant) {
    if (variant.title !== 'Default Title') {
      // Escape the variant title
      window.variantTitle = variant.title.replace(/"/g, '&quot;');
      window.notifyMessage = window.PXUTheme.translation.notify_message_first + productTitle + ' - ' + window.variantTitle + window.PXUTheme.translation.notify_message_last + notifyUrl;
    } else {
      window.notifyMessage = window.PXUTheme.translation.notify_message_first + productTitle + window.PXUTheme.translation.notify_message_last + notifyUrl;
    }
  }

  // Prefill the email address if a customer is logged in
  let notifyFormEmail;
  let notifyFormPlaceholder;
  if ($notifyForm.hasClass('notify-form--customer')) {
    notifyFormEmail = $notifyForm.data('customer-email');
    notifyFormPlaceholder = '';
  } else {
    notifyFormEmail = '';
    notifyFormPlaceholder = window.PXUTheme.translation.notify_email;
  }

  // Compile HTML
  window.notifyFormHTML = `
    <input
      class="notify-email"
      id="contact[email]"
      name="contact[email]"
      type="email"
      placeholder="${notifyFormPlaceholder}"
      value="${notifyFormEmail}"
      required
    >

    <input
      type="hidden"
      name="challenge"
      value="false"
    >

    <input
      class="notify_form_message"
      name="contact[body]"
      type="hidden"
      data-body="${window.notifyMessage}"
      value="${window.notifyMessage}"
    >

    <input
      class="
        global-button
        global-button--primary
      "
      type="submit"
      value="${notifySend}"
    >
  `;

  // Image Variant feature
  if (variant && variant.featured_image && $product.is(':visible')) {
    const $sliders = $('.js-product-gallery', $product);
    $sliders.each((_, slider) => {
      const $slider = $(slider);
      const $sliderInstance = window.Flickity.data($slider[0]);
      if ($slider && $sliderInstance !== undefined) {
        const index = $(`[data-image-id="${variant.featured_media.id}"]`).data('index');
        $sliderInstance.select(index, false, true);
      }
    });
  }

  // Toggles images in product slider when inline quickshop and layout set to slider
  if (variant && variant.featured_image && $product.is(':visible')) {
    if (window.PXUTheme.theme_settings.product_form_style === 'select' && window.PXUTheme.theme_settings.quick_shop_style === 'inline') {
      const $selectedVariants = $('.products-slider').find('select option:not(.selector-wrapper select option)').filter(':selected');
      $selectedVariants.each(function toggleImage() {
        if ($(this).data('featured-image')) {
          const swatchImage = $(this).data('image');
          const $quickShopElement = $(this).parents('.thumbnail').find('.image__container img');
          $quickShopElement.attr('src', swatchImage);
          $quickShopElement.attr('srcset', swatchImage);
        }
      });
    }
  }
  if (variant) {
    if (variantInventory) {
      variantInventory.forEach(v => {
        if (v.id === variant.id) {
          const currentVariant = variant;
          currentVariant.inventory_quantity = v.inventory_quantity;
          currentVariant.inventory_management = v.inventory_management;
          currentVariant.inventory_policy = v.inventory_policy;
        }
      });
    }
    $('.sku span', $product).text(variant.sku);
    if (window.PXUTheme.theme_settings.product_form_style === 'radio') {
      const {
        length
      } = variant.options;
      for (let i = 0; i < length; i++) {
        const radioButton = $productForm.find(`.swatch[data-option-index="${escape(i)}"] :radio[value="${variant.options[i].replace(/"/g, '\\"')}"]`);
        if (radioButton.length) {
          radioButton.get(0).checked = true;
        }
      }
    } else {
      $('.notify_form_message', $product).attr('value', `${$('.notify_form_message', $product).data('body')} - ${window.variantTitle}`);
    }
  }
  if (variant && variant.available === true) {
    if (variant.inventory_management && variant.inventory_quantity > 0) {
      if (window.PXUTheme.theme_settings.display_inventory_left) {
        if (variant.inventory_quantity === 1) {
          window.itemsLeftText = window.PXUTheme.translation.one_item_left;
        } else {
          window.itemsLeftText = window.PXUTheme.translation.items_left_text;
        }
        const inventoryThreshold = parseInt(window.PXUTheme.theme_settings.inventory_threshold, 10);
        if (variant.inventory_quantity <= inventoryThreshold) {
          $('.items_left', $product).html(`${variant.inventory_quantity} ${window.itemsLeftText}`);
        } else {
          $('.items_left', $product).html('');
        }
      }
      if (window.PXUTheme.theme_settings.limit_quantity) {
        if (variant.inventory_policy === 'deny') {
          $('.quantity', $product).attr('max', variant.inventory_quantity);
        }
      }
    } else {
      $('.items_left', $product).text('');
      $('.quantity', $product).removeAttr('max');
    }
    $('.sold_out', $product).text('');
    $('.add_to_cart', $product).removeClass('disabled').removeAttr('disabled').find('span').text($('.add_to_cart', $product).data('label'));
    $('.shopify-payment-button', $product).removeClass('disabled');
    $('.purchase-details__buttons', $product).removeClass('product-is-unavailable');
    $('.modal_price', $product).removeClass('variant-unavailable');
    $product.find($notifyForm).hide();
    $product.find($notifyFormInputs).empty();
  } else {
    // When product is sold out
    const message = variant ? window.PXUTheme.translation.sold_out_text : window.PXUTheme.translation.unavailable_text;
    if (variant) {
      $('.modal_price', $product).removeClass('variant-unavailable');
    } else {
      // Add class to quickshop so we know variant is unavailable
      $('.modal_price', $product).addClass('variant-unavailable');
    }
    $('.items_left', $product).text('');
    $('.quantity', $product).removeAttr('max');
    $('.sold_out', $product).text(message);
    $('.purchase-details__buttons', $product).addClass('product-is-unavailable');
    $('.add_to_cart', $product).addClass('disabled').attr('disabled', 'disabled').find('span').text(message);
    $('.shopify-payment-button', $product).addClass('disabled');
    $notifyForm.hide();
    $notifyFormInputs.empty();
    if (variant && !variant.available) {
      $notifyForm.fadeIn();
      $notifyFormInputs.empty();
      $notifyFormInputs.append(window.notifyFormHTML);
    }
  }
  if (window.PXUTheme.currency.show_multiple_currencies) {
    window.currencyConverter.convertCurrencies();
  }
};
window.productPage = {
  loadQuickshop(url) {
    return window.shopifyAsyncview.load(url,
    // Template name
    {
      view: 'quickshop'
    } // View name (suffix)
    );
  },

  init() {
    window.Shopify.loadFeatures([{
      name: 'shopify-xr',
      version: '1.0'
    }, {
      name: 'model-viewer-ui',
      version: '1.0'
    }], window.productMedia.setupMedia);

    // Call enable gallery function for product galleries
    $('[data-product-gallery]:not(.product-recommendations [data-product-gallery])').each(function () {
      const $productGallery = $(this);
      window.productPage.enableGallery($productGallery);
    });
    if (window.location.search === '?contact_posted=true') {
      $('.notify-form .contact-form').hide();
      $('.notify-form .contact-form').prev('.message').html(window.PXUTheme.translation.notify_success_text);
    }
    if (window.PXUTheme.theme_settings.product_form_style === 'radio') {
      $('body').on('change', '.swatch :radio', function swatchLogic() {
        const optionIndex = $(this).closest('.swatch').attr('data-option-index');
        const optionValue = $(this).val();
        const parentForm = $(this).closest('.product_form form');
        let notifyForm;
        if (parentForm.siblings('.notify-form').length) {
          window.notifyForm = parentForm.siblings('.notify-form');
        } else {
          window.notifyForm = $('.js-notify-form');
        }
        const option1 = parentForm.find('.swatch_options input:checked').eq(0).val();
        const option2 = parentForm.find('.swatch_options input:checked').eq(1).val() || '';
        const option3 = parentForm.find('.swatch_options input:checked').eq(2).val() || '';
        let notifyMessage;
        if (option1 && option2 && option3) {
          window.notifyMessage = `${option1} / ${option2} / ${option3}`;
        } else if (option1 && option2) {
          window.notifyMessage = `${option1} / ${option2}`;
        } else {
          window.notifyMessage = option1;
        }
        window.notifyForm.find('.notify_form_message').attr('value', `${window.notifyForm.find('.notify_form_message').data('body')} - ${window.notifyMessage}`);
        $(this).closest('form').find('.single-option-selector').eq(optionIndex).val(optionValue).trigger('change');
      });
    }
    $('.js-product-gallery a').fancybox({
      width: 800,
      height: 800,
      baseClass: 'product-section__lightbox',
      clickContent: false,
      afterShow(instance) {
        // Loop through fancybox images, add alt attributes
        const fancyImages = $('.fancybox-image');
        $('.product-gallery__image').each((index, image) => {
          const $image = $(image);
          const alt = $image.attr('alt');
          fancyImages.eq(index).attr('alt', alt);
        });
        const zoom = instance.$trigger.first().parents('.js-product-gallery').data('zoom');
        if (zoom) {
          $('.fancybox-image').last().wrap('<span class="zoom-wrap" style="display:inline-block"></span>').css('display', 'block').parent().zoom({
            touch: false,
            magnify: 1
          });
        }
      },
      afterClose(instance) {
        const $instanceGallery = instance.$trigger.first().parents('.js-product-gallery');
        $instanceGallery.hide();
        setTimeout(() => {
          $instanceGallery.fadeIn(100);
          $('.js-product-gallery').find('.is-selected a').focus();
        }, 1);
      }
    });
    const recipientFormEl = document.querySelector('[data-recipient-form]');
    if (recipientFormEl) {
      const sectionEl = recipientFormEl.closest('.product_section');
      this.recipientForm = new RecipientForm(sectionEl);
    }

    // Complementary products
    const complementaryProductsEl = document.querySelector('[data-complementary-products]');
    if (complementaryProductsEl) {
      const sectionEl = complementaryProductsEl.closest('.product_section');
      const {
        sectionId,
        productId,
        productRecommendationLimit
      } = JSON.parse(document.querySelector('[data-complementary-products-data]').textContent);
      this.complementaryProductRecommendations = new ComplementaryProducts({
        sectionEl,
        sectionId,
        productId,
        productRecommendationsRoute: window.PXUTheme.routes.product_recommendations_url,
        includeIndicatorDots: true,
        limit: productRecommendationLimit,
        arrowShape: 'M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z'
      });
    }

    /*
      If the product recommendations section exists, run the loadProductRecommendations method
      The selectCallback within this method will only affect the products in the product recommendations section
    */
    if ($('.shopify-section--recommended-products').length) {
      window.productPage.loadProductRecommendations();
    }
  },
  runOptionSelector($element) {
    let $defaultSelector = $('.js-product-section [data-product-form]:not(.product-recommendations .js-product-section [data-product-form])');
    if ($element) {
      $defaultSelector = $element.find('[data-product-form]');
    }
    $defaultSelector.each((_, options) => {
      const $options = $(options);
      const $productDetails = $options.closest('.product__details');

      // Set up variables for price ui and surface pickup
      let priceUIEl;
      const paymentTerms = new window.PaymentTerms($productDetails[0]);

      // If smaller screen size and thumbnail hover enabled
      // use price ui element inside of caption instead
      if (window.PXUTheme.media_queries.medium.matches && window.PXUTheme.theme_settings.hover_enabled && window.PXUTheme.theme_settings.quick_shop_enabled && window.PXUTheme.theme_settings.quick_shop_style === 'inline') {
        priceUIEl = $productDetails.find('.modal_price [data-price-ui], .product-info__caption [data-price-ui]')[0];
      } else {
        priceUIEl = $productDetails.find('[data-price-ui]')[0];
      }
      const priceUIBadgeEl = $productDetails.find('[data-price-ui-badge]')[0];
      const surfacePickUpEl = $productDetails.find('[data-surface-pick-up]')[0];
      const JSONData = $options.data('product');
      const isPriceSavingsEnabled = priceUIEl && priceUIEl.closest(['[data-display-savings="true"]']);
      const productTitle = $options.data('product-title');
      let priceUI;
      let priceUIBadge;
      let surfacePickUp;
      let currentVariant;
      if (priceUIEl) {
        priceUI = new window.ShopifyPriceUI.PriceUI(priceUIEl);
      }
      if (priceUIBadgeEl) {
        priceUIBadge = new window.ShopifyPriceUI.PriceUIBadge(priceUIBadgeEl);
      }
      if (surfacePickUpEl) {
        surfacePickUp = new window.ShopifySurfacePickUp(surfacePickUpEl);
        surfacePickUp.onModalRequest(contents => {
          const surfacePickUpModal = document.querySelector('[data-surface-pick-up-modal]');
          let fragment;
          if (currentVariant.title && productTitle) {
            fragment = document.createDocumentFragment();
            const header = document.createElement('div');
            const title = document.createElement('h2');
            header.classList.add('surface-pick-up__modal-header');
            title.classList.add('surface-pick-up__modal-title');
            title.innerHTML = productTitle;
            header.appendChild(title);
            if (currentVariant.title !== 'Default Title') {
              const subtitle = document.createElement('span');
              subtitle.classList.add('surface-pick-up__modal-subtitle');
              subtitle.innerHTML = currentVariant.title;
              header.appendChild(subtitle);
            }
            fragment.appendChild(header);
          }
          surfacePickUpModal.innerHTML = contents;
          surfacePickUpModal.insertBefore(fragment, surfacePickUpModal.firstChild);
          $.fancybox.open(surfacePickUpModal, {
            hash: false,
            infobar: false,
            toolbar: false,
            loop: true,
            smallBtn: true,
            touch: false,
            video: {
              autoStart: false
            },
            mobile: {
              preventCaptionOverlap: false,
              toolbar: true
            }
          });
        });
      }
      new window.Shopify.OptionSelectors($options.data('select-id'), {
        product: $options.data('product'),
        onVariantSelected: (variant, selector) => {
          currentVariant = variant;
          paymentTerms.update(variant ? variant.id : null);
          if (priceUI) {
            priceUI.load(JSONData, {
              variant,
              formatter: price => window.Shopify.formatMoney(price, $('body').data('money-format')),
              handler: (priceUIFragment, _product, _ref) => {
                let {
                  variant: v
                } = _ref;
                if (isPriceSavingsEnabled && v) {
                  if (v.compare_at_price > v.price) {
                    const span = document.createElement('span');
                    span.classList.add('sale', 'savings');
                    const savings = v.compare_at_price - v.price;
                    const percentage = Math.round(savings / v.compare_at_price * 100);
                    span.innerHTML = `${window.PXUTheme.translation.savings_text} ${percentage}% (<span class="money">${window.Shopify.formatMoney(v.compare_at_price - v.price, $('body').data('money-format'))}</span>)`;
                    priceUIFragment.appendChild(span);
                  }
                }
                if (v && v.available) {
                  if (v.price === 0) {
                    const fragment = document.createDocumentFragment();
                    const span = document.createElement('span');
                    span.classList.add('free-price-text');
                    if (window.PXUTheme.theme_settings.free_text !== '') {
                      span.innerHTML = window.PXUTheme.theme_settings.free_text;
                    } else {
                      span.innerHTML = `<span class="money">${window.Shopify.formatMoney(v.price, $('body').data('money-format'))}</span>`;
                    }
                    fragment.appendChild(span);
                    return fragment;
                  }
                  return priceUIFragment;
                }
                if (!window.PXUTheme.theme_settings.display_sold_out_price) {
                  const fragment = document.createDocumentFragment();
                  const soldOutText = document.createElement('span');
                  soldOutText.classList.add('sold_out');
                  soldOutText.innerHTML = v ? window.PXUTheme.translation.sold_out_text : window.PXUTheme.translation.unavailable_text;
                  fragment.appendChild(soldOutText);
                  return fragment;
                }

                // Displays sold out text beside price
                if (window.PXUTheme.theme_settings.display_sold_out_price) {
                  const span = document.createElement('span');
                  span.classList.add('sold_out');
                  span.innerHTML = v ? window.PXUTheme.translation.sold_out_text : window.PXUTheme.translation.unavailable_text;
                  priceUIFragment.appendChild(span);
                }
                return priceUIFragment;
              }
            });
            if (window.PXUTheme.theme_settings.display_sold_out_price && variant && variant.price === 0 && !variant.available) {
              const priceElement = priceUIEl.querySelector('[data-price]');
              if (!priceElement) {
                return;
              }
              if (window.PXUTheme.theme_settings.free_text !== '') {
                const span = document.createElement('span');
                span.classList.add('free-price-text');
                span.innerHTML = window.PXUTheme.theme_settings.free_text;
                priceElement.innerHTML = '';
                priceElement.appendChild(span);
              } else if (window.PXUTheme.theme_settings.free_text === '') {
                priceElement.classList.add('price--sale');
                return;
              }
            }
          }
          if (priceUIBadge) {
            priceUIBadge.load(JSONData, {
              variant,
              style: 'default',
              formatter: price => window.Shopify.formatMoney(price, $('body').data('money-format')),
              handler: (priceUIFragment, _product, _ref2) => {
                let {
                  variant: v
                } = _ref2;
                if (v && v.available) {
                  if (!v.compare_at_price || v.compare_at_price <= v.price) {
                    return document.createDocumentFragment();
                  }
                  return priceUIFragment;
                }
                if (v && !v.available || !v) {
                  const fragment = document.createDocumentFragment();
                  let text;
                  const sticker = document.createElement('div');
                  sticker.classList.add('price-ui-badge__sticker');
                  const stickerText = document.createElement('span');
                  stickerText.classList.add('price-ui-badge__sticker-text');
                  stickerText.setAttribute('data-badge', '');
                  if (v && !v.available) {
                    sticker.classList.add('price-ui-badge__sticker--sold-out');
                    text = window.PXUTheme.translation.sold_out_text;
                  }
                  if (!v) {
                    sticker.classList.add('price-ui-badge__sticker--unavailable');
                    text = window.PXUTheme.translation.unavailable_text;
                  }
                  stickerText.innerHTML = text;
                  sticker.appendChild(stickerText);
                  fragment.appendChild(sticker);
                  return fragment;
                }
                return priceUIFragment;
              }
            });
          }

          // Avoid loading surface pickup for the inline quick shop
          if (surfacePickUp && !$options.closest('.js-product-section').hasClass('inline-quickshop')) {
            surfacePickUp.load(variant ? variant.id : null);
          }
          window.selectCallback(variant, selector, $element);
        },
        enableHistoryState: $options.data('enable-state')
      });
    });
  },
  enableGallery(selector) {
    // Variables
    const $productGallery = $(selector);
    const $slides = $productGallery.find('.gallery-cell');
    const $thumbnailProductGallery = $productGallery.closest('.js-product-section').find('.product_gallery_nav');
    const $thumbnails = $thumbnailProductGallery.find('.gallery-cell');
    const zoom = $productGallery.data('zoom');
    const productLightbox = $productGallery.data('product-lightbox');
    const thumbnailsEnabled = $productGallery.data('thumbnails-enabled');
    const thumbnailsSliderEnabled = $productGallery.data('thumbnails-slider-enabled');
    const thumbnailsPosition = $productGallery.data('thumbnails-position');
    const thumbnailsArrows = $productGallery.data('gallery-arrows-enabled');
    const slideshowSpeed = $productGallery.data('slideshow-speed');

    // If zoom enabled
    if (zoom === true) {
      if (window.is_touch_device() && window.PXUTheme.media_queries.medium.matches) {
        // Lightbox has a built-in zoom feature, so check if lightbox is disabled
        if (productLightbox === 'false') {
          document.addEventListener('lazybeforeunveil', window.imageFunctions.zoom);
        }
      } else {
        document.addEventListener('lazybeforeunveil', window.imageFunctions.zoom);
        window.imageFunctions.zoom($productGallery.find('[data-zoom-src]').first());
      }
    }
    $productGallery.on('ready.flickity', () => {
      $slides.each((index, slide) => {
        // Determine media type
        const mediaType = $(slide).data('media-type') || $(slide).find('[data-media-type]').data('media-type');
        let videoID;
        switch (mediaType) {
          case 'external_video':
            videoID = $(slide).find('[data-plyr-video-id]').data('plyr-video-id');
            if (window.videoPlayers) {
              window.videoPlayers.forEach(player => {
                const currentPlayer = player;
                if (player.id === videoID || player.media.id === videoID) {
                  if (!$(slide).hasClass('is-selected')) {
                    currentPlayer.keyboard = {
                      focused: false,
                      global: false
                    };
                  }
                }
              });
            }
            break;
          case 'video':
            videoID = $(slide).find('[data-plyr-video-id]').data('plyr-video-id');
            if (window.videoPlayers) {
              window.videoPlayers.forEach(player => {
                const currentPlayer = player;
                if (player.id === videoID || player.media.id === videoID) {
                  if (!$(slide).hasClass('is-selected')) {
                    currentPlayer.keyboard = {
                      focused: false,
                      global: false
                    };
                  }
                }
              });
            }
            break;
          case 'model':
            if ($(slide).hasClass('is-selected')) {
              // When active slide
              if (mediaType === 'model' && window.isScreenSizeLarge()) {
                $(slide).on('mouseenter', () => {
                  $productGallery.flickity('unbindDrag');
                });
                $(slide).on('mouseleave', () => {
                  $productGallery.flickity('bindDrag');
                });
              }
            }
            break;
          default:
            break;
        }
      });

      // Video looping
      const loopingEnabled = $productGallery.data('video-loop');
      $.each(window.videoPlayers, (index, player) => {
        const videoPlayer = player;
        videoPlayer.loop = loopingEnabled;
      });
    });
    $productGallery.on('change.flickity', () => {
      $slides.each((index, slide) => {
        // Determine media type of current slide
        const mediaType = $(slide).data('media-type') || $(slide).find('[data-media-type]').data('media-type');
        if ($(slide).hasClass('is-selected')) {
          // When active slide
          switch (mediaType) {
            case 'model':
              /* On slide change, if active slide contains 3d model
              * If on desktop, on hover, unbind flickity, after hover bind flickity
              * On model play event, unbind flickity to ensure model can be interacted with
              * On model pause event, bind flickity so that slide can be swiped
              * Pause all model slides when hidden
              */

              if (window.isScreenSizeLarge()) {
                // On mouseenter event, unbind flickity
                $(slide).on('mouseenter', () => {
                  $productGallery.flickity('unbindDrag');
                });

                // On mouseleave event, bind flickity
                $(slide).on('mouseleave', () => {
                  $productGallery.flickity('bindDrag');
                });
              }

              // Listen for model pause/play events
              $(slide).find('model-viewer').on('shopify_model_viewer_ui_toggle_play', () => {
                $productGallery.flickity('unbindDrag');
              });
              $(slide).find('model-viewer').on('shopify_model_viewer_ui_toggle_pause', () => {
                $productGallery.flickity('bindDrag');
              });
              break;
            default:
              $productGallery.flickity('bindDrag');
              break;
          }
        } else {
          // When inactive slide
          switch (mediaType) {
            case 'external_video':
              // Youtube video pausing
              $.each(window.videoPlayers, (_index, player) => {
                player.pause();
              });
              break;
            case 'video':
              // HTML5 video pausing
              $.each(window.videoPlayers, (_index, player) => {
                player.pause();
              });
              break;
            default:
              break;
          }
        }
      });

      // Restore 3d model icons
      window.productMedia.showModelIcon($productGallery);
    });
    $productGallery.flickity({
      wrapAround: true,
      adaptiveHeight: true,
      dragThreshold: 10,
      imagesLoaded: true,
      pageDots: false,
      prevNextButtons: $productGallery.data('media-count') > 1 || $slides.length > 1,
      autoPlay: slideshowSpeed * 1000,
      watchCSS: false
    });

    // Adjust arrows height if controls are hidden/shown
    $.each(window.videoPlayers, (index, player) => {
      // When controls are hidden, height should be auto
      player.on('controlshidden', () => {
        $productGallery.find('.flickity-prev-next-button').css('height', 'auto');
      });
      // When controls are shown, height should account for controls bar
      player.on('controlsshown', () => {
        $productGallery.find('.flickity-prev-next-button').css('height', 'calc(100% - 64px)');
      });
    });
    function autoplayVideo(videoID, $slide) {
      // Compare id to player object and only play that video
      $.each(window.videoPlayers, (index, player) => {
        if (parseInt(player.media.dataset.plyrVideoId, 10) === videoID) {
          player.play();

          // On fullscreen toggle, focus back on the slide itself
          player.on('exitfullscreen', () => {
            $slide.closest('.product-gallery').find('.product-gallery__thumbnails').focus();
          });
        }
      });
    }
    function autoplayYoutubeVideo(iframeID, $slide) {
      // compare id to player object and only play that video
      $.each(window.videoPlayers, (index, player) => {
        if (player.playing) {
          player.pause();
        }
        if (player.media.id === iframeID) {
          player.play();

          // On fullscreen toggle, focus back on the slide itself
          player.on('exitfullscreen', () => {
            $slide.closest('.product-gallery').find('.product-gallery__thumbnails').focus();
          });
        }
      });
    }
    function checkForVideos() {
      $slides.each((index, slide) => {
        // Variables
        const $slide = $(slide);
        const mediaType = $slide.data('media-type') || $slide.find('[data-media-type]').data('media-type');
        let videoID = $slide.find('video').data('plyr-video-id');
        const $iframeVideo = $slide.find('iframe');
        const iframeID = $iframeVideo.attr('id');
        if ($slide.hasClass('is-selected')) {
          if (mediaType === 'video') {
            videoID = $slide.find('video').data('plyr-video-id');
            if (videoID) {
              autoplayVideo(videoID, $slide);
            }
          } else if (mediaType === 'external_video' && iframeID) {
            autoplayYoutubeVideo(iframeID, $slide);
          }
        }
      });
    }

    // Checks for videos and plays them if they are the featured media
    // Autoplay logic only happens on desktop, autoplay set to off for mobile
    const $sliderArrows = $productGallery.find('.flickity-prev-next-button');
    if (($sliderArrows || $thumbnails) && window.isScreenSizeLarge()) {
      $sliderArrows.on('click', () => {
        const pId = $productGallery.data('product-id');
        $productGallery.on('settle.flickity', () => {
          // Find out media type of featured media slide
          const $selectedSlide = $productGallery.find('.gallery-cell.is-selected');
          const mediaType = $selectedSlide.data('media-type') || $selectedSlide.find('[data-media-type]').data('media-type');

          // Run video autoplay logic if featured media is a video
          if (mediaType === 'video' || mediaType === 'external_video') {
            checkForVideos();
          }

          // Autoplay model if featured media is a model
          if (mediaType === 'model') {
            // If model container has class is-selected then play the model
            const sortedModels = [];
            $.each(window.productMedia.models, model => {
              if ($(model.container).closest('.gallery-cell').data('product-id') === pId) {
                sortedModels.push(model);
              }
            });
            $.each(sortedModels, model => {
              const $slide = $(model.container).closest('.gallery-cell');
              if ($slide.hasClass('is-selected')) {
                model.play();
              }
            });
          }
          $productGallery.off('settle.flickity');
        });
        return false;
      });
      $thumbnails.on('click', event => {
        const index = $(event.currentTarget).index();
        const pId = $productGallery.data('product-id');
        $productGallery.flickity('select', index);
        $productGallery.on('settle.flickity', () => {
          // Find out media type of featured media slide
          const $selectedSlide = $productGallery.find('.gallery-cell.is-selected');
          const mediaType = $selectedSlide.data('media-type') || $selectedSlide.find('[data-media-type]').data('media-type');

          // Run video autoplay logic if featured media is a video
          if (mediaType === 'video' || mediaType === 'external_video') {
            checkForVideos();
          }

          // Autoplay model if featured media is a model
          if (mediaType === 'model') {
            // If model container has class is-selected then play the model
            const sortedModels = [];
            $.each(window.productMedia.models, (_index, model) => {
              if ($(model.container).closest('.gallery-cell').data('product-id') === pId) {
                sortedModels.push(model);
              }
            });
            $.each(sortedModels, (_index, model) => {
              const $slide = $(model.container).closest('.gallery-cell');
              if ($slide.hasClass('is-selected')) {
                model.play();
              }
            });
          }
          $productGallery.off('settle.flickity');
        });
        return false;
      });
      $thumbnails.keypress(event => {
        const index = $(event.currentTarget).index();
        const pId = $productGallery.data('product-id');
        if (event.which === 13) {
          $productGallery.flickity('select', index);
          const $selectedSlide = $productGallery.find('.gallery-cell.is-selected');
          $productGallery.on('settle.flickity', () => {
            $selectedSlide.find('[data-youtube-video]').attr('tabindex', '0');
            $selectedSlide.find('model-viewer, .plyr, a').focus();
            $productGallery.off('settle.flickity');
          });

          // Find out media type of featured media slide
          const mediaType = $selectedSlide.data('media-type') || $selectedSlide.find('[data-media-type]').data('media-type');

          // Run video autoplay logic if featured media is a video
          if (mediaType === 'video' || mediaType === 'external_video') {
            checkForVideos();
          }

          // Autoplay model if featured media is a model
          if (mediaType === 'model') {
            // If model container has class is-selected then play the model
            const sortedModels = [];
            $.each(window.productMedia.models, model => {
              if ($(model.container).closest('.gallery-cell').data('product-id') === pId) {
                sortedModels.push(model);
              }
            });
            $.each(sortedModels, model => {
              const $slide = $(model.container).closest('.gallery-cell');
              if ($slide.hasClass('is-selected')) {
                model.play();
              }
            });
          }
          return false;
        }
        return undefined;
      });
    }

    // Thumbnail gallery logic begins
    if (thumbnailsEnabled === true && thumbnailsSliderEnabled === true && $slides.length > 1) {
      // If desktop determine which slider we build
      if (window.PXUTheme.media_queries.large.matches) {
        // If thumbnail position is left/right then vertical slider gets enabled
        if (thumbnailsPosition === 'left' || thumbnailsPosition === 'right') {
          $thumbnailProductGallery.css('max-height', $productGallery.closest('.product-gallery').outerHeight());
          $thumbnailProductGallery.addClass('vertical-slider-enabled');
          $thumbnails.on('click', event => {
            const index = $(event.currentTarget).index();
            $productGallery.flickity('select', index);
          });
          const navCellHeight = $thumbnails.height();
          const navHeight = $thumbnailProductGallery.height();
          $productGallery.on('select.flickity', () => {
            // set selected nav cell
            const flkty = $productGallery.data('flickity');
            $thumbnailProductGallery.find('.is-nav-selected').removeClass('is-nav-selected');
            const $selected = $thumbnails.eq(flkty.selectedIndex).addClass('is-nav-selected');

            // scroll nav
            const scrollY = $selected.position().top + $thumbnailProductGallery.scrollTop() - (navHeight + navCellHeight) / 2;
            $thumbnailProductGallery.animate({
              scrollTop: scrollY
            });
          });
        } else {
          $thumbnailProductGallery.flickity({
            cellAlign: 'center',
            contain: true,
            groupCells: '80%',
            imagesLoaded: true,
            pageDots: false,
            prevNextButtons: $thumbnails.length > 5 ? thumbnailsArrows : false,
            asNavFor: $productGallery[0]
          });
          $thumbnailProductGallery.on('settle.flickity', () => {
            $thumbnailProductGallery.flickity('resize');
          });
          $(window).on('load', () => {
            $thumbnailProductGallery.flickity('resize');
          });

          // Once thumbnail is focused, move carousel to that cell
          $.each($thumbnails, (index, thumbnail) => {
            const $thumbnail = $(thumbnail);
            if ($thumbnail.hasClass('is-selected')) {
              $thumbnail.on('focus', () => {
                $thumbnailProductGallery.flickity('selectCell', index);
              });
            }
          });
        }
      } else {
        // If not on desktop, create standard thumbnail slider
        $thumbnailProductGallery.flickity({
          cellAlign: 'center',
          contain: true,
          groupCells: '80%',
          imagesLoaded: true,
          pageDots: false,
          prevNextButtons: $thumbnails.length > 5 ? thumbnailsArrows : false,
          asNavFor: $productGallery[0]
        });
      }
    } else if (thumbnailsEnabled === true) {
      // If thumbnail slider is disabled, ensure thumbnails can still navigate product images
      $thumbnailProductGallery.find('.product-gallery__thumbnail').on('click', function () {
        const index = $(this).index();
        $productGallery.flickity('selectCell', index);
      });
    }
    $(window).on('load', () => {
      $productGallery.flickity().flickity('resize');
    });
    $productGallery.on('settle.flickity', () => {
      $productGallery.flickity().flickity('resize');
    });
  },
  loadProductRecommendations() {
    const $productRecommendations = $('[data-product-recommendations]');
    const $productRecommendationsSection = $('.shopify-section--recommended-products');
    const sectionID = $productRecommendations.data('section-id');
    const productID = $productRecommendations.data('product-id');
    const limit = $productRecommendations.data('limit');
    const recommendationsURL = $productRecommendations.data('recommendations-url');
    const sectionEnabled = $productRecommendationsSection.find($productRecommendations).data('enabled');
    const $recommendedProductSlider = $('.js-recommended-products-slider');
    function loadDynamicProducts() {
      // Build request URL
      const requestUrl = `${recommendationsURL}?section_id=${sectionID}&limit=${limit}&product_id=${productID}`;

      // Make ajax call to request information for window.Shopify's recommended products
      $.ajax({
        type: 'GET',
        url: requestUrl,
        success(data) {
          if (!sectionEnabled) {
            return;
          }
          const $recommendedProductsElement = $(data).find('.product-recommendations').html();

          // Insert product list into the product recommendations container
          $productRecommendations.html($recommendedProductsElement);

          // Initialize product slider if it exists on page
          if ($recommendedProductSlider.length) {
            window.productPage.recommendedProductsSlider();
          } else {
            // Call enable gallery function for product galleries
            $('[data-product-recommendations] [data-product-gallery]').each((_, gallery) => {
              const $productGallery = $(gallery);
              window.productPage.enableGallery($productGallery);
            });
          }

          // Converting the currencies
          if (window.PXUTheme.currency.show_multiple_currencies) {
            window.currencyConverter.convertCurrencies();
          }

          // Run option selectors
          window.productPage.runOptionSelector($productRecommendationsSection);

          // Initialize shopify payment buttons
          if (window.Shopify.PaymentButton) {
            window.Shopify.PaymentButton.init();
          }

          // Hide <noscript> elements
          window.hideNoScript();

          // Initialize video players
          window.videoFeature.setupRecommendedVideoPlayer();

          // Initialize swatch toggler
          $('.swatch_options label').on('click', function () {
            window.quickShop.toggleSwatchImages($(this));
          });

          // Initialize the show secondary media on hover feature
          if (window.PXUTheme.theme_settings.collection_secondary_image) {
            window.imageFunctions.showSecondaryImage();
          }
        }
      });
    }
    if (!sectionEnabled) {
      return;
    }

    // If meta collection, no need to run API request
    const metaCollection = $productRecommendations.hasClass('meta-related-recommended-collection');
    if (metaCollection) {
      // Takes care of moving content from Shopify section into block container

      // Initialize product slider if it exists on page
      if ($recommendedProductSlider.length) {
        window.productPage.recommendedProductsSlider();
      } else {
        // Call enable gallery function for product galleries
        $('.product-recommendations [data-product-gallery]').each(function () {
          const $productGallery = $(this);
          window.productPage.enableGallery($productGallery);
        });
      }

      // Run option selectors
      window.productPage.runOptionSelector($productRecommendationsSection);
    } else {
      loadDynamicProducts();
    }
  },
  productSwatches() {
    // Swatches linked with selected options
    if (window.PXUTheme.theme_settings.product_form_style === 'radio') {
      if ($('.js-product-section').length) {
        const $productForms = $('.js-product-section').find('.product_form');
        $productForms.addClass('is-visible');

        // Loop through each product and set the initial option value state

        $productForms.each((_, productForm) => {
          const $productForm = $(productForm);
          const JSONData = $productForm.data('product');
          const productID = $productForm.data('product-id');
          const productSection = `.product-${productID} .js-product-section`;
          const swatchOptions = $productForm.find('.swatch_options .swatch');
          if (swatchOptions.length > 1) {
            window.Shopify.linkOptionSelectors(JSONData, productSection);
          }
        });
      }

      // Add click event when there is more than one product on the page (eg. Collection in Detail)
      if ($('.js-product-section').length > 1) {
        $('body').on('click', '.swatch-element', swatchElement => {
          const $swatchElement = $(swatchElement.currentTarget);
          const swatchValue = $swatchElement.data('value').toString();
          $swatchElement.siblings(`input[value="${swatchValue.replace(/"/g, '\\"')}"]`).prop('checked', true).trigger('change');
          const JSONData = $swatchElement.parents('.product_form').data('product');
          const productID = $swatchElement.parents('.product_form').data('product-id');
          const productSection = `.product-${productID} .js-product-section`;
          const swatchOptions = $swatchElement.parents('.product_form').find('.swatch_options .swatch');
          if (swatchOptions.length > 1) {
            window.Shopify.linkOptionSelectors(JSONData, productSection);
          }
        });
      }
    }
  },
  recommendedProductsSlider() {
    $('.product-recommendations .products-slider').each((_, productSlider) => {
      const $productSlider = $(productSlider);
      const productsPerSlide = $productSlider.data('products-per-slide');
      const productsLimit = $productSlider.data('products-limit');
      const productsAvailable = $productSlider.data('products-available');
      let cellAlign;
      let draggable;
      let prevNext;
      let wrapAround;
      let initialIndex;
      const lessSlidesThanProducts = productsAvailable > productsPerSlide;
      const limitGreaterThanSlide = productsLimit > productsPerSlide;
      const evenSlide = productsPerSlide % 2 === 0;
      if (evenSlide && lessSlidesThanProducts && limitGreaterThanSlide) {
        cellAlign = 'left';
      } else {
        cellAlign = 'center';
      }
      if (lessSlidesThanProducts && limitGreaterThanSlide) {
        draggable = true;
        prevNext = true;
        wrapAround = true;
      } else {
        draggable = false;
        prevNext = false;
        wrapAround = false;
      }
      if (evenSlide && lessSlidesThanProducts && limitGreaterThanSlide) {
        initialIndex = 0;
      } else if (productsPerSlide === '3' && productsAvailable) {
        initialIndex = 1;
      } else if (productsPerSlide === '5' && productsAvailable) {
        initialIndex = 2;
      } else if (productsPerSlide === '7' && productsAvailable) {
        initialIndex = 3;
      }
      if (window.PXUTheme.media_queries.medium.matches) {
        cellAlign = 'center';
        draggable = true;
        prevNext = true;
        wrapAround = true;
        initialIndex = 1;
        $productSlider.parents('.even-num-slides').removeClass('even-num-slides');
      }
      $productSlider.flickity({
        lazyLoad: 2,
        imagesLoaded: true,
        draggable,
        cellAlign,
        prevNextButtons: prevNext,
        wrapAround,
        contain: true,
        freeScroll: true,
        initialIndex
      });
    });
  },
  initializeQuantityBox() {
    $('body').on('click', '.js-change-quantity', e => {
      const $this = $(e.currentTarget);
      const $input = $this.siblings('input');
      const val = parseInt($input.val(), 10);
      let valMax = 100000000000000000000000000000;
      const valMin = $input.attr('min') || 0;
      if ($input.attr('max') != null) {
        valMax = $input.attr('max');
      }
      if (isNaN(val) || val < valMin) {
        $input.val(valMin);
      }
      if (val > valMax) {
        $input.val(valMax);
      }
      if ($this.data('func') === 'plus') {
        if (val < valMax) $input.val(val + 1);
      } else {
        if (val > valMin) $input.val(val - 1);
        if ($this.parents('.cart_item').length) {
          if (val - 1 === 0) {
            $this.closest('.cart_item').addClass('animated fadeOutUp');
          }
        }
      }
      $input.trigger('change');
    });
  },
  unload($target) {
    const $slider = $target.find('.products-slider');
    $slider.flickity('destroy');
    $('body').off('click', '.js-change-quantity');
  }
};

/*============================================================================
  Header
==============================================================================*/

class HeaderFader {
  constructor() {
    this.el = document.querySelector('[data-desktop-header]');
    if (!this.el) return;
    this.openers = new Set();
    this.fadeClass = 'feature_image';
    if (this.el.classList.contains('feature_image')) {
      this.shouldFade = this.el.classList.contains('feature_image');
    }
  }
  updateShouldFade(shouldFade) {
    if (!this.el) return;

    // No menus are open
    if (!this.openers.size) {
      this.shouldFade = shouldFade;
      return;
    }

    // 1+ menus are open
    if (shouldFade) {
      this._fade();
      this.shouldFade = shouldFade;
    } else {
      if (this.shouldFade) {
        this.openers.clear();
        this._clear();
      }
      this.shouldFade = shouldFade;
    }
  }
  fade(requestor) {
    if (!this.el) return;
    if (!this.shouldFade) return;
    if (this.openers.has(requestor)) return;
    this.openers.add(requestor);
    this._fade();
  }
  clear(requestor) {
    if (!this.el) return;
    if (!this.shouldFade) return;
    this.openers.delete(requestor);
    if (this.openers.size) return;
    this._clear();
  }
  _fade() {
    this.el.classList.remove(this.fadeClass);
  }
  _clear() {
    this.el.classList.add(this.fadeClass);
  }
}

/**
 * @class NavigationDesktopParent
 * @classdesc NavigationDesktopParent controls the functionality of tier 2 menus
 */
class NavigationDesktopParent {
  constructor(options) {
    this.menuItem = options.menuItem;
    this.detailsItem = options.menuItem.querySelector('[data-nav-desktop-details]');
    this.parentMenu = options.parentMenu;
    this._locked = options.locked || (() => false);
    this.menuLink = this.detailsItem.querySelector('[data-nav-desktop-link]');
    this.submenuEl = this.menuItem.querySelector('[data-nav-desktop-submenu]');
    this.isWideNav = 'navDesktopFullWidthMenu' in this.submenuEl.dataset;
    this.openOnClick = this.menuItem.closest('[data-show-dropdown-on-click]');
    this._isOpen = false;
    this.submenu = null;
    this.events = new window.EventHandler();
    this._open = this._open.bind(this);
    this._close = this._close.bind(this);
    this.close = this.close.bind(this);

    // When a user hits the escape key all of the menus should close and the keyboard focus should return
    // to the parent link. This will bubble up to the top parent menu.
    this.closeEsc = e => {
      if (e.key === 'Escape') {
        this.menuLink.focus();
        this._close();
      }
    };

    // When the mouse leaves the open menu, we don't want to close it right away. Setting a delay on close
    // allows situations where you might go to another parent menu but your mouse would drag slightly outside
    // of the open menu, causing you to have to go back and open the menu again. This improves accessibility
    // as well as general usability.
    this.closeTimer = null;
    this.mouseover = () => {
      clearTimeout(this.closeTimer);
      this._open();
    };
    this.mouseout = () => {
      this.closeTimer = setTimeout(this.close, 400);
    };
    this.click = e => {
      e.stopPropagation();
      // If the menu is already open, we want to continue to the link in the <a> tag.
      // For mouse hover, this is pretty straightforward, but with keyboard and touch navigation
      // you will have to touch or trigger that link a second time. This is maybe not the best for
      // accessibility, but it's a good compromise for now.

      const clickedParent = e.target.closest('[data-nav-desktop-link]');
      if (clickedParent && 'href' in clickedParent.dataset) {
        // We only prevent the click through if the menu wasn't already open.
        e.preventDefault();
        if (this._isOpen) {
          window.location = clickedParent.dataset.href;
          return;
        }
      }

      // If the submenu isn't open, open it
      this._open();
    };

    // During keyboard navigation, when you focus onto the parent menuItem, this will close the other
    // menu items that were previously open. This usually happens when you were navigating within
    // a submenu and then tab out of it to the next menu item at a lower tier.
    this.focusin = e => {
      e.stopPropagation();
      this.parentMenu.closeSiblings(this);
    };

    // Set up animation event
    this.animation = window.animations.transition({
      el: this.submenuEl,
      state: 'closed'
    });
    if (!this.openOnClick) {
      this.events.register(this.menuItem, 'mouseover', () => this.mouseover());
      this.events.register(this.menuItem, 'mouseout', () => this.mouseout());
    }
    this.events.register(this.menuItem, 'click', e => this.click(e));
    this.events.register(this.menuItem, 'touchend', e => this.click(e));
    this.events.register(this.menuItem, 'focusin', e => this.focusin(e));

    // If the user clicks, taps, or their keyboard focus reaches outside of the menu
    // we should close this menu.
    this.events.register(document.body, 'click', () => this._close());
    this.events.register(document.body, 'focusin', () => this._close());
  }

  /**
   * Close the dropdown menu immediately
   *
   */
  forceClose() {
    this._close();
  }

  /**
   * Close the dropdown menu
   *
   */
  close() {
    this._close();
  }

  /**
   * Open the dropdown menu immediately
   */
  forceOpen() {
    this._open(true);
  }

  /**
   * Open the dropdown menu
   */
  open() {
    this._open();
  }

  /**
   * Check to see if dropdown is offscreen and apply a class so it can be styled differently.
   */
  _setAlternateDrop() {
    if (this.isWideNav) return;
    const menuBounds = this.submenuEl.getBoundingClientRect();
    if (menuBounds.right > document.documentElement.clientWidth) {
      this.submenuEl.classList.add('alternate-drop');
    }
    if (menuBounds.left < 0) {
      this.submenuEl.classList.add('alternate-drop-left');
    }
  }

  /**
   * Remove any class applied to prevent offscreen menus
   */
  _removeAlternateDrop() {
    this.submenuEl.classList.remove('alternate-drop');
  }

  /**
   * Opens the dropdown menu
   *
   * @private
   */
  _open() {
    let force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (this._isOpen || this._locked()) return;
    this._isOpen = true;
    this.parentMenu.closeSiblings(this);
    this.closeEscEvent = this.events.register(window, 'keyup', e => this.closeEsc(e));
    if (!this.submenu) {
      this.submenu = new NavigationDesktopMenu({
        navList: this.submenuEl
      });
    }
    this._removeAlternateDrop();
    if (this.isWideNav) {
      window.headerFader.fade(this);
    }
    this.detailsItem.setAttribute('open', 'open');
    this.animation.animateTo('open', {
      onStart: _ref3 => {
        let {
          el
        } = _ref3;
        this._setAlternateDrop();
      },
      force
    }).then(state => {
      if (state == 'open') {
        this.menuLink.setAttribute('aria-expanded', true);
      }
    });
  }

  /**
   * Closes the dropdown menu
   *
   * @private
   */
  _close() {
    if (!this._isOpen || this._locked()) return;
    if (this.submenu) {
      this.submenu.unload();
      this.submenu = null;
    }
    this._isOpen = false;
    this.events.unregister(this.closeEscEvent);
    if (this.isWideNav) {
      window.headerFader.clear(this);
    }
    this.animation.animateTo('closed').then(state => {
      if (state == 'closed') {
        this._removeAlternateDrop();
        this.menuLink.setAttribute('aria-expanded', false);
        this.detailsItem.removeAttribute('open');
      }
    });
  }

  /**
   * Unbinds all events
   *
   */
  unload() {
    this.forceClose();
    this.events.unregisterAll();
    if (this.closeEscEvent) {
      this.events.unregister(this.closeEscEvent);
    }
  }
}

/**
 * @class NavigationDesktopMenu
 * @classdesc NavigationDesktopMenu controls the overall menu functionality and initializes Tier 2 menus
 */
class NavigationDesktopMenu {
  constructor(options) {
    this.navList = options.navList;
    this.menuItems = this.navList.children;

    // NavigationDesktopParent for meganav, if any, that is selected for editing in the TE.
    this._selectedBlock = null;
    this.parents = [];
    this.events = new window.EventHandler();
    for (let i = 0; i < this.menuItems.length; i++) {
      const menuItem = this.menuItems[i];
      if ('navDesktopParent' in menuItem.dataset) {
        this.parents.push(new NavigationDesktopParent({
          menuItem,
          parentMenu: this,
          locked: () => this._selectedBlock !== null
        }));
      } else {
        // If the keyboard navigation moves to another menuItem, we should close any
        // other existing menus that are open.
        this.events.register(menuItem, 'focusin', () => this.closeAllMenus());
      }
    }
  }
  onMeganavSelect(block) {
    const meganavParent = this.parents.find(parent => parent.menuItem === block);
    if (!meganavParent) return;
    meganavParent.forceOpen();
    this._selectedBlock = meganavParent;
  }
  onMeganavDeselect() {
    this._selectedBlock = null;
    this.closeAllMenus();
  }

  /**
   * This function will close all menus that are not the current menu.
   * This is mostly used by the HeaderNavParent class.
   *
   * @param { Object } current - The current menuItem
   */
  closeSiblings(current) {
    this.parents.forEach(parent => {
      if (parent !== current) {
        parent.close();
      }
    });
  }

  /**
   * This function will close all menus
   *
   */
  closeAllMenus() {
    this.parents.forEach(parent => parent.close());
  }

  /**
   * Unbinds all events
   *
   */
  unload() {
    this.closeAllMenus();
    this.parents.forEach(parent => {
      parent.unload();
    });
    this.events.unregisterAll();
  }
}

/**
 * @class NavigationDesktop
 * @classdesc Header navigation component is used to display menus on the header and set up their functionality
 *
 */
class NavigationDesktop {
  constructor(el) {
    this.navTier1 = el.querySelector('[data-nav-desktop-tier-1]');
    if (this.navTier1) {
      this.headerNavMenu = new NavigationDesktopMenu({
        navList: this.navTier1
      });
    }
  }
  onMeganavSelect(block) {
    if (!this.headerNavMenu) return;
    this.headerNavMenu.onMeganavSelect(block);
  }
  onMeganavDeselect() {
    if (!this.headerNavMenu) return;
    this.headerNavMenu.onMeganavDeselect();
  }
  unload() {
    if (!this.headerNavMenu) return;
    this.headerNavMenu.unload();
  }
}
class NavigationDesktopManager {
  constructor() {
    this.desktopNavs = [];
  }
  onMeganavSelect(block) {
    this.desktopNavs.forEach(nav => nav.onMeganavSelect(block));
  }
  onMeganavDeselect() {
    this.desktopNavs.forEach(nav => nav.onMeganavDeselect());
  }
  initAll() {
    this.unload();
    this.desktopNavs = Array.prototype.map.call(document.querySelectorAll('[data-nav-desktop]'), navEl => new NavigationDesktop(navEl));
  }
  unload() {
    this.desktopNavs.forEach(nav => nav.unload());
  }
}
window.navigationDesktopManager = new NavigationDesktopManager();
class MobileMenuDrawer {
  constructor(el) {
    this.el = el;
    if (!this.el) return;
    this.trigger = this.el.querySelector('[data-mobile-menu-trigger]');
    this.icon = this.el.querySelector('[data-mobile-menu-icon]');
    this.animation = window.animations.transition({
      el: this.el.querySelector(['[data-nav]']),
      state: 'closed'
    });
    this.events = new window.EventHandler();
    this.events.register(this.trigger, 'click', e => {
      e.preventDefault();
      this._toggle();
    });
  }
  _toggle() {
    if (this.animation.state === 'open') {
      this.close();
      return;
    }
    this.open();
  }
  open() {
    if (!this.el) return;
    if (this.animation.state === 'open') return;
    this.el.open = true;
    this.icon.classList.add('open');
    document.body.classList.add('is-active');
    this.animation.animateTo('open');
  }
  close() {
    if (!this.el) return;
    if (this.animation.state === 'closed') return;
    this.icon.classList.remove('open');
    this.animation.animateTo('closed').then(state => {
      if (state === 'closed') {
        this.el.open = false;
        document.body.classList.remove('is-active');
      }
    });
  }
  unload() {
    if (this.events) {
      this.events.unregisterAll();
    }
  }
}
window.header = {
  init() {
    this.events = new EventHandler();
    this.headerSearch = document.querySelector('[data-dropdown-rel="search"]');
    window.headerFader = new HeaderFader();
    window.navigationDesktopManager.initAll();
    window.mobileMenuDrawer = new MobileMenuDrawer(document.querySelector('[data-mobile-menu]'));
    this.events.register(this.headerSearch, 'click', e => {
      if (window.PXUTheme.media_queries.medium.matches) {
        e.preventDefault();
        window.mobileSearch.open();
      }
    });
    var closeMiniCart = function () {
      // Handle cart notes before closing
      document.querySelectorAll('[data-cart-form="mini-cart"] [data-cart-note]').forEach(el => {
        el.addEventListener('change', event => {
          const body = JSON.stringify({
            note: event.target.value
          });
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            }
          };
          fetch(`${window.PXUTheme.routes.cart_update_url}`, {
            ...options,
            ...{
              body
            }
          });
        });
      });
      $('body').removeClass('is-active').removeClass('blocked-scroll');
      $('.dropdown_link').toggleClass('active_link');
      $('.cart-container').removeClass('active_link');
    };
    var openMiniCart = function ($cart_container) {
      window.mobileMenuDrawer.close();
      $('.dropdown_link').removeClass('active_link');
      $cart_container.addClass('active_link');
    };
    if ($('.promo-banner').length) {
      const promoBanner = window.Cookies.get('promo-banner');
      if (promoBanner !== 'dismiss') {
        $('body').addClass('promo-banner--show');
        $('.promo-banner').on('click', '.promo-banner__close', () => {
          $('body').removeClass('promo-banner--show');
          window.Cookies.set('promo-banner', 'dismiss', {
            expires: 30,
            path: '',
            domain: '',
            sameSite: 'None',
            secure: true
          });
        });
      }
    }

    // Click anywhere outside of dropdown to close
    $('html').on('click', event => {
      if (!$(event.target).closest('.cart-container').length && $('.cart_content').is(':visible')) {
        closeMiniCart();
      }
    });

    // Close the mini cart when the mobile menu is clicked
    $('.mobile_nav').on('click', event => {
      if (!$(event.target).closest('.cart-container').length && $('.cart_content').is(':visible')) {
        closeMiniCart();
      }
    });

    //Only apply on larger screen sizes
    if (window.PXUTheme.media_queries.large.matches) {
      if ($('.header').hasClass('header-fixed--true')) {
        //offset scroll position
        $('body').on('click', '.banner a[href^="#"]', function (e) {
          e.preventDefault();
          var anchorLink = $(this).attr('href');
          var headerHeight = $('.main-nav__wrapper.sticky_nav').outerHeight();
          $('html, body').animate({
            scrollTop: $(anchorLink).offset().top - headerHeight
          }, 2000);
        });
        if (!$('.main-nav__wrapper').hasClass('sticky_nav')) {
          let stickyNavAnimation;
          window.sticky_nav = new Headhesive('.main-nav__wrapper', {
            offset: 700,
            throttle: 300,
            classes: {
              clone: 'sticky_nav',
              stick: 'sticky_nav--stick',
              unstick: 'sticky_nav--unstick'
            },
            onInit: function () {
              $('.sticky_nav .secondary_logo').css('display', 'none');
              $('.sticky_nav .primary_logo').css('display', 'block');
              $('.sticky_nav .icon-search').css('display', 'block');
              $('.sticky_nav .search-form').css('display', 'none');
              $('.sticky_nav .search-link').css('display', 'block');
              $('.sticky_nav .main-nav').append($(".header .cart-container").clone());
              window.navigationDesktopManager.initAll();
              stickyNavAnimation = new window.animations.transition({
                el: document.querySelector('.sticky_nav'),
                state: 'closed'
              });
            },
            onStick: function () {
              stickyNavAnimation.animateTo('open', {
                onStart: () => {
                  var maxHeight = 0;
                  var $targetHeightElement = $('.sticky_nav .main-nav');
                  $targetHeightElement.each(function () {
                    maxHeight = maxHeight > $(this).outerHeight() ? maxHeight : $(this).outerHeight();
                  });
                  $('.sticky_nav .mini_cart').css('height', maxHeight);
                  $('.sticky_nav .cart_content').css('top', maxHeight);
                  document.querySelector('.sticky_nav').style.setProperty('--sticky-header-height', `${maxHeight}px`);
                }
              });
            },
            onUnstick: function () {
              $('.cart-container').removeClass('active_link');
              stickyNavAnimation.animateTo('closed', {
                force: true
              });
            },
            onDestroy: () => {
              if (stickyNavAnimation) {
                stickyNavAnimation.unload();
              }
            }
          });
        }
      } else {
        $('.header-fixed--true').removeClass('header-fixed--true');
        if ($('.main-nav__wrapper').length > 1) {
          $('.main-nav__wrapper').first().remove();
        }
      }
      if ($('img.primary_logo:visible')) {
        $('.logo img', $(".feature_image .header")).attr('src', $('.logo img').data('src-home'));
      } else {
        $('.logo img').attr('src', $('.logo img').data('src'));
      }
      //Mobile menu
    } else {
      if ($('#header').hasClass('mobile_nav-fixed--true')) {
        $('body').addClass('mobile_nav-fixed--true');
        $('body').removeClass('mobile_nav-fixed--false');

        //offset scroll position
        $('body').on('click', '.banner a[href^="#"]', function (e) {
          e.preventDefault();
          var anchorLink = $(this).attr('href');
          var headerHeight = $('#header').outerHeight();
          $('html, body').animate({
            scrollTop: $(anchorLink).offset().top - headerHeight
          }, 2000);
        });
      } else {
        $('body').removeClass('mobile_nav-fixed--true');
        $('body').addClass('mobile_nav-fixed--false');
      }
    }

    // Avoid cart_content duplicating for mobile screen sizes
    if ($('#header .cart_content').length < 1) {
      $('#header .cart-container').append($('.header .cart_content').clone());
    }
    let closeTimer = null;

    // Toggle mini-cart with menu icon
    if (window.PXUTheme.theme_settings.cart_action !== 'redirect_cart') {
      $('.mini_cart').on('click ', function () {
        const $cartContainer = $(this).parent();
        if ($cartContainer.hasClass('active_link')) {
          closeMiniCart();
        } else {
          openMiniCart($cartContainer);
        }
      });
      $('.cart-container').on('mouseenter', function () {
        const $cartContainer = $(this);
        clearTimeout(closeTimer);
        openMiniCart($cartContainer);
      });
      $('.cart-container').on('mouseleave', () => {
        closeTimer = setTimeout(() => closeMiniCart(), 400);
      });
    }
    $('.cart_content__continue-shopping').on('click', () => {
      closeMiniCart();
    });
  },
  unload() {
    if (window.sticky_nav) {
      window.sticky_nav.destroy();
    }
    window.navigationDesktopManager.unload();
    window.mobileMenuDrawer.unload();
    $('body').off('click', '.mobile_nav');
    $('html').off('click');
    $('.cart-container').off('mouseenter');
    $('.cart-container').off('mouseleave');
    $('.mini_cart').off('click');
    $('.cart_content__continue-shopping').off('click');
    $('body').off('click', '.banner a[href^="#"]');
    $('.main-nav__wrapper.sticky_nav').remove();
  }
};
class Meganav {
  constructor(el) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.options = {
      getTargets: () => [],
      afterChange: () => {},
      ...options
    };
    this.content = el;
    this.targetHandle = this.content.dataset.meganavHandle;
    this.targets = this.options.getTargets({
      handle: this.targetHandle
    });
    this.newMenuItems = [];
    if (!this.targets.length) return;
    this.refTarget = this.targets[0];
    this.title = this.refTarget.querySelector('[data-nav-title]').innerHTML;
    this.url = this._getUrl(this.refTarget);
    this.nav = this.refTarget.closest('[data-nav]');
    this.menuItemTemplate = this.nav.querySelector('[data-nav-parent-template]');
    this.inject();
  }
  inject() {
    if (!this.targets.length) return;
    this._removeInjectedContent();
    const newMenuItem = this.menuItemTemplate.content.firstElementChild.cloneNode(true);
    newMenuItem.querySelector('[data-meganav-target-container]').appendChild(this.content.cloneNode(true));
    newMenuItem.querySelector('[data-nav-title]').innerHTML = this.title;
    this._updateHref(newMenuItem, this.url);
    this.newMenuItems = Array.prototype.map.call(this.targets, target => {
      const newItem = newMenuItem.cloneNode(true);
      target.replaceWith(newItem);
      return newItem;
    });
    this.options.afterChange();
  }
  unload() {
    this._removeInjectedContent();
    this.options.afterChange();
  }
  _updateHref(target, url) {
    const dataHrefEl = target.querySelector('[data-href]');
    if (dataHrefEl) {
      dataHrefEl.dataset.href = url;
      return;
    }
    const a = target.querySelector('a');
    if (a) {
      a.href = url;
      return;
    }
  }
  _getUrl(target) {
    const dataHrefEl = target.querySelector('[data-href]');
    if (dataHrefEl) {
      return dataHrefEl.dataset.href;
    }
    const a = target.querySelector('a');

    // If there's a `href="#"`, `a.href` will return the resolved URL, which includes the page URL
    // and the `#` fragment, so we'll use `getAttribute()` here.
    // This is used for handling the click events on the mobile menu accordions.
    if (a) {
      return a.getAttribute('href');
    }
    return '';
  }
  _removeInjectedContent() {
    this.newMenuItems.forEach((menuItem, i) => {
      menuItem.replaceWith(this.targets[i]);
    });
    this.newMenuItems = [];
  }
}
class MeganavManager {
  constructor() {
    this.meganavs = new Map();
  }
  select(el) {
    if (!this.meganavs.get(el)) return;
    const {
      desktop
    } = this.meganavs.get(el);
    desktop.newMenuItems.forEach(menuItem => {
      window.navigationDesktopManager.onMeganavSelect(menuItem);
    });
  }
  deselect() {
    window.navigationDesktopManager.onMeganavDeselect();
  }
  add(el) {
    if (!el.querySelector('[data-meganav-mobile]') || !el.querySelector('[data-meganav-desktop]')) return;
    this.meganavs.set(el, {
      mobile: new Meganav(el.querySelector('[data-meganav-mobile]'), {
        getTargets: _ref4 => {
          let {
            handle
          } = _ref4;
          return document.querySelectorAll(`[data-meganav-mobile-target="${handle}"]`);
        }
      }),
      desktop: new Meganav(el.querySelector('[data-meganav-desktop]'), {
        getTargets: _ref5 => {
          let {
            handle
          } = _ref5;
          return document.querySelectorAll(`[data-meganav-desktop-target="${handle}"]`);
        },
        afterChange: () => window.navigationDesktopManager.initAll()
      })
    });
  }
  remove(el) {
    const meganav = this.meganavs.get(el);
    if (meganav) {
      meganav.mobile.unload();
      meganav.desktop.unload();
      this.meganavs.delete(el);
    }
  }
  injectAll() {
    this.unload();
    this._addAll();
    for (const [el, meganav] of this.meganavs) {
      meganav.mobile.inject();
      meganav.desktop.inject();
    }
  }
  unload() {
    for (const [el, meganav] of this.meganavs) {
      meganav.mobile.unload();
      meganav.desktop.unload();
    }
    this.meganavs.clear();
  }
  _addAll() {
    document.querySelectorAll('.shopify-section--mega-menu').forEach(meganavEl => {
      if (this.meganavs.has(meganavEl)) return;
      this.add(meganavEl);
    });
  }
}
window.meganavManager = new MeganavManager();

/*============================================================================
  Map
==============================================================================*/
window.map = {
  init() {
    if ($('.lazymap').length > 0) {
      lazyframe('.lazymap');
    }
    if ($('.maps').hasClass('js-api-map')) {
      const mapsToLoad = [];
      // Create map settings array
      $('.map').each(function (i) {
        mapsToLoad.push(this);
        mapsToLoad[i].sectionid = $(this).data('id');
        mapsToLoad[i].address = $(this).data('address');
        mapsToLoad[i].directions = $(this).data('directions-address');
        mapsToLoad[i].zoom = $(this).data('zoom');
        mapsToLoad[i].mapstyle = $(this).data('style');
        mapsToLoad[i].showpin = $(this).data('pin');
        mapsToLoad[i].apikey = $(this).data('api-key');
      });
      $.each(mapsToLoad, i => {
        // Enable caching to avoid duplicate google maps files
        $.ajaxSetup({
          cache: true
        });
        // Load maps script and find location coordinates
        $.getScript(`https://maps.googleapis.com/maps/api/js?key=${mapsToLoad[i].apikey}`).then(() => {
          window.map.findLocation(mapsToLoad[i]);
          $.ajaxSetup({
            cache: false
          });
        });
      });
    }
  },
  findLocation(mapArray) {
    let geoLat;
    let geoLng;
    const geocoder = new google.maps.Geocoder();
    // Find and set coordinates
    geocoder.geocode({
      address: mapArray.dataset.address
    }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        geoLat = results[0].geometry.location.lat();
        geoLng = results[0].geometry.location.lng();
        // Create map
        window.map.initMap(geoLat, geoLng, mapArray);
      } else {
        console.log(`Error:${status}`);
      }
    });
  },
  initMap(lat, lng, mapArray) {
    const location = {
      lat,
      lng
    };
    let styleJson = [];
    // Set style JSON
    if (mapArray.mapstyle === 'aubergine') {
      styleJson = [{
        elementType: 'geometry',
        stylers: [{
          color: '#1d2c4d'
        }]
      }, {
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#8ec3b9'
        }]
      }, {
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#1a3646'
        }]
      }, {
        featureType: 'administrative.country',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#4b6878'
        }]
      }, {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#64779e'
        }]
      }, {
        featureType: 'administrative.province',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#4b6878'
        }]
      }, {
        featureType: 'landscape.man_made',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#334e87'
        }]
      }, {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [{
          color: '#023e58'
        }]
      }, {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
          color: '#283d6a'
        }]
      }, {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#6f9ba5'
        }]
      }, {
        featureType: 'poi',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#1d2c4d'
        }]
      }, {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#023e58'
        }]
      }, {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#3C7680'
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          color: '#304a7d'
        }]
      }, {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#98a5be'
        }]
      }, {
        featureType: 'road',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#1d2c4d'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
          color: '#2c6675'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#255763'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#b0d5ce'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#023e58'
        }]
      }, {
        featureType: 'transit',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#98a5be'
        }]
      }, {
        featureType: 'transit',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#1d2c4d'
        }]
      }, {
        featureType: 'transit.line',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#283d6a'
        }]
      }, {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{
          color: '#3a4762'
        }]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#0e1626'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#4e6d70'
        }]
      }];
    } else if (mapArray.mapstyle === 'retro') {
      styleJson = [{
        elementType: 'geometry',
        stylers: [{
          color: '#ebe3cd'
        }]
      }, {
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#523735'
        }]
      }, {
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#f5f1e6'
        }]
      }, {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#c9b2a6'
        }]
      }, {
        featureType: 'administrative.land_parcel',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#dcd2be'
        }]
      }, {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#ae9e90'
        }]
      }, {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [{
          color: '#dfd2ae'
        }]
      }, {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
          color: '#dfd2ae'
        }]
      }, {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#93817c'
        }]
      }, {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#a5b076'
        }]
      }, {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#447530'
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          color: '#f5f1e6'
        }]
      }, {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{
          color: '#fdfcf8'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
          color: '#f8c967'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#e9bc62'
        }]
      }, {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [{
          color: '#e98d58'
        }]
      }, {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#db8555'
        }]
      }, {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#806b63'
        }]
      }, {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{
          color: '#dfd2ae'
        }]
      }, {
        featureType: 'transit.line',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#8f7d77'
        }]
      }, {
        featureType: 'transit.line',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#ebe3cd'
        }]
      }, {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{
          color: '#dfd2ae'
        }]
      }, {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{
          color: '#b9d3c2'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#92998d'
        }]
      }];
    } else if (mapArray.mapstyle === 'silver') {
      styleJson = [{
        elementType: 'geometry',
        stylers: [{
          color: '#f5f5f5'
        }]
      }, {
        elementType: 'labels.icon',
        stylers: [{
          visibility: 'off'
        }]
      }, {
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#616161'
        }]
      }, {
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#f5f5f5'
        }]
      }, {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#bdbdbd'
        }]
      }, {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
          color: '#eeeeee'
        }]
      }, {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#757575'
        }]
      }, {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{
          color: '#e5e5e5'
        }]
      }, {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#9e9e9e'
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          color: '#ffffff'
        }]
      }, {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#757575'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
          color: '#dadada'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#616161'
        }]
      }, {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#9e9e9e'
        }]
      }, {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{
          color: '#e5e5e5'
        }]
      }, {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{
          color: '#eeeeee'
        }]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#c9c9c9'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#9e9e9e'
        }]
      }];
    } else if (mapArray.mapstyle === 'night') {
      styleJson = [{
        elementType: 'geometry',
        stylers: [{
          color: '#242f3e'
        }]
      }, {
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#746855'
        }]
      }, {
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#242f3e'
        }]
      }, {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      }, {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      }, {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{
          color: '#263c3f'
        }]
      }, {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#6b9a76'
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          color: '#38414e'
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#212a37'
        }]
      }, {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#9ca5b3'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
          color: '#746855'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#1f2835'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#f3d19c'
        }]
      }, {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{
          color: '#2f3948'
        }]
      }, {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#17263c'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#515c6d'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#17263c'
        }]
      }];
    } else {
      styleJson = [];
    }
    // Create google maps link
    $('.js-map-link').attr('href', `https://www.google.com/maps/place/${mapArray.directions}/@${lat},${lng}`);
    // Set map options
    const mapOptions = {
      zoom: mapArray.zoom,
      center: location,
      styles: styleJson,
      disableDefaultUI: false
    };
    // Create map
    const map = new google.maps.Map(document.getElementById(mapArray.sectionid), mapOptions);
    // Show pin
    if (mapArray.showpin === true) {
      const marker = new google.maps.Marker({
        position: location,
        map
      });
    }
  }
};

/*============================================================================
  Shoppable Image
==============================================================================*/
window.shoppableImage = {
  init() {
    $('[data-shoppable-image-wrapper]').each((_, wrapper) => {
      const blocks = wrapper.querySelectorAll('[data-shoppable-image-block]');
      let currentImage = wrapper.querySelector('[data-shoppable-image]');

      // Only initialize slider if there is more than one shoppable image block added
      if (blocks.length > 1) {
        // sliderBlock utility function requires Flickity to be initialized with jQuery
        const $wrapper = $(wrapper);
        const settings = {
          slideshowSpeed: $wrapper.data('slideshow-speed') * 1000,
          slideshowTextAnimation: $wrapper.data('slideshow-text-animation'),
          slideshowTransition: $wrapper.data('slideshow-transition')
        };
        if (!$wrapper.hasClass('flickity-enabled')) {
          $wrapper.flickity({
            wrapAround: true,
            cellAlign: 'left',
            imagesLoaded: true,
            prevNextButtons: true,
            draggable: true,
            arrowShape: window.arrowSize,
            pageDots: true,
            autoPlay: settings.slideshowSpeed,
            adaptiveHeight: true
          });

          /*
            Move Flickity prev-next buttons to inside the shoppable image so
            that the buttons don't stretch beyond the shoppable image.
            We'll do this once on page load and then every time slides are changed.
          */
          if (wrapper.querySelector('.shoppable-image__bottom-bar')) {
            const prevNextBtns = wrapper.querySelectorAll('.flickity-prev-next-button');
            const currentImage = window.Flickity.data($wrapper[0]).selectedElement;
            const currentShoppableImage = currentImage.querySelector('[data-shoppable-image]');
            prevNextBtns.forEach(btn => $(btn).appendTo(currentShoppableImage));
            $wrapper.on('change.flickity', () => {
              const currentImage = window.Flickity.data($wrapper[0]).selectedElement;
              const currentShoppableImage = currentImage.querySelector('[data-shoppable-image]');
              prevNextBtns.forEach(btn => $(btn).appendTo(currentShoppableImage));
            });
          }
          if (settings.slideshowTextAnimation !== '') {
            const flkty = $wrapper.data('flickity');
            setTimeout(() => {
              $wrapper.find('.gallery-cell:nth-child(1) [data-slideshow-caption-text]').addClass(`animated ${settings.slideshowTextAnimation}`);
            }, 400);
            $wrapper.on('select.flickity', () => {
              if ($wrapper.is(':visible')) {
                const currentSlide = flkty.selectedIndex + 1;
                setTimeout(() => {
                  $wrapper.find('[data-slideshow-caption-text]').removeClass(`animated ${settings.slideshowTextAnimation}`);
                  $wrapper.find(`.gallery-cell:nth-child(${currentSlide}) [data-slideshow-caption-text]`).addClass(`animated ${settings.slideshowTextAnimation}`);
                }, 400);
              }
            });
          }

          /*
            When using the slide transition, Flickity updates the positioning of its slides
            which can affect the positioning of the product cards on slide change.
            For fade transition we can just update the position once on page load.
            For slide transition we will update the position for the first slide on page load
            and when changing slides.
          */

          if (window.PXUTheme.media_queries.medium.matches && settings.slideshowTransition !== 'fade') {
            const flkty = $wrapper.data('flickity');
            const currentSlide = flkty.selectedIndex + 1;
            const $hotspotEls = $wrapper.find(`.gallery-cell:nth-child(${currentSlide}) [data-hotspot]`);
            $hotspotEls.each((_, hotspot) => {
              this.repositionHotspotContent(hotspot);
            });
            $wrapper.on('settle.flickity', () => {
              const currentSlide = flkty.selectedIndex + 1;
              const $hotspotEls = $wrapper.find(`.gallery-cell:nth-child(${currentSlide}) [data-hotspot]`);
              $hotspotEls.each((_, hotspot) => {
                this.repositionHotspotContent(hotspot);
              });
            });
          } else {
            this.repositionHotspotContentEls(currentImage);
          }
          $wrapper.on('settle.flickity', () => {
            currentImage = window.Flickity.data(wrapper).selectedElement;
            this.repositionHotspotContentEls(currentImage);
          });

          // Add class to parent section so that sliderBlock utility is only called when slider enabled
          const parentEl = wrapper.closest('.shopify-section--shoppable-image');
          parentEl.classList.add('shopify-section--shoppable-image--slider-enabled');
        }
      } else {
        this.repositionHotspotContentEls(currentImage);
      }
      const interactiveEls = wrapper.querySelectorAll('[data-interactive-element]');

      /*
        Adds active state to hotspot and thumbnails
        When a hotspot is in focus, its linked thumbnail will also become active
        When a thumbnail is in focus, its linked hotspot will also become active
      */

      document.body.addEventListener('click', e => {
        const clickedInteractiveEl = e.target.closest('[data-interactive-element]');
        interactiveEls.forEach((el, index) => {
          const block = el.closest('[data-shoppable-image-block]');
          if (clickedInteractiveEl && el.dataset.hotspotId === clickedInteractiveEl.dataset.hotspotId) {
            block.classList.add(el.dataset.hotspotId, `hotspot--${index + 1}`);
            el.classList.add('has-active-state');
          } else {
            block.classList.remove(el.dataset.hotspotId, `hotspot--${index + 1}`);
            el.classList.remove('has-active-state');
          }
        });
      });

      // Reposition hotspots' content when window is resized.
      window.addEventListener('resize', this.debounce(() => {
        this.repositionHotspotContentEls(currentImage);
      }));
    });
  },
  // Adjust content wrapper if it is outside of the viewport or shoppable image
  repositionHotspotContent(hotspot) {
    const contentWrapperEl = hotspot.querySelector('[data-content-wrapper]');
    const contentEl = contentWrapperEl.querySelector('[data-content]');
    const shoppableImage = hotspot.closest('[data-shoppable-image]');

    // Reset styles
    contentWrapperEl.style.transform = '';
    contentWrapperEl.style.top = '';
    contentWrapperEl.style.bottom = '';
    const contentBounds = contentEl.getBoundingClientRect();
    const shoppableImageBounds = shoppableImage.getBoundingClientRect();
    const cssTop = window.getComputedStyle(contentWrapperEl).getPropertyValue('padding');

    /*
      Prevent the hotspot content from going outside of the main shoppable image
      when the hotspot is placed too close to the top.
    */
    if (contentBounds.top < shoppableImageBounds.top && !window.PXUTheme.media_queries.mobile_and_tablet.matches) {
      contentWrapperEl.style.top = `-${cssTop}`;
    }

    /*
      Prevent the hotspot content from going outside of the main shoppable image
      when the hotspot is placed too close to the bottom.
    */
    if (contentBounds.bottom > shoppableImageBounds.bottom && !window.PXUTheme.media_queries.mobile_and_tablet.matches) {
      contentWrapperEl.style.bottom = `-${cssTop}`;
    }

    /*
      Prevent the hotspot content from going outside of the main shoppable image
      when the hotspot is placed too close to the right.
    */
    if (contentBounds.right > shoppableImageBounds.width) {
      contentWrapperEl.style.transform = 'translateX(-100%)';
    }

    /*
      Prevent the hotspot content from going outside of the main shoppable image
      when the hotspot is placed too close to the left.
    */
    if (contentBounds.left < 0) {
      contentWrapperEl.style.transform = 'translateX(0)';
    }
  },
  repositionHotspotContentEls(currentSlide) {
    const hotspotEls = currentSlide.querySelectorAll('[data-hotspot]');
    hotspotEls.forEach(hotspot => this.repositionHotspotContent(hotspot));
  },
  debounce(callback) {
    let timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    let timeoutId = null;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback.apply(null, args);
      }, timeout);
    };
  },
  unload($target) {
    const $slider = $target.find('[data-shoppable-image-wrapper]');
    if ($slider.hasClass('flickity-enabled')) {
      $slider.flickity('destroy');
    }
  }
};
/*============================================================================
  Global accordions
==============================================================================*/
window.accordion = {
  init() {
    let flg = 0;
    const $vanillaAccordion = $('.accordion');
    const $faqHeading = $('.faqAccordion > dt > button, .accordion > dt > a');
    $('.faqAccordion > dd, .accordion > dd').attr('aria-hidden', true);
    $faqHeading.attr('aria-expanded', false);
    $faqHeading.on('click activate', function () {
      if (flg) return false;
      flg = 1;
      const state = $(this).attr('aria-expanded') === 'false' ? true : false;
      $(this).attr('aria-expanded', state);
      $(this).parent().next().slideToggle(() => {
        flg = 0;
      });
      $(this).parent().next().attr('aria-hidden', !state);
      return false;
    });
    $faqHeading.on('keydown', function (event) {
      const keyCode = event.keyCode || event.which;
      if (keyCode === 13) {
        $(this).trigger('activate');
      }
    });
    $vanillaAccordion.each((_, accordion) => {
      const $accordion = $(accordion);
      if ($accordion.data('state') === 'open') {
        $accordion.find($faqHeading[0]).parent().next().slideToggle();
        $accordion.find($faqHeading[0]).attr('aria-expanded', true);
      }
    });
  }
};

/*============================================================================
  Global shortcodes
==============================================================================*/
class ProductCTA extends HTMLElement {
  static get shortcode() {
    return 'product-cta';
  }
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    this.attachShadow({
      mode: 'open'
    }); // sets and returns 'this.shadowRoot'
    this.events = [];
    const forAttr = this.getAttribute('for');
    const variants = forAttr ? document.querySelector(`#${forAttr} [data-variants]`) : null;
    const variantId = this.getAttribute('variantid');
    const appendto = document.querySelector(this.getAttribute('appendto'));
    if (!variants || !variantId) {
      this._setVisible(false);
      return;
    }
    if (appendto) {
      appendto.appendChild(this);
    }

    // Remove element from DOM and insert new element into position
    this._registerEvent({
      el: variants,
      event: 'change',
      listener: e => this._onVariantChange(e, variantId)
    });
    this._setVisible(variants.value === this.variantId);
  }
  connectedCallback() {
    const href = this.getAttribute('href') || '#';
    const target = this.getAttribute('target');
    const style = document.createElement('style');
    const a = document.createElement('a');
    const slot = document.createElement('slot');
    style.innerHTML = `
      a {
        color: inherit;
        cursor; inherit;
        text-decoration: inherit;
      }
    `;
    a.href = href;
    a.target = target;
    a.appendChild(slot);
    if (target === '_blank') {
      const icon = document.createElement('span');
      icon.classList.add('button-icon');
      icon.setAttribute('aria-label', '(New window)');
      icon.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.81792 2.29812L5.68732 5.42884L6.57121 6.3127L9.70198 3.18183L9.70227 5.51933L10.9523 5.51917L10.9518 1.67302L10.9517 1.0481L10.3268 1.0481L6.48062 1.04815L6.48064 2.29815L8.81792 2.29812ZM1.67297 1.04817H1.04797V1.67317V10.327V10.952H1.67297H10.3268H10.9518V10.327V8.13026H9.70175V9.70195H2.29797V2.29817H3.83642V1.04817H1.67297Z" fill="currentColor"/></svg>';

      // attach the created elements to the shadow DOM
      a.appendChild(icon);
    }
    this.shadowRoot.append(style, a);
  }
  disconnectedCallback() {
    this.events.forEach(_ref6 => {
      let {
        el,
        event,
        listener
      } = _ref6;
      return el.removeEventListener(event, listener);
    });
    this.shadowRoot.innerHTML = '';
    this._setVisible(true);
  }
  _registerEvent(_ref7) {
    let {
      el,
      event,
      listener
    } = _ref7;
    this.events.push({
      el,
      event,
      listener
    });
    el.addEventListener(event, listener);
    return {
      el,
      event,
      listener
    };
  }
  _setVisible(visible) {
    this.toggleAttribute('hidden', !visible);
  }
  _onVariantChange(e, variantId) {
    this._setVisible(e.currentTarget.value === variantId);
  }
}
customElements.define(ProductCTA.shortcode, ProductCTA);
})();

/******/ })()
;