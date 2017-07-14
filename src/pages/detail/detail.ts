import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotesService} from "../../services/notes.service";

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  note = {id:null, tittle:null, description:null};	
  id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public noteService: NotesService) {
  	this.id = navParams.get('id');
  	if(this.id != 0){
  		noteService.getNote(this.id)
  		.subscribe(note =>{
  			this.note = note;
  		});
  	}
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  addNote(){
  	if(this.id != 0){
  		this.noteService.editNote(this.note);
	  	alert("Nota editada con éxito!");
  	}else{
	  	this.note.id = Date.now();
	  	this.noteService.createNote(this.note);
	  	alert("Nota creada con éxito!");
  	}
  	this.navCtrl.pop(); 

  }

  deleteNote(){
  	this.noteService.deleteNote(this.note);
  	alert("Nota eliminada con éxito!");
  	this.navCtrl.pop(); 
  }

}
