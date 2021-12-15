package files.artists;

import files.albums.Album;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ArtistDao {
    @Autowired
    ArtistRepository repository;
    @GetMapping("/api/artists")
    public List<Artist> findAllRecords() {
        return (List<Artist>) repository.findAll();
    }
    @GetMapping("/api/artists/{id}")
    public Artist findRecordById(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get();
    }
    @GetMapping("/api/artists/{id}/remove")
    public void removeRecord(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
    @GetMapping("/api/artists/create")
    public void createRecord() {
        Artist newRecord = new Artist();

        newRecord.setPassword("newPass");

        repository.save(newRecord);
    }
    @GetMapping("/api/artists/{id}/albums")
    public List<Album> findAlbumsForArtist(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get().getAlbums();
    }

    @PutMapping("/api/artists")
    public void updateRecord(
            @RequestBody Artist newRecord
    ) {
        Artist oldRecord = repository.findById(newRecord.getIdArtist()).get();

        oldRecord.setFirstName(newRecord.getFirstName());
        oldRecord.setLastName(newRecord.getLastName());
        oldRecord.setUsername(newRecord.getUsername());
        oldRecord.setPassword(newRecord.getPassword());
        oldRecord.setEmail(newRecord.getEmail());


        repository.save(oldRecord);
    }

}
