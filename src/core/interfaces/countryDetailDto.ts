export interface CountryDetailDto {
	name: string,
	nativeName: string,
	population: number,
	region: string,
	subregion: string,
	capital: string,
	currencies: CurrencyDto[];
	topLevelDomain: any,
	languages: LangDto[];
	borders: string[];
}
export interface CurrencyDto {
	code: string;
	name: string;
	symbol: string;
}
export interface LangDto {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
}