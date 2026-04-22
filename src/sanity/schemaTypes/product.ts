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
            type: 'reference',
            to: [{ type: 'category' }]
        },
        {
            name: 'price',
            title: 'Price (XAF)',
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
        {
            name: 'sizeGuide',
            title: 'Size Guide',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'fabricDetails',
            title: 'Fabric Details',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'deliveryInfo',
            title: 'Delivery Info',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'relatedProducts',
            title: 'Related Products (You May Also Like)',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'product' }] }]
        },
    ],
}

export default product