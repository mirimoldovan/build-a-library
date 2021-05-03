class Media {
    constructor(title) {
      this._title = title;
  this._isCheckedOut = false;
  this._ratings = [];
    }
  
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
    set title(newTitle){
      this._title = newTitle;
    }
    set isCheckedOut(value){
      this._isCheckedOut = value;
    }
    set ratings(newRating){
      this._ratings = newRating;
    }
  
    getAverageRating(){
  const averageRating = this.ratings.reduce((a, b) => a + b );
  return averageRating / this.ratings.length;
    }
  
    toggleCheckOutStatus(){
  this.isCheckedOut = !this.isCheckedOut;
    }
  
    addRating(rating){
  this.ratings.push(rating);
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages){
      super(title);
        this._author = author;
        this._pages = pages;
      }
      get author(){
        return this._author;
      }
      get pages(){
        return this._pages;
      }
      set author(newAuthor){
        this._author = newAuthor;
      }
      set pages(numOfPages){
        this._pages = numOfPages;
      }
    }
  
    class Movie extends Media {
      constructor(title, director, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
      }
      get director(){
        return this._director;
      }
      get runTime(){
        return this._runTime;
      }
      set director(newDirector){
        this._director = newDirector;
      }
      set runTime(newRunTime){
        this._runTime = newRunTime;
      }
    }
  
    class CD extends Media {
      constructor(title, artist){
        super(title);
        this._artist = artist;
        this._songs = [];
      }
      get artist(){ 
        return this._artist;
      }
      get songs(){
        return this._songs;
      }
      set artist(newArtist){
        this._artist= newArtist;
      }
      set songs(newSong){
        this._songs = newSong;
      }
      addSong(arraySong){
        this.songs.push(arraySong);
  }
    }
  
  const newBook = new Book('Copilul invizibil', 'Gaspar Gyorgy', 189);
  newBook.toggleCheckOutStatus();
  newBook.addRating(5);
  newBook.addRating(3);
  newBook.addRating(4);
  console.log(`The book's rating is ${newBook.getAverageRating()}.`);
  console.log(newBook);
  
  const newMovie = new Movie('Julia', 'Justin Marin', 124);
  newMovie.toggleCheckOutStatus();
  newMovie.addRating(7.5);
  newMovie.addRating(8.3);
  newMovie.addRating(4.2);
  console.log(`The movie's rating is ${newMovie.getAverageRating()}.`);
  console.log(newMovie);
  
  const newCD = new CD('Galbena gutuie', 'Nicolae Dabija');
  newCD.toggleCheckOutStatus();
  newCD.addRating(9);
  newCD.addRating(8.8);
  newCD.addRating(10.0);
  console.log(`The CD's rating is ${newCD.getAverageRating()}.`);
  newCD.addSong('Mirabela');
  console.log(newCD);