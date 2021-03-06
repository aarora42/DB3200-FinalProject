const URL = "http://localhost:8080/api";

export const findAllRecords = (table) =>
  fetch(`${URL}/albums`)
    .then(response => response.json());

export const findRecordById = (table, id) =>
  fetch(`${URL}/albums/${id}`)
    .then(response => response.json());

export const findOneToManyRecords = (oneTable, id, manyTable) =>
  fetch(`${URL}/${oneTable}/${id}/${manyTable}`)
    .then(response => response.json());

export const removeRecord = (table, id) =>
  fetch(`${URL}/albums/${id}/remove`);

export const createRecord = (table) =>
  fetch(`${URL}/albums/create`);


export const updateRecord = (table, newRecord) =>
  fetch(`${URL}/albums`, {
    method: 'PUT',
    body: JSON.stringify(newRecord),
    headers: {
      'content-type': 'application/json'
    }
  });

// TODO: export all functions as the API to this service
export default {
  findAllRecords,
  findRecordById,
  findOneToManyRecords,
  removeRecord,
  createRecord,
  updateRecord
}
