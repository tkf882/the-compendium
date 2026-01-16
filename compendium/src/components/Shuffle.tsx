import { useState, useEffect } from 'react'

// https://stackoverflow.com/questions/1349404/generate-a-string-of-random-characters
const randomString = (length:number) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};


type shuffleProps ={
  details: {
    finalString: string;
    class: string;
    underscore: boolean;
  }
}

export function Shuffle({details}:shuffleProps) {
  const [currentString, setCurrentString] = useState('');
  const [underscore, setUnderscore] = useState('');
  // let finishedIntervalId:number;
  const finalString = details.finalString;

  useEffect(() => {
    // const finalString = 'this text is being decoded...';
    const length = finalString.length;
    let pointer = 1;
    let intervalId = 1;

    intervalId = setInterval(function() {
      console.log('title shuffle') // make sure its properly being terminated
      pointer += 1;
      setCurrentString(`${finalString.slice(0, pointer)}${randomString(length-pointer)}`);
      if (pointer > length) {
        clearInterval(intervalId);
      }
    }, 20);
    return () => {
      clearInterval(intervalId);
    }
  }, [finalString]); // runs only once.

  useEffect(() => {
    let underscoreIntervalId = 1;
    if (details.underscore) {
      underscoreIntervalId = setInterval(function() {
        console.log('underscore blink'); // make sure its properly being terminated
        // underscore === '_' ? setUnderscore('') : setUnderscore('_');

        if (underscore === '_') {
          setUnderscore('');
        } else {
          setUnderscore('_');
        }

      }, 500);
    }
    return() => {
      clearInterval(underscoreIntervalId);
    }
  }, [details.underscore, underscore]); // is this needed?


  return(
    <p className={details.class}>{`${currentString}${underscore}`}</p>
  )
}