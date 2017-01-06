export class ImageModel {
    
    id: string;
    src: string;
    alt: string;
    title: string;
    desc: string;

    constructor (id: string, src: string, alt: string, title: string, desc: string) {
        this.id=id;
        this.src=src;
        this.alt=alt;
        this.title=title;
        this.desc=desc;
    }
}