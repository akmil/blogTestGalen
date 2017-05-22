class ColorName{
  constructor(name){
    console.log('constructor');
    this.name = name;
  }
  init(){
    let n=1;
    console.log('init ok' , n);
  }
}

new ColorName(name);
