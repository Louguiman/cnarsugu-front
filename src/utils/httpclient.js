// import axios from "axios";
// import storage from "./";

// export default axios.create({
//   baseURL: "https://corpmali-backend.herokuapp.com/api/",
// //   headers: {
// //     "Content-Type": "Application/JSON",
// //   },
// });

// export const storeDataObject = (storage_key, value) => {
//   try {
//     const jsonValue = JSON.stringify(value);
//     storage.set(storage_key, jsonValue);
//   } catch (e) {
//     // saving error
//   }
// };

// export const storeData = (storage_key, value) => {
//   try {
//     storage.set(storage_key, value);
//   } catch (e) {
//     // saving error
//   }
// };

// export const getDataObject = (storage_key) => {
//   try {
//     const jsonValue = storage.getString(storage_key);
//     if (!jsonValue) return false;
//     return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch (e) {
//     // error reading value
//   }
// };

// export const removeValue = (storage_key) => {
//   try {
//     storage.delete(storage_key);
//   } catch (e) {
//     // remove error
//   }
// };
