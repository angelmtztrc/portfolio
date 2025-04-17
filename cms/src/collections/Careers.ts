import { CollectionConfig } from 'payload'

export const Careers: CollectionConfig = {
  slug: 'careers',
  access: { read: () => true },
  fields: [
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'position',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'start_at',
      type: 'date',
      required: true,
    },
    {
      name: 'finished_at',
      type: 'date',
    },
  ],
}
