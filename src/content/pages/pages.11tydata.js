module.exports = {
    layout: 'page',
    tags: 'page',
    permalink: function(data) {
        // slug override for localized URL slugs
        if (data.seo?.slug) {
            return `/${this.slugify(data.seo.slug)}/`;
        } else {
            return `/${this.slugify(data.page.fileSlug)}/`;
        }
    }
}
