import { CollectionConfig } from 'payload'

export const Certifications: CollectionConfig = {
  slug: 'certifications',
  access: { read: () => true },
  fields: [
    {
      name: 'institution',
      type: 'text',
      required: true,
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
    },
    {
      name: 'finished_at',
      type: 'date',
      required: true,
    },
  ],
}
