// mentorship.js
export default {
  name: 'mentorships',
  title: 'Mentorships',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
    },
  ],
};