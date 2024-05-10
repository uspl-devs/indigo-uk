
jQuery(function() {
  var $hero = jQuery('#m-1585756289726');
  var $module = jQuery('#m-1585756289726').children('.module');

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
            var $module = jQuery('#m-1585756296404').children('.module');
            var $collectionFilter = $module.find('.gf_collection-filter');
            var $sortCollection = $module.find('.gf_sort-collection');
            
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

            var resizeSelect = function() {
                var $collectionFilterRuler = jQuery('<select><option></option></select>');
                var $sortCollectionRuler = jQuery('<select><option></option></select>');

                if ($collectionFilter.find('option:selected').length > 0) {
                    $collectionFilterRuler.find('option').html($collectionFilter.find('option:selected').text());
                } else {
                    $collectionFilterRuler.find('option').html($collectionFilter.find('option:first').text());
                }
                
                $collectionFilterRuler.css({'width': 'auto','height': '0','opacity':'0','border': '0', 'display': 'block'}).appendTo($module.find('.gf_collection-filter-wrapper'));
                
                if ($sortCollection.find('option:selected').length > 0) {
                    $sortCollectionRuler.find('option').html($sortCollection.find('option:selected').text());
                } else {
                    $sortCollectionRuler.find('option').html($sortCollection.find('option:first').text());
                }
                $sortCollectionRuler.css({'width': 'auto','height': '0','opacity':'0','border': '0', 'display': 'block'}).appendTo($module.find('.gf_sort-collection-wrapper'));
                var collectionFilterWidth = $collectionFilterRuler.width() + $collectionFilter.outerWidth() - $collectionFilter.width();
                var sortCollectionWidth = $sortCollectionRuler.width() + $sortCollection.outerWidth() - $sortCollection.width();
                
                if (collectionFilterWidth > sortCollectionWidth) {
                    $collectionFilter.css('width', collectionFilterWidth);
                    $sortCollection.css('width', collectionFilterWidth);
                } else {
                    $collectionFilter.css('width', sortCollectionWidth);
                    $sortCollection.css('width', sortCollectionWidth);
                }

                $collectionFilterRuler.remove();
                $sortCollectionRuler.remove(); 
            }

            resizeSelect();

            // Collection Filter
            $collectionFilter.bind('change', function(e) {
                if (mode == 'dev') {
                    resizeSelect();
                } else {
                    var tag = jQuery(this).val();
                    
                    var currentLocation = window.location.href;
                    
                    var baseUrl = currentLocation.slice(0, currentLocation.indexOf('/collections/'));
                    var tailUrl = currentLocation.slice(currentLocation.indexOf('/collections/') + '/collections/'.length);
                    var collectionName = tailUrl.slice(0, tailUrl.indexOf('?') == -1 ? undefined : tailUrl.indexOf('?'));
                    var collectionName = collectionName.slice(0, collectionName.indexOf('/') == -1 ? undefined : collectionName.indexOf('/'));
                    var query = location.search;
                    query = query.replace(/page=\d*/ig ,'').replace('?&', '?').replace('&&', '&')

                    window.location.href = baseUrl + '/collections/' + collectionName + ((tag == undefined || tag == '') ? '' : ('/' + tag)) + query;
                    
                }
            });

            // Sort Collection
            $sortCollection.bind('change', function(e) {
                if (mode == 'dev') {
                    resizeSelect();
                } else {
                    var newSortBy = e.target.value;
                    var currentSearch = location.search;
                    var sortRegex = /sort_by=[\w-]+/ig;

                    if (sortRegex.test(currentSearch)) {
                        if (newSortBy != '') {
                            currentSearch = currentSearch.replace(sortRegex, 'sort_by=' + newSortBy);
                        } else {
                            currentSearch = currentSearch.replace(sortRegex, '');
                            while (currentSearch.indexOf('&&') != -1) {
                                currentSearch.replace('&&', '&');
                            }
                        }
                    } else if (currentSearch == '' || currentSearch == '?') {
                        currentSearch = '?sort_by=' + newSortBy;
                    } else {
                        currentSearch += ('&sort_by=' + newSortBy);
                    }

                    location.search = currentSearch;
                }
            });
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1585756296391').children('.module');

            var sameHeightTitle = $module.data('sameheightitle'),
                spacing = $module.data('spacing');
                collg = $module.data('collg'),
                colmd = $module.data('colmd'),
                colsm = $module.data('colsm'),
                colxs = $module.data('colxs');

            var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
            var col = collg;


            jQuery(window).resize(function() {
                setTimeout(function() {
                    for(var i = 0; i < $clearfixes.length; i++) {
                        if($clearfixes.eq(i).css('display') == 'block') {
                            if($clearfixes.eq(i).hasClass('visible-lg')) {
                                col = collg;
                                break;
                            }
                            if($clearfixes.eq(i).hasClass('visible-md')) {
                                col = colmd;
                                break;
                            }
                            if($clearfixes.eq(i).hasClass('visible-sm')) {
                                col = colsm;
                                break;
                            }
                            if($clearfixes.eq(i).hasClass('visible-xs')) {
                                col = colxs;
                                break;
                            }
                        }
                    }
                }, 1000);
            });

            if(sameHeightTitle == '1') {
                var minHeight = 0;

                $module.find('.product-single__title').each(function() {
                });
            } else {
            }

            jQuery($module).css('padding', spacing);
        }); 
    
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child1').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child1-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child1-1').children('.module');
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child1-2').children('.module');
                $module.gfV3ProductPrice();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child2').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child2-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child2-1').children('.module');
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child2-2').children('.module');
                $module.gfV3ProductPrice();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child3').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child3-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child3-1').children('.module');
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child3-2').children('.module');
                $module.gfV3ProductPrice();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child4').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child4-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child4-1').children('.module');
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child4-2').children('.module');
                $module.gfV3ProductPrice();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child5').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child5-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child5-1').children('.module');
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child5-2').children('.module');
                $module.gfV3ProductPrice();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child6').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child6-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child6-1').children('.module');
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child6-2').children('.module');
                $module.gfV3ProductPrice();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child7').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child7-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child7-1').children('.module');
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child7-2').children('.module');
                $module.gfV3ProductPrice();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child8').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child8-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child8-1').children('.module');
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child8-2').children('.module');
                $module.gfV3ProductPrice();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child9').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child9-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child9-1').children('.module');
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child9-2').children('.module');
                $module.gfV3ProductPrice();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child10').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child10-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child10-1').children('.module');
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child10-2').children('.module');
                $module.gfV3ProductPrice();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child11').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child11-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child11-1').children('.module');
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child11-2').children('.module');
                $module.gfV3ProductPrice();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child12').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child12-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child12-1').children('.module');
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child12-2').children('.module');
                $module.gfV3ProductPrice();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child13').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child13-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child13-1').children('.module');
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585756296391-child13-2').children('.module');
                $module.gfV3ProductPrice();
            });
        
        jQuery(function() {
            var $module = jQuery('#m-1585756296358').children('.module');
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            
            if (mode == 'dev') {
                var $paginator = $module.find('.gf_collection-paginator-wrapper');
                if ($paginator.length > 0) {
                    var productCount = $paginator.attr('data-product-count');
                    var previousText = $module.attr('data-previous');
                    var nextText = $module.attr('data-next');
                    var activeColor = $module.attr('data-active-color');      

                    var applyEvents = function() {
                        $paginator.children('span:not(.deco)').off('click').on('click', function() {
                            var currentPage = parseInt($paginator.children('.current').text()) - 1;
                        
                            if (jQuery(this).hasClass('prev')) {
                                currentPage--;
                            } else if (jQuery(this).hasClass('next')) {
                                currentPage++;
                            } else {
                                currentPage = parseInt(jQuery(this).text()) - 1;
                            }
                            render(currentPage);
                        })
                    }

                    var render = function(currentPage) {
                        $paginator.html('');

                        if (currentPage != 0) {
                            $paginator.append('<span class="prev">' + previousText + '</span>')
                        }
                        
                        if (currentPage - 2 > 0) {
                            $paginator.append('<span class="page">1</span>');
                        }

                        if (currentPage -2 > 1) {
                            $paginator.append('<span class="deco">...</span>');
                        }

                        for (var i = Math.max(0, currentPage - 2); i <= Math.min(currentPage + 2, productCount - 1); i++) {
                            $paginator.append('<span class="page' + (currentPage == i ? ' current' : '') + '">' + (i + 1) + '</span>');
                        }

                        if (currentPage + 2 < productCount - 2) {
                            $paginator.append('<span class="deco">...</span>');
                        }

                        if (currentPage + 2 < productCount - 1) {
                            $paginator.append('<span class="page">' + productCount + '</span>');
                        }

                        if (currentPage != productCount - 1 && productCount != 0) {
                            $paginator.append('<span class="next">' + nextText + '</span>')
                        }

                        applyEvents();
                    }

                    render(0);
                }
            }
        });
    jQuery(function(){try{if(jQuery().gfV1Lazyload){var $module=jQuery(window);$module.gfV1Lazyload({delay:125})}}catch(err){}})