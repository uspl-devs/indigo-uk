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
rimg.shopify.init('[data-rimg="lazy"]', {
  round: 1
});
const sections = new ShopifySectionsManager();
sections.register('age-gate', section => new AgeGate.PageAgeGate(section));
const ageGatePage = document.getElementById('age-gate-page');
if (ageGatePage) {
  new AgeGate.SiteAgeGate(ageGatePage);
}
document.addEventListener('DOMContentLoaded', function () {
  window.utils.enableDisclosure();
  const oldFlickityCreate = window.Flickity.prototype._create;
  window.Flickity.prototype._create = function () {
    const that = this;
    if (this.element.addEventListener) {
      this.element.addEventListener('load', () => {
        that.onresize();
      }, true);
    }
    this._create = oldFlickityCreate;
    return oldFlickityCreate.apply(this, arguments);
  };

  // Support for background images with new Lazysizes library
  document.addEventListener('lazyloaded', e => {
    let bg = e.target.getAttribute('data-bg');
    const mobileBg = e.target.getAttribute('data-mobile-bg');
    if (bg) {
      if (window.PXUTheme.media_queries.medium.matches && mobileBg) {
        bg = mobileBg;
      }
      e.target.style.backgroundImage = `url(${bg})`;
    }
  });

  // Call to flickity fix for sliders on IOS
  window.imageFunctions.flickityIosFix();
  window.header.init();
  window.mobileSearch.init();
  window.siteOverlay.init();
  window.meganavManager.injectAll();
  if (window.PXUTheme.theme_settings.enable_autocomplete) {
    window.predictiveSearch.init();
  }
  window.utils.initializeSectionWrapper();
  window.slideshow.init();
  window.testimonials.init();
  window.video.init();
  window.gallery.init();
  window.videoFeature.setupVideoPlayer();
  window.featuredPromotions.init();
  window.featuredCollection.init();
  window.logoList.init();
  window.collectionSidebarFilter.init();
  window.cart.init();
  window.map.init();
  window.shoppableImage.init();
  window.productPage.init();
  window.productPage.runOptionSelector();
  window.productPage.initializeQuantityBox();
  window.recentlyViewed.init();
  window.sidebarAccordions.init();
  if (window.PXUTheme.currency.show_multiple_currencies || window.PXUTheme.currency.native_multi_currency) {
    window.currencyConverter.init();
  }

  // Challenge page scroll

  // Return the pathname of the current URL
  const {
    pathname
  } = location;

  // If the pathname starts with '/challenge', animate scroll
  if (pathname.startsWith('/challenge')) {
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  }

  // Setup a timer
  let resizeTimeout;
  // Grab screen width before screen is resized
  const beforeResizeWidth = $(window).width();

  // Listen for resize events
  window.addEventListener('resize', () => {
    // If timer is null, reset it to 66ms and run your functions.
    // Otherwise, wait until timer is cleared
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        // Reset timeout
        resizeTimeout = null;
        // Grab screen width after screen is resized
        const currentScreenWidth = $(window).width();
        // Run our resize functions
        if (window.PXUTheme.media_queries.medium.matches && currentScreenWidth !== beforeResizeWidth) {
          window.cart.init();
          if (!window.is_touch_device()) {
            window.header.unload();
            window.header.init();
          }
        }
        window.logoList.init();

        // swap lazysizes background mobile images when browser is resized
        const lazysizesBackgroundImages = document.querySelectorAll('[data-bg]');
        lazysizesBackgroundImages.forEach(image => {
          let bg = image.getAttribute('data-bg');
          const mobileBg = image.getAttribute('data-mobile-bg');
          if (bg) {
            if (window.PXUTheme.media_queries.medium.matches && mobileBg) {
              bg = mobileBg;
            }
            image.style.backgroundImage = `url(${bg})`;
          }
        });
      }, 66);
    }
  }, false);

  // Lightbox default options
  // https://fancyapps.com/fancybox/3/docs/#options
  $.fancybox.defaults.animationEffect = 'fade';
  $.fancybox.defaults.transitionEffect = 'fade';
  $.fancybox.defaults.hash = false;
  $.fancybox.defaults.infobar = false;
  $.fancybox.defaults.toolbar = false;
  $.fancybox.defaults.arrows = false;
  $.fancybox.defaults.loop = true;
  $.fancybox.defaults.smallBtn = true;
  $.fancybox.defaults.live = false;
  $.fancybox.defaults.zoom = false;
  $.fancybox.defaults.mobile.preventCaptionOverlap = false;
  $.fancybox.defaults.mobile.toolbar = true;
  $.fancybox.defaults.mobile.buttons = ['close'];
  $.fancybox.defaults.mobile.clickSlide = 'close';
  $.fancybox.defaults.mobile.clickContent = 'zoom';
  $.fancybox.defaults.afterLoad = function (instance, slide) {
    if (instance.current.type === 'image') {
      slide.$content.wrapInner("<div class='fancybox-image-wrap'></div>");
    }
    if (instance.group.length > 1) {
      slide.$content.find('.fancybox-image-wrap').append(`<a title="Previous" class="fancybox-item fancybox-nav fancybox-prev" href="javascript:;" data-fancybox-prev><span>${window.svgArrowSizeLeft}</span></a><a title="Next" class="fancybox-item fancybox-nav fancybox-next" href="javascript:;" data-fancybox-next><span>${svgArrowSizeRight}</span></a>`);
    }
  };

  // backwards compatibility with custom lightboxes
  $('.lightbox[rel="gallery"]').fancybox();

  // Find youtube and vimeo iframes
  const $videoIframes = $('iframe[src*="youtube.com"], iframe[src*="vimeo.com"], iframe[src*="facebook.com/plugins/video"]');

  // For each iframe, if parent is a responsive video wrapper do nothing
  // If no parent responsive video wrapper, then wrap iframe in responsive video wrapper

  function getAspectRatio(width, height) {
    const ratio = width / height;

    // Determine ratio to be used
    if (Math.abs(ratio - 1 / 1) === 0) {
      return '1:1';
    }
    return Math.abs(ratio - 4 / 3) < Math.abs(ratio - 16 / 9) ? '4:3' : '16:9';
  }
  $videoIframes.each((_index, iframe) => {
    // Update selector
    const $iframe = $(iframe);

    // Grab src
    const source = $iframe.attr('src');
    if (!$iframe.parents('.plyr__video-wrapper').length && !$iframe.parents('.lazyframe').length) {
      $iframe.wrap(`<div class="lazyframe" data-ratio="${getAspectRatio($iframe.attr('width'), $iframe.attr('height'))}" data-src="${source}"></div>`);
    }
  });

  // Initiate lazyframe
  window.lazyframe('.lazyframe');

  // Wrap shopify policy in grid layout classes
  $('.shopify-policy__container').wrap('<section class="section shopify-policy-template"><div class="container content"></div>');

  // Add classes to determine column size
  $('.shopify-policy__container').addClass('five-eighths offset-by-three columns is-hidden-offset-mobile-only medium-down--one-whole');

  // Add featured divider beneath page title
  $('.shopify-policy__title').append('<div class="feature-divider"></div>');

  // Collection sorting

  const sortByEl = document.querySelector('[data-sort-by]');
  if (sortByEl) {
    sortByEl.addEventListener('change', e => {
      const {
        target
      } = e;
      const sortValue = target.value;
      if (target) {
        // Set the query string and redirect
        const queryString = new URLSearchParams(document.location.search);
        queryString.set('sort_by', sortValue);
        window.location.search = queryString;
      }
    });
  }
  $('body').on('change', '#tag_filter', () => {
    $('[data-option-filter] input').prop('checked', false);
    window.quickFilter.init();
  });
  $('body').on('change', '#blog_filter', function () {
    const url = $(this).val();
    window.location = url;
  });
  $('input, select, textarea').on('focus blur', event => {
    $('meta[name=viewport]').attr('content', `width=device-width,initial-scale=1,maximum-scale=${event.type === 'blur' ? 10 : 1}`);
  });

  // Collection sidebar filter
  // Check the checkbox values
  $('body').on('change', '[data-option-filter] input', () => {
    window.quickFilter.init();
    $('html, body').animate({
      scrollTop: $('.content').offset().top
    }, 500);
  });
  $('body').on('click', '[data-reset-filters]', () => {
    window.collectionSidebarFilter.clearAllFilters();
  });
  $('body').on('click', '[data-clear-filter]', e => {
    const $this = $(e.currentTarget);
    const selectedOption = $this.parents('.filter-active-tag');
    window.collectionSidebarFilter.clearSelectedFilter(selectedOption);
  });
  $('body').on('change', '.currencies', () => {
    $('[data-initial-modal-price]').attr('data-initial-modal-price', '');
  });
  $('body').on('change', '.js-quick-shop select', () => {
    const currentVariant = $('.js-quick-shop select[name="id"]').val();
    if (currentVariant && window.globalQuickShopProduct) {
      window.quickShop.updateVariant(currentVariant);
    }
  });
  if (window.PXUTheme.theme_settings.quick_shop_enabled) {
    window.quickShop.init();
  }
  let touchStartPos = 0;

  // Detecting swipe vs tap
  $(document).bind('touchstart', () => {
    touchStartPos = $(window).scrollTop();
  }).bind('touchend', e => {
    const distance = touchStartPos - $(window).scrollTop();
    if (distance > 20 || distance < -20) {
      e.preventDefault;
    }
  });
  $('body').on('click', '.sidebar .parent-link--false', function (e) {
    e.preventDefault();
    const $menu = $(this).parent('li');
    $menu.find('.menu-toggle').toggleClass('active');
    $menu.find('ul').slideToggle();
  });
  if (window.PXUTheme.theme_settings.newsletter_popup) {
    window.newsletter_popup.init();
  }
  if (window.location.pathname.indexOf('/comments') !== -1) {
    $('html,body').animate({
      scrollTop: $('#new-comment').offset().top - 140
    }, 'slow');
  }
  if (window.PXUTheme.media_queries.large.matches) {
    $('.animate_right').waypoint(function () {
      $(this.element).addClass('animated fadeInRight');
    }, {
      offset: '70%'
    });
    $('.animate_left').waypoint(function () {
      $(this.element).addClass('animated fadeInLeft');
    }, {
      offset: '70%'
    });
    $('.animate_up').waypoint(function () {
      $(this.element).addClass('animated fadeInUp');
    }, {
      offset: '70%'
    });
    $('.animate_down').waypoint(function () {
      $(this.element).addClass('animated fadeInDown');
    }, {
      offset: '70%'
    });
  }

  // backwards compatibility with flexslider
  $('.slider, .flexslider').find('li').unwrap();
  $('.slider, .flexslider').flickity({
    pageDots: window.usePageDots,
    imagesLoaded: true,
    arrowShape: window.arrowSize,
    lazyLoad: 2
  });
  window.utils.createAccordion('.footer_menu', 'h6', 'ul');
  window.utils.createAccordion('.footer_content', 'h6', 'div.toggle_content');
  window.utils.createAccordion('.product_section .accordion-tabs', '.tabs li > a', '.tabs-content li');
  window.utils.mobileParentActiveAccordion('#mobile_menu', 'li.sublink > a.parent-link--true span');
  window.utils.mobileAccordion('#mobile_menu', 'li.sublink > a');
  window.utils.initializeTabs();
  window.accordion.init();
  $('body').on('click', '.menu-toggle', function () {
    const $content = $(this).next('ul');
    $content.slideToggle();
    $(this).toggleClass('active');
    $(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'true' ? 'false' : 'true');
  });
  if (window.PXUTheme.theme_settings.collection_swatches) {
    if (window.PXUTheme.media_queries.large.matches) {
      $('body').on('mouseenter', '.collection_swatches', function () {
        $('.swatch span', $(this)).each(function () {
          if ($(this).data('image').indexOf('no-image') === -1) {
            $('<img/>')[0].src = $(this).data('image');
          }
        });
      });
      $('body').on('mouseenter', '.swatch span', function () {
        if ($(this).data('image').indexOf('no-image') === -1) {
          $(this).parents('.thumbnail').find('.image__container img:not(.secondary)').attr('src', $(this).data('image'));
          $(this).parents('.thumbnail').find('.image__container img:not(.secondary)').attr('srcset', $(this).data('image'));
        }
      });
    }
  }

  // Terms of service settings for minicart
  if (window.PXUTheme.theme_settings.display_tos_checkbox) {
    $('body').on('click touchstart', '.cart_content .tos_label', function () {
      $(this).prev('input').prop('checked', true);
    });
  }
  if (window.PXUTheme.theme_settings.display_tos_checkbox && window.PXUTheme.theme_settings.go_to_checkout) {
    // Terms of service on mini-cart && cart page
    $('body').on('click', '.tos_warning [data-cart-checkout-button]', function (e) {
      if ($(this).parents('form').find('.tos_agree').is(':checked')) {
        // Check if we are on the cart page or mini cart
        if (window.PXUTheme.theme_settings.go_to_checkout || $('body').hasClass('cart')) {
          $(this).submit();
        } else {
          // Redirect to cart page
          e.preventDefault();
          document.location.href = window.PXUTheme.routes.cart_url;
        }
      } else {
        const warning = `<p class="warning animated bounceIn">${window.PXUTheme.translation.agree_to_terms_warning}</p>`;
        if ($('p.warning').length === 0) {
          $(this).before(warning);
        }
        return false;
      }
    });
  } else if (!window.PXUTheme.theme_settings.go_to_checkout) {
    $('body').on('click', '.cart_content [data-minicart-checkout-button]', e => {
      // Redirect to cart page
      e.preventDefault();
      document.location.href = window.PXUTheme.routes.cart_url;
    });
  }
  if (window.PXUTheme.theme_settings.collection_secondary_image) {
    window.imageFunctions.showSecondaryImage();
  }

  // Contact form checkbox validation
  if ($('[data-is-required]').length) {
    const $checkboxGroup = $('.custom-contact__checkbox');
    $checkboxGroup.prop('required', true);
    $checkboxGroup.on('change', () => {
      $checkboxGroup.prop('required', true);
      if ($checkboxGroup.is(':checked')) {
        $checkboxGroup.prop('required', false);
      }
    });
  }
  $('.maps').click(() => {
    $('.maps iframe').css('pointer-events', 'auto');
  });

  // Load more / infinite load

  if (window.PXUTheme.theme_settings.pagination_type === 'load_more') {
    window.enableLoadMoreProducts();
  }
  if (window.PXUTheme.theme_settings.pagination_type === 'load_more_button') {
    window.enableLoadMoreButton('.product-list');
  }
  if (window.PXUTheme.theme_settings.pagination_type === 'infinite_scroll') {
    window.enableInfiniteScroll('.product-list');
  }

  /*= ===========================================================================
    Start of cart-related functionality
  ============================================================================== */

  function ajaxSubmitCart(cart) {
    const $cart = cart;
    $.ajax({
      url: '/cart/update.js',
      dataType: 'json',
      cache: false,
      type: 'post',
      data: $cart.serialize(),
      success(data) {
        refreshCart(data);
      }
    });
  }
  function updateCartItemQuantity(cartItem) {
    $.ajax({
      url: '/cart/change.js',
      dataType: 'json',
      cache: false,
      type: 'post',
      data: {
        quantity: cartItem.quantity,
        line: cartItem.lineID
      },
      success(data) {
        const cartItemsArray = data.items;
        const lineIDIndex = cartItem.lineID - 1;
        const totalCartItems = cartItem.parentCartForm.find('[data-variant-id]').length;
        const $quantityInputs = cartItem.parentCartForm.find(`[data-variant-id="${cartItem.variantID}"] input`);
        let initialQuantityTotal = 0;
        let apiQuantityTotal = 0;
        const apiLineItemQuantity = typeof data.items[lineIDIndex] !== 'undefined' ? data.items[lineIDIndex].quantity : 0;

        // Check if item has a "Buy X get Y" deal
        if ($quantityInputs.length > 1) {
          // Multiple inputs

          // Get all the quantities of same variants in the cart (including BOGO) in HTML
          $.each($quantityInputs, (_i, input) => {
            initialQuantityTotal += parseInt($(input).val());
          });

          // Get quantities from cart object returned from API
          cartItemsArray.forEach(item => {
            if (item.variant_id === cartItem.variantID) {
              apiQuantityTotal += item.quantity;
            }
          });
        } else {
          // Single input
          initialQuantityTotal = parseInt($quantityInputs.val());
          apiQuantityTotal = typeof data.items[lineIDIndex] !== 'undefined' ? data.items[lineIDIndex].quantity : 0;
        }

        // Checks to see if there is enough inventory to update to an increased amount
        if (initialQuantityTotal > 0 && initialQuantityTotal > apiQuantityTotal) {
          if (apiQuantityTotal === 1) {
            itemsLeftText = window.PXUTheme.translation.one_item_left;
          } else {
            itemsLeftText = window.PXUTheme.translation.items_left_text;
          }
          $('.warning--quantity').remove();

          // Check if Buy one get one product
          if (totalCartItems < cartItemsArray.length) {
            if (cartItem.parentCartForm.data('cart-form') === 'cart-template') {
              // Refreshes cart if inventory is available
              cartItem.parentCartForm.submit();
            } else {
              refreshCart(data);
            }
          } else {
            const warning = `<p class="warning warning--quantity animated bounceIn">${apiQuantityTotal} ${itemsLeftText}</p>`;
            cartItem.parentCartForm.find(`[data-line-id='${cartItem.lineID}'] input`).parent().after(warning);
            cartItem.parentCartForm.find(`[data-line-id='${cartItem.lineID}'] input`).val(apiLineItemQuantity);
          }
        } else if (cartItem.parentCartForm.data('cart-form') === 'cart-template') {
          // Refreshes cart if inventory is available
          cartItem.parentCartForm.submit();
        } else {
          refreshCart(data);
        }
      }
    });
  }
  function refreshCartID() {
    const cartItem = document.querySelectorAll('.cart__item');
    for (let i = 0; i < cartItem.length; i++) {
      const lineIndex = i + 1;
      const dataLineId = cartItem[i].querySelectorAll('[data-line-id]');
      for (let c = 0; c < dataLineId.length; c++) {
        dataLineId[c].dataset.lineId = lineIndex;
      }
    }
  }
  function refreshCart(cart) {
    $('.cart_count').empty();
    const $cartBtn = $('.cart_count');
    const value = $cartBtn.text() || '0';
    let cartItemsHTML = '';
    let cartDiscountsHTML = '';
    let cartActionHTML = '';
    let cartSavingsHTML = '';
    const $cartForm = $('[data-cart-form]');
    let productHasSale = false;
    let productCompareAtPrice = 0;
    let productFinalPrice = 0;
    $cartForm.data('total-discount', cart.total_discount);
    $cartBtn.text(value.replace(/[0-9]+/, cart.item_count));
    if (cart.item_count === 0) {
      $('.js-empty-cart__message').removeClass('hidden');
      $cartForm.addClass('hidden');
    } else {
      $('.js-empty-cart__message').addClass('hidden');
      $cartForm.removeClass('hidden');
      let totalSaving = 0; // adding counter variables for total cart savings
      let saving = 0;
      $.each(cart.items, (index, item) => {
        const itemDiscounts = item.discounts;
        let discountMessage = '';
        for (let i = 0; i < itemDiscounts.length; i++) {
          const {
            title
          } = itemDiscounts[i];
          discountMessage = `<p class="notification-discount meta">${title}</p>`;
        }
        const lineID = index + 1;
        cartItemsHTML += `<li class="mini-cart__item" data-cart-item data-line-id="${lineID}" data-variant-id="${item.id}">` + `<a href="${item.url}">`;
        if (item.image) {
          cartItemsHTML += `${'<div class="cart_image">' + '<img src="'}${item.image.replace(/(\.[^.]*)$/, '_compact$1').replace('http:', '')}" alt="${htmlEncode(item.title)}" />` + '</div></a>';
        }
        cartItemsHTML += `<div class="mini-cart__item-content"><div class="mini-cart__item-title"><a href="${item.url}">${item.title}</a>`;
        if (item.selling_plan_allocation) {
          cartItemsHTML += `<div class="meta">${item.selling_plan_allocation.selling_plan.name}</div>`;
        }
        if (item.properties) {
          cartItemsHTML += '<div class="mini-cart__item-properties">';
          $.each(item.properties, (title, value) => {
            if (value && value !== 'on') {
              cartItemsHTML += `<div class="mini-cart__item-property">${title}: ${value}</div>`;
            }
          });
          cartItemsHTML += '</div>';
        }
        cartItemsHTML += '</div><div class="mini-cart__item-price">';
        $.ajax({
          dataType: 'json',
          async: false,
          cache: false,
          url: `/products/${item.handle}.js`,
          success(data) {
            let productData = data;
            // If item has more than one variant, need to make sure we are pulling data from the correct variant
            if (productData.variants) {
              const itemVariants = productData.variants;
              if (itemVariants.length > 1) {
                for (let v = 0; v < itemVariants.length; v++) {
                  if (itemVariants[v].id === item.id) {
                    productData = itemVariants[v];
                  }
                }
              }
            }

            // If compare at price exists then item is on sale
            if (productData.compare_at_price && productData.compare_at_price > productData.price) {
              productHasSale = true;
              productCompareAtPrice = productData.compare_at_price;
              productFinalPrice = productData.price;
            } else {
              // Check required for non-sale items
              productHasSale = false;
            }
          }
        });
        if (productHasSale === true) {
          // puts the slash through the old item price
          const itemPrice = `${window.Shopify.formatMoney(productFinalPrice, $('body').data('money-format'))} </span><span class="money was_price">${window.Shopify.formatMoney(productCompareAtPrice, $('body').data('money-format'))}</span>`;
          cartItemsHTML += `<span class="money sale">${itemPrice}</strong>`;

          // Total savings
          saving = (productCompareAtPrice - productFinalPrice) * item.quantity;
          totalSaving = saving + totalSaving;
        } else if (item.price > item.final_price) {
          // puts the slash through the old item price
          const itemPrice = `${window.Shopify.formatMoney(item.final_price, $('body').data('money-format'))} </span><span class="money was_price">${window.Shopify.formatMoney(item.price, $('body').data('money-format'))}</span>`;
          cartItemsHTML += `<span class="money sale">${itemPrice}</strong>`;
        } else {
          const itemPrice = window.Shopify.formatMoney(item.price, $('body').data('money-format'));
          if (item.price > 0) {
            cartItemsHTML += `<span class="money">${itemPrice}</span></strong>`;
          } else {
            cartItemsHTML += `<span>${window.PXUTheme.translation.cart_free_text}</span></strong>`;
          }
        }
        cartItemsHTML += '</div>';

        // Unit price

        if (item.unit_price_measurement && item.price > 0) {
          let unitPriceMeasurementReferenceValue = '';
          if (item.unit_price_measurement.reference_value !== 1) {
            unitPriceMeasurementReferenceValue = item.unit_price_measurement.reference_value;
          }
          cartItemsHTML += `<p class="mini-cart__unit-price">${item.unit_price_measurement.quantity_value}${item.unit_price_measurement.quantity_unit} | ${Shopify.formatMoney(item.unit_price, $('body').data('money-format'))} / ${unitPriceMeasurementReferenceValue}${item.unit_price_measurement.reference_unit}</p>`;
        }
        if (item.price > item.final_price) {
          cartItemsHTML += discountMessage;
        }
        cartItemsHTML += '<div class="product-quantity-box">';
        cartItemsHTML += '<span class="ss-icon product-minus js-change-quantity" data-func="minus"><span class="icon-minus"></span></span>';
        cartItemsHTML += `<input type="number" min="0" class="quantity" name="updates[]" id="updates_${item.id}" value="${item.quantity}" data-cart-quantity-input="mini-cart" />`;
        cartItemsHTML += '<span class="ss-icon product-plus js-change-quantity" data-func="plus"><span class="icon-plus"></span></span>';
        cartItemsHTML += '</div></div></div>';
        cartItemsHTML += `<a href="/cart/change?line=${lineID}&amp;quantity=0" class="js-cart-remove-btn cart__remove-btn" data-line-id="${lineID}" data-remove-item="mini-cart"><span class="remove-icon"></span></a>`;
      });
      const cartDiscounts = cart.cart_level_discount_applications;
      for (let i = 0; i < cartDiscounts.length; i++) {
        const amount = window.Shopify.formatMoney(cartDiscounts[i].total_allocated_amount, $('body').data('money-format'));
        const {
          title
        } = cartDiscounts[i];
        cartDiscountsHTML += `<span class="cart_discounts--title">${title}</span>`;
        cartDiscountsHTML += '<span class="cart_discounts--price">';
        cartDiscountsHTML += `-<span class="money">${amount}</span></span>`;
      }
      cartActionHTML += `<span class="right"><span class="money">${window.Shopify.formatMoney(cart.total_price, $('body').data('money-format'))}</span></span> <span>${window.PXUTheme.translation.cart_subtotal_text}</span>`;
      totalSaving += cart.total_discount;
      if (window.PXUTheme.theme_settings.display_savings && totalSaving > 0) {
        cartSavingsHTML = `<span class="right"><span class="money">${window.Shopify.formatMoney(totalSaving, $('body').data('money-format'))}</span></span>` + `<span>${window.PXUTheme.translation.cart_savings_text}</span>`;
      } else {
        cartSavingsHTML = '';
      }
    }
    $('.js-cart_items').html(cartItemsHTML);
    $('.js-cart_discounts').html(cartDiscountsHTML);
    $('.js-cart_subtotal').html(cartActionHTML);
    $('.js-cart_savings').html(cartSavingsHTML);

    // Converting the currencies
    if (window.PXUTheme.currency.show_multiple_currencies) {
      window.currencyConverter.convertCurrencies();
    }
  }
  $('body').on('change', '[data-cart-quantity-input]', function () {
    const cartItem = {
      lineID: $(this).parents('[data-cart-item]').data('line-id'),
      variantID: $(this).parents('[data-cart-item]').data('variant-id'),
      quantity: $(this).val(),
      parentCartForm: $(this).parents('[data-cart-form]'),
      totalDiscount: $(this).parents('[data-cart-form]').data('total-discount'),
      $element: $(this).parents('[data-cart-item]')
    };
    // Disable button after click to prevent multiple clicks
    $(this).parents('.product-quantity-box').find('.js-change-quantity').addClass('is-disabled');
    updateCartItemQuantity(cartItem);
  });
  $('body').on('click', '[data-remove-item]', function (e) {
    e.preventDefault();
    const cartItem = {
      lineID: $(this).parents('[data-cart-item]').data('line-id'),
      variantID: $(this).parents('[data-cart-item]').data('variant-id'),
      quantity: 0,
      parentCartForm: $(this).parents('[data-cart-form]'),
      totalDiscount: $(this).parents('[data-cart-form]').data('total-discount'),
      $element: $(this).parents('[data-cart-item]')
    };
    cartItem.$element.addClass('animated fadeOutLeft');
    updateCartItemQuantity(cartItem);
    if (cartItem.parentCartForm.data('cart-form') === 'cart-template') {
      cartItem.$element.find('input').val('0');
      cartItem.parentCartForm.submit();
    }
    if (cartItem.parentCartForm.data('cart-form') === 'mini-cart') {
      cartItem.$element.find('input').val('0');
    }
  });
  if (window.PXUTheme.theme_settings.cart_action === 'ajax') {
    $(document).on('click', '.ajax-submit', function (e) {
      e.preventDefault();
      const $addToCartForm = $(this).closest('form');
      const $addToCartBtn = $addToCartForm.find('.add_to_cart');
      this.recipientForm = $addToCartForm[0].querySelector('[data-recipient-form]');
      $('.warning').remove();
      if (this.recipientForm) {
        this.recipientForm.classList.remove('recipient-form--has-errors');
      }

      // Refresh page on quick shop add to cart if on cart page
      if ($('body').hasClass('cart')) {
        $addToCartForm.submit();
      }
      $.ajax({
        url: '/cart/add.js',
        dataType: 'json',
        cache: false,
        type: 'post',
        data: $addToCartForm.serialize(),
        beforeSend() {
          $addToCartBtn.attr('disabled', 'disabled').addClass('disabled');
          $addToCartBtn.find('span').removeClass('fadeInDown').addClass('animated zoomOut');
        },
        success() {
          $addToCartBtn.find('.checkmark').addClass('checkmark-active');
          window.setTimeout(() => {
            $addToCartBtn.removeAttr('disabled').removeClass('disabled');
            $addToCartBtn.find('.checkmark').removeClass('checkmark-active');
            $addToCartBtn.find('span').removeClass('zoomOut').addClass('fadeInDown');
          }, 1000);
          $.ajax({
            url: '/cart.js',
            dataType: 'json',
            cache: false,
            success(cart) {
              setTimeout(function () {
                refreshCart(cart);
                if ($('body').hasClass('fancybox-active')) {
                  $.fancybox.close();
                }
                if ($('#header').is(':visible')) {
                  $('#header .cart-container').addClass('active_link');
                } else if ($('.sticky_nav--stick').length) {
                  $('.sticky_nav .cart-container').addClass('active_link');
                } else {
                  $('.top-bar .cart-container').addClass('active_link');
                }

                // block scrolling on mobile
                if (window.PXUTheme.media_queries.medium.matches) {
                  const $cartContainer = $(this).parent();
                  if ($cartContainer.hasClass('active_link')) {
                    $('body').addClass('blocked-scroll');
                  } else {
                    $('body').addClass('blocked-scroll');
                  }

                  // Scroll to the top of the page unless the header is fixed
                  const header = document.getElementById('header');
                  if (header.classList.contains('mobile_nav-fixed--false')) {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: 'smooth'
                    });
                  }
                }
              }, 500);
            }
          });
        },
        error: XMLHttpRequest => {
          const response = eval(`(${XMLHttpRequest.responseText})`);
          $('.warning').remove();
          let warning;
          if (response.errors && response.errors.email) {
            this.recipientForm.classList.add('recipient-form--has-errors');
          } else {
            warning = `<p class="warning animated bounceIn">${response.description.replace('All 1 ', 'All ')}</p>`;
            $addToCartForm.after(warning);
          }
          $addToCartBtn.removeAttr('disabled').removeClass('disabled');
          $addToCartBtn.find('span').text(window.PXUTheme.translation.add_to_cart).removeClass('zoomOut').addClass('zoomIn');
        }
      });
      return false;
    });
  }
  window.productPage.productSwatches();
});

/*= ===========================================================================
  Swatch options - second and third swatch 'sold-out' will update based on availability of previous options selected
============================================================================== */
window.Shopify.updateOptionsInSelector = function (selectorIndex, parent) {
  switch (selectorIndex) {
    case 0:
      var key = 'root';
      break;
    case 1:
      var key = $(`${parent} .single-option-selector:eq(0)`).val();
      break;
    case 2:
      var key = $(`${parent} .single-option-selector:eq(0)`).val();
      key += ` / ${$(`${parent} .single-option-selector:eq(1)`).val()}`;
  }
  const availableOptions = Shopify.optionsMap[key];
  $(`${parent} .swatch[data-option-index="${selectorIndex}"] .swatch-element`).each(function () {
    if ($.inArray($(this).attr('data-value'), availableOptions) !== -1) {
      $(this).removeClass('soldout').find(':radio').removeAttr('disabled', 'disabled').removeAttr('checked');
    } else {
      $(this).addClass('soldout').find(':radio').removeAttr('checked').attr('disabled', 'disabled');
    }
  });
};
window.Shopify.linkOptionSelectors = function (product, parent) {
  // Building our mapping object.
  window.Shopify.optionsMap = {};
  for (let i = 0; i < product.variants.length; i++) {
    const variant = product.variants[i];
    if (variant.available) {
      // Gathering values for the 1st drop-down.
      window.Shopify.optionsMap.root = window.Shopify.optionsMap.root || [];
      window.Shopify.optionsMap.root.push(variant.option1);
      window.Shopify.optionsMap.root = window.Shopify.uniq(window.Shopify.optionsMap.root);
      // Gathering values for the 2nd drop-down.
      if (product.options.length > 1) {
        const key = variant.option1;
        window.Shopify.optionsMap[key] = window.Shopify.optionsMap[key] || [];
        window.Shopify.optionsMap[key].push(variant.option2);
        window.Shopify.optionsMap[key] = window.Shopify.uniq(window.Shopify.optionsMap[key]);
      }
      // Gathering values for the 3rd drop-down.
      if (product.options.length === 3) {
        const key = `${variant.option1} / ${variant.option2}`;
        window.Shopify.optionsMap[key] = window.Shopify.optionsMap[key] || [];
        window.Shopify.optionsMap[key].push(variant.option3);
        window.Shopify.optionsMap[key] = window.Shopify.uniq(window.Shopify.optionsMap[key]);
      }
    }
  }
  // Update options right away.
  window.Shopify.updateOptionsInSelector(0, parent);
  if (product.options.length > 1) window.Shopify.updateOptionsInSelector(1, parent);
  if (product.options.length === 3) window.Shopify.updateOptionsInSelector(2, parent);
  // When there is an update in the first dropdown.
  $(`${parent} .single-option-selector:eq(0)`).change(() => {
    window.Shopify.updateOptionsInSelector(1, parent);
    if (product.options.length === 3) window.Shopify.updateOptionsInSelector(2, parent);
    return true;
  });
  // When there is an update in the second dropdown.
  $(`${parent} .single-option-selector:eq(1)`).change(() => {
    if (product.options.length === 3) window.Shopify.updateOptionsInSelector(2, parent);
    return true;
  });
};

// Used for cart functionality
window.htmlEncode = function htmlEncode(value) {
  if (value) {
    return $('<div/>').text(value).html();
  }
  return '';
};

// Check if device is touch-enabled
window.is_touch_device = function is_touch_device() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
};

// Differentiate between mobile and touch screen laptops
window.touch_device = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
})();

/******/ })()
;