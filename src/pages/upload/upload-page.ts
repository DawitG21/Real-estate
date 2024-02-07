import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { IUpload } from '../../interfaces/upload.interface';
import { IEnquiries } from '../../interfaces/IEnquiries';
import { IUploadModel } from '../../models/upload.model'
import { UploadService } from '../../service/upload.service';
import { UploadApiService } from 'src/service/uploadApi.service';
import { EnquiriesService } from 'src/service/enquiriesApi.service'
import { clone } from 'lodash';
import swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'upload-page-selector',
  templateUrl: 'upload-page.html',
  styleUrls: ['./upload-page.css']
})

export class UploadComponent implements OnInit {

  images: any = [];
  allfiles: any = [];
  uploads: IUpload[];
  itemListEnquiries: any = [];
  uploadForm: boolean = false;
  editUploadForm: boolean = false;
  isNewForm: boolean;
  newUpload: any = {};
  editedUpload: any = {};
  showTable: boolean = true;
  showEditTable: boolean = true;


  uploadsApi: IUpload[];
  products: IUpload[];
  amenities: IUpload[];
  categories: IUpload[];
  enquiries: IEnquiries[];
  addproduct: IUpload;
  getamenities: IUpload;
  getcategories: IUpload;
  subscription: Subscription;
  enquiriesLists: Array<IEnquiries> = [];
  productLists: Array<IUpload> = [];
  passedID: any;

  addProduct(form) {
    console.log(form.value);
  }

  constructor(public sanitizer: DomSanitizer, private _uploadService: UploadService,
    private _uploadApiService: UploadApiService, private _enquiriesService: EnquiriesService,
    public toastr: ToastrService, public _activatedRoute: ActivatedRoute) {

    this.addproduct = new IUploadModel();
    this.addproduct.Id = '';
    this.addproduct.Category = '';
    this.addproduct.Address = '';
    this.addproduct.Area;
    this.addproduct.Beds;
    this.addproduct.Baths;
    this.addproduct.Parking = '';
    this.addproduct.ParkingSpot;
    this.addproduct.Amount;
    this.addproduct.Description = '';
    this.addproduct.Term = '';
    this.addproduct.UserId;
    this.addproduct.Amenities = [];

    /*     this.addproduct.Images= []; */

    this.getamenities = new IUploadModel();
    this.getamenities.Id;

    this.getcategories = new IUploadModel();
    this.getcategories.Categoryname = '';

    this.subscription = this._uploadApiService.subscribeTask()
      .subscribe(addproduct => {
        this.products.push(addproduct);
      })
  }

  ngOnInit(): void {
    /*  this.getUploads();
    */

    this.getProducts();
    this.getAmenities();
    this.getEnquiries();
    this.getCategories();


    this._activatedRoute.queryParams.subscribe(params => {
      this.passedID = JSON.parse(params['USERID']);
      this.addproduct.UserId = this.passedID.ID;

    });
    console.log(this.passedID);

 /*    this.fillteredProduct(this.passedID); */
  }

  getCategories() {
    this._uploadApiService.getAllCategories()
      .subscribe(allcategories => {
        this.categories = allcategories;
      })
  }

  getEnquiries() {
    this._enquiriesService.getAllEnquiries()
      .subscribe(allenquiries => {
        this.enquiries = allenquiries;
      })
  }


  attachEnquiries(Id) {
    console.log(Id);
    for (let i = 0; i < this.enquiries.length; i++) {
      if (this.enquiries[i].ProductId === Id) {
        this.enquiriesLists.push(this.enquiries[i]);
      }
    }
    console.log(this.enquiriesLists);
  }

  getProducts() {
    this._uploadApiService.getAllProducts()
      .subscribe(allproducts => {
        this.products = allproducts
       /*  console.log(this.products); */
        this.fillteredProduct(this.passedID);
     /*    console.log(this.products); */
        /* or making it observable*/
      })
  }

  fillteredProduct(passedID) {
    for (let j = 0; j < this.products.length; j++) {
      if (this.products[j].UserId == passedID.ID) {
        this.productLists.push(this.products[j])
      }
    }
    console.log(this.productLists);
  }

  getAmenities() {
    this._uploadApiService.getAllAmenities()
      .subscribe(allamenities => {
        this.amenities = allamenities
      })
  }

  onCreatingNewProduct() {
    this._uploadApiService.createProduct(this.addproduct)
      .subscribe(res => {
        /* console.log(res); */
        this.products.push(this.addproduct);
        this.toastr.success("New Product Uploaded");
        this.uploadForm = false;
        this.showTable = true;
      })
  }

  onDeletingProduct(product: IUpload) {
    this._uploadApiService.deleteProduct(product)
      .subscribe(res => {
        const index: number = this.products.indexOf(product);
        if (index !== -1) {
          this.products.splice(index, 1);
          this.toastr.warning("Product Deleted");
        }
      }, err => console.log(err));
  }

  checkedAmenity(passedAmenity) {
    let counter = 0;
    if (this.addproduct.Amenities.length === 0) {
      this.addproduct.Amenities.push(passedAmenity);
      console.log(this.addproduct.Amenities.length);
      console.log(this.addproduct.Amenities);
    } else {
      for (let i = 0; i < this.addproduct.Amenities.length; i++) {
        if (this.addproduct.Amenities[i].Id === passedAmenity.Id) {
          this.addproduct.Amenities.splice(i, 1);
          console.log(this.addproduct.Amenities.length);
          console.log(this.addproduct.Amenities);
          counter = 1;
        }
      }
      if (counter === 0) {
        this.addproduct.Amenities.push(passedAmenity);
        console.log(this.addproduct.Amenities);
      }
    }
  }

  getModal() {
    document.getElementById("modal2").style.display = "table";
  }

  closeModal() {
    document.getElementById("modal2").style.display = "none";
    this.enquiriesLists = [];
  }

  toastSuccess() {
    this.toastr.success('Product Uploaded Succesfully');
  }

  toastWarning() {
    this.toastr.warning('The fields marked with asterik* are mandatory.Please confirm that you have filled them');
  }

  toastPostError() {
    this.toastr.error('Product Not Uploaded');
  }





  /* By Using Array of Objects */

  getUploads() {
    this.uploads = this._uploadService.getUploadsFromData();
  }

  showEditUploadForm(uploads: IUpload) {
    if (!uploads) {
      this.uploadForm = false;
      return;
    }
    this.editUploadForm = true;
    this.editedUpload = clone(uploads);
    this.showTable = false;
  }

  showAddUploadsForm() {
    //will reset the form if edited update
    /*    if (this.uploads.length) {
         this.newUpload = {};
       } */
    this.uploadForm = true;
    this.isNewForm = true;
    this.showTable = false;
    /* this.uploadModal(); */

  }

  saveUpload(uploads: IUpload) {
    if (this.isNewForm) {
      //add a new upload
      this._uploadService.addUpload(uploads);
    }
    this.uploadForm = false;
    this.showTable = true;
    swal.fire({
      title: 'Successfully Saved',
      type: 'success'
    })
  }

  updateUpload() {
    this._uploadService.updateUpload(this.editedUpload);
    this.editUploadForm = false;
    this.showTable = true;
    this.editedUpload = {};
    swal.fire({
      title: 'Successfully Updated',
      type: 'success'
    })
  }

  cancelEdits() {
    this.editedUpload = {};
    this.editUploadForm = false;
    this.showTable = true;
  }

  cancelNewUpload() {
    this.newUpload = {};
    this.uploadForm = false;
    this.showTable = true;
  }

  removeUpload(applyupload: IUpload) {
    this._uploadService.deleteUpload(applyupload);
  }


  fileUploads(event) {
    const files = event.target.files;
    console.log(files);
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const image = {
          name: '',
          type: '',
          size: '',
          url: ''
        };
        this.allfiles.push(files[i]);
        image.name = files[i].name;
        image.type = files[i].type;
        image.size = files[i].size;
        const reader = new FileReader();
        reader.onload = (filedata) => {
          image.url = reader.result + ' ';
          this.images.push(image);
        };
        reader.readAsDataURL(files[i]);
      }
    }
    event.srcElement.value = null;
  }

  deleteImage(image) {
    const index = this.images.indexOf(image);
    this.images.splice(index, 1);
    this.allfiles.splice(index, 1);
  }

  hideText() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {

    } else {
      x.style.display = "none";
    }
  }

  uploadModal() {
    console.log("called");
    var x = document.querySelectorAll(".upload-modal");
    for (let i = 0; i < x.length; i++) {
      x[i].classList.toggle("enable-modal");
    }
  }
}