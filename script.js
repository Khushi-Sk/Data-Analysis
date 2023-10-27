const countObject = {};

let url = 'https://one00x-data-analysis.onrender.com/assignment?email=khushisukar234@gmail.com'

const getData = async(url) => {
    try {
        const response = await fetch(url, {
            method:'GET',
            body: JSON.stringify()
        })

        if (response.ok) {
                dataId = response.headers.get('x-assignment-id');
                // console.log(response.status)
                // console.log(dataId)
            const data = await response.json();
                // console.log(data)
                data.forEach(element => {
                    if (countObject[element]) {
                        
                        countObject[element]++;
                    } else {
                        countObject[element] = 1;
                    }
                })
        };

        // console.log(countObject)
        let mostCommonString;
        let mostCommonCount = 0;

        for (count in countObject) {
            if (countObject[count] > mostCommonCount) {
                mostCommonCount = countObject[count]
                mostCommonString = count 
            }   
        }
        // console.log(`The most common word is "${mostCommonString}" and it's ${mostCommonCount} times.`)

        // post method:
        try{
            const postResponse = await fetch(url, {
                method:'POST',
                body: JSON.stringify({
                    assignment_id: dataId,
                    answer: mostCommonString,
                }),
                headers: {'Content-Type': 'application/json'}
            })
            postData = await postResponse.json()
           console.log(postData)
        } catch (error) {
            console.log(error)
        }
    }   catch(error) {
            console.log(`Error: ${error}`)
        }
}

getData(url)



