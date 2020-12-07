export type MemoColor = null | 0 | 1 | 2 | 3 | 4;
export interface MemoItem {
  /** 고유 ID */
  id: number;
  /** 제목 */
  title: string;
  /** 내용 */
  body: string;
  /** 메모 색상 */
  color: MemoColor;
}

let db: IDBDatabase;

export function initRepo(): Promise<void> {
  return new Promise((resolve, reject) => {
    const idbRequest = indexedDB.open("memos", 1);

    idbRequest.onsuccess = () => {
      db = idbRequest.result;
      resolve();
    };
    idbRequest.onupgradeneeded = (e) => {
      db = (<IDBOpenDBRequest>e.target).result;
      db.createObjectStore("memos", { keyPath: "id", autoIncrement: true });
      resolve();
    };
    idbRequest.onerror = (err) => {
      reject(err);
    };
  });
}

export function getAllMemo(): Promise<MemoItem[]> {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("memos", "readonly");
    const objStore = transaction.objectStore("memos");
    const request: IDBRequest<MemoItem[]> = objStore.getAll();
    request.onsuccess = () =>
      resolve(request.result.sort((a, b) => b.id - a.id));
    request.onerror = (e) => reject(e);
  });
}

export function getMemo(id: number): Promise<MemoItem> {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("memos", "readonly");
    const objStore = transaction.objectStore("memos");
    const request: IDBRequest<MemoItem> = objStore.get(id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = (e) => reject(e);
  });
}

export function setMemo(payload: Partial<MemoItem>): Promise<MemoItem> {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["memos"], "readwrite");
    const objStore = transaction.objectStore("memos");
    const request: IDBRequest<IDBValidKey> = objStore.put(payload);
    request.onsuccess = () => {
      payload.id = <number>request.result;
      resolve(<MemoItem>payload);
    };
    request.onerror = (e) => reject(e);
  });
}

export function deleteMemo(id: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["memos"], "readwrite");
    const objStore = transaction.objectStore("memos");
    const request: IDBRequest = objStore.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = (e) => reject(e);
  });
}
