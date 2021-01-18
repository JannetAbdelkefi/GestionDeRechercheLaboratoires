import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Member} from '../../models/member.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
  export class MemberFormComponent implements OnInit {
  currentItemId: string;
  item: Member;
  form: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
  ) {
  }

  ngOnInit(): void {
    this.currentItemId = this.activatedRoute.snapshot.params.id;
    if (!!this.currentItemId) {
      this.memberService.getMemberById(this.currentItemId).then(item => {
        this.item = item;
        this.initForm(item);
      });
    } else {
      this.initForm(null);
    }
  }

  initForm(item: Member): void {
    this.form = new FormGroup({
      cin: new FormControl(item?.cin, [Validators.required]),
      nom: new FormControl(item?.nom, [Validators.required]),
      prenom: new FormControl(item?.prenom, [Validators.required]),
      password: new FormControl(item?.password, [Validators.required]),
      dateNaissance: new FormControl(item?.dateNaissance, [Validators.required]),
      cv: new FormControl(item?.cv ),
      email: new FormControl(item?.email, [Validators.required]),
    });
  }
  isFormInEditMode(): boolean {
    return !!this.currentItemId;
  }
  onSubmit(): void {
    const objectToSubmit = {...this.item, ...this.form.value};
    console.log(objectToSubmit);
    if (this.isFormInEditMode()) {
      this.memberService.updateMember(this.currentItemId, objectToSubmit).then(() => {
        this.router.navigate(['./members']);
      });
    } else {
      this.memberService.createMember(objectToSubmit).then(() => {
        this.router.navigate(['./members']);
      });
    }
  }
}
