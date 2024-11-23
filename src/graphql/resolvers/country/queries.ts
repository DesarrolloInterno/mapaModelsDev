import { country } from "../../../db/Entities/country";

const countryQueries = {
    GET_ALL_COUNTRIES: async (_: any, {}: any) => {
        try{
            const result = await country.query("exec get_all_countries ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },
    GET_COUNTRY: async (_: any, {countryCode}: any) => {
        try{
            const result = await country.query("exec get_country @country = '"+ countryCode +"' ");
            return result;

        } catch (error) {
            console.log(error);
        }

    },
    GET_ALL_COUNTRIES_INTERNATIONAL_FORM: async (_: any, {}: any) => {
        try{
            const result = await country.query("exec get_all_countries_internationalForm ");
            return result;

        } catch (error) {
            console.log(error);
        }

    }
};

export default countryQueries;