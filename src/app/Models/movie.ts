export class Movie {
    id:number;
    original_title:string;
    title:string;
    name:string
    original_language:SpokenLanguage;
    genres:Genres;
    overview:string;
    poster_path:string;
    production_companies:ProductionDetails;
    release_date:string;
    budget:number;
    revenue:string;
    runtime:number;
    tagline:string;
    status:string;
    backdrop_path:string;
    adult:string;
    homepage:string;
    profile_path:string;
    video:boolean;
    vote_average: number;
  vote_count: number;

}
export class Genres{
    id:number;
    name:string;
    
}
export class ProductionDetails{
    id:number;
    name:string;
    origin_country:string;
    logo_path:string;

}
    export class SpokenLanguage{
        name:string;
    }