/*  
Accordion plugin v 1.0
Jquery Required !

**HTML MARKUP
<section class="_js-accordion" data-animation-time="300" data-open-single="true" data-open-class="active">
    <div>
        <div data-click> Title 1</div>
        <article data-target>
            Content no matter of tags or just plain text
        </article>
    </div>
    <div>
        <div data-click> Title 2</div>
        <article data-target>
            Content no matter of tags or just plain text
        </article>
    </div>
    .....
</section>

* _js-accordion             -> main element which will hold all the expandable elements.
* data-open-class           -> class that will be added to active element title. If it is not present it will be added - active.
* data-animation-time       -> time in miliseconds for animation of expanding and minimize.
* data-open-single          -> If true - it will allow to open just one element at a time. This can be removed and it allow you to open all elements.
* data-click                -> holder which will be clickable and visible when other content is minimized.
* data-target               -> holder of content that will be expandable.
* direct > div              -> required.
*/

function Accordion() {
    this.accordionHolder    = $('._js-accordion');
    this.targetHolder       = this.accordionHolder.find('[data-target]');
    this.clickHolder        = this.accordionHolder.find('[data-click]');
    this.openSingle         = this.accordionHolder.attr('data-open-single');
    this.animationTime      = this.accordionHolder.attr('data-animation-time') === 'undefined' ? parseInt(this.accordionHolder.attr('data-animation-time'), 10) : 300;
    this.activeClass        = typeof this.accordionHolder.attr('data-open-class') !== 'undefined' ? this.accordionHolder.attr('data-open-class') : 'active';

    this.init();
    this.events();
}

Accordion.prototype.init = function() {

    this.targetHolder.hide();
    this.clickHolder.attr('data-open', false);
};

Accordion.prototype.events = function() {
    var _this = this;

    $(document).on('click', this.clickHolder.selector , function() {

        if ( $(this).attr('data-open') === 'false' ) {
            $(this).addClass( _this.activeClass );
            $(this).siblings().stop(true,true).slideDown( _this.animationTime );
            _this.targetHolder.find('>*:eq(0)').css('overflow','initial');  /* horizontal scroll fix */

            $(this).attr('data-open', true);
        }
        else {
            $(this).siblings().stop(true,true).slideUp(_this.animationTime);
            $(this).removeClass( _this.activeClass );
            _this.targetHolder.find('>*:eq(0)').removeAttr('style');  /* horizontal scroll fix */

            $(this).attr('data-open', false);
        }

        if ( _this.openSingle === 'true' ) {
            $(this).parent().siblings().find('[data-target]').stop(true,true).slideUp( _this.animationTime );
            $(this).parent().siblings().find('[data-open]').attr('data-open', false).removeClass(_this.activeClass);
        }
    }); 
};

$(document).ready(function() {
    new Accordion();
});