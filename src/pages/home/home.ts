import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PromiseObservable } from 'rxjs/observable/PromiseObservable';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ FingerprintAIO ]
})
export class HomePage {

  constructor(public navCtrl: NavController, public fingerprintAIO: FingerprintAIO) {

  }

  public showScanFingerModal(): void {
    console.log('Show modal');
    PromiseObservable.create(
      this.fingerprintAIO.show({
        clientId: 'Fingerprint-Demo',
        clientSecret: 'password', //Only necessary for Android
        disableBackup:true,  //Only for Android(optional)
        localizedFallbackTitle: 'Use Pin', //Only for iOS
        localizedReason: 'Please authenticate' //Only for iOS
      }))
      .subscribe(
        result => console.log('Success',
        error => console.error('Error', error)
      ));
    
  }
}
