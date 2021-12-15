# Artist Hub
## Team
Anusha Arora
Group: Final Project 21
## Problem Statement
While many hubs exist for music listeners (Spotify, Apple Music, etc.), there are not many existing hubs for artists

## Solution Statement
The projects puts artists at the forefront to create their user profile and create songs and albums. The project models a music domain with tables representing artists, songs, and albums. The model is represented by the attached UML diagram.

## User Description
The typical users of this solution would be musical artists looking to control the music that is visible to other artists

## UML Diagram
[diagram link](DBD-Final-p3.pdf)

## User Object Description
### Artists Object
The user object in this project is the Aritst class consisting of an artist's name, date of birth, username, password, and email. Foreign keys connect the artist to the album domain object.

## Domain Objects Description
All objects have relevant foreign keys to establish relationships with other objects

### Song Object
Users can add a song with a title and custom genre (enumeration). The Song object is on the many side of a one to many relationship with albums as there can be many songs in a single album
### Album Object
Users can create albums with a title and the album is one the 'one' side of a one-to-many relationship with songs. This means that one album can contain many songs. It is also on the 'many' side of a one-to-many relationship with artists as a single artist can write many songs. The editor screen of this object allows the user to view a list of the songs related to that album

## Relationships
### User-to-Domain
The user, artists, is on the 'one' side of a one to many relationship with the album domain object. This is because a single artist can write many albums. There is also a dependency on the artist. If you delete and artist, the database cascade deletes the album records. This is specifically a one-to-many composition relationship between artist and album, respectively.

### Domain-to-Domain
Album and Songs are in a one-to-many relationship, respectively. One album can contain many songs and if you delete an album, its songs are also deleted This is specifically a one-to-many composition relationship between album and songs, respectively.

## Portable Enumerations
The solution contains one enumeration in the Album object. Genre is an enumeration with possible values: 'rnb', 'pop', 'rap', 'hipHop', 'country', 'kPop'. This is implemented sing MySQL's enum.

## User Interface Requirements
Each of the three objects contain a list screen and an editor screen. The list screens display all the records in the object's table. It also contains an 'Add' button at the top that creates a new record with default values that can later be edited. Each record is clickable. The link of the record takes you to the record's editor pade where you can update the record, delete the record, or exit the editor screen using the cancel button. The album screen contains a button to songs which displays all the song's in the current album. The artist screen contains a button to all the albums belonging to that artist. Each link in the album's songs screen and album's artist screen will navigate you to that record's page. The operations follow CRUD per the requirements of the class.
