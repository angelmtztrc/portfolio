import { CollectionConfig } from 'payload'

export const Education: CollectionConfig = {
  slug: 'education',
  access: { read: () => true },
  fields: [
    {
      name: 'institution',
      type: 'text',
      required: true,
    },
    {
      name: 'degree',
      type: 'text',
      required: true,
    },
    {
      name: 'finished_at',
      type: 'date',
    },
  ],
}
