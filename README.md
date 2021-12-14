# Artist Hub
## Team
Anusha Arora
Final Project 2021
## Problem Statement
While many hubs exist for music listeners (Spotify, Apple Music, etc.), there are not many existing hubs for artists

## Solution Statement
The projects puts artists at the forefront to create their user profile and create songs and albums. The project models a music domain with tables representing artists, songs, and albums. The model is represented by the attached UML diagram.

## User Description
The typical users of this solution would be musical artists looking to control the music that is visible to other artists

## Domain Objects Description
All objects have relevant foreign keys to establish relationships with other objects

### Song Object
Users can add a song with a title and custom genre (enumeration). The Song object is on the many side of a one to many relationship with albums as there can be many songs in a single album
### Album Object
Users can create albums with a title and the album is one the 'one' side of a one-to-many relationship with songs. This means that one album can contain many songs. It is also on the 'many' side of a one-to-many relationship with artists as a single artist can write many songs. The editor screen of this object allows the user to view a list of the songs related to that album

## Relationships
## User-to-Domain
The user, artists, are on the 'one' side of a one to many relationship with the album domain object. This is because a single artist can write many albums. There is also a dependency on the artist. If you delete and artist, the database cascade deletes the album records.

## Domain-to-Domain
Album and Songs are in a one-to-many relationship, respectively. One album can contain many songs and if you delete an album, its songs are also deleted

## Portable Enumerations

## User Interface Requirements
