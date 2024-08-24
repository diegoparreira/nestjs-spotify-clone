import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = [];

  create(song) {
    this.songs.push(song);
  }

  findAll() {
    if (this.songs.length === 0) {
      throw new Error('No songs found');
    }
    return this.songs;
  }

  findOne(id: number) {
    return this.songs[id];
  }
}
