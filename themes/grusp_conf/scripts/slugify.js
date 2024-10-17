hexo.extend.helper.register('slugify', function(input) {
    var slugify = require('slugify');

    return slugify(input, {
      lower: true
    });
});
