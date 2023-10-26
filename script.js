const countObject = {};

let url = 'https://one00x-data-analysis.onrender.com/assignment?email=khushisukar234@gmail.com'

    try {
        fetch(url, {
            method:'GET',
            body: JSON.stringify()
        })
        .then(response => response.json())    
        .then(data => {
            // console.log(data)
            data.forEach(element => {
                if (countObject[element]) {
                    countObject[element]++;
                } else {
                    countObject[element] = 1;
                }
            });

        let mostCommonString;
        let mostCommonCount = 0;

        for (count in countObject) {
            if (countObject[count] > mostCommonCount) {
                mostCommonCount = countObject[count]
                mostCommonString = count 
            }   
        }
        
            console.log(`The most common word is "${mostCommonString}" and it's ${mostCommonCount} times.`)
    }) .catch((error) => {
        console.log(`Error: ${error}`)
    })
    } catch(error) {
        console.log(`Error: ${error}`)
    }
