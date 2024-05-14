import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("Post to the database");
  const jateDB = await openDB("jate", 1);
  const tx = jateDB.transaction("jate", "readwrite").objectStore("jate");
  const result = await tx.add({ value: content });
  console.log("Data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET all from the database");
  const jateDB = await openDB("jate", 1);
  const tx = jateDB.transaction("jate", "readonly");
  const objectStore = tx.objectStore("jate");
  tx.oncomplete = () => {
    console.log("Transaction completed");
  };
  tx.onerror = (event) => {
    console.error("Transaction error:", event.target.error);
  };
  return new Promise((resolve, reject) => {
    const request = objectStore.getAll();
    request.onsuccess = (event) => {
      const result = event.target.result;
      console.log("result", result);
      resolve(result);
    };
    request.onerror = (event) => {
      console.error("Error fetching data:", event.target.error);
      reject(event.target.error);
    };
  });
};

initdb();
