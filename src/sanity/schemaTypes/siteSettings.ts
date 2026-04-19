const siteSettings = {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
        },
        {
            name: 'heroText',
            title: 'Hero Text',
            type: 'string',
        },
        {
            name: 'aboutHeroImage',
            title: 'About Hero Image',
            type: 'image',
        },
        {
            name: 'fashionSchoolHeroImage',
            title: 'Fashion School Hero Image',
            type: 'image',
        },
        {
            name: 'bespokeHeroImage',
            title: 'Bespoke Hero Image',
            type: 'image',
        },
        {
            name: 'collectionsHeroImage',
            title: 'Collections Hero Image',
            type: 'image',
        },
        {
            name: 'blogHeroImage',
            title: 'Blog Hero Image',
            type: 'image',
        },
        {
            name: 'collections',
            title: 'Collections Framework',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'slug', title: 'Slug Identifier', type: 'string' },
                        { name: 'image', title: 'Cover Image', type: 'image' },
                    ],
                },
            ],
        },
        {
            name: 'lookbook',
            title: 'Lookbook Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'text' },
                        { name: 'image', title: 'Image', type: 'image' },
                    ],
                },
            ],
        },
        {
            name: 'heroSlides',
            title: 'Hero Slides',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'subtitle', title: 'Subtitle', type: 'string' },
                        { name: 'image', title: 'Background Image', type: 'image' },
                    ],
                },
            ],
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'image', title: 'Image', type: 'image' },
                    ],
                },
            ],
        },
        {
            name: 'bespokeGallery',
            title: 'Bespoke Gallery',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'image', title: 'Image', type: 'image' },
                        { name: 'alt', title: 'Alt Text', type: 'string' },
                    ],
                },
            ],
        },
    ],
}

export default siteSettings