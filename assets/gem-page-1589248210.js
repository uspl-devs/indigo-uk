
jQuery(function() {
  var $module = jQuery('#m-1589249443674').children('.module');
  $module.gfV3Product();
});jQuery(function() {
    var $module = jQuery('#m-1589249446331').children('.module');
    var effect = $module.attr('data-effect');
    $module.gfV3ProductImage({
        'effect': effect
    })
});jQuery(function() {
  var $module = jQuery('#m-1589249445950').children('.module');
  $module.gfV3ProductImageList({
      onImageClicked: function(imageUrl, imageZoomUrl) {}
  });

  var style = $module.attr('data-style');
  switch(style) {
      case 'slider':
          var navspeed = $module.data('navspeed'),
              navlg = $module.data('navlg'),
              navmd = $module.data('navmd'),
              navsm = $module.data('navsm'),
              navxs = $module.data('navxs'),
              collg = $module.data('collg'),
              colmd = $module.data('colmd'),
              colsm = $module.data('colsm'),
              colxs = $module.data('colxs'),
              dotslg = $module.data('dotslg'),
              dotsmd = $module.data('dotsmd'),
              dotssm = $module.data('dotssm'),
              dotsxs = $module.data('dotsxs'),

              marginlg = parseInt($module.data('mlg')),
              marginmd = parseInt($module.data('mmd')),
              marginsm = parseInt($module.data('msm')),
              marginxs = parseInt($module.data('mxs'));

          var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
          if(mode == 'production') {
              var loop = $module.data('loop');
          } else {
              var loop = 0;
          }
          $module.find('.gf_product-images-list').owlCarousel({
              mouseDrag: false,
              navSpeed: navspeed,
              autoWidth: !1,
              loop: loop,
              responsiveClass:true,
              responsive:{
                  0:{
                      items:colxs,
                      nav: navxs,
                      dots:dotsxs,
                      margin: marginxs
                  },
                  768:{
                      items:colsm,
                      nav: navsm,
                      dots:dotssm,
                      margin: marginsm
                  },
                  992:{
                      items:colmd,
                      nav: navmd,
                      dots:dotsmd,
                      margin: marginmd
                  },
                  1200:{
                      items:collg,
                      nav: navlg,
                      dots:dotslg,
                      margin: marginlg
                  }
              }
          }); 
          break;
  }
});jQuery(function() {
  var $module = jQuery('#m-1589249445683').children('.module');
});jQuery(function() {
        var $module = jQuery('#m-1589249445702').children('.module');
        $module.gfV3ProductPrice({
            displayCurrency: true
        });
    });jQuery(function() {
    var $module = jQuery('#m-1589249445599').children('.module');
    var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
    $module.gfV3ProductSwatches({
        swatchText: swatchText,
        onSwatchSelected: function(variant, $swatch) {}
    });
});jQuery(function() {
    var $module = jQuery('#m-1589249445243').children('.module');
    var style = $module.attr('data-style');
    var updatePrice = $module.attr('data-updateprice');

    $module.gfV3ProductQuantity({
        'style': style,
        'updatePrice': updatePrice
    });
});jQuery(function() {
  var $module = jQuery('#m-1589249444978').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
});