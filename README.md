# accordion
JavaScript accordion with minimal markup for for build systems.
`
Accordion plugin v 1.0
Jquery Required !

#HTML MARKUP

```
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
```

#Description
* _js-accordion             -> main element which will hold all the expandable elements.
* data-open-class           -> class that will be added to active element title. If it is not present it will be added - active.
* data-animation-time       -> time in miliseconds for animation of expanding and minimize.
* data-open-single          -> If true - it will allow to open just one element at a time. This can be removed and it allow you to open all elements.
* data-click                -> holder which will be clickable and visible when other content is minimized.
* data-target               -> holder of content that will be expandable.
* direct > div              -> required.
