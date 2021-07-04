if ((typeof cmsGGI2258922 !== 'undefined') && (cmsGGI2258922 != null) && (typeof cmsGGI2258922.Destroy !== 'undefined')){cmsGGI2258922.Destroy();}function comSlider2258922() { 
var self = this; 
var g_HostRoot = "";
var jssor_slider2258922 = null;cmsGGI2258922 = this;this.Destroy = function(){ if (self.jssor_slider2258922 != null) { self.jssor_slider2258922.$Destroy(); self.jssor_slider2258922 = null;} };  	this.jssor_slider2258922_starter = function (containerId) { 
            var _SlideshowTransitions = [ 
{$Duration:800,$Delay:300,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationCross,$Easing:$Jease$.$OutQuad}
,{$Duration:1200,x:4,$Cols:2,$Zoom:11,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}
,{$Duration:1000,$Zoom:1,$Rotate:1,$SlideOut:true,$Easing:{$Opacity:$Jease$.$Linear},$Opacity:2,$Round:{$Rotate:0.5}}
,{$Duration:1400,x:0.25,$Zoom:1.5,$Easing:{$Left:$Jease$.$InWave,$Zoom:$Jease$.$InSine},$Opacity:2,$ZIndex:-10,$Brother:{$Duration:1400,x:-0.25,$Zoom:1.5,$Easing:{$Left:$Jease$.$InWave,$Zoom:$Jease$.$InSine},$Opacity:2,$ZIndex:-10}}
,{$Duration:1200,$Zoom:11,$Rotate:1,$Easing:{$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Round:{$Rotate:1},$ZIndex:-10,$Brother:{$Duration:1200,$Zoom:11,$Rotate:-1,$Easing:{$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Round:{$Rotate:1},$ZIndex:-10,$Shift:600}}
,{$Duration:1200,$Delay:20,$Clip:3,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}];
			
					var options = {
										$AutoPlay: true,                                   //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
										$Idle: 0,
										$LazyLoading: 1,
										$PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, default value is 1
										$DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
										$FillMode: 5,										//[Optional] The way to fill image in slide, 0: stretch, 1: contain (keep aspect ratio and put all inside slide), 2: cover (keep aspect ratio and cover whole slide), 4: actual size, 5: contain for large image and actual size for small image, default value is 0 
										$Loop: 1,										//[Optional] Enable loop(circular) of carousel or not, 0: stop, 1: loop, 2 rewind, default value is 1 
										$PauseOnHover: 0, 							//[Optional] Whether to pause when mouse over if a slider is auto playing, 0: no pause, 1: pause for desktop, 2: pause for touch device, 3: pause for desktop and touch device, 4: freeze for desktop, 8: freeze for touch device, 12: freeze for desktop and touch device, default value is 1 
										$StartIndex: 0,	//[Optional] Index of slide to display when initialize, default value is 0 
 
									$SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
										$Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
										$Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
										$TransitionsOrder: 0,       //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
									}										
									
					, $ArrowNavigatorOptions: {
						$Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
						$ChanceToShow: 1       //[Required] 0 Never, 1 Mouse Over, 2 Always
					}
				, $ThumbnailNavigatorOptions: {
						$Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
						$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always

						$ActionMode: 1,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
						$AutoCenter: 0,                                 //[Optional] Auto center thumbnail items in the thumbnail navigator container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 3
						$Rows: 1,                                      //[Optional] Specify lanes to arrange thumbnails, default value is 1
						$SpacingX: 8,                                   //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
						$SpacingY: 8,                                   //[Optional] Vertical space between each thumbnail in pixel, default value is 0
						$Cols: 5,                              //[Optional] Number of pieces to display, default value is 1
						$ParkingPosition: 60,                          //[Optional] The offset position to park thumbnail
						$Orientation: 2,                                //[Optional] Orientation to arrange thumbnails, 1 horizental, 2 vertical, default value is 1
						$NoDrag: false                            //[Optional] Disable drag or not, default value is false
					}						
									};

									self.jssor_slider2258922 = new $JssorSlider$(containerId, options);										
									
										}; 
							
									//responsive code begin
									//you can remove responsive code if you do not want the slider scales while window resizes
									this.ScaleSlider = function() {		
										var  parentWidth = jqCS2258922("#comSContainer2258922_").parent().width();
										if (parentWidth) {
											self.jssor_slider2258922.$ScaleWidth(Math.min(parentWidth, 788));
										}
										else
											window.setTimeout(self.ScaleSlider, 30);											
									};
				
					this.scriptLoaded = function(options)
					{
				   jqCS2258922 = jQuery2258922.noConflict(false);jqCS2258922("#comslider_in_point_2258922").html('<div id="comSContainer2258922_" name="comSContainer2258922_" style="display: inline-block; text-align: left; background:#000000; border:0px; width:788px; height:300px; position: relative; top: 0px; left: 0px;"><div data-u="slides" style="position: absolute; left: 0px; top: 0px; width:700px; height:300px; overflow: hidden;"><div idle="5000" id="imgidle_2258922_1330725"><img class="cmskb_image_0" data-u="image" imgw="512" imgh="300" src="comslider2258922/img/210610130055101.jpg?ot=1623314405"></img><img data-u="thumb" src="comslider2258922/imgnav/210610130055101.jpg?timstamp=1623314423"></img></div><div idle="5000" id="imgidle_2258922_1330726"><img class="cmskb_image_1" data-u="image" imgw="200" imgh="300" src="comslider2258922/img/210610130055102.jpg?ot=1623314405"></img><img data-u="thumb" src="comslider2258922/imgnav/210610130055102.jpg?timstamp=1623314423"></img></div><div idle="5000" id="imgidle_2258922_1330727"><img class="cmskb_image_2" data-u="image" imgw="534" imgh="300" src="comslider2258922/img/210610130055103.jpg?ot=1623314405"></img><img data-u="thumb" src="comslider2258922/imgnav/210610130055103.jpg?timstamp=1623314423"></img></div><div idle="5000" id="imgidle_2258922_1330728"><img class="cmskb_image_3" data-u="image" imgw="200" imgh="300" src="comslider2258922/img/210610130055104.jpg?ot=1623314405"></img><img data-u="thumb" src="comslider2258922/imgnav/210610130055104.jpg?timstamp=1623314423"></img></div><div idle="5000" id="imgidle_2258922_1330729"><img class="cmskb_image_4" data-u="image" imgw="453" imgh="300" src="comslider2258922/img/210610130055105.jpg?ot=1623314405"></img><img data-u="thumb" src="comslider2258922/imgnav/210610130055105.jpg?timstamp=1623314423"></img></div><div data-u="any" class="cmspu" style="display:block; position:absolute; top:10px; left:10px;"><a target="_blank" href="https://www.comslider.com" title="Powered by comSlider &#013;&#013;Use premium version to remove this watermark."><img alt="powered by comSlider" src="comslider2258922/imgstatic/cmswatermark.png?v=6"/></a></div></div>                <!-- ThumbnailNavigator Skin Begin -->    <div data-u="thumbnavigator" class="jssort2258922" style="position: absolute; width: 72px; height: 292px; top: 8px; right: 8px; ">        <!-- Thumbnail Item Skin Begin -->        <style>           /* jssor slider thumbnail navigator skin 2258922 css */            /*            .jssort2258922 .p            (normal)            .jssort2258922 .p:hover      (normal mouseover)            .jssort2258922 .pav          (active)            .jssort2258922 .pav:hover    (active mouseover)            .jssort2258922 .pdn          (mousedown)            */            .jssort2258922 .w            {                position: absolute;                width: 70px;                height: 50px;                box-sizing:content-box;            }            .jssort2258922 .wsub            {                position: absolute;                width: 72px;                height: 52px;            }            .jssort2258922 .pav .wsub, .jssort2258922 .p:hover .wsub            {                position: absolute;                width: 72px;                height: 52px;                top: 0px;                left: 0px;            }            .jssort2258922 .w            {                margin: 0px !important;                border: #FFFFFF 1px solid;            }            .jssort2258922 .p:hover .w,            .jssort2258922 .pav .w, .jssort2258922 .pav:hover .w            {                border: #FFFFFF 1px solid !important;                margin: 0px !important;            }            .jssort2258922 .c            {                width: 72px;                height: 52px;                filter: alpha(opacity=40);                opacity: 0.4;                -moz-transition: opacity .6s;                -webkit-transition: opacity .6s;                -o-transition: opacity .6s;                margin: 0px !important;                background-color: #000000;            }            .jssort2258922 .p:hover .c,            .jssort2258922 .pav .c, .jssort2258922 .pav:hover .c            {                 filter: alpha(opacity=0);                 opacity: 0;                 background-color: #000000;             }            .jssort2258922 .pav .c            {                margin: 0px !important;            }                         .jssort2258922 .p:hover .c            {                transition: none;                -moz-transition: none;                -webkit-transition: none;                -o-transition: none;                margin: 0px !important;            }        </style>        <div data-u="slides" style="right: 0px; top: 0px;">            <div data-u="prototype" class="p" style="position: absolute; width: 72px; height: 52px; top: 0; left: 0;">                <div class="w">                    <thumbnailtemplate style="width: 70px; height: 50px; border: none; position: absolute; top: 0; left: 0;"></thumbnailtemplate>                </div>                <div class="wsub" style="overflow:hidden;">                	<div class="c" style="position: absolute; top: 0; left: 0"></div>                </div>            </div>        </div>        <!-- Thumbnail Item Skin End -->   </div><!-- Arrow Navigator Skin Begin --><style>/* jssor slider arrow navigator skin 02 css *//*.jssora2258922l              (normal).jssora2258922r              (normal).jssora2258922l:hover        (normal mouseover).jssora2258922r:hover        (normal mouseover).jssora2258922ldn            (mousedown).jssora2258922rdn            (mousedown)*/.jssora2258922l, .jssora2258922r, .jssora2258922ldn, .jssora2258922rdn{	position: absolute;	cursor: pointer;	display: block;    overflow:hidden;}.jssora_back_2258922 { filter: alpha(opacity=100);opacity: 1; background-repeat: no-repeat;  background-position: center; position:absolute; background-image: url("comslider2258922/imgnavctl/defback.png?1623314386");}.jssora_back_2258922:hover {cursor:pointer;  filter: alpha(opacity=100);opacity: 1; background-image: url("comslider2258922/imgnavctl/defbackhover.png?1623314386");}.jssora_forward_2258922 { filter: alpha(opacity=100);opacity: 1; background-repeat: no-repeat;  background-position: center; position:absolute; background-image: url("comslider2258922/imgnavctl/defforward.png?1623314386");}.jssora_forward_2258922:hover {cursor:pointer;  filter: alpha(opacity=100);opacity: 1; background-image: url("comslider2258922/imgnavctl/defforwardhover.png?1623314386");} </style><!-- Arrow Left --><div data-u="arrowleft" class="jssora_back_2258922" style="width:44px;height:48px;top:0px;left:0px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75"></div><!-- Arrow Right --><div data-u="arrowright" class="jssora_forward_2258922" style="width:44px;height:48px;top:0px;right:88px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75"></div></div>');
                    jqCS2258922("#comslider_in_point_2258922 a").bind('click',  function() { if ((this.name.length > 0) && (isNaN(this.name) == false)) {  self.switchToFrame(parseInt(this.name)); return false;} });
                
					self.jssor_slider2258922_starter("comSContainer2258922_");
							
						self.ScaleSlider();
						jqCS2258922(document).ready(function() {				
							self.ScaleSlider();
						});
						jqCS2258922(window).bind("load", self.ScaleSlider);
						jqCS2258922(window).bind("resize", self.ScaleSlider);
						jqCS2258922(window).bind("orientationchange", self.ScaleSlider);						
					
}
var g_CSIncludes = new Array();
var g_CSLoading = false;
var g_CSCurrIdx = 0; 
 this.include = function(src, last) 
                {
                    if (src != '')
                    {				
                            var tmpInclude = Array();
                            tmpInclude[0] = src;
                            tmpInclude[1] = last;					
                            //
                            g_CSIncludes[g_CSIncludes.length] = tmpInclude;
                    }            
                    if ((g_CSLoading == false) && (g_CSCurrIdx < g_CSIncludes.length))
                    {


                            var oScript = null;
                            if (g_CSIncludes[g_CSCurrIdx][0].split('.').pop().substring(0,3) == 'css')
                            {
                                oScript = document.createElement('link');
                                oScript.href = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/css';
                                oScript.rel = 'stylesheet';

                                oScript.onloadDone = true; 
                                g_CSLoading = false;
                                g_CSCurrIdx++;								
                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                        self.scriptLoaded(); 
                                else
                                        self.include('', false);
                            }
                            else
                            {
                                oScript = document.createElement('script');
                                oScript.src = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/javascript';

                                //oScript.onload = scriptLoaded;
                                oScript.onload = function() 
                                { 
                                        if ( ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true; 
                                                g_CSLoading = false;
                                                g_CSCurrIdx++;								
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                };
                                oScript.onreadystatechange = function() 
                                { 
                                        if ( ( "loaded" === oScript.readyState || "complete" === oScript.readyState ) && ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true;
                                                g_CSLoading = false;	
                                                g_CSCurrIdx++;
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                }
                                
                            }
                            //
                            document.getElementsByTagName("head").item(0).appendChild(oScript);
                            //
                            g_CSLoading = true;
                    }

                }
                

}
objcomSlider2258922 = new comSlider2258922();
objcomSlider2258922.include('comslider2258922/js/jquery-1.10.1.js?ts=1623314424', false);
objcomSlider2258922.include('comslider2258922/js/jquery-ui-1.10.3.effects.js?ts=1623314424', false);
objcomSlider2258922.include('comslider2258922/js/jssor.slider.min_27_5_0.js?ts=1623314424', false);
objcomSlider2258922.include('comslider2258922/js/jssorcap.min.js?ts=1623314424', true);
