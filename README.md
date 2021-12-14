# DB3200-FinalProject

## Problem Statement
While many hubs exist for music listeners (Spotify, Apple Music, etc.), there are not many existing hubs for artists

## Solution Statement
The projects puts artists at the forefront to create their user profile and create songs and albums. The project models a music domain with tables representing artists, songs, and albums. The model is represented by the attached UML diagram.

## User Description
The typical users of this solution would be musical artists looking to control the music that is visible to other artists

## Domain Objects Description
### Song Object
Users can add a song with a title and custom genre (enumeration)
### Album Object
Users can create albums with a title and the album is one the 'one' side of a one-to-many relationship with songs. This means that one album can contain many songs. It is also on the 'many' side of a one-to-many relationship with artists as a single artist can write many songs. The editor screen of this object allows the user to view a list of the songs related to that album
