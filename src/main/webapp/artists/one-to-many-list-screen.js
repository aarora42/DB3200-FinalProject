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
    console.log(records)
  useEffect(findOneToMany, []);

  return(
        <div>
          <h2>{oneTable}' {manyTable}</h2>
          <div className="list-group">
            {

              records.map(record =>
                  <Link to={`/${manyTable}/${record.id}`}
                        className="list-group-item"
                        key={record.id}>
                      {/*{*/}
                      {/*    schema.fields.map(field =>*/}
                      {/*            field.references ? null :*/}
                      {/*                <span key={field.name}>*/}
                      {/*      {record[field.name]},*/}
                      {/*    </span>*/}
                      {/*    )*/}
                      {/*}*/}
                      {record.id}, {record.title}
                  </Link>
              )
            }

          </div>
        </div>
    )
}

export default OneToManyListScreen;