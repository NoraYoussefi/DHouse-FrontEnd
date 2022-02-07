import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebase);


@Injectable({
  providedIn: 'root'
})


export class FileuploadService {


  constructor(

  ) { }

  
  storareRef = firebase.app().storage().ref();


  async subirImagen(nombre: string, imgBase64: any) {

    try {
      let respuesta = await this.storareRef.child("productImages/" + nombre).putString(imgBase64, 'data_url');
      console.log(respuesta);
      return await respuesta.ref.getDownloadURL();
    } catch (err) {
      console.log(err);
      return null;
    }

  }


}










