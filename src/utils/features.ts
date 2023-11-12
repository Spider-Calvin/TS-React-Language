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

export const countMatchingElement = (arr1:string[], arr2:string[])=>{
    if(arr1.length != arr2.length) throw new Error('Array length mismatch')
    let matchinCount = 0
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i]===arr2[i]) matchinCount++
    }
    return matchinCount
}

export const fetchAudio = async (text:string, language:LangType):Promise<string>=> {

    const encodedParams = new URLSearchParams({
        src:text,
        r:'0',
        c:'mp3',
        f:'8khz_8bit_mono',
        b64:"true"
    });

    if(language === 'es') encodedParams.set('hl','es-es')
    else if(language === 'fr') encodedParams.set('hl','fr-fr')
    else if(language === 'ja') encodedParams.set('hl','ja-jp')
    else encodedParams.set('hl','hi-in')

    const {data}:{data:string} = await axios.post(
        'https://voicerss-text-to-speech.p.rapidapi.com/',
        encodedParams,
        {
            params: {key: '5c1e91e56a1b4f07934004c8d8852d43'},
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'f41958fef6msh56b5b291745e984p102004jsn9ce3dedeb316',
                'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
            },
        }
    )

    return data
}