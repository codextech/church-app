import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../_interfaces/IContact';
import { IBlog } from '../_interfaces/IBlog';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http: HttpClient) { }

  addToNewsLetter(model) {
    return this.http.post<any>(environment.apiUrl + 'api/main/news-letter', model);

  }
  addUserRequest(model) {
    return this.http.post<any>(environment.apiUrl + 'api/main/contact', model);
  }

  getBlogs() {
    return this.http.get<any>(environment.apiUrl + 'api/main/blog');
  }

  getBlogDetails(id) {
    return this.http.get<any>(environment.apiUrl + 'api/main/blog-details', {
      params: {blogId : id}
    });
  }

  getGroups() {
    return this.http.get<any>(environment.apiUrl + 'api/main/group');
  }

  getEvents() {
    return this.http.get<any>(environment.apiUrl + 'api/main/event');
  }

  getEventDetails(id) {
    return this.http.get<any>(environment.apiUrl + 'api/main/event-details', {
      params: {eventId : id}
    });
  }





  // getSubCategrories() {
  //   return this.http.get<any>(environment.apiUrl + 'api/main/sub-category');
  // }

}
