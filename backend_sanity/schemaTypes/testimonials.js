import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Name',
        type: 'text',
      }),
      defineField({
        name: 'company',
        title: 'Company',
        type: 'text',
      }),
      defineField({
        name: 'image',
        title: 'ImgURL',
        type: 'image',
        options: {
          hotspot: true
        }
      }),
      defineField({
        name: 'feedback',
        title: 'Feedback',
        type: 'text',
      }),
      defineField({
          name: 'rating',
          title: 'Rating',
          type: 'number',
          validation: (Rule) => Rule.required().min(0.0).max(5.0),
        }),
    ],
  })
  