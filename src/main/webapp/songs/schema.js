export const schema = {
  table: {
    name: 'songs',
    label: 'Song'
  },
  fields: [
    {name: 'idSongs', label: 'Song ID', readonly: true},
    {name: 'title', label: 'Song Title'},
    {name: 'genre', label: 'Genre'},
  ]
};