package files.songs;

import org.springframework.data.repository.CrudRepository;

public interface SongRepository
        extends CrudRepository<Song, Integer> {
}
