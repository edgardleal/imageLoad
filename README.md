# JQuery image load

JQuery plugin to lazy load image

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/edgardleal/imageload/master/dist/jquery.imageload.min.js
[max]: https://raw.github.com/edgardleal/imageload/master/dist/jquery.imageload.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/imageload.min.js"></script>

<body>
<img title="dummy" class="" data="-9223372036854412196.png" />
<img title="dummy" class="" data="-9223372036854412197.png" />
<img title="dummy" class="" data="-9223372036854412198.png" />

  <script>
  jQuery(function($) {
            $("img").imageLoad({ "nocache" : true, // nocache just to test 
                    'baseSmall' : 'http://mydomain/images/50/',
                    'baseLarge' : 'http://mydomain/images/400/'
            });
  });
  </script>
</body>
```

## Documentation
_(Coming soon)_

## Examples

## Release History
_(Nothing yet)_
