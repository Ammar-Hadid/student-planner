const quoteOfTheDay = async () => {
    try {
        const response = await fetch(`https://dummyjson.com/quotes/random`);

        if (!response.ok) {
            throw new Error("Request failed")
        }

        const data = await response.json();


        return data.quote;
    }

    catch (error) {
        console.error(`Something went wrong: ${error}`)
    }
}

export default quoteOfTheDay;