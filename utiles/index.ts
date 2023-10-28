import { FiltersProps } from "@/types";

export async function fetchCars(fliters:FiltersProps) {
    const { manufacturer, year, model, limit, fuel } = fliters;
    const headers ={
        'X-RapidAPI-Key': '9b49701ef2msh0cf168f47fc890fp1429ccjsnfefff9a2bda6',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch( 
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
        headers:headers
    });
    const result =  await response.json()
    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; 
    const mileageFactor = 0.1; 
    const ageFactor = 0.05; 
  
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
   
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };


export const updateSearchParams = (type: string, value:string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };
