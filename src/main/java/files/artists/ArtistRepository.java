package files.artists;

import org.springframework.data.repository.CrudRepository;

public interface ArtistRepository
        extends CrudRepository<Artist, Integer> {
}
