const post = {
    name: 'post',
    title: 'Blog Posts',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
        },
        {
            name: 'body',
            title: 'Content',
            type: 'text',
        },
        {
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime',
        },
    ],
}

export default post