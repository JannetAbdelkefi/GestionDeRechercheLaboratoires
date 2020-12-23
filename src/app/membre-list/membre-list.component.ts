import { Component, OnInit } from '@angular/core';
import {MemberService} from '../../services/member.service';
import {Member} from '../../models/member.model';

@Component({
  selector: 'app-membre-list',
  templateUrl: './membre-list.component.html',
  styleUrls: ['./membre-list.component.scss']
})
export class MembreListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'cv', 'createdDate'];
  dataSource: Member[] = [];
  constructor(
    private memberService: MemberService
  ) {
  }

  ngOnInit(): void {
    this.fetchDataSource();
  }


  fetchDataSource(): void {
    this.dataSource = this.memberService.getAllMembers();
  }
}
