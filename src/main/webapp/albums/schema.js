export const schema = {
  table: {
    name: 'albums',
    label: 'Album'
  },
  fields: [
    {name: 'id', label: 'Album Id', readonly: true},
    {name: 'title', label: 'Title'},
    {name: 'artistId', label: 'Artist Id'},
    {name: 'songs', label: 'Songs', references: 'songs'}
  ],
  references: [
    {name: 'songs', label: 'Songs', references: 'songs'}
  ]
};