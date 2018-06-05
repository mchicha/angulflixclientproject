import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { User } from './user';

const ALLMOVIES = [
  {id:0,img:"http://fr.web.img2.acsta.net/cx_120_160/medias/nmedia/00/02/44/28/empire.jpg",title:"Star Wars : Episode V - L'Empire contre-attaque", price:3, year:1980, description:"Malgré la destruction de l'Etoile Noire, l'Empire maintient son emprise sur la galaxie, et poursuit sans relâche sa lutte contre l'Alliance rebelle. Basés sur la planète glacée de Hoth, les rebelles essuient un assaut des troupes impériales. Parvenus à s'échapper, la princesse Leia, Han Solo, Chewbacca et C-3P0 se dirigent vers Bespin, la cité des nuages gouvernée par Lando Calrissian, ancien compagnon de Han. Suivant les instructions d'Obi-Wan Kenobi, Luke Skywalker se rend quant à lui vers le système de Dagobah, planète marécageuse où il doit recevoir l'enseignement du dernier maître Jedi, Yoda."},
  {id:1,img:"http://fr.web.img6.acsta.net/cx_120_160/medias/nmedia/18/35/91/26/18686482.jpg",title:"Retour vers le futur", year:1985,price:2, description:"985. Le jeune Marty McFly mène une existence anonyme auprès de sa petite amie Jennifer, seulement troublée par sa famille en crise et un proviseur qui serait ravi de l'expulser du lycée. Ami de l'excentrique professeur Emmett Brown, il l'accompagne un soir tester sa nouvelle expérience : le voyage dans le temps via une DeLorean modifiée. La démonstration tourne mal : des trafiquants d'armes débarquent et assassinent le scientifique. Marty se réfugie dans la voiture et se retrouve transporté en 1955. Là, il empêche malgré lui la rencontre de ses parents, et doit tout faire pour les remettre ensemble, sous peine de ne pouvoir exister..."},
  {id:2,img:"http://www.cinetrafic.fr/images/affiches/big/aff_69374672520161031162157.jpg?1527794432",price:3,title:"La Grande Vadrouille", year:1966, description:" En 1942, un avion anglais est abattu par les forces allemandes. Les trois pilotes sautent en parachute et atterrissent dans la capitale. Aidés par deux civils, un chef d'orchestre égoïste et un peintre en bâtiment qui a le coeur sur la main, les Anglais retournent en zone libre. Sans le vouloir, les deux compères prennent alors part à la Résistance et vivent une aventure hors du commun. Classique du cinéma français, La Grande Vadrouille est une aventure mouvementée et hilarante sur les routes de la France de la Seconde Guerre mondiale, porté par le duo talentueux et en pleine forme Louis de Funès/Bourville."},
  {id:3,img:"http://www.linternaute.com/cinema/image_cache/objdbfilm/image/160/149359.jpg",title:"Bienvenue chez les Ch'tis",price:6, year:2008, description:"Philippe Abrams (Kad Merad) est directeur de la Poste de Salon-de-Provence, dans les Bouches-du-Rhône. Il est marié à Julie (Zoé Félix), dont le caractère dépressif lui rend la vie impossible. Ensemble, ils ont un fils, Raphaël (Lorenzo Ausilia-Foret). Pour faire plaisir à Julie, Philippe fraude afin d'obtenir une mutation sur la Côte d'Azur. Mais il est démasqué : il sera muté à Bergues, petite ville du Nord située près de Dunkerque. Pour les Abrams, sudistes pleins de préjugés, le Nord c'est l'horreur, une région glacée, peuplée d'êtres rustres, éructant un langage incompréhensible... Julie refuse de suivre son mari qui découvre avec surprise des gens accueillants et un endroit charmant. Il devient ami avec Antoine (Dany Boon), le facteur du village."},
  {id:4,img:"http://fr.web.img1.acsta.net/cx_120_160/medias/nmedia/18/35/41/62/18422602.jpg",title: "Star Wars : Episode VI - Le Retour du Jedi", year: 1983,price:3, description:"L'Empire galactique est plus puissant que jamais : la construction de la nouvelle arme, l'Etoile de la Mort, menace l'univers tout entier... Arrêté après la trahison de Lando Calrissian, Han Solo est remis à l'ignoble contrebandier Jabba Le Hutt par le chasseur de primes Boba Fett. Après l'échec d'une première tentative d'évasion menée par la princesse Leia, également arrêtée par Jabba, Luke Skywalker et Lando parviennent à libérer leurs amis"}
];

const MYMOVIES = [];

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public user : User = new User();

  constructor() {
    this.user.budget = 10;
  }

  getAllMovies() : Movie[] {
    return ALLMOVIES;
  }

  getMyMovies() : Movie[] {
    return MYMOVIES;
  }
  
  getMovie(id : number) {
    return this.getAllMovies().find((movie) => movie.id == id);
  }

  isExistMovieInMyMovies(title: string) {
    for (var movie of MYMOVIES) {
      if (title == movie.title) {
        return true;
      }
    }
    return false;
  }

  addMovie(movie: Movie) {
    if ( (this.user.budget - movie.price >= 0) && !(this.isExistMovieInMyMovies(movie.title))) {
      MYMOVIES.push(movie);
      this.user.budget-= movie.price;
    }
  }

  removeMovie(movieToRemove: Movie) {
    let movieInd = MYMOVIES.findIndex(m => m.id == movieToRemove.id);
    MYMOVIES.splice(movieInd, 1);
    this.user.budget+= movieToRemove.price;
  }

  getBudget() {
    return this.user.budget;
  }
}
