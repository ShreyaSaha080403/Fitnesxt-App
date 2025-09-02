import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // Create storage instance
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Set a key/value
  public async set(key: string, value: any): Promise<void> {
    await this._storage?.set(key, value);
  }

  // Get a key/value
  public async get(key: string): Promise<any> {
    return await this._storage?.get(key);
  }

  // Remove a key
  public async remove(key: string): Promise<void> {
    await this._storage?.remove(key);
  }

  // Clear all keys
  public async clear(): Promise<void> {
    await this._storage?.clear();
  }
}
