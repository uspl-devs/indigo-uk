

        jQuery(function() {
            var $module = jQuery('#m-1539774978372').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1573749148948').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
    jQuery(function() {
        var $module = jQuery('#m-1569276034486').children('.module');
        $module.gfV1StockCounter();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1569276273525').children('.module');
        var style = $module.attr('data-style');
        var updatePrice = $module.attr('data-updateprice');

        $module.gfV3ProductQuantity({
            'style': style,
            'updatePrice': updatePrice
        });
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1569340530545').children('.module');
        var style = $module.attr('data-style');
        var updatePrice = $module.attr('data-updateprice');

        $module.gfV3ProductQuantity({
            'style': style,
            'updatePrice': updatePrice
        });
    });
  jQuery(function() {
    var $module = jQuery('#m-1569276265144').children('.module');
    $module.gfV3ProductCartButton({ onItemAdded: function() {}});
});setTimeout(function(){
    jQuery(function() {
        var $module = jQuery('#m-1539774978344').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
        console.log(jQuery('#m-1539774978344').closest('.gempage-editing').length);
        if ( ($module[0].innerText == "SOLD OUT") && ( jQuery('#m-1539774978344').closest('.gempage-editing').length == 0 )) {
            jQuery('#r-1569339550183').hide();
            jQuery('#m-1539774978344').hide();
            jQuery('#e-1585320977587').hide();
            jQuery('#r-1585324330544').hide();
            jQuery('#r-1569276009266').hide();
            
        } else {
            jQuery('#r-1569339550183').show();
            jQuery('#m-1539774978344').show();
            jQuery('#e-1585320977587').show();
            jQuery('#r-1585324330544').show();
            jQuery('#r-1569276009266').show();
        }
    });
},500)
    jQuery(function() {
        var $module = jQuery('#m-1567895600239').children('.module');
        var style = $module.attr('data-style');
        var updatePrice = $module.attr('data-updateprice');

        $module.gfV3ProductQuantity({
            'style': style,
            'updatePrice': updatePrice
        });
    });
  
    
    
    jQuery(function() {
var $module = jQuery('#m-1567895076765').children('.module');
var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
$module.gfV3ProductSwatches({
swatchText: swatchText,
onSwatchSelected: function(variant, $swatch) {
  jQuery(".txt_word").text(variant.sku);
   if(variant.available == false){
          jQuery(".button_hide").addClass("btn_green");
          jQuery(".gf_product-prices").addClass("btn_green");
          jQuery(".gf_variants").addClass("btn_green");
          
          }
  }
  });
  
});
    jQuery(function() {
        var $module = jQuery('#m-1568745178777').children('.module');
        $module.gfV1StockCounter();
    });
  (function( jQuery ){
  if($('.gempage-editing').length < 1) {
    var $module = jQuery('#m-1666777523179').children('.module');
    var product = $module.closest('[data-label="Product"]')
    
  setInterval(function() {

   var button = $(product).find('[data-label="(P) Cart Button"] .gf_button-soldout')
   
   if($(button).length > 1) {
     $('#e-1627467134821').hide()
     return
   }
   $('#e-1627467134821').show()
  }, 500)
  
  }
})( window.GemQuery || jQuery );
        jQuery(function() {
            var $module = jQuery('#m-1539774978278').children('.module');
            $module.gfV3ProductDesc();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1539774978364').children('.module');
        }); 
    
        jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1591796268223').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1591796268223').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1591796268223');
      if ($bkLiquid && $bkLiquid.length > 0) {
          var $settings = $bkLiquid.find('.settings');
          try {
              var name = '';
              var imageUrl = '';
              settings = JSON.parse($settings.html());
              for (var i = 0; i < settings.length; i++) {
                  if (settings[i].name == 'name') {
                      name = settings[i].default_value
                  }
                  if (settings[i].name == 'image') {
                      imageUrl = settings[i].default_value
                  }
              }
              if (imageUrl != '') {
                  flag = false;
                  jQuery('#m-1591796268223').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1591796268223').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1591796268223').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
    
        jQuery(function() {
            var $module = jQuery('#m-1539774978308').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1539774978314').children('.module');
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
                        mouseDrag: true,
                        navSpeed: navspeed,
                        autoWidth: !1,
                        loo: loop,
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
        }); 
    
          jQuery(function() {
  try {
    var $module = jQuery('#m-1600364480444').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
});
      
      
      
      
      
        jQuery(function() {
            var $module = jQuery('#m-1539774978347').children('.module');
        }); 
    
        jQuery(function() {
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            var $module = jQuery('#m-1585325845917').children('.module');
            if (mode == 'dev') {
                jQuery('#m-1585325845917').attr('data-name', '').css('background-image', 'none').css('min-height', '50px').removeAttr('data-image');
                
                var flag = true;
                var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1585325845917');
                if ($bkLiquid && $bkLiquid.length > 0) {
                    var $settings = $bkLiquid.find('.settings');
                    try {
                        var name = '';
                        var imageUrl = '';
                        settings = JSON.parse($settings.html());
                        for (var i = 0; i < settings.length; i++) {
                            if (settings[i].name == 'name') {
                                name = settings[i].default_value
                            }
                            if (settings[i].name == 'image') {
                                imageUrl = settings[i].default_value
                            }
                        }
                        if (imageUrl != '') {
                            flag = false;
                            jQuery('#m-1585325845917').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
                        }
                        if (name != '' && name != 'Custom Code') {
                            flag = false;
                            jQuery('#m-1585325845917').attr('data-name', name);
                        }
                    } catch(error) {
                        console.log(error);
                    }
                }
                if (flag) {
                    jQuery('#m-1585325845917').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
                }
            }
        });
  
        jQuery(function() {
            var $module = jQuery('#m-1573578830538').children('.module');
            $module.gfV3ProductPrice();
        }); 
    (function( jQuery ){
  var $module = jQuery('#m-1642651496597').children('.module');
  // You can add custom Javascript code right here.
  
  var $product = $module.closest('[data-label="Product"]').children('.module');
    if ($product.length == 0) {
        $product = $module.closest('[data-icon="gpicon-product"]').children('.module');
    }
    if ($product.data('gfv3product') != undefined) {
      var selectedVariant = $product.data('gfv3product').getVariant();
      updateDimension(selectedVariant)
    }
    
  //get WrapProductId
  var currentWrapProductId = $module.closest('[data-label="Product"]').attr('id');
  
  function changeVariantFunction(variant){
    updateDimension(variant)
  }
    
  if (window.GEMSTORE) {
      window.GEMSTORE.subscribe("product-"+currentWrapProductId+"-variant", changeVariantFunction);
  }
  
  function updateDimension(variant){
    if(!variant.available){
      $product.find('[data-label="(P) Price"]').hide();
    }else{
      $product.find('[data-label="(P) Price"]').show();
    }
    
  }
})( window.GemQuery || jQuery );
    jQuery(function() {
        var $module = jQuery('#m-1573578439820').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1573578439826').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1573578439843').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1573578439887').children('.module');
    });
  jQuery(function() {
  var $hero = jQuery('#m-1604589352827');
  var $module = jQuery('#m-1604589352827').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $heroLink = $hero.children('.hero-link');
  if(mode == 'dev' && $heroLink.length > 0) {
   $hero.children('.hero-link').hide();
  }
  if (mode == 'production' && $heroLink.length > 0) {
    $module.off('click.openLink').on('click.openLink', function(e) {
      var $target = jQuery(e.target);
      if ($target.length > 0){
        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
        if (linkTarget == "") {
          var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
          var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
          if (link != "") {
            if (newTab == "") {
              window.location.href = link;
            } else {
              window.open(link, newTab);
            }
          }
        }
      };
    })
  }

  var height = jQuery.trim($module.attr('data-height'));
  if(height == undefined || height == '') {
    $hero.attr('style', 'height: auto!important');
    jQuery(window).resize(function(){
      $hero.attr('style', 'height: auto!important');
    });
  } else {
    $hero.removeAttr('style');
  }

  var effect = $module.attr('data-effect');
  var transition = $module.attr('data-transition');

  if(effect == 'effect-zoom') {   
    $module.parent().addClass(effect);  

    setTimeout(function() {
      var backgroundImage = $module.parent().css('background-image');
      var backgroundSize = $module.parent().css('background-size');
      var backgroundPosition = $module.parent().css('background-position');
      $module.siblings('.gf_hero-bg-wrap').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      })
      $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      });
    }, 300);
  }

  if($module.attr('data-fixedMode') == '1'){
    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

    jQuery(window).resize(function(){
      var backgroundImage =  $module.parent().css('background-image');
      $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
    });
  } else {
    $module.parent().removeAttr('style');
  }
});
    jQuery(function() {
        var $module = jQuery('#m-1604589635525').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1604589635575').children('.module');
    });
  jQuery(function() {
  var $hero = jQuery('#m-1604589635512');
  var $module = jQuery('#m-1604589635512').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $heroLink = $hero.children('.hero-link');
  if(mode == 'dev' && $heroLink.length > 0) {
   $hero.children('.hero-link').hide();
  }
  if (mode == 'production' && $heroLink.length > 0) {
    $module.off('click.openLink').on('click.openLink', function(e) {
      var $target = jQuery(e.target);
      if ($target.length > 0){
        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
        if (linkTarget == "") {
          var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
          var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
          if (link != "") {
            if (newTab == "") {
              window.location.href = link;
            } else {
              window.open(link, newTab);
            }
          }
        }
      };
    })
  }

  var height = jQuery.trim($module.attr('data-height'));
  if(height == undefined || height == '') {
    $hero.attr('style', 'height: auto!important');
    jQuery(window).resize(function(){
      $hero.attr('style', 'height: auto!important');
    });
  } else {
    $hero.removeAttr('style');
  }

  var effect = $module.attr('data-effect');
  var transition = $module.attr('data-transition');

  if(effect == 'effect-zoom') {   
    $module.parent().addClass(effect);  

    setTimeout(function() {
      var backgroundImage = $module.parent().css('background-image');
      var backgroundSize = $module.parent().css('background-size');
      var backgroundPosition = $module.parent().css('background-position');
      $module.siblings('.gf_hero-bg-wrap').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      })
      $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      });
    }, 300);
  }

  if($module.attr('data-fixedMode') == '1'){
    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

    jQuery(window).resize(function(){
      var backgroundImage =  $module.parent().css('background-image');
      $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
    });
  } else {
    $module.parent().removeAttr('style');
  }
});
    jQuery(function() {
        var $module = jQuery('#m-1604589635565').children('.module');
    });
  
        jQuery(function() {
            var $module = jQuery('#m-1539774978252').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1539774978287').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1569334642762').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1569431257755').children('.module');
        }); 
    
          jQuery(function() {
  try {
    var $module = jQuery('#m-1600367119182').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
});
      
      
      
      
      jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1586941542436').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1586941542436').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1586941542436');
      if ($bkLiquid && $bkLiquid.length > 0) {
          var $settings = $bkLiquid.find('.settings');
          try {
              var name = '';
              var imageUrl = '';
              settings = JSON.parse($settings.html());
              for (var i = 0; i < settings.length; i++) {
                  if (settings[i].name == 'name') {
                      name = settings[i].default_value
                  }
                  if (settings[i].name == 'image') {
                      imageUrl = settings[i].default_value
                  }
              }
              if (imageUrl != '') {
                  flag = false;
                  jQuery('#m-1586941542436').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1586941542436').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1586941542436').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
        jQuery(function() {
            var $module = jQuery('#m-1573578522585').children('.module');

            var limit = parseInt($module.attr('data-limit'));
            if($module.find('.gf_row.gf_row_no_tools .gf_column').length > limit) {
                $module.find('.gf_row.gf_row_no_tools .gf_column:last').hide();
            }
        }); 
    
    
        jQuery(function() {
            var $module = jQuery('#m-1573578522585-child1').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1573578522585-child1-4').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1573578522585-child1-6').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1573578522585-child1-5').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1573578522585-child2').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1573578522585-child2-4').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1573578522585-child2-6').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1573578522585-child2-5').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1573578522585-child3').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1573578522585-child3-4').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1573578522585-child3-6').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1573578522585-child3-5').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1573578522585-child4').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1573578522585-child4-4').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1573578522585-child4-6').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1573578522585-child4-5').children('.module');
            $module.gfV3ProductPrice();
        }); 
    