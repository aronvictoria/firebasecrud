import { Component, OnInit } from '@angular/core';
import { AppointmentService } from './../shared/appointment.service';
import { Appointment } from '../shared/Appointment';
import { Route } from '@angular/router';
import { ActivatedRoute, Router } from "@angular/router";



@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.page.html',
  styleUrls: ['./view-appointment.page.scss'],
})
export class ViewAppointmentPage implements OnInit {

  Bookings: any = [];
  id: any
  



  constructor(private aptService: AppointmentService,
    private actRoute: ActivatedRoute,
    private router: Router,) {}
  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    this.fetchBookings();
    let bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe((res) => {
      this.Bookings = [];
      res.forEach((item) => {

        let a: any = item.payload.toJSON();
        console.log(a['$key'])
         if (item.key==this.id) {
          a['$key'] = item.key;
        this.Bookings.push(a as Appointment);
        console.log(this.Bookings)

         }
       
      });
    });
  }
  fetchBookings() {
    this.aptService
      .getBookingList()
      .valueChanges()
      .subscribe((res) => {
        console.log(res);
      });
  }
  deleteBooking(id: any) {
    console.log(id);
    if (window.confirm('Do you really want to delete?')) {
     
      this.aptService.deleteBooking(id); this.router.navigate(['/home']);
      
    }
  }
}