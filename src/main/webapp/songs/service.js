// TODO: declare URL where server listens for HTTP requests
const URL = "http://localhost:8080/api";

export const findAllRecords = (table) =>
  fetch(`${URL}/songs`)
    .then(response => response.json());

export const findRecordById = (table, id) =>
  fetch(`${URL}/songs/${id}`)
    .then(response => response.json());

export const removeRecord = (table, id) =>
  fetch(`${URL}/songs/${id}/remove`);

export const createRecord = (table) =>
  fetch(`${URL}/songs/create`);

// TODO: update a user by their ID
export const updateRecord = (table, newRecord) =>
  fetch(`${URL}/songs`, {
    method: 'PUT',
    body: JSON.stringify(newRecord),
    headers: {
      'content-type': 'application/json'
    }
  });

// TODO: export all functions as the API to this service
export default {
  findAllRecords, findRecordById, removeRecord, createRecord, updateRecord
}
