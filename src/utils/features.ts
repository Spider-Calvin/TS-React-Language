import axios from "axios"
import { generate } from "random-words"
import _ from "lodash"

const generateMCQ = (meaning:{ Text:string }[], idx:number ):string[] => {
    const correctAns:string = meaning[idx].Text
    const allMeaningExceptCorrect = meaning.filter((item)=>item.Text !== correctAns)
    const inCorrectOptions:string[] = _.sampleSize(allMeaningExceptCorrect,3).map((i)=>i.Text)
    const mcqOptioins:string[] = _.shuffle([...inCorrectOptions, correctAns])

    return mcqOptioins
}

export const translatewords = async (params:LangType):Promise<wordtype[]>=>{
    try{
        const words = generate(8).map((word)=>(
            {
                Text: word
            }
        ))

        const response = await axios.post(
            'https://microsoft-translator-text.p.rapidapi.com/translate',
            words,
            {
                params: {
                    'to[0]': params,
                    'api-version': '3.0',
                    profanityAction: 'NoAction',
                    textType: 'plain'
                },
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': 'f41958fef6msh56b5b291745e984p102004jsn9ce3dedeb316',
                    'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
                },
            }
        )
        
        const receive:fetchedDataType[] = response.data

        const arr:wordtype[] = receive.map((i,idx)=>{

            const options:string[] = generateMCQ(words,idx)

            return{
                word: i.translations[0].text,
                meaning: words[idx].Text,
                options
            }
        })

        return arr

    }catch(e){
        throw new Error('Some Error')
    }
}