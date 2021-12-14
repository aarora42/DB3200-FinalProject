package files.songs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Enumerated;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SongDao {
    @Autowired
    SongRepository repository;

    @GetMapping("/api/songs")
    public List<Song> findAllRecords() {
        return (List<Song>) repository.findAll();
    }

    @GetMapping("/api/songs/{id}")
    public Song findRecordById(
            @PathVariable("id") Integer id) {
        return repository.findById(id).get();
    }
    @GetMapping("/api/songs/{id}/remove")
    public void removeRecord(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
    @GetMapping("/api/songs/create")
    public void createRecord() {
        Song newRecord = new Song();

        newRecord.setTitle("New Record");
        newRecord.setGenre(Song.Genre.pop);

        repository.save(newRecord);
    }
    @PutMapping("/api/songs")
    public void updateRecord(
            @RequestBody Song newRecord
    ) {
        Song oldRecord = repository.findById(newRecord.getIdSongs()).get();

        oldRecord.setTitle(newRecord.getTitle());
        oldRecord.setGenre(newRecord.getGenre());

        repository.save(oldRecord);
    }

}
