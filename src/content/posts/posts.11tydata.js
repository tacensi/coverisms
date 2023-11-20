module.exports = {
    layout: 'post',
    tags: 'posts',
    permalink: function(data) {
        // slug override for localized URL slugs
        if (data.seo?.slug) {
            return `/${this.slugify(data.seo.slug)}/`;
        } else {
            return `/${this.slugify(data.page.fileSlug)}/`;
        }
    }
}
