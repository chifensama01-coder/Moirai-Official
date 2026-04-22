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
            title: 'Events / Lookbook',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'text' },
                        { name: 'date', title: 'Date (Optional)', type: 'string' },
                        { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image' }] },
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
        {
            name: 'partners',
            title: 'Trusted By / Partners',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', title: 'Partner Name', type: 'string' },
                        { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }
                    ]
                }
            ]
        },
        {
            name: 'ceo',
            title: 'CEO Feature',
            type: 'object',
            fields: [
                { name: 'name', title: 'Name', type: 'string' },
                { name: 'image', title: 'CEO Image', type: 'image' },
                { name: 'bio', title: 'Bio', type: 'text' }
            ]
        },
        {
            name: 'team',
            title: 'Meet the Team',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', title: 'Name', type: 'string' },
                        { name: 'role', title: 'Role', type: 'string' },
                        { name: 'image', title: 'Image', type: 'image' }
                    ]
                }
            ]
        },
        {
            name: 'footerLocation',
            title: 'Footer Location Text',
            type: 'string',
            description: 'E.g., "Made in Cameroon 🇨🇲 | Buea, Cameroon"'
        },
        {
            name: 'newsletterEmail',
            title: 'Newsletter Email',
            type: 'string',
            description: 'Email address to manage newsletter signups (if empty, newsletter section is hidden)'
        },
        {
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'quote', title: 'Quote', type: 'text' },
                        { name: 'author', title: 'Author Name', type: 'string' },
                        { name: 'role', title: 'Author Role / Context', type: 'string' }
                    ]
                }
            ]
        }
    ],
}

export default siteSettings