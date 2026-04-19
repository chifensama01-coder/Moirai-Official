const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Product Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
        },
        {
            name: 'featured',
            title: 'Show on Homepage',
            type: 'boolean',
            initialValue: false,
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Bespoke', value: 'Bespoke' },
                    { title: 'Corsets', value: 'Corsets' },
                    { title: 'Cocktail Dresses', value: 'Cocktail Dresses' },
                    { title: 'Cameroonian Traditional', value: 'Cameroonian Traditional' }
                ],
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }]
        },
    ],
}

export default product