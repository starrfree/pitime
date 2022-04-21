import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PiService {
  public indices: any = {}
  public characters: [string, string][] = [
    ["pi", "π"], ["e", "e"], ["phi", "φ"], ["gamma", "γ"]
  ]
  public offset = {
    pi: [-10, 0],
    e: [0, 0],
    phi: [-10, -10]
  }

  constructor(private http: HttpClient) {}

  getIndices(completionHandler: () => (void), completionOnName: string) {
    this.characters.forEach(char => {
      const name = char[0]
      const symbol = char[1]
      this.http.get(`/assets/${name}_time_indices.txt`, {responseType: 'text'})
      .subscribe(data => {
        this.indices[name] = data.split(',')
        if (name == completionOnName) {
          completionHandler()
        }
      })
    });
  }
}
