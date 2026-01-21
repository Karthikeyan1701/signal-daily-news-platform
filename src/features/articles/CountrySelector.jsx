import { useDispatch, useSelector } from "react-redux";
import { SUPPORTED_COUNTRIES } from "../../utils/countries";
import { setCountry } from "./articlesSlice";
import { getTopHeadlines } from "./articlesSlice";

const CountrySelector = () => {
    const dispatch = useDispatch();
    const country = useSelector((state) => state.articles.country);

    const handleChange = (e) => {
        const selectedCountry = e.target.value;
        dispatch(setCountry(selectedCountry));
        dispatch(getTopHeadlines({ country: selectedCountry }));
    };

    return (
        <select
            value={country}
            onChange={handleChange}
            className="border rounded px-3 py-2"
        >
            {SUPPORTED_COUNTRIES.map(({ code, name }) => (
                <option key={code} value={code}>
                    {name}
                </option>
            ))}
        </select>
    );
};

export default CountrySelector;