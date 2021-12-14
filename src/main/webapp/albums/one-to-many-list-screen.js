import service, {findOneToManyRecords} from "./service";
import {schema} from "./schema";
const { useState, useEffect } = React;
const {Link, useParams} = window.ReactRouterDOM;

const OneToManyListScreen = () => {

  const params = useParams();
  const oneTable = params.oneTable;
  const id = params.id;
  const manyTable = params.manyTable;

  console.log(oneTable, id, manyTable)

  const [records, setRecords] = useState([]);

  const findOneToMany = () =>
    service.findOneToManyRecords(oneTable, id, manyTable)
      .then(records => setRecords(records))

  useEffect(findOneToMany, []);

  return(
        <div>
          <h2>{oneTable}'s {manyTable}</h2>
          <div className="list-group">
            {
              records.map(record =>
                <a href={`http://localhost:63342/spring-template/src/main/webapp/songs/#/edit/${record.idSongs}`}
                      className="list-group-item"
                      key={record.idSongs}>
                  {/*  {*/}
                  {/*  schema.fields.map(field =>*/}
                  {/*    field.references ? null :*/}
                  {/*      <span key={field.name}>*/}
                  {/*          {record[field.name]},*/}
                  {/*        </span>*/}
                  {/*  )*/}
                  {/*}*/}

                    {record.idSongs}, {record.title}
                </a>
              )
            }

          </div>
        </div>
    )
}

export default OneToManyListScreen;