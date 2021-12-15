package files.albums;


import files.artists.Artist;
import files.songs.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AlbumDao {
    @Autowired
    AlbumRepository repository;
    @GetMapping("/api/albums")
    public List<Album> findAllRecords() {
        return (List<Album>) repository.findAll();
    }
    @GetMapping("/api/albums/{id}")
    public Album findRecordById(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get();
    }
    @GetMapping("/api/albums/{id}/remove")
    public void removeRecord(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
    @GetMapping("/api/albums/create")
    public void createRecord() {
        Album newRecord = new Album();

        newRecord.setTitle("New Record");


        repository.save(newRecord);
    }


    @PutMapping("/api/albums")
    public void updateRecord(
            @RequestBody Album newRecord
    ) {
        Album oldRecord = repository.findById(newRecord.getId()).get();

        oldRecord.setTitle(newRecord.getTitle());

        repository.save(oldRecord);
    }

    @GetMapping("/api/albums/{id}/songs")
    public List<Song> findSongsForAlbum(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get().getSongs();
    }

}
