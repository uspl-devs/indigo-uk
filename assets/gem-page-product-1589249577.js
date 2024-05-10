

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
  
        jQuery(function() {
            var $module = jQuery('#m-1539774978278').children('.module');
            $module.gfV3ProductDesc();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1539774978364').children('.module');
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
        var $module = jQuery('#m-1569333606378').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1569333606408').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1569333606379').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1569333606339').children('.module');
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
    jQuery(function(){try{if(jQuery().gfV1Lazyload){var $module=jQuery(window);$module.gfV1Lazyload({delay:125})}}catch(err){}})