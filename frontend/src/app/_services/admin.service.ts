import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../_interfaces/IContact';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

constructor(private http: HttpClient) { }

/* Contact Request */
getUnReadRequests() {
  return this.http.get<any>(environment.apiUrl + 'api/admin/contact');
}
requestRead(contactId) {
  return this.http.get<any>(environment.apiUrl + 'api/admin/contact', {
    params: {contactId : contactId}
  });
}

/* Events */

addGroup(model) {
  return this.http.post<any>(environment.apiUrl + 'api/admin/group', model);
}

deleteGroup(id) {
  return this.http.delete<any>(environment.apiUrl + 'api/admin/group', {
    params: {categoryId: id}
  });
}



addUser(model) {
  return this.http.post<any>(environment.apiUrl  + 'api/auth/user', model);
  }


  getUsers() {
    return this.http.get<any>(environment.apiUrl  + 'api/auth/user');
}
}
