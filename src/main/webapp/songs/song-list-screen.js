import service from "./service";
import {schema} from "./schema";
const { useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const SongListScreen = () => {

  const [records, setRecords] = useState([])

  const findAllRecords = () =>
    service.findAllRecords(schema.table.name)
      .then(records => setRecords(records))

  useEffect(findAllRecords, []);

  const createRecord = () =>
    service.createRecord(schema.table.name)
      .then(() => window.location.reload())

  return(
        <div>
            <h2>{schema.table.label} List</h2>
            <button onClick={createRecord} className="btn btn-primary">
                Add {schema.table.label}
            </button>
            <div className="list-group">

              {
                records.map(record =>
                    <Link to={`/edit/${record.idSongs}`} className="list-group-item" key={record.idSongs}>
                      {
                        schema.fields.map(field =>
                          <span key={field.name}>{record[field.name]}, </span>
                        )
                      }
                    </Link>
                )
              }

            </div>
        </div>
    )
}

export default SongListScreen;