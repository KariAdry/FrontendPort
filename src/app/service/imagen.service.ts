import { Injectable } from '@angular/core';
import {deleteObject, getStorage, ref} from '@angular/fire/storage';
import 'firebase/compat/storage';
import firebase from 'firebase/compat/app';
import { environment} from 'src/environments/environment';

firebase.initializeApp(environment.firebase);
@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  storageRef = firebase.app().storage().ref();

  constructor() { }

  public response2: string;
  async uploadImage(name: string, imgBase64: any){
    try{
      let folder:string;
      if(name.includes('educacion')){
        folder = 'educacion/';
      }
      if(name.includes('persona')){
        folder = 'persona/';
      }
      //if(name.includes('project')){
       // folder = 'project/';
     // }
      let response = await this.storageRef.child(folder+name).putString(imgBase64, 'data_url');
      this.response2=response.ref.fullPath;

      return await response.ref.getDownloadURL();
    } catch (error){
      console.log(error);
      return "error";
    }
  }

  
}
