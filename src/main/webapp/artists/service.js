const URL = "http://localhost:8080/api";

export const findAllRecords = (table) =>
  fetch(`${URL}/artists`)
    .then(response => response.json());

export const findRecordById = (table, id) =>
  fetch(`${URL}/artists/${id}`)
    .then(response => response.json());

export const findOneToManyRecords = (oneTable, id, manyTable) =>
  fetch(`${URL}/artists/${id}/albums`)
    .then(response => response.json());

export const removeRecord = (table, id) =>
  fetch(`${URL}/artists/${id}/remove`);

export const createRecord = (table) =>
  fetch(`${URL}/artists/create`);


export const updateRecord = (table, newRecord) =>
  fetch(`${URL}/artists`, {
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
