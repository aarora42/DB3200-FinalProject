export const schema = {
  table: {
    name: 'artists',
    label: 'Artist'
  },
  fields: [
    {name: 'idArtst', label: 'Artist ID', readonly: true},
    {name: 'firstName', label: 'First Name'},
    {name: 'lastName', label: 'Last Name'},
    {name: 'username', label: 'Username'},
    {name: 'password', label: 'Password'},
    {name: 'email', label: 'Email'},
    {name: 'dateOfBirth', label: 'Date of Birth'},
    {name: 'albums', label: 'Albums', references: 'albums'}
  ],
  references: [
    {name: 'albums', label: 'Albums', references: 'albums'}
  ]
};