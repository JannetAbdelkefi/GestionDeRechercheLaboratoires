import { Injectable } from '@angular/core';
import {GLOBAL} from '../app/app-config';
import {Member} from '../models/member.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private path = `${environment.gatewayEndpoint}/membre-service`;
  // @ts-ignore
  public placeholderMembers: Member[] = GLOBAL._DB.members;

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getAllMembers(): Promise<Member[]> {
    return this.httpClient.get<Member[]>(`${this.path}/membres`).toPromise();
    // return new Promise(resolve => resolve(this.placeholderMembers));
  }
  getMemberById(id: string): Promise<Member> {
    return this.httpClient.get<Member>(`${this.path}/membre/${id}`).toPromise();

  }

  /**
   * create a new member or update an old member.
   * a new member doesn't have an id
   */


  createMember(member: any): Promise<Member> {
    return this.httpClient.post<Member>(`${this.path}/membres/etudiant`, member).toPromise();
  }

  updateMember(id: string, member: any): Promise<Member> {
    return this.httpClient.put<Member>(`${this.path}/membres/etudiant/${id}`, member).toPromise();
  }
  removeMemberById(id: string): Promise<void> {
    return this.httpClient.delete<void>(`${this.path}/membres/${id}`).toPromise();
    // this.placeholderMembers = this.placeholderMembers.filter(item => item.id !== id);
    // return new Promise(resolve => resolve());
  }
}
