import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
@Component({
    selector : 'house-detail-selector',
    templateUrl : 'house-detail.html',
    styleUrls : ['house-detail.css']
})
export class HouseDetailPageComponent implements OnInit{
    index : number = 1;

    ngOnInit() {
        var slides = document.querySelectorAll(".my-slides");
        this.showSlides(this.index)
        setInterval(() => {
            if(this.index > slides.length) {
                this.index = 1;
            }
            this.showSlides(this.index);
            this.index++;
        },5500);
    }

    nextAndPreviousSlide(n) {
        this.showSlides(this.index += n);
    }

    currentSlide(n) {
        this.showSlides(this.index = n);
    }

    showSlides(n) {
        var i;
        var slides = document.querySelectorAll(".my-slides");
        var smallImages = document.querySelectorAll(".small-images");
        if(n > slides.length) {
            this.index = 1;
        }
        if(n < 1) {
            this.index = slides.length;
        }
        for(let i = 0; i < slides.length; i++){
            slides[i].classList.remove("show");
            slides[i].classList.add("hide");
        }
        for(let i = 0; i < smallImages.length; i++){
            smallImages[i].className = smallImages[i].className.replace("active","");
        }
        slides[this.index-1].classList.remove("hide");
        slides[this.index-1].classList.add("show");
        smallImages[this.index-1].className += " active";
    }

    openCloseModal() {
        let x = document.querySelectorAll(".contact-agent-modal");
        var z = document.querySelectorAll(".xymovers");
        for(let i=0; i<x.length; i++) {
            x[i].classList.toggle('show-modal');
        }
        for(let k = 0; k < z.length; k++) {
            z[k].classList.toggle("hide-movers");
        }
    }

    zoomImage(n) {
        console.log("called");
        var x = document.querySelectorAll(".zoom-modal");
        var y = document.querySelectorAll(".img-modal-content");
        var z = document.querySelectorAll(".xymovers");
        for(let i = 0; i < x.length; i++){
           x[i].classList.toggle("enable-zoom"); 
        }
        for(let k = 0; k < z.length; k++) {
            z[k].classList.toggle("hide-movers");
        }
        for(let j = 0; j < y.length; j++) { 
            y[j].classList.remove("enable-zoom");
        }
        for(let j = 0; j < y.length; j++) {
            if(y[j].classList.contains(n)) {
                y[j].classList.add("enable-zoom");
            }
        }
    }

    scrollX(){
        var a = document.getElementById("scroll-row");
        a.scrollTo({left : 700, behavior : 'smooth'});
    }
    scrollY(){
        var a = document.getElementById("scroll-row");
        a.scrollTo({left : -700, behavior : 'smooth'});
    }
    swalMsg(message) {
        swal.fire({
            text: message,
            type : 'success'
        });
    }
}